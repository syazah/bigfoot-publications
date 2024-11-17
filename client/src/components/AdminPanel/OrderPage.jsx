import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function OrderPage() {
  const { id } = useParams();
  const [orderDetail, setOrderDetail] = useState(null);
  const navigate = useNavigate();
  async function getOrder() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/admin/get-specific-order`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success === true) {
        setOrderDetail(data.order);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something Went Wrong While Fetching This Order");
    }
  }

  async function DeleteOrder() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/admin/delete-order`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success) {
        alert("Order Deleted");
        return navigate("/admin-panel/panel");
      }
    } catch (error) {
      alert("Something Went Wrong");
    }
  }

  useEffect(() => {
    getOrder();
  }, []);
  const date =
    orderDetail != null &&
    new Date(Number(orderDetail.createdAt)).toLocaleString();
  console.log(orderDetail);
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-start">
      {orderDetail === null ? (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[100px] h-[100px]" src="/LOGO.png" />
        </div>
      ) : (
        <div className="w-full h-full bg-zinc-200 p-2">
          <div className="w-full flex p-2 justify-center items-center text-base font-poppins font-normal">
            Order Details
          </div>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Order ID : <span className="font-poppins">{orderDetail.id}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Buyer ID :{" "}
            <span className="font-poppins">{orderDetail.buyerID}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Book ID : <span className="font-poppins">{orderDetail.bookID}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address ID :{" "}
            <span className="font-poppins">{orderDetail.addressID}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Order Cost :{" "}
            <span className="font-poppins">₹ {orderDetail.orderCost}/.</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Books Quantity :{" "}
            <span className="font-poppins">{orderDetail.bookQuantity}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Order Date : <span className="font-poppins">{date}</span>
          </h1>
          <h1 className="font-normal font-poppins text-base border-b-[1px] border-zinc-400 flex justify-center items-center p-2">
            Book Details
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Book Title :{" "}
            <span className="font-poppins">{orderDetail.book.title}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Book Cost :{" "}
            <span className="font-poppins">{orderDetail.book.cost}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Book Category :{" "}
            <span className="font-poppins">{orderDetail.book.category}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Book Author :{" "}
            <span className="font-poppins">{orderDetail.book.author}</span>
          </h1>
          <h1 className="font-normal font-poppins text-base border-b-[1px] border-zinc-400 flex justify-center items-center p-2">
            Buyer Details
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Buyer Name :{" "}
            <span className="font-poppins">{orderDetail.buyer.name}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Buyer Phone Number :{" "}
            <span className="font-poppins">{orderDetail.buyer.phone}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Buyer Email :{" "}
            <span className="font-poppins">{orderDetail.buyer.email}</span>
          </h1>
          <h1 className="font-normal font-poppins text-base border-b-[1px] border-zinc-400 flex justify-center items-center p-2">
            Address Details
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address Line :{" "}
            <span className="font-poppins">{orderDetail.address.line}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address City :{" "}
            <span className="font-poppins">{orderDetail.address.city}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address State :{" "}
            <span className="font-poppins">{orderDetail.address.state}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address Country :{" "}
            <span className="font-poppins">{orderDetail.address.country}</span>
          </h1>
          <h1 className="font-normal font-poppins text-sm border-b-[1px] border-zinc-400">
            Address Pincode :{" "}
            <span className="font-poppins">{orderDetail.address.pincode}</span>
          </h1>

          <div className="w-full flex justify-end items-center">
            <button
              onClick={DeleteOrder}
              className="p-2 px-4 bg-red-500 font-normal font-poppins rounded-full mt-2 text-white"
            >
              Delete Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderPage;
