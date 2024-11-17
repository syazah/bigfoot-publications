import { z } from "zod";
// SIGNUP
const AdminSignUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});
type AdminSignUpType = z.infer<typeof AdminSignUpSchema>;

// SIGNIN
const AdminSignInSchema = z.object({
  email: z.string(),
  password: z.string().min(8),
});
type AdminSignInType = z.infer<typeof AdminSignInSchema>;

//BOOK
const BookFormDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  photos: z.string().array(),
  cost: z.number(),
  category: z.string(),
  author: z.string(),
  cod: z.number(),
});
type BookFormDataType = z.infer<typeof BookFormDataSchema>;
//BUYER
const BuyerFormDataSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  line: z.string(),
  city: z.string(),
  state: z.string(),
  pincode: z.string(),
  country: z.string(),
});
type BuyerFormDataType = z.infer<typeof BuyerFormDataSchema>;

// ORDER
const UserOrderSchema = z.object({
  buyerID: z.string(),
  addressID: z.string(),
  bookID: z.string(),
  orderCost: z.number(),
  numberOfBooks: z.number(),
});
type UserOrderType = z.infer<typeof UserOrderSchema>;

//VERIFICATION
const UserVerificationSchema = z.object({
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
  buyerID: z.string(),
  addressID: z.string(),
  bookID: z.string(),
  orderCost: z.number(),
  numberOfBooks: z.number(),
});
type UserVerificationType = z.infer<typeof UserVerificationSchema>;

//ADD ADDRESS SCHEMA
const AddAddressSchema = z.object({
  buyerID: z.string(),
  line: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  pincode: z.string(),
});
type AddAddressType = z.infer<typeof AddAddressSchema>;
export {
  AdminSignUpType,
  AdminSignUpSchema,
  AdminSignInSchema,
  AdminSignInType,
  BookFormDataSchema,
  BookFormDataType,
  BuyerFormDataSchema,
  BuyerFormDataType,
  UserOrderSchema,
  UserOrderType,
  UserVerificationSchema,
  UserVerificationType,
  AddAddressSchema,
  AddAddressType,
};
