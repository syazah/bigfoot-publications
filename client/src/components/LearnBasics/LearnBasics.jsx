import styles from "./LearnBasics.module.css";
function LearnBasics() {
  return (
    <div className={styles.basic}>
      <div className={styles.basicText}>
        <h3>BEFORE MOVING AHEAD</h3>
        <h1>Learn The Basics</h1>
      </div>
      <ul>
        <li>
          <h2>&#x25cf;&nbsp;What is the standard book size ? </h2>
          <p>
            Standard book size is 5.5x8.5 inches, A5 size is 5x8 inches (A5 is
            exactly the half size of A4. A4 size is the default size of MS word
            page). Standard book size is just 0.5 inches large in length and
            breadth.{" "}
          </p>
        </li>
        <li>
          <h2>
            &#x25cf; &nbsp;What is the estimated number of pages in a standard
            book ?{" "}
          </h2>
          <p>
            Estimated number of words in a Standard book (5.5x8.5 inches):
            220/page (Fictions, Non Fictions and General Read){" "}
          </p>
        </li>
        <li>
          <h2>&#x25cf; &nbsp;Where the illustrations will be used ?</h2>
          <p>
            Illustrations will be used in Poetry book to make it more appealing
            and enticing for readers.
          </p>
        </li>
        <li>
          <h2>&#x25cf; &nbsp;What is the Market Analogy ?</h2>
          <p>
            Readers Market for Fictions, Non Fictions and General Read: 73% of
            the Market. Specified Age Group: 15 - 44 Age Group. Readers Market
            for Poetry and Coffee Table books: 27% . Specifed Age Group 35-65
            Age Group.
          </p>
        </li>
        <li>
          <h2>&#x25cf; &nbsp;What is the estimated time to publish a book ?</h2>
          <p>
            Estimated time to Publish a book: 20 Days from the date of submisson
            of the draft after the agreement is signed. (Solely depends on how
            fast the author approves the cover design, editing and formatting.)
          </p>
        </li>
        <li>
          <h2>&#x25cf; &nbsp;What are the payment terms ?</h2>
          <p>
            -- We charge 33% of the package amount at the time of signing the
            agreement,
            <br />
            -- 33% of the package amount when the book is formatted and approved
            by the author,
            <br />
            -- 33% of the package amount when the paperback version of the book
            is live on Amazon India before initiating marketing.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default LearnBasics;
