import { Hono } from "hono";
import {
  AdminSignInController,
  AdminSignupController,
  AdminAddBookController,
  AdminViewBooksController,
  AdminDeleteBookController,
  AdminGetBuyersController,
  AdminGetAllOrdersController,
  AdminGetSpecificOrder,
  AdminDeleteOrderController,
} from "../controllers/admin.controller";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
    CLOUDINARY_API_SECRET: string;
    CLOUDINARY_API_KEY: string;
  };
}>();
// AUTH ROUTES
app.post("signup", AdminSignupController);
app.post("signin", AdminSignInController);
//ADMIN ADD BOOK
app.post("add-books", AdminAddBookController);
app.get("view-books", AdminViewBooksController);
app.delete("delete-book", AdminDeleteBookController);
app.get("get-buyers", AdminGetBuyersController);
app.get("get-orders", AdminGetAllOrdersController);
app.post("get-specific-order", AdminGetSpecificOrder);
app.post("delete-order", AdminDeleteOrderController);

export default app;
