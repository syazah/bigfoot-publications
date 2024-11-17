import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";
import { z } from "zod";

import {
  BuyerFormDataType,
  BuyerFormDataSchema,
  AdminSignInType,
  AdminSignInSchema,
  UserOrderType,
  UserOrderSchema,
  UserVerificationType,
  UserVerificationSchema,
  AddAddressType,
  AddAddressSchema,
} from "../types/admin.types";
import bcryptjs from "bcryptjs";
export const UserGetBookDetailController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const { id } = await c.req.json();
    if (!id) {
      throw new Error("Cannot Find A Book Without ID");
    }
    const bookDetail = await prisma.book.findUnique({ where: { id } });
    const serializedBooks = {
      ...bookDetail,
      createdAt: bookDetail?.createdAt.toString(),
    };
    return c.json({ success: true, bookDetail: serializedBooks });
  } catch (error) {
    throw error;
  }
};

//!REGISTER BUYER CONTROLLER
export const UserRegisterBuyerController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const buyerFormData: BuyerFormDataType = await c.req.json();
    const validate = BuyerFormDataSchema.safeParse(buyerFormData);
    if (!validate.success) {
      throw new Error("Schema Is Not Correct, Some Fields Are Missing");
    }
    const buyerMailExist = await prisma.buyer.findUnique({
      where: { email: buyerFormData.email },
    });
    const buyerPhoneExist = await prisma.buyer.findUnique({
      where: { phone: buyerFormData.phone },
    });

    if (buyerMailExist) {
      throw new Error("A buyer with same mail exists");
    } else if (buyerPhoneExist) {
      throw new Error("A buyer with same phone exists");
    }
    const hashedPassword = bcryptjs.hashSync(buyerFormData.password, 10);
    const createdBuyer = await prisma.buyer.create({
      data: {
        name: buyerFormData.name,
        email: buyerFormData.email,
        password: hashedPassword,
        phone: buyerFormData.phone,
      },
    });
    const addressCreated = await prisma.address.create({
      data: {
        line: buyerFormData.line,
        city: buyerFormData.city,
        country: buyerFormData.country,
        state: buyerFormData.state,
        pincode: buyerFormData.pincode,
        buyerID: createdBuyer.id,
      },
    });
    return c.json({ success: true });
  } catch (error) {
    throw error;
  }
};

//!GET BUYER CONTROLLER
export const UserGetBuyerController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const userFormData: AdminSignInType = await c.req.json();
    const validate = AdminSignInSchema.safeParse(userFormData);
    if (!validate.success) {
      throw new Error("Fields are missing");
    }
    const foundBuyer = await prisma.buyer.findUnique({
      where: { email: userFormData.email },
      include: { address: true },
    });
    if (!foundBuyer) {
      throw new Error("No buyer found, Kindly Register");
    }
    const correctPassword = bcryptjs.compareSync(
      userFormData.password,
      foundBuyer.password
    );
    if (!correctPassword) {
      throw new Error(
        "Your Password is incorrect, Kindly enter a correct password"
      );
    }
    return c.json({
      success: true,
      buyerDetail: {
        id: foundBuyer.id,
        name: foundBuyer.name,
        email: foundBuyer.email,
        phone: foundBuyer.phone,
      },
      addresses: foundBuyer.address,
    });
  } catch (error) {
    throw error;
  }
};

//!CREATE ORDER CONTROLLER
export const UserCreateOrderController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const UserCreateOrderForm: UserOrderType = await c.req.json();
    const validate = UserOrderSchema.safeParse(UserCreateOrderForm);
    if (!validate.success) {
      throw new Error(
        "The fields sent are incorrect, resulting in invalid schema"
      );
    }
    // RAZORPAY
    const key_id = c.env.RAZORPAY_API_KEY;
    const key_secret = c.env.RAZORPAY_API_SECRET;
    const authHeader = "Basic " + btoa(`${key_id}:${key_secret}`);
    const razorpayOrderData = {
      amount: UserCreateOrderForm.orderCost * 100,
      currency: "INR",
      receipt: `Receipt-${UserCreateOrderForm.buyerID.slice(0, 10)}`,
    };
    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(razorpayOrderData),
    });
    const result = await response.json();
    return c.json({ success: true, order: result });
  } catch (error) {
    throw error;
  }
};

//! VERIFY PAYMENT FROM USER
async function verifyPayment(
  razorpay_order_id: string,
  razorpay_payment_id: string,
  razorpay_signature: string
) {}

