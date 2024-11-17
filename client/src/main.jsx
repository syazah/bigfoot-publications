import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/cormorant-garamond";
import "@fontsource/poppins";
import "@fontsource/roboto";
import { AdminContext } from "./AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminContext>
      <App />
    </AdminContext>
  </React.StrictMode>
);
