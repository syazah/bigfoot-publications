import React, { useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function AddBook() {
  const [bookPhotoArray, setBookPhotoArray] = useState([]);
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    photos: [],
    cost: "",
    category: "",
    author: "",
    cod: 50,
  });
  const [bookAddLoading, setBookAddLoading] = useState(false);
  async function getBlobFromUrl(url) {
    const response = await fetch(url);
    return await response.blob();
  }

  async function AddBookPhotos() {
    try {
      const uploadPromises = bookPhotoArray.map(async (url, index) => {
        const blob = await getBlobFromUrl(url); // Fetch the Blob from the Blob URL

        const file = new File([blob], `image-${index}.png`, {
          type: blob.type || "image/png",
        });

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "jomran93"); // Use your upload preset if needed

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/azhmad/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          throw new Error(`Upload failed: ${await res.text()}`);
        }

        return await res.json();
      });

      const results = await Promise.all(uploadPromises);
      const cloudPhotoArray = [];
      results.map((bookres) => {
        cloudPhotoArray.push(bookres.url);
      });
      return cloudPhotoArray;
    } catch (error) {
      alert("Something Went Wrong While Uploading Images");
    }
  }

  async function AddBookToDatabase() {
    try {
      setBookAddLoading(true);
      if (
        !bookData.title ||
        !bookData.description ||
        !bookData.cost ||
        !bookData.category ||
        !bookData.author
      ) {
        setBookAddLoading(false);
        return alert("Fill All The Fields");
      }
      if (isNaN(bookData.cost)) {
        return alert("Cost is not a number");
      }
      const booksAdded = await AddBookPhotos();
      if (!booksAdded) {
        return alert("Something Went Wrong, Photos Were Not Added");
      }
      const res = await fetch(`${API_BASE_URL}/v1/admin/add-books`, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({ ...bookData, photos: booksAdded }),
      });
      const data = await res.json();
      if (data.success === true) {
        setBookAddLoading(false);
        setBookData({
          title: "",
          description: "",
          photos: [],
          cost: "",
          category: "",
          author: "",
        });
        return alert(data.message);
      } else {
        setBookAddLoading(false);
        setBookData({
          title: "",
          description: "",
          photos: [],
          cost: "",
          category: "",
          author: "",
        });
        return alert(data.message);
      }
    } catch (error) {
      setBookData({
        title: "",
        description: "",
        photos: [],
        cost: "",
        category: "",
        author: "",
      });
      setBookAddLoading(false);
      return alert("Something Went Wrong");
    }
  }
  return (
    <div className="w-[85%] h-[100vh] font-poppins flex flex-col overflow-y-scroll">
      <div className="flex flex-wrap gap-2">
        {bookPhotoArray.map((bookPhoto, idx) => {
          return (
            <div
              key={idx}
              className="w-[150px] h-[250px] p-2 border-[1px] border-zinc-200 relative"
            >
              <div
                onClick={() => {
                  const newPhotoArray = bookPhotoArray.filter(
                    (item, index) => index != idx
                  );
                  setBookPhotoArray(newPhotoArray);
                }}
                className="absolute w-5 h-5 bg-red-500 top-0 right-0 flex justify-center items-center cursor-pointer hover:bg-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <img className="w-full h-full object-contain" src={bookPhoto} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-start p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[20%]">
          {bookPhotoArray.length === 0 ? "Add Book Photos" : "Add More Photos"}
        </h1>
        <div className="w-10 h-10 rounded-full relative bg-zinc-200 flex justify-center items-center cursor-pointer group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 absolute cursor-pointer group-hover:stroke-zinc-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <input
            onChange={(e) => {
              if (bookPhotoArray.length >= 5) {
                return alert("You can only add upto 5 photos");
              }
              const fileURL = URL.createObjectURL(e.target.files[0]);
              setBookPhotoArray([...bookPhotoArray, fileURL]);
            }}
            type="file"
            className="opacity-0 cursor-pointer w-full"
          />
        </div>
      </div>
      <div className="flex justify-start items-center p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Enter Book Title</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <input
            value={bookData.title}
            onChange={(e) =>
              setBookData({ ...bookData, title: e.target.value })
            }
            placeholder="Book Title"
            className="w-full bg-zinc-200 font-semibold font-poppins focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-center p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Enter Book Author</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <input
            value={bookData.author}
            onChange={(e) =>
              setBookData({ ...bookData, author: e.target.value })
            }
            placeholder="Book Author"
            className="w-full bg-zinc-200 font-semibold font-poppins focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-start p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Enter Book Description</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <textarea
            value={bookData.description}
            onChange={(e) =>
              setBookData({ ...bookData, description: e.target.value })
            }
            rows={10}
            placeholder="Book Description"
            className="w-full bg-zinc-200 font-semibold font-poppins focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-start p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Enter Book Cost</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <input
            value={bookData.cost}
            onChange={(e) =>
              setBookData({ ...bookData, cost: Number(e.target.value) })
            }
            type="number"
            placeholder="Book Cost In Rupees"
            className="w-full bg-zinc-200 font-semibold font-poppins focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-start p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Enter Delivery Cost</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <input
            value={bookData.cod}
            onChange={(e) =>
              setBookData({ ...bookData, cod: Number(e.target.value) })
            }
            type="number"
            placeholder="Delivery Cost In Rupees"
            className="w-full bg-zinc-200 font-semibold font-poppins focus:outline-none"
          />
        </div>
      </div>
      <div className="flex justify-start items-start p-2 gap-2 border-b-[1px] border-zinc-200">
        <h1 className="font-roboto text-lg w-[25%]">Select Genre</h1>
        <div className="w-full p-2 bg-zinc-200 rounded-md">
          <select
            onChange={(e) =>
              setBookData({ ...bookData, category: e.target.value })
            }
            className="w-full bg-zinc-200 focus:outline-none font-semibold font-poppins"
          >
            <option value={""}>-----------------------------------</option>
            <optgroup label="Fiction" />
            {[
              "Fantasy",
              "Science Fiction",
              "Mystery",
              "Thriller",
              "Horror",
              "Romance",
              "Historical Fiction",
              "Adventure",
              "Dystopian",
              "Western",
              "Magical Realism",
              "Crime",
              "Urban Fantasy",
              "Paranormal",
              "Comedy",
              "Literary Fiction",
              "Steampunk",
              "Cyberpunk",
              "Epic",
              "Fairy Tale Retellings",
            ].map((fiction, index) => {
              return (
                <option
                  key={index}
                  value={`Fiction-${fiction}`}
                  className="text-sm font-medium font-roboto"
                >
                  {fiction}
                </option>
              );
            })}
            <optgroup label="Non Fiction" />
            {[
              "Biography",
              "Autobiography",
              "Memoir",
              "History",
              "Self-help",
              "Travel writing",
              "Essay",
              "Science",
              "True crime",
              "Journalism",
              "Philosophy",
              "Politics",
              "Education",
              "Health and Fitness",
              "Business and Economics",
              "Religious and Spiritual",
              "Cultural Studies",
              "Psychology",
              "Art and Music",
              "Nature and Environment",
            ].map((nonfiction, index) => {
              return (
                <option
                  key={index}
                  value={`NonFiction-${nonfiction}`}
                  className="text-sm font-medium font-roboto"
                >
                  {nonfiction}
                </option>
              );
            })}
            <optgroup label="Poetry" />
            {[
              "Narrative Poetry",
              "Lyric Poetry",
              "Epic Poetry",
              "Haiku",
              "Free Verse",
              "Elegy",
              "Sonnets",
              "Odes",
              "Villanelle",
              "Limerick",
              "Blank Verse",
              "Sestina",
              "Pastoral",
              "Epigram",
              "Ballad",
            ].map((poetry, index) => {
              return (
                <option
                  key={index}
                  value={`Poetry-${poetry}`}
                  className="text-sm font-medium font-roboto"
                >
                  {poetry}
                </option>
              );
            })}
            <optgroup label="Others" />
            {["Coffee Table Book", "General", "Acadmeics"].map(
              (others, index) => {
                return (
                  <option
                    key={index}
                    value={`Others-${others}`}
                    className="text-sm font-medium font-roboto"
                  >
                    {others}
                  </option>
                );
              }
            )}
          </select>
        </div>
      </div>
      <div className="w-full flex justify-end p-2">
        <button
          onClick={AddBookToDatabase}
          className="font-roboto text-xl bg-tertiary p-2 px-4 text-white rounded-full hover:bg-secondary transition-all duration-200 "
        >
          {bookAddLoading ? "Loading..." : "Add Book"}
        </button>
      </div>
    </div>
  );
}

export default AddBook;