export const UserVerifyPaymentController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const UserCreateOrderForm: UserVerificationType = await c.req.json();
    const validate = UserVerificationSchema.safeParse(UserCreateOrderForm);
    if (!validate.success) {
      throw new Error(
        "The fields sent are incorrect, resulting in invalid schema"
      );
    }

    // VERIFY
    const secret = new TextEncoder().encode(c.env.RAZORPAY_API_SECRET);
    const message = new TextEncoder().encode(
      `${UserCreateOrderForm.razorpay_order_id}|${UserCreateOrderForm.razorpay_payment_id}`
    );

    // Create a HMAC signature
    const key = await crypto.subtle.importKey(
      "raw",
      secret,
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["sign"]
    );
    const signatureBuffer = await crypto.subtle.sign("HMAC", key, message);

    // Convert the signature to a hex string
    const signatureArray = new Uint8Array(signatureBuffer);
    const generatedSignature = Array.from(signatureArray)
      .map((b) => ("00" + b.toString(16)).slice(-2))
      .join("");

    if (generatedSignature != UserCreateOrderForm.razorpay_signature) {
      throw new Error(
        "Payment Verification Failed, Contact Us, We cannot raise the order"
      );
    }
    // ORDER
    const order = await prisma.order.create({
      data: {
        buyerID: UserCreateOrderForm.buyerID,
        addressID: UserCreateOrderForm.addressID,
        bookID: UserCreateOrderForm.bookID,
        orderCost: UserCreateOrderForm.orderCost,
        createdAt: Date.now().toString(),
        bookQuantity: UserCreateOrderForm.numberOfBooks,
      },
    });
    await prisma.book.update({
      where: { id: UserCreateOrderForm.bookID },
      data: {
        bookSold: {
          increment: UserCreateOrderForm.numberOfBooks,
        },
      },
    });

    return c.json({ success: true, orderID: order.id });
  } catch (error) {
    throw error;
  }
};

//!USER ADD ADDRESS
export const UserAddAddressController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const AddAddressForm: AddAddressType = await c.req.json();
    const validate = AddAddressSchema.safeParse(AddAddressForm);
    if (!validate.success) {
      throw new Error("Schema Is Invalid");
    }
    await prisma.address.create({
      data: {
        line: AddAddressForm.line,
        city: AddAddressForm.city,
        country: AddAddressForm.country,
        state: AddAddressForm.state,
        pincode: AddAddressForm.pincode,
        buyerID: AddAddressForm.buyerID,
      },
    });
    return c.json({ success: true });
  } catch (error) {
    throw error;
  }
};

//!GET BOOKS RESULT QUERY
export const UserGetBookResultsController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const query = c.req.query("query");
    if (!query) {
      return c.json({ success: true, books: [] });
    }
    const finalQuery = query?.toString().trim().toLowerCase();
    const temp = await prisma.book.findMany({
      where: {
        OR: [
          {
            title: {
              contains: finalQuery,
              mode: "insensitive", // Case-insensitive search
            },
          },
          {
            author: {
              contains: finalQuery,
              mode: "insensitive", // Case-insensitive search
            },
          },
        ],
      },
    });
    const serializedBooks = temp.map((book) => ({
      ...book,
      createdAt: book.createdAt.toString(),
    }));

    return c.json({ success: true, books: serializedBooks });
  } catch (error) {
    throw error;
  }
};

//!USER SEND EMAIL CONTROLLER
export const UserSendEmailController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const MailSent = await c.req.json();
    const MailSchema = z.object({ email: z.string().email() });
    const validate = MailSchema.safeParse(MailSent);
    if (!validate.success) {
      throw new Error("The mail sent is not correct");
    }
    const RESEND_API_KEY = "re_HMjwsUgh_MgWqTEPh4LQsR2Gkgzi5DSpx";
    const user = await prisma.buyer.findUnique({
      where: { email: MailSent.email },
    });
    if (!user) {
      throw new Error("Can't Find A User Linked With The Email");
    }
    const baseUrl = c.env.BASE_URL;
    const resetLink = `${baseUrl}/reset-password?id=${
      user.id
    }&token=${Date.now()}`;
    const emailData = {
      from: "noreply@bigfootpublicationstraditional.in",
      to: MailSent.email,
      subject: "Verification from bigfoot publications",
      html: `<h1>This mail is sent with regards to your request for password reset</h1>
      <p>Visit This Link To Reset Your Password</p>
      <h2>${resetLink}</h2>
      `,
    };
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    if (response.ok) {
      return c.json({ success: true });
    } else {
      const errorData = await response.json();
      return c.json({ error: "Failed to send email", details: errorData }, 500);
    }
  } catch (error) {
    throw error;
  }
};

//!USER RESET PASSWORD
export const UserResetPasswordController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const userID = await c.req.json();
    const idSchema = z.object({
      id: z.string(),
      password: z.string().min(8),
    });
    const validate = idSchema.safeParse(userID);
    if (!validate.success) {
      throw new Error(
        "No valid data was provided, password should be at least of 8 length"
      );
    }
    const cryptedPassword = bcryptjs.hashSync(userID.password, 10);
    await prisma.buyer.update({
      where: { id: userID.id },
      data: { password: cryptedPassword },
    });
    return c.json({ success: true });
  } catch (error) {
    throw error;
  }
};
