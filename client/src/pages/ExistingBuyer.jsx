import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AdminMainContext } from "../AdminContext";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ExistingBuyer() {
  const { id } = useParams();
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });
  const [addressDetails, setAddressDetails] = useState(null);
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);
  const [buyerDetail, setBuyerDetail] = useState(null);
  const [bookDetail, setBookDetail] = useState(null);
  const [fetchingAddress, setFetchingAddress] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [addAddress, setAddAddress] = useState(false);
  const [showOrderID, setShowOrderID] = useState({ id: "" });
  const [showResetPassword, setShowResetPassword] = useState(false);
  const { numberOfBooks } = useContext(AdminMainContext);
  async function GetBookDetail() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/user/book-detail`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success === true) {
        setBookDetail(data.bookDetail);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something Went Wrong While Fetching Book Details");
    }
  }

  async function GetAddresses() {
    try {
      setFetchingAddress(true);
      const res = await fetch(`${API_BASE_URL}/v1/user/get-buyer`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(signInForm),
      });
      const data = await res.json();
      if (data.success === true) {
        setBuyerDetail(data.buyerDetail);
        setAddressDetails(data.addresses);
      } else {
        alert(data.message);
      }
      setFetchingAddress(false);
    } catch (error) {
      setFetchingAddress(false);
      alert("Something Went Wrong While Fetching Addresses");
    }
  }
  useEffect(() => {
    GetBookDetail();
  }, []);
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-start">
      {bookDetail === null ? (
        <div className="w-full h-full bg-zinc-200 flex justify-center items-center cursor-pointer">
          <img src="/LOGO.png" className="w-[100px] h-[100px]" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-start items-start h-full w-full relative">
          <Link className="cursor-pointer" to={"/"}>
            <img src="/LOGO2.png" className="w-10 h-10 absolute top-0 left-0" />
          </Link>
          {showResetPassword ? (
            <ShowResetPassword setShowResetPassword={setShowResetPassword} />
          ) : orderSummaryOpen ? (
            <OrderSummary
              setShowOrderID={setShowOrderID}
              buyerDetail={buyerDetail}
              addressDetails={addressDetails}
              bookDetail={bookDetail}
              selectedIndex={selectedIndex}
            />
          ) : addressDetails === null ? (
            <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-start p-4 bg-tertiary">
              <div className="w-full flex flex-col justify-center items-center border-b-[1px] border-blue-800 py-2">
                <h1 className="font-semibold text-4xl font-poppins text-white mt-4 text-center">
                  Welcome Back Reader !
                </h1>
                <p className="font-roboto text-zinc-300 w-full md:w-2/3 text-center text-sm">
                  Its great to see you here again, we are honored to cater to
                  your reading habits. Kindly sign in and choose your address so
                  that we can order your book
                </p>
              </div>
              <div className="w-full py-2 flex flex-col gap-2 border-b-[1px] border-blue-800">
                <div className="w-full flex justify-between items-center gap-2">
                  <h1 className="font-light text-white font-poppins">
                    Email Address
                  </h1>
                  <input
                    value={signInForm.email}
                    onChange={(e) =>
                      setSignInForm({ ...signInForm, email: e.target.value })
                    }
                    placeholder="Enter Valid Email"
                    className="bg-blue-800 rounded-full w-1/2 p-1 px-2 font-normal font-poppins text-white"
                  />
                </div>
                <div className="w-full flex justify-between items-center gap-2">
                  <h1 className="font-light text-white font-poppins">
                    Password
                  </h1>
                  <input
                    value={signInForm.password}
                    onChange={(e) =>
                      setSignInForm({ ...signInForm, password: e.target.value })
                    }
                    placeholder="Should be minimum of length 8"
                    type="password"
                    className="bg-blue-800 rounded-full w-1/2 p-1 px-2 font-normal font-poppins text-white"
                  />
                </div>
                <div className="w-full flex justify-end gap-2">
                  <button
                    onClick={() => setShowResetPassword(true)}
                    className="font-semibold text-base font-poppins p-2 px-4 rounded-full bg-white hover:bg-zinc-300"
                  >
                    Forgot Password
                  </button>
                  <button
                    onClick={GetAddresses}
                    className="font-semibold text-base font-poppins p-2 px-4 rounded-full text-black bg-primaryDark hover:bg-yellow-500"
                  >
                    {fetchingAddress ? "Fetching..." : "Verify"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-start p-4 bg-tertiary">
              <div className="w-full p-2 flex flex-col justify-start items-start mt-4">
                <h1 className="font-normal font-poppins text-xl border-b-[1px] border-blue-800">
                  Select Address
                </h1>
                {addressDetails.map((address, index) => {
                  return (
                    <div
                      onClick={() => setSelectedIndex(index)}
                      key={index}
                      className="w-full p-2 border-b-[1px] border-blue-800 flex justify-start items-center gap-2 cursor-pointer mt-4"
                    >
                      <div className="w-4 h-4 border-[2px] rounded-full border-white overflow-hidden">
                        {selectedIndex === index && (
                          <div className="bg-white w-full h-full"></div>
                        )}
                      </div>
                      <h1 className="font-poppins text-white capitalize font-extralight">
                        {address.line}, {address.city}, {address.state},{" "}
                        {address.pincode}, {address.country}
                      </h1>
                    </div>
                  );
                })}

                <div className="w-full flex justify-end items-center mt-4 gap-2">
                  <button
                    onClick={() => setAddAddress(true)}
                    className="p-2 px-4 border-2 border-white font-poppins font-normal rounded-full text-white hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Add Address
                  </button>
                  <button
                    onClick={() => setOrderSummaryOpen(true)}
                    className="p-2 px-4 font-poppins font-normal rounded-full  bg-primaryDark text-black transition-all duration-500 hover:bg-yellow-500"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="w-full md:w-[40%] h-full flex flex-col">
            <div className="w-full h-[75%] border-b-[1px] border-zinc-400 p-4 hover:bg-zinc-200 cursor-pointer transition-all duration-500">
              <img
                src={bookDetail.photos[0]}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col p-2">
              <h1 className="font-poppins font-semibold text-2xl">
                {bookDetail.title}
              </h1>
              <h1 className="font-poppins font-semibold text-2xl ">
                ₹ {bookDetail.cost * numberOfBooks + bookDetail.cod} /.{" "}
              </h1>
              <h1 className="font-poppins font-normal text-zinc-700 text-sm ">
                Number Of Books Selected:-{" "}
                <span className="font-semibold font-poppins">
                  {numberOfBooks}
                </span>
              </h1>
              <h1 className="font-poppins font-normal text-zinc-700 text-sm ">
                {bookDetail.author}
              </h1>
              <h1 className="font-poppins font-normal text-zinc-700 text-sm ">
                Paperback | {bookDetail.category}
              </h1>
            </div>
          </div>
          {addAddress && (
            <AddAddress
              buyerID={buyerDetail.id}
              setAddAddress={setAddAddress}
            />
          )}
          {showOrderID.id != "" && <ShowOrderID orderID={showOrderID} />}
        </div>
      )}
    </div>
  );
}

function ShowResetPassword({ setShowResetPassword }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  async function sendEmail() {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE_URL}/v1/user/forgot-password-get-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (data.success === true) {
        alert(
          "Verification link sent to your mail, Visit your mail to reset your password"
        );
        setShowResetPassword(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong While Sending OTP");
    }
  }
  return (
    <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-start p-4 bg-tertiary">
      <div className="w-full flex justify-between items-center mt-8">
        <h1 className="font-poppins font-semibold text-2xl text-white border-b-[1px] border-white">
          Forgot Password ?
        </h1>
        <div
          onClick={() => setShowResetPassword(false)}
          className="w-10 h-10 bg-red-600 rounded-full flex justify-center items-center hover:bg-red-800 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start mt-4 text-white font-poppins">
        <div className="w-full flex justify-between items-center">
          <h1>Enter Your Email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 rounded-full bg-blue-800 py-1 px-2 focus:outline-none"
          />
        </div>

        <div className="w-full flex justify-end mt-4">
          <button
            onClick={sendEmail}
            className="px-4 p-2 rounded-full bg-primaryDark font-semibold font-poppins text-black hover:bg-yellow-500"
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </div>
      </div>
    </div>
  );
}

function AddAddress({ setAddAddress, buyerID }) {
  const [addressLoading, setAddressLoading] = useState(false);
  const [addressForm, setAddressForm] = useState({
    line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    buyerID: buyerID,
  });
  async function AddAddressUser() {
    try {
      setAddressLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/user/add-address`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(addressForm),
      });
      const data = await res.json();
      if (data.success === true) {
        window.location.reload();
        alert("Address added successfully, Kindly re-enter your credentials");
      } else {
        alert(data.message);
      }
      setAddressLoading(false);
    } catch (error) {
      setAddressLoading(false);
      alert("Something Went Wrong While Adding Address");
    }
  }
  return (
    <div className="fixed w-full h-full bg-[rgb(200,200,200,0.4)] backdrop-blur-md flex justify-center items-center">
      <div className="w-[80%] md:w-1/2 p-2 bg-white rounded-lg">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-normal text-xl font-poppins">Add Address</h1>
          <div
            onClick={() => setAddAddress(false)}
            className="w-6 h-6 bg-red-500 rounded-full cursor-pointer hover:bg-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div className="w-full p-2 flex flex-col gap-1">
          <h1 className="font-normal text-sm font-roboto">Address Line</h1>
          <input
            value={addressForm.line}
            onChange={(e) =>
              setAddressForm({ ...addressForm, line: e.target.value })
            }
            className="w-full p-1 px-2 bg-zinc-200 text-base focus:outline-none rounded-md font-poppins"
          />
          <h1 className="font-normal text-sm font-roboto">City</h1>
          <input
            value={addressForm.city}
            onChange={(e) =>
              setAddressForm({ ...addressForm, city: e.target.value })
            }
            className="w-full p-1 px-2 bg-zinc-200 text-base focus:outline-none rounded-md font-poppins"
          />
          <h1 className="font-normal text-sm font-roboto">State</h1>
          <input
            value={addressForm.state}
            onChange={(e) =>
              setAddressForm({ ...addressForm, state: e.target.value })
            }
            className="w-full p-1 px-2 bg-zinc-200 text-base focus:outline-none rounded-md font-poppins"
          />
          <h1 className="font-normal text-sm font-roboto">Country</h1>
          <input
            value={addressForm.country}
            onChange={(e) =>
              setAddressForm({ ...addressForm, country: e.target.value })
            }
            className="w-full p-1 px-2 bg-zinc-200 text-base focus:outline-none rounded-md font-poppins"
          />
          <h1 className="font-normal text-sm font-roboto">Pincode</h1>
          <input
            value={addressForm.pincode}
            onChange={(e) =>
              setAddressForm({ ...addressForm, pincode: e.target.value })
            }
            className="w-full p-1 px-2 bg-zinc-200 text-base focus:outline-none rounded-md font-poppins"
          />
        </div>
        <div className="w-full flex justify-end items-center">
          <button
            onClick={AddAddressUser}
            className="p-2 px-4  bg-primaryDark rounded-full font-poppins hover:bg-yellow-500"
          >
            {addressLoading ? "Adding..." : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
function ShowOrderID({ orderID }) {
  return (
    <div className="fixed w-full h-full bg-[rgb(200,200,200,0.4)] backdrop-blur-md flex justify-center items-center">
      <div className="w-[80%] md:w-1/2 p-2 bg-white rounded-lg">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-normal text-xl font-poppins">Order Summary</h1>
          <Link
            to={"/"}
            className="w-6 h-6 flex justify-center items-center cursor-pointer bg-primaryDark hover:bg-yellow-500 rounded-full"
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-col w-full p-2">
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Order ID
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.id}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Name Of Buyer
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.buyerDetail.name}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Email Provided
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.buyerDetail.email}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Contact Number
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.buyerDetail.phone}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Book Title
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.bookDetail.title}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Book Cost
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              ₹ {orderID.bookDetail.cost}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Delivery Cost
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              ₹ {orderID.bookDetail.cod}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Order Cost
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              ₹ {orderID.orderCost}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Address Line
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.addressDetails.line}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              City
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.addressDetails.city}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              State
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.addressDetails.state}
            </h1>
          </div>
          <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
            <h1 className="font-normal font-poppins text-black text-sm">
              Country
            </h1>
            <h1 className="font-normal font-poppins text-blue-600 text-sm">
              {orderID.addressDetails.country}
            </h1>
          </div>
          <div className="flex justify-end items-center p-1">
            <button
              onClick={() => {
                window.print();
              }}
              className="font-normal font-poppins text-base px-4 p-2 bg-primaryDark hover:bg-yellow-500 rounded-full"
            >
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderSummary({
  buyerDetail,
  bookDetail,
  addressDetails,
  selectedIndex,
  setShowOrderID,
}) {
  const [loading, setLoading] = useState(false);
  const { numberOfBooks } = useContext(AdminMainContext);
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
    });
  };
  async function RaiseOrder() {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/user/create-order`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          buyerID: buyerDetail.id,
          bookID: bookDetail.id,
          addressID: addressDetails[selectedIndex].id,
          numberOfBooks: numberOfBooks,
          orderCost: bookDetail.cost * numberOfBooks + bookDetail.cod,
        }),
      });
      const data = await res.json();
      if (data.success === true) {
        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
          alert("Razorpay SDK failed to load. Are you online?");
          setLoading(false);
          return;
        }
        const options = {
          key: "rzp_live_B7TPqzoRwbFb6h",
          amount: data.order.amount,
          currency: data.order.currency,
          name: "Bigfoot Publications",
          description: "Complete your purchase",
          order_id: data.order.id,
          handler: async function (response) {
            const verifyRes = await fetch(
              `${API_BASE_URL}/v1/user/verify-payment`,
              {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                  buyerID: buyerDetail.id,
                  bookID: bookDetail.id,
                  addressID: addressDetails[selectedIndex].id,
                  numberOfBooks: numberOfBooks,
                  orderCost: bookDetail.cost * numberOfBooks + bookDetail.cod,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );
            const verifyData = await verifyRes.json();
            if (verifyData.success === true) {
              alert("Payment Verified And Your Order Is Placed");
              setShowOrderID({
                id: verifyData.orderID,
                numberOfBooks: numberOfBooks,
                orderCost: bookDetail.cost * numberOfBooks + bookDetail.cod,
                bookDetail: bookDetail,
                buyerDetail: buyerDetail,
                addressDetails: addressDetails[selectedIndex],
              });
            } else {
              alert(verifyData.message);
            }
          },
          prefill: {
            name: buyerDetail.name,
            email: buyerDetail.email,
          },
          theme: {
            color: "#f5dc21",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return alert("Something Went Wrong While Raising Order");
    }
  }
  return (
    <div className="w-full md:w-[60%] h-full flex flex-col justify-start items-start p-4 bg-tertiary">
      <div className="w-full flex justify-center items-center">
        <h1 className="font-semibold text-xl font-poppins text-white">
          Confirm Order
        </h1>
      </div>
      <div className="w-full flex flex-col p-4 px-8 bg-white rounded-2xl mt-4">
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">Name</h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {buyerDetail.name}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">Email</h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {buyerDetail.email}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">Phone</h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {buyerDetail.phone}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Book Title
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {bookDetail.title}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Address Line
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {addressDetails[selectedIndex].line}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">City</h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {addressDetails[selectedIndex].city}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">State</h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {addressDetails[selectedIndex].state}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Country
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {addressDetails[selectedIndex].country}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Pincode
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            {addressDetails[selectedIndex].pincode}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Book Cost
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            ₹ {bookDetail.cost * numberOfBooks}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Delivery Cost
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            ₹ {bookDetail.cod}
          </h1>
        </div>
        <div className="flex justify-between items-center border-b-[1px] border-zinc-200 p-1">
          <h1 className="font-normal font-poppins text-black text-sm">
            Total Cost
          </h1>
          <h1 className="font-normal font-poppins text-blue-600 text-sm">
            ₹ {bookDetail.cost * numberOfBooks + bookDetail.cod}
          </h1>
        </div>
      </div>

      <div className="w-full flex justify-end items-center mt-4">
        <button
          onClick={RaiseOrder}
          className="font-semibold font-poppins bg-primaryDark p-2 px-4 rounded-full hover:bg-yellow-500"
        >
          {loading ? "Generating Order..." : "Continue & Pay"}
        </button>
      </div>
    </div>
  );
}

export default ExistingBuyer;
