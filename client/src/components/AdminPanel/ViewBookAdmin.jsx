import React, { useEffect, useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ViewBookAdmin() {
  const [availableBooks, setAvailableBooks] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewStatsBookID, setViewStatsBookID] = useState(-1);
  const [bookDetail, setBookDetail] = useState({
    detailType: "",
    bookID: "",
    bookName: "",
  });
  const [query, setQuery] = useState("");
  async function ViewAvailableBooks() {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/admin/view-books`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.success === true) {
        setAvailableBooks(data.books);
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return alert("Error ! Something went wrong while fetching the books");
    }
  }

  async function getBookResults() {
    try {
      setLoading(true);
      const res = await fetch(
        `${API_BASE_URL}/v1/user/search?query=${encodeURIComponent(query)}`,
        {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        }
      );
      const data = await res.json();
      if (data.success === true) {
        setAvailableBooks(data.books);
      } else {
        alert(data.message);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      alert("Something Went Wrong While Getting Query Results");
    }
  }
  useEffect(() => {
    const queryTimeout = setTimeout(() => {
      if (query.length >= 3) {
        getBookResults();
      } else {
        ViewAvailableBooks();
      }
    }, 1000);
    return () => clearTimeout(queryTimeout);
  }, [query]);

  useEffect(() => {
    ViewAvailableBooks();
  }, []);

  return (
    <div className="w-[85%] h-[100vh] font-poppins flex flex-col overflow-y-scroll p-2 relative">
      {viewStatsBookID != -1 && (
        <ViewStats
          bookDetail={availableBooks[viewStatsBookID]}
          setViewStatsBookID={setViewStatsBookID}
        />
      )}
      {/* HEADERS  */}
      <div className="w-full flex justify-between">
        <h1 className="font-semibold font-poppins text-xl border-b-[2px] border-primaryDark">
          All Available Books
        </h1>
        <div className="w-1/4 bg-zinc-200 rounded-full p-1 px-2 flex">
          <input
            placeholder="Search Author, Title"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-zinc-200 w-full font-medium font-poppins focus:outline-none"
          />
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {/* AVAILABLE BOOKS  */}
      {loading ? (
        <div className="w-full h-full flex justify-center items-center">
          <img className="w-[100px] h-[100px]" src={"/LOGO.png"} />
        </div>
      ) : availableBooks === null ? (
        <div className="flex w-full h-full justify-center items-center">
          <h1 className="text-xl font-poppins">Loading...</h1>
        </div>
      ) : availableBooks.length === 0 ? (
        <div className="flex w-full h-full justify-center items-center">
          <h1>**No Books Available At The Moment </h1>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 p-2">
          {availableBooks.map((item, index) => {
            return (
              <div
                key={index}
                className="w-1/5 h-[300px] bg-zinc-200 cursor-pointer group overflow-hidden relative"
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.photos[0]}
                />
                <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white group-hover:translate-y-0 bg-[rgb(250,250,250,0.2)] translate-y-[1000px] transition-all duration-200 backdrop-blur-xl rounded-t-xl flex flex-col">
                  <div className="w-full">
                    <h1
                      onClick={() =>
                        setBookDetail({
                          detailType: "delete",
                          bookID: item.id,
                          bookName: item.title,
                        })
                      }
                      className="font-poppins hover:text-zinc-700 p-1 border-b-[1px] border-b-black"
                    >
                      Remove Book
                    </h1>
                    <h1
                      onClick={() => setViewStatsBookID(index)}
                      className="font-poppins hover:text-zinc-700 p-1 border-b-[1px] border-b-black"
                    >
                      View Stats
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {bookDetail.detailType === "delete" && (
        <RemoveBookPopup
          bookDetail={bookDetail}
          setBookDetail={setBookDetail}
        />
      )}
    </div>
  );
}

function RemoveBookPopup({ bookDetail, setBookDetail }) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  async function handleDeleteBook() {
    try {
      setDeleteLoading(true);
      const res = await fetch(`${API_BASE_URL}/v1/admin/delete-book`, {
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
        body: JSON.stringify({ id: bookDetail.bookID }),
      });
      const data = await res.json();
      if (data.success === true) {
        window.location.reload();
      } else {
        alert(data.message);
      }
      setDeleteLoading(false);
    } catch (error) {
      setDeleteLoading(false);
      return alert("Something Went Wrong");
    }
  }
  return (
    <div className="fixed w-full top-0 h-full left-0 backdrop-blur-xl bg-[rgb(10,10,10,0.5)] flex justify-center items-center ">
      <div className="w-1/2 p-2 bg-zinc-300 rounded-xl">
        <div className="w-full border-b-[1px] border-zinc-500 flex justify-between items-center">
          <h1 className="font-semibold font-poppins">Remove Book</h1>
          <svg
            onClick={() => setBookDetail({ ...bookDetail, detailType: "" })}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-red-600 hover:stroke-red-700 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <p className="font-normal font-roboto p-2">
          {`Do you really want to remove the book - ${bookDetail.bookName}, this will remove all the data and orders related to the book and buyers won't be able to buy the book again.`}
        </p>
        <div className="w-full flex justify-end items-center">
          <button
            onClick={handleDeleteBook}
            className="px-4 p-1 bg-red-600 rounded-full font-normal font-poppins hover:bg-red-800 text-zinc-300"
          >
            {deleteLoading ? "Loading..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ViewStats({ viewStatsBookID, bookDetail, setViewStatsBookID }) {
  const dateCreatedAt = new Date(Number(bookDetail.createdAt)).toLocaleString();
  return (
    <div className="fixed w-full h-full bg-[rgb(200,200,200,0.5)] backdrop-blur-lg top-0 left-0 z-10 flex justify-center items-center">
      <div className="w-1/2 p-4 rounded-md bg-white">
        <div className="w-full justify-between flex ">
          <h1 className="font-semibold font-poppins">{bookDetail.title}</h1>
          <div
            onClick={() => setViewStatsBookID(-1)}
            className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-800 cursor-pointer"
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
        <div className="flex flex-col justify-start items-start mt-4 gap-2">
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Cost
            <span className="font-poppins font-normal text-black">
              ₹ {bookDetail.cost}/.
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Delivery Cost
            <span className="font-poppins font-normal text-black">
              ₹ {bookDetail.cod}/.
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Author
            <span className="font-poppins font-normal text-black">
              {bookDetail.author}
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Category
            <span className="font-poppins font-normal text-black">
              {bookDetail.category}
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Created At
            <span className="font-poppins font-normal text-black">
              {dateCreatedAt}
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Number Of Orders
            <span className="font-poppins font-normal text-black">
              {bookDetail.order.length}
            </span>
          </h1>
          <h1 className="flex justify-start gap-2 font-semibold font-poppins text-secondary border-b-[1px] border-zinc-200 w-full">
            Number Of Books Sold
            <span className="font-poppins font-normal text-black">
              {bookDetail.bookSold}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ViewBookAdmin;
