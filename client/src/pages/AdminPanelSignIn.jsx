import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminMainContext } from "../AdminContext";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function AdminPanel() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setAdminPresent } = useContext(AdminMainContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  async function handleSubmit() {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/admin/signin`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === true) {
        setFormData({ email: "", password: "" });
        sessionStorage.setItem("token", data.token);
        setAdminPresent(true);
        navigate("/admin-panel/panel");
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong");
    }
  }
  return (
    <div className="w-full h-[100vh] bg-secondary flex justify-center items-center">
      <Link to={"/"} className="absolute top-0 left-0">
        <img className="w-[50px] h-[50px]" src="/LOGO2.png" />
      </Link>
      <div className="w-1/2 p-4 bg-[#eee] flex flex-col justify-center items-center rounded-lg">
        <h1 className="font-poppins font-semibold text-xl">Sign In As Admin</h1>
        <div className="p-4 w-full flex flex-col gap-2">
          <div className="w-full p-2 bg-[#ddd] flex justify-start items-start rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Your Email ID"
              className="w-full bg-[#ddd] font-medium text-lg font-poppins focus:outline-none"
            />
          </div>
          <div className="w-full p-2 bg-[#ddd] flex justify-start items-start rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Your Password"
              type="password"
              className="w-full bg-[#ddd] font-medium text-lg font-poppins focus:outline-none"
            />
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={handleSubmit}
              className="w-[100px] p-2 px-4  font-semibold font-poppins bg-primaryDark  transition-all duration-200 rounded-full hover:bg-yellow-500"
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
