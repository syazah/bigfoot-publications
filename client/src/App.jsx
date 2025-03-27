import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Authors from "./pages/Authors";
import Blogs from "./pages/Blogs";
import Packages from "./pages/Packages";
import BlogExcel from "./components/BlogContent/BlogExcel";
import BlogMystery from "./components/BlogContent/BlogMystery";
import BlogEnigma from "./components/BlogContent/BlogEnigma";
import Anthology from "./pages/Anthology";
import Order from "./pages/Order";
import AdminPanelSignIn from "./pages/AdminPanelSignIn";
import AdminPanel from "./pages/AdminPanel";
import BookPage from "./pages/BookPage";
import NewBuyer from "./pages/NewBuyer";
import ExistingBuyer from "./pages/ExistingBuyer";
import { useContext, useEffect, useState } from "react";
import { AdminMainContext } from "./AdminContext";
import OrderPage from "./components/AdminPanel/OrderPage";
import ResetPassword from "./pages/ResetPassword";
import ScrollToTop from "./ScrollToTop";
import SocialMedia from "./pages/SocialMedia";
function App() {
  const { adminPresent } = useContext(AdminMainContext);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/catalogue" element={<Authors />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/company" element={<About />} />
        <Route path="/socialMedia" element={<SocialMedia />} />
        <Route path="/anthology" element={<Anthology />} />
        <Route path="/excel" element={<BlogExcel />} />
        <Route path="/mystery" element={<BlogMystery />} />
        <Route path="/enigma" element={<BlogEnigma />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin-panel" element={<AdminPanelSignIn />} />
        <Route
          path="/admin-panel/panel"
          element={
            adminPresent === null ? (
              <div className="w-full h-full flex justify-center items-center">
                <img className="w-[100px] h-[100px]" src="/LOGO.png" />
              </div>
            ) : adminPresent === true ? (
              <AdminPanel />
            ) : (
              <h1>Page Not Found</h1>
            )
          }
        />
        <Route
          path="/admin-panel/panel/order/:id"
          element={
            adminPresent === null ? (
              <div className="w-full h-full flex justify-center items-center">
                <img className="w-[100px] h-[100px]" src="/LOGO.png" />
              </div>
            ) : adminPresent === true ? (
              <OrderPage />
            ) : (
              <h1>Page Not Found</h1>
            )
          }
        />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/buyer/new" element={<NewBuyer />} />
        <Route path="/buyer/existing/:id" element={<ExistingBuyer />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<h1>ERROR!!</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
