import styles from "./LearnBasics.module.css";
function LearnBasics() {
  return (
    <div
      className={
        "w-full p-2 flex flex-col md:flex-row justify-start items-center"
      }
    >
      <div className="w-full md:w-2/3  p-4 md:p-8 bg-[#1E71DD] rounded-xl">
        <div className={" flex justify-center items-center  p-2 md:p-4"}>
          <h1 className="text-zinc-100 text-4xl text-center md:text-5xl">
            Let's start with the Basics
          </h1>
        </div>
        <ul className={"text-white text-lg flex flex-col gap-2 text-start"}>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf;&nbsp;What is the standard book size ?{" "}
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              Standard book size is 5.5x8.5 inches, A5 size is 5x8 inches (A5 is
              exactly the half size of A4. A4 size is the default size of MS
              word page). Standard book size is just 0.5 inches large in length
              and breadth.{" "}
            </p>
          </li>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf; &nbsp;What is the estimated number of pages in a standard
              book ?{" "}
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              Estimated number of words in a Standard book (5.5x8.5 inches):
              220/page (Fictions, Non Fictions and General Read){" "}
            </p>
          </li>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf; &nbsp;Where the illustrations will be used ?
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              Illustrations will be used in Poetry book to make it more
              appealing and enticing for readers.
            </p>
          </li>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf; &nbsp;What is the Market Analogy ?
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              Readers Market for Fictions, Non Fictions and General Read: 73% of
              the Market. Specified Age Group: 15 - 44 Age Group. Readers Market
              for Poetry and Coffee Table books: 27% . Specifed Age Group 35-65
              Age Group.
            </p>
          </li>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf; &nbsp;What is the estimated time to publish a book ?
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              Estimated time to Publish a book: 20 Days from the date of
              submisson of the draft after the agreement is signed. (Solely
              depends on how fast the author approves the cover design, editing
              and formatting.)
            </p>
          </li>
          <li className="border-b-[1px] border-blue-700">
            <h2 className="font-poppins font-normal">
              &#x25cf; &nbsp;What are the payment terms ?
            </h2>
            <p className="text-zinc-300 text-sm font-poppins font-light">
              -- We charge 33% of the package amount at the time of signing the
              agreement,
              <br />
              -- 33% of the package amount when the book is formatted and
              approved by the author,
              <br />
              -- 33% of the package amount when the paperback version of the
              book is live on Amazon India before initiating marketing.
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full md:w-1/3">
        <img className="w-full h-full object-contain" src="/packageBoy.png" />
      </div>
    </div>
  );
}

export default LearnBasics;
