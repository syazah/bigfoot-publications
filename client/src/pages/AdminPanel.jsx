import React, { useContext, useState } from "react";
import AddBook from "../components/AdminPanel/AddBook";
import { Link, useNavigate } from "react-router-dom";
import ViewBookAdmin from "../components/AdminPanel/ViewBookAdmin";
import { AdminContext, AdminMainContext } from "../AdminContext";
import ViewBuyers from "../components/AdminPanel/ViewBuyers";
import ViewOrders from "../components/AdminPanel/ViewOrders";
function AdminPanel() {
  const [currentComponent, setCurrentComponent] = useState(0);
  const { setAdminPresent } = useContext(AdminMainContext);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] bg-zinc-50 font-poppins flex justify-start items-start overflow-hidden">
      <div className="w-[15%] h-full border-r-2 flex flex-col justify-start bg-primaryDark relative">
        <div className="w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 gap-1">
          <img className="w-6" src={"/LOGO.png"} />
          <h1 className="font-semibold font-poppins text-lg text-black">
            Admin Panel
          </h1>
        </div>
        <div
          onClick={() => setCurrentComponent(0)}
          className="w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer gap-1"
        >
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <h1 className="font-semibold font-poppins text-lg text-black">
            Add Books
          </h1>
        </div>
        <div
          onClick={() => setCurrentComponent(1)}
          className="w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer gap-1"
        >
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
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>

          <h1 className="font-semibold font-poppins text-lg text-black">
            View Buyers
          </h1>
        </div>
        <div
          onClick={() => setCurrentComponent(2)}
          className="w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer gap-1"
        >
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
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>

          <h1 className="font-semibold font-poppins text-lg text-black">
            View Books
          </h1>
        </div>
        <div
          onClick={() => setCurrentComponent(3)}
          className="w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer gap-1"
        >
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>

          <h1 className="font-semibold font-poppins text-lg text-black">
            View Orders
          </h1>
        </div>

        <div
          onClick={() => {
            sessionStorage.removeItem("token");
            setAdminPresent(false);
            return navigate("/admin-panel");
          }}
          className="absolute left-0 bottom-0 w-full flex justify-start items-center border-b-[1px] p-2 border-yellow-500 hover:bg-yellow-400 transition-all duration-200 cursor-pointer gap-1"
        >
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
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>

          <h1 className="font-semibold font-poppins text-lg text-black">
            Log Out
          </h1>
        </div>
      </div>
      {currentComponent === 0 && <AddBook />}
      {currentComponent === 1 && <ViewBuyers />}
      {currentComponent === 2 && <ViewBookAdmin />}
      {currentComponent === 3 && <ViewOrders />}
    </div>
  );
}

export default AdminPanel;
