import { Hono } from "hono";
import AdminRoutes from "./routes/admin.routes";
import UserRoutes from "../src/routes/user.routes";
import { cors } from "hono/cors";
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
app.use(cors());

app.route("/api/v1/admin", AdminRoutes);
app.route("/api/v1/user", UserRoutes);

// CATCH ERROR
app.onError((err, c) => {
  return c.json({ success: false, message: err.message });
});

export default app;
