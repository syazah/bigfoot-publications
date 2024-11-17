import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ResetPassword() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const token = searchParams.get("token");
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  if (Number(token) + 3600000 < Date.now()) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <h1 className="text-xl">Link Expired</h1>
      </div>
    );
  }

  async function ResetPassword() {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/user/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password: passwords.password }),
      });
      const data = await res.json();
      if (data.success === true) {
        alert(
          "Your Password Is Now Changed, Visit The Website To Login With A New Password"
        );
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
    <div className="w-full h-screen bg-secondary flex justify-center items-center relative">
      <img
        className="absolute top-0 left-0 w-[50px] h-[50px]"
        src={"/LOGO2.png"}
      />
      <div className="w-1/2 bg-white p-2 rounded-sm flex flex-col">
        <h1 className="font-semibold text-2xl font-poppins border-b-[1px]">
          Reset Password
        </h1>
        <input
          value={passwords.password}
          onChange={(e) =>
            setPasswords({ ...passwords, password: e.target.value })
          }
          type="password"
          placeholder="Enter Your New Password"
          className="w-full bg-zinc-200 rounded-full p-2 mt-4 font-poppins focus:outline-none"
        />
        <input
          value={passwords.confirmPassword}
          onChange={(e) =>
            setPasswords({ ...passwords, confirmPassword: e.target.value })
          }
          placeholder="Confirm Your Password"
          type="password"
          className={`w-full bg-zinc-200 rounded-full p-2 mt-2 focus:outline-none ${
            passwords.confirmPassword != passwords.password
              ? "focus:outline-red-500"
              : "focus:outline-none"
          } font-poppins`}
        />
        <div className="w-full flex justify-end items-center">
          <button
            onClick={ResetPassword}
            className="px-4 p-2 bg-primaryDark mt-4 rounded-full hover:bg-yellow-500 cursor-pointer font-semibold text-xl"
          >
            {loading ? "Changing..." : "Reset"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
