import React, { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ViewBuyers() {
  const [buyers, setBuyers] = useState(null);
  async function GetAllBuyers() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/admin/get-buyers`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success === true) {
        setBuyers(data.buyers);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something Went Wrong While Fetching The Buyers");
    }
  }
  useEffect(() => {
    GetAllBuyers();
  }, []);
  return (
    <div className="w-[85%] h-[100vh] font-poppins flex flex-col overflow-y-scroll">
      {buyers === null ? (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[100px] h-[100px]" src={"/LOGO.png"} />
        </div>
      ) : (
        buyers.map((buyer) => {
          return (
            <div className="border-b-[1px] border-zinc-200 p-2">
              <h1 className="font-poppins font-medium">ID: {buyer.id}</h1>
              <h1 className="font-poppins font-medium">Name: {buyer.name}</h1>
              <h1 className="font-poppins font-medium">Email: {buyer.email}</h1>
              <h1 className="font-poppins font-medium">Phone: {buyer.phone}</h1>
              <h1 className="font-poppins font-medium">
                Orders: {buyer.orders.length}
              </h1>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ViewBuyers;
