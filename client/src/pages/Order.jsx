import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import PreLoader from "../components/PreLoader/PreLoader";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Order() {
  return (
    <div className="w-full flex flex-col">
      <PreLoader />
      <Navbar />
      <Hero />
      <Store />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse md:flex-row p-2 gap-2 relative">
      <div className="w-full md:w-1/2 h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start p-10">
          <h1 className="font-poppins font-bold text-7xl tracking-wider">
            What Books
          </h1>
          <h1 className="font-poppins font-bold text-7xl tracking-wider flex justify-start items-center gap-2">
            Are You
            <div className="w-[140px] h-[50px] bg-secondary rounded-full text-5xl hidden md:flex justify-center items-start">
              <img
                src={"/order/bookstack.png"}
                className="object-contain w-[50px]"
              />
            </div>
          </h1>
          <h1 className="font-poppins font-bold text-7xl tracking-wider flex justify-start items-center gap-2">
            Looking For
          </h1>
          <p className="w-[80%] mt-2 font-poppins text-stone-500">
            Not sure what to read next ? Explore our varied catalog of books and
            order it within minutes
          </p>
          <div className="flex justify-center items-center gap-2">
            <a
              href="#store"
              className="p-2 px-4 border-[1px] border-zinc-700 mt-2 rounded-full font-roboto text-xl hover:bg-zinc-700 hover:text-white cursor-pointer transition-all duration-500"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0 md:w-1/2 h-full rounded-lg bg-primaryDark flex justify-center items-center">
        <Link to={"/"}>
          <img
            src={"/order/orderHero.png"}
            className="md:absolute w-[200px] h-[200px] md:w-[600px] md:h-[600px] md:top-[50%] md:-translate-y-[50%] md:left-[65%] md:-translate-x-[35%] cursor-pointer hover:scale-95 transition-all duration-200"
          />
        </Link>
      </div>
    </div>
  );
}

function Store() {
  const [books, setBooks] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  async function getBooks() {
    try {
      const res = await fetch(`${API_BASE_URL}/v1/admin/view-books`, {
        headers: { "Content-Type": "application/json" },
        method: "GET",
      });
      const data = await res.json();
      if (data.success === true) {
        setBooks(data.books);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(
        "Something Went Wrong While Fetching Books, Kindly come here again"
      );
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
        setBooks(data.books);
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
      if (query.length > 3) {
        getBookResults();
      } else {
        getBooks();
      }
    }, 1000);
    return () => clearTimeout(queryTimeout);
  }, [query]);
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div id="store" className="w-full p-2">
      <div className="w-full min-h-[100vh] rounded-xl flex flex-col justify-start items-center p-2 gap-8">
        <h1 className="font-semibold text-5xl font-poppins">Our Books</h1>
        <div className="w-full h-full flex flex-col justify-start items-start">
          <div className="w-full p-2 flex justify-end items-center">
            <div className="w-[60%] md:w-[30%] bg-zinc-200 p-2 rounded-full flex justify-start items-center">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search Book, Author..."
                className="w-full bg-zinc-200 focus:outline-none font-roboto"
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
        </div>
        {/* BOOKS  */}
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <img className="w-[100px] h-[100px]" src={"/LOGO.png"} />
          </div>
        ) : books === null ? (
          <div className="flex w-full h-full justify-center items-center">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="w-full h-full flex justify-start items-center flex-wrap gap-2">
            {books.map((book) => {
              const createdDate = new Date(Number(book.createdAt));
              const expirationDate = new Date(
                createdDate.getTime() + 30 * 24 * 60 * 60 * 1000
              );
              const now = new Date();
              const timeDiff = expirationDate - now;

              let timeline;
              if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                  (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                  (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
                );
                if (days > 0) {
                  timeline = `${days} days remaining`;
                } else if (hours > 0) {
                  timeline = `${hours} hours remaining`;
                } else {
                  timeline = `${minutes} minutes remaining`;
                }
              } else {
                timeline = "Expired";
              }
              return (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  className="w-[100%] h-[600px] md:w-[19%] md:h-[490px] bg-zinc-100 overflow-hidden cursor-pointer group hover:shadow-2xl transition-all duration-500 relative rounded-md"
                >
                  <img
                    className="w-full h-[420px] md:h-[340px] object-cover"
                    src={book.photos[0]}
                  />
                  <div className="p-2 flex flex-col justify-start items-start">
                    <h1 className="font-normal font-poppins text-lg whitespace-nowrap text-ellipsis overflow-hidden w-52 group-hover:text-green-700 transition-all duration-300">
                      {book.title}
                    </h1>
                    <h2 className="font-medium font-poppins text-zinc-400 text-xs whitespace-nowrap w-52">
                      {book.author}
                    </h2>
                    <h2 className="font-medium font-poppins text-xs text-zinc-400 whitespace-nowrap w-52">
                      Paperback | {book.category}
                    </h2>
                    <h2 className="font-poppins text-lg whitespace-nowrap w-52 font-semibold">
                      ₹ {book.cost}
                    </h2>
                    <div className="absolute right-0 bottom-0 bg-primaryDark w-[100%] h-[50px] rounded-t-md flex flex-col justify-start items-start p-2">
                      <h2 className="font-medium font-poppins text-sm text-black">
                        {book.bookSold > 1
                          ? `${book.bookSold} Books`
                          : `${book.bookSold} Book`}{" "}
                        Sold
                      </h2>
                      <h2 className="font-medium font-poppins text-sm text-black">
                        {timeline}
                      </h2>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
