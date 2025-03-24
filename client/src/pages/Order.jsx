import { useEffect, useState } from "react";
import NavbarOrder from "../components/Navbar/NavbarOrder";
import PreLoader from "../components/PreLoader/PreLoader";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Whatsapp from "../components/whatsappComponent/Whatsapp";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function Order() {
  return (
    <div className="w-full flex flex-col relative">
      <PreLoader />
      <NavbarOrder />
      <Whatsapp />
      <Hero />
      <Store />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse md:flex-row p-2 gap-2 relative">
      <div className="w-full h-full bg-blue-100 rounded-lg flex flex-col justify-center items-center relative overflow-hidden">
        <img
          className="absolute bottom-0 right-0 w-12 md:w-64 md:h-64"
          src="/order/orderhero.png"
        />
        <img
          className="absolute -scale-x-100 bottom-0 left-0 w-10 md:w-48 md:h-64"
          src="/order/orderhero.png"
        />

        <div className="flex flex-col justify-end mt-40 items-center p-4 md:p-10">
          <motion.h1
            initial={{ opcity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, dalay: 5 }}
            className="font-poppins font-bold text-2xl md:text-7xl text-center"
          >
            Pre-Order Your Book
          </motion.h1>
          <p className="w-[80%] mt-2 font-poppins text-sm md:text-base text-stone-500 text-center">
            Not sure what to read next ? Explore our varied catalog of books and
            order it within minutes
          </p>
          {/* <div className="flex justify-center items-center gap-2">
            <a
              href="#store"
              className="p-2 px-4 border-[1px] border-zinc-700 mt-2 rounded-full font-roboto text-xl hover:bg-zinc-700 hover:text-white cursor-pointer transition-all duration-500"
            >
              Explore Now
            </a>
          </div> */}
          <img className="w-60 md:w-80 md:h-80" src="/order/orderPic.png" />
        </div>
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
    <div id="store" className="w-full px-2 py-8 pb-12">
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
                timeline = "Available On Amazon";
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

function PrivacyPolicy() {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  return (
    <div
      onClick={() => setOpenPrivacy(!openPrivacy)}
      className="w-full p-4 bg-tertiary flex flex-col justify-start items-center"
    >
      <div className="w-full flex justify-between items-center cursor-pointer">
        <h1 className="font-semibold font-poppins text-white text-xl md:text-3xl">
          Terms & Conditions
        </h1>
        {openPrivacy ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 stroke-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>

      {openPrivacy && (
        <div className="flex flex-col justify-start items-start w-full gap-4">
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800 mt-4">
            <h1 className="font-normal font-poppins text-white">
              Step 1: Sign the Agreement and Deposit Security Amount
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Begin by signing the event agreement, confirming your
              participation.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Deposit a security amount equivalent to the cost of 50
              copies to initiate the pre-order campaign.
            </li>
          </ul>
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800">
            <h1 className="font-normal font-poppins text-white">
              Step 2: Create a Cover Design & Pre-order Link
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Once the agreement is in place, we’ll create a visually
              appealing cover design for your book.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; After the cover is ready, a pre-order link will be
              generated and shared with you for distribution.
            </li>
          </ul>
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800">
            <h1 className="font-normal font-poppins text-white">
              Step 3: Set Up Pre-orders on Our Website
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Pre-orders will be processed through our official website.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; You will have 30 days to secure at least 150 pre-orders. A
              countdown timer and a "pre-orders received" counter will be
              visible on your book’s page to ensure transparency.
            </li>
          </ul>
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800">
            <h1 className="font-normal font-poppins text-white">
              Step 4: Share and Promote the Pre-order Link
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Promote the pre-order link widely by sharing it with
              friends, family, colleagues, neighbors, and on social media
              platforms.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; The more you share, the quicker you’ll reach the pre-order
              target.
            </li>
          </ul>
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800">
            <h1 className="font-normal font-poppins text-white">
              Step 5: Book Production
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Once the 30-day period concludes or the 150 pre-order goal
              is met (whichever comes first), we will begin production.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; Books will be printed and shipped to customers as soon as
              the target is achieved or the 30 days are up.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; If the pre-order target of 150 copies is not achieved
              within the given timeframe, the author will be required to buy
              back the remaining books at the MRP as per the terms of the
              agreement.
            </li>
          </ul>
          <ul className="w-full flex flex-col border-b-[1px] border-blue-800">
            <h1 className="font-normal font-poppins text-white">
              Step 6: Distribution to Online & Offline Bookstores{" "}
            </h1>
            <li className="text-zinc-200 font-poppins ">
              &#9679; After the 30-day campaign or upon reaching the pre-order
              target, we will distribute your book to popular online stores
              (such as Amazon and Flipkart) and offline bookstores.
            </li>
            <li className="text-zinc-200 font-poppins ">
              &#9679; After the 30-day campaign or upon reaching the pre-order
              target, we will distribute your book to popular online stores
              (such as Amazon and Flipkart) and offline bookstores.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Order;
