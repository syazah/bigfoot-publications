import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AdminMainContext } from "../AdminContext";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function BookPage() {
  const { id } = useParams();
  const [bookDetail, setBookDetail] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [canBuyBook, setCanBuyBook] = useState(true);
  const [userTypePopup, setUserTypePopup] = useState(false);
  const [currentBookPhoto, setCurrentBookPhoto] = useState(0);
  const { numberOfBooks, setNumberOfBooks, setCurrentBookId } =
    useContext(AdminMainContext);
  async function GetBookDetail() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/user/book-detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (data.success === true) {
        setBookDetail(data.bookDetail);
        setCurrentBookId(data.bookDetail.id);
        const createdDate = new Date(Number(data.bookDetail.createdAt));
        const expirationDate = new Date(
          createdDate.getTime() + 30 * 24 * 60 * 60 * 1000
        );
        const now = new Date();
        const timeDiff = expirationDate - now;

        if (timeDiff > 0) {
          setCanBuyBook(true);
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
          );

          if (days > 0) {
            setTimeRemaining(`${days} days remaining`);
          } else if (hours > 0) {
            setTimeRemaining(`${hours} hours remaining`);
          } else {
            setTimeRemaining(`${minutes} minutes remaining`);
          }
        } else {
          setCanBuyBook(false);
          setTimeRemaining("Available On Amazon");
        }
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong while fetching book detail");
    }
  }
  useEffect(() => {
    GetBookDetail();
    setNumberOfBooks(1);
  }, []);
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-center relative">
      {userTypePopup && (
        <UserTypePopup setUserTypePopup={setUserTypePopup} bookID={id} />
      )}
      {bookDetail === null ? (
        <div className="w-full h-full flex justify-center items-center">
          <img src="/LOGO.png" className="w-[100px] h-[100px]" />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col md:flex-row">
          <Link
            to={"/order"}
            className="w-12 h-12 bg-primaryDark rounded-full absolute z-10 top-0 left-0 flex justify-center items-center hover:bg-yellow-500 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>

          <div className="w-full md:w-[40%] h-full p-2 flex flex-col gap-4">
            <div className="w-full bg-blue-200 rounded-xl h-[85%] p-4">
              <img
                className="w-full h-full object-contain"
                src={bookDetail.photos[currentBookPhoto]}
              />
            </div>
            <div className="w-full flex gap-2 pb-4">
              {bookDetail.photos.map((photo, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentBookPhoto(index)}
                  className={`w-1/5 ${
                    currentBookPhoto === index ? "border-2 border-black" : ""
                  } h-[100px] bg-blue-200 rounded-xl p-2 cursor-pointer`}
                >
                  <img src={photo} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[60%] bg-zinc-100 h-full flex flex-col justify-between p-4 rounded-xl gap-4">
            <div>
              <h1 className="font-normal text-black text-2xl font-poppins">
                {bookDetail.title}
              </h1>
              <h1 className="font-normal text-md font-poppins text-black ">
                {bookDetail.author}
              </h1>
              <h1 className="font-normal text-md font-poppins text-zinc-500 ">
                Paperback | {bookDetail.category}
              </h1>
              <h1 className="font-semibold text-black text-3xl font-poppins mt-4 ">
                ₹ {bookDetail.cost * numberOfBooks}
              </h1>
              <div className="w-full p-2 border-[1px] border-zinc-300 rounded-xl mt-2 font-roboto text-sm">
                {bookDetail.description}
              </div>
            </div>
            <div className="w-full flex flex-col gap-2">
              <div className="w-full flex justify-between items-center">
                <h1 className="font-semibold font-poppins">
                  Select Number Of Books
                </h1>
                <div className="p-2 flex gap-2">
                  <div
                    onClick={() => {
                      if (numberOfBooks > 1) {
                        setNumberOfBooks((prev) => prev - 1);
                      }
                    }}
                    className="w-5 h-5 rounded-full border-2 border-black flex justify-center items-center cursor-pointer"
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
                        d="M5 12h14"
                      />
                    </svg>
                  </div>
                  <h1 className="font-poppins text-lg">{numberOfBooks}</h1>
                  <div
                    onClick={() => {
                      if (numberOfBooks < 150) {
                        setNumberOfBooks((prev) => prev + 1);
                      }
                    }}
                    className="w-5 h-5 rounded-full border-2 border-black flex justify-center items-center cursor-pointer"
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
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <div
                  onClick={() => {
                    if (!canBuyBook) {
                      return alert(
                        "Cannot Buy This Book Since Timeline is over"
                      );
                    }
                    setUserTypePopup(true);
                  }}
                  className="w-full rounded-full bg-primaryDark p-2 font-poppins text-sm md:text-xl font-semibold flex justify-center items-center gap-1 cursor-pointer hover:bg-yellow-500"
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
                  Buy Now
                </div>
                <div className="w-full rounded-full bg-tertiary text-white p-2 font-poppins text-sm md:text-xl font-semibold flex justify-center items-center gap-1 cursor-pointer">
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  {timeRemaining}
                </div>
              </div>
              <p className="font-poppins text-xs">
                **An additional charge Of Rs.{bookDetail.cod} will be added for
                delivery
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function UserTypePopup({ setUserTypePopup, bookID }) {
  return (
    <div className="w-full h-full z-50 flex justify-center items-center fixed bg-[rgb(200,200,200,0.5)] top-0 left-0 backdrop-blur-2xl">
      <div className="w-[80%] md:w-1/2 p-2 bg-white rounded-md flex flex-col gap-4 md:gap-2">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl font-poppins">Booking Type</h1>
          <svg
            onClick={() => setUserTypePopup(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <p className="font-roboto text-sm mt-2">
          Have you ever bought a book with us ? We will try to find an account
          directly linked with you, so that we can get your details more
          efficiently
        </p>
        <div className="flex justify-end w-full gap-2">
          <Link
            to={`/buyer/existing/${bookID}`}
            className="bg-primaryDark rounded-full font-roboto text-sm p-2 px-4 text-black hover:bg-yellow-500"
          >
            Existing Buyer
          </Link>
          <Link
            to={"/buyer/new"}
            className="bg-tertiary rounded-full font-roboto text-sm p-2 px-4 text-white hover:bg-secondary"
          >
            New Buyer
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
