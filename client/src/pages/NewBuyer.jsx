import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminMainContext } from "../AdminContext";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function NewBuyer() {
  const navigation = useNavigate();
  const [buyerFormData, setBuyerFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    line: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
  });
  const [buyerCreated, setBuyerCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { currentBookId } = useContext(AdminMainContext);
  console.log(currentBookId);
  async function handleFormSubmit() {
    try {
      const isAnyFieldEmpty = Object.values(buyerFormData).some(
        (value) => value === ""
      );
      if (isAnyFieldEmpty) {
        return alert("All fields are required please check");
      }
      if (buyerFormData.password.length < 8) {
        return alert("Password should be longer than 8 characters");
      }
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/user/register-buyer`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buyerFormData),
      });
      const data = await res.json();
      if (data.success === true) {
        setBuyerCreated(true);
        setBuyerFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          line: "",
          city: "",
          state: "",
          pincode: "",
          country: "",
        });
        setTimeout(() => {
          return navigation(`/buyer/existing/${currentBookId}`);
        }, 2000);
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong While Submitting The Data");
    }
  }

  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-start bg-secondary">
      <img src="/LOGO2.png" className="w-10 h-10 absolute top-0 left-0" />
      <div className="w-full flex flex-col items-center p-4 bg-secondary">
        <h1 className="font-semibold text-4xl font-poppins text-white mt-4">
          Welcome Reader !
        </h1>
        <p className="font-roboto text-zinc-200 w-full md:w-1/4 text-center text-sm">
          It is great to see you here, we are honored to cater to your reading
          habits. Kindly Sign Up to order your book.
        </p>
      </div>

      {buyerCreated ? (
        <div className="w-full h-full flex justify-center items-center bg-zinc-200 rounded-t-xl gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>

          <h1 className="font-poppins text-zinc-600">
            Your Buyer Account Is Created, we are redirecting to the order page
          </h1>
        </div>
      ) : (
        <div className="w-full h-full flex-col bg-zinc-200 rounded-t-xl p-4 flex">
          <div className="flex flex-col md:flex-row  w-full">
            <div className="w-full md:w-1/2">
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Your Name
                </h2>
                <input
                  value={buyerFormData.name}
                  onChange={(e) =>
                    setBuyerFormData({ ...buyerFormData, name: e.target.value })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Your Email
                </h2>
                <input
                  value={buyerFormData.email}
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      email: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Your Password
                </h2>
                <input
                  value={buyerFormData.password}
                  type="password"
                  placeholder="Should Be Minimum Of Length 8"
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      password: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Your Phone Number
                </h2>
                <input
                  value={buyerFormData.phone}
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      phone: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter A Valid Phone Number"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Address Line
                </h2>
                <input
                  value={buyerFormData.line}
                  onChange={(e) =>
                    setBuyerFormData({ ...buyerFormData, line: e.target.value })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Valid Address Line"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  City
                </h2>
                <input
                  value={buyerFormData.city}
                  onChange={(e) =>
                    setBuyerFormData({ ...buyerFormData, city: e.target.value })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Residing City"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  State
                </h2>
                <input
                  value={buyerFormData.state}
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      state: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Residing State"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Country
                </h2>
                <input
                  value={buyerFormData.country}
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      country: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter Your Country Name"
                />
              </div>
              <div className="flex flex-col mt-2">
                <h2 className="font-semibold font-roboto text-zinc-700">
                  Pincode
                </h2>
                <input
                  value={buyerFormData.pincode}
                  onChange={(e) =>
                    setBuyerFormData({
                      ...buyerFormData,
                      pincode: e.target.value,
                    })
                  }
                  className="w-3/4 bg-zinc-300 rounded-md p-2 font-poppins focus:outline-double outline-yellow-700"
                  placeholder="Enter A Valid Pincode"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center mt-4">
            <div
              onClick={handleFormSubmit}
              className="p-2 px-4 text-xl font-poppins bg-secondary font-semibold text-white rounded-full cursor-pointer hover:bg-tertiary transition-all duration-500"
            >
              {loading ? "Loading..." : "SUBMIT"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewBuyer;
