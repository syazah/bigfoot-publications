import { Context, Next } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { v2 as cloudinary } from "cloudinary";
import {
  AdminSignInSchema,
  AdminSignInType,
  AdminSignUpSchema,
  AdminSignUpType,
  BookFormDataSchema,
  BookFormDataType,
} from "../types/admin.types";
import bcryptjs from "bcryptjs";

//! SIGNUP ADMIN
export const AdminSignupController = async (c: Context) => {
  try {
    // PRISMA CONFIGURATIONS
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    // ACCEPTING BODY
    const SignUpFormData: AdminSignUpType = await c.req.json();
    const validate = AdminSignUpSchema.safeParse(SignUpFormData);
    if (!validate.success) {
      c.status(400);
      throw new Error(validate.error.errors[0].message);
    }
    //CREATE USER
    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(SignUpFormData.password, salt);
    const user = await prisma.admin.create({
      data: {
        name: SignUpFormData.name,
        email: SignUpFormData.email,
        password: hashedPassword,
      },
    });

    return c.json({ success: true, message: "User Was Created" });
  } catch (error) {
    throw error;
  }
};

//! SIGN IN CONTROLLER
export const AdminSignInController = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  //GETTING FORM
  const SignInFormData: AdminSignInType = await c.req.json();
  const validate = AdminSignInSchema.safeParse(SignInFormData);
  if (!validate.success) {
    c.status(400);
    throw new Error(validate.error.errors[0].message);
  }
  //GETTING ADMIN
  const admin = await prisma.admin.findUnique({
    where: { email: SignInFormData.email },
  });
  if (!admin) {
    c.status(400);
    throw new Error("No Admin Found");
  }
  const validPassword = bcryptjs.compareSync(
    SignInFormData.password,
    admin.password
  );
  if (!validPassword) {
    c.status(400);
    throw new Error("Password Is Not Correct");
  }

  const token = await sign({ id: admin.id }, c.env.JWT_SECRET);
  return c.json({ success: true, token });
};

//! ADD BOOK CONTROLLER
export const AdminAddBookController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const bookFormData: BookFormDataType = await c.req.json();
    const validate = BookFormDataSchema.safeParse(bookFormData);
    if (!validate.success) {
      c.status(400);
      throw new Error("Something went wrong while validating data");
    }
    //ADD DATA TO THE BOOK
    await prisma.book.create({
      data: {
        title: bookFormData.title,
        description: bookFormData.description,
        cost: bookFormData.cost,
        category: bookFormData.category,
        createdAt: Date.now(),
        photos: bookFormData.photos,
        author: bookFormData.author,
        cod: bookFormData.cod,
      },
    });
    return c.json({
      success: true,
      message: `${bookFormData.title} was added to the database, It is now visible in the store`,
    });
  } catch (error) {
    throw error;
  }
};

//! VIEW BOOKS CONTROLLER
export const AdminViewBooksController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const books = await prisma.book.findMany({ include: { order: true } });
    const serializedBooks = books.map((book) => ({
      ...book,
      createdAt: book.createdAt.toString(),
    }));

    return c.json({ success: true, books: serializedBooks });
  } catch (error) {
    throw error;
  }
};

//! DELETE BOOK CONTROLLER
export const AdminDeleteBookController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const { id } = await c.req.json();
    if (!id) {
      throw new Error("Something Went Wrong While Deleting, ID not found");
    }
    await prisma.book.delete({ where: { id } });
    return c.json({ success: true });
  } catch (error) {
    throw error;
  }
};

//!ADMIN GET BUYER CONTROLLER
export const AdminGetBuyersController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const buyers = await prisma.buyer.findMany({ include: { orders: true } });
    return c.json({ success: true, buyers });
  } catch (error) {
    throw error;
  }
};

//!ADMIN GET ALL ORDERS CONTROLLER
export const AdminGetAllOrdersController = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const orders = await prisma.order.findMany({
      include: { buyer: true },
      orderBy: { createdAt: "asc" },
    });
    return c.json({ success: true, orders });
  } catch (error) {
    throw error;
  }
};

//! ADMIN GET SPECIFIC ORDER
export const AdminGetSpecificOrder = async (c: Context) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const orderID = await c.req.json();
    if (!orderID.id) {
      throw new Error("Cannot find any order id");
    }
    const order = await prisma.order.findUnique({
      where: { id: orderID.id },
      include: { buyer: true, address: true, book: true },
    });
    if (!order) {
      throw new Error("Order not found");
    }

    const serializedOrder = {
      ...order,
      book: {
        ...order.book,
        createdAt: order.book.createdAt.toString(), // Convert BigInt to string
      },
    };

    return c.json({ success: true, order: serializedOrder });
  } catch (error) {
    throw error;
  }
};

//!ADMIN DELETE ORDER CONTROLLER
export const AdminDeleteOrderController = async (c: Context) => {
  try {
    const orderID = await c.req.json();
    if (!orderID.id) {
      throw new Error("Order ID not found");
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    await prisma.order.delete({ where: { id: orderID.id } });
    return c.json({ success: true });
  } catch (error) {
    throw error;
  }
};
