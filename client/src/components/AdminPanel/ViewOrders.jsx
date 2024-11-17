import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ViewOrders() {
  const [currentOrders, setCurrentOrders] = useState(null);
  async function getAllOrders() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/admin/get-orders`, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      });
      const data = await res.json();
      if (data.success === true) {
        setCurrentOrders(data.orders);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  }
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div className="w-[85%] h-[100vh] font-poppins flex flex-col overflow-y-scroll">
      {currentOrders === null ? (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[100px] h-[100px]" src="/LOGO.png" />
        </div>
      ) : currentOrders.length > 0 ? (
        <div className="w-full h-full flex flex-col justify-start items-start">
          {currentOrders.map((order, index) => {
            const date = new Date(Number(order.createdAt)).toLocaleString();

            return (
              <div
                key={index}
                className="w-full p-2 flex border-b-[1px] border-zinc-200 justify-between items-start"
              >
                <div className="flex flex-col w-[90%] h-full">
                  <h1 className="font-semibold text-sm font-poppins flex gap-2">
                    <span className="text-secondary font-roboto">
                      Order ID:
                    </span>
                    {order.id}
                  </h1>
                  <h1 className="font-semibold text-sm font-poppins flex gap-2">
                    <span className="text-secondary font-roboto">
                      Ordered By:
                    </span>
                    {order.buyer.name} | {order.buyer.email}
                  </h1>
                  <h1 className="font-semibold text-sm font-poppins flex gap-2">
                    <span className="text-secondary font-roboto">
                      Order Cost:
                    </span>
                    ₹ {order.orderCost}/.
                  </h1>
                  <h1 className="font-semibold text-sm font-poppins flex gap-2">
                    <span className="text-secondary font-roboto">
                      Created At:
                    </span>
                    {date}
                  </h1>
                </div>
                <div className="h-full w-[10%] flex justify-end items-center">
                  <Link
                    to={`/admin-panel/panel/order/${order.id}`}
                    className="w-10 h-10 bg-tertiary rounded-full cursor-pointer flex justify-center items-center hover:bg-secondary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="size-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="font-semibold text-lg">**No Orders Found</h1>
        </div>
      )}
    </div>
  );
}

export default ViewOrders;
