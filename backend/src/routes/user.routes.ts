import { Hono } from "hono";
import {
  UserGetBookDetailController,
  UserRegisterBuyerController,
  UserGetBuyerController,
  UserCreateOrderController,
  UserVerifyPaymentController,
  UserAddAddressController,
  UserGetBookResultsController,
  UserSendEmailController,
  UserResetPasswordController,
} from "../controllers/user.controller";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_API_KEY: string;
    RAZORPAY_API_KEY: string;
    RAZORPAY_API_SECRET: string;
  };
}>();

app.post("book-detail", UserGetBookDetailController);
app.post("register-buyer", UserRegisterBuyerController);
app.post("get-buyer", UserGetBuyerController);
app.post("create-order", UserCreateOrderController);
app.post("verify-payment", UserVerifyPaymentController);
app.post("add-address", UserAddAddressController);
app.get("search", UserGetBookResultsController);
app.post("forgot-password-get-otp", UserSendEmailController);
app.post("reset-password", UserResetPasswordController);
export default app;
