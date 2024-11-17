import { useState } from "react";
import styles from "./OurBooks.module.css";
import "./OurBooks.css";
import { motion, useInView, useAnimation, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";

const bookData = [
  [
    "OURBOOKS/BESTSELLER/BOOKSBEST01.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST02.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST03.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST04.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST05.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST06.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST07.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST08.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST09.png",
    "OURBOOKS/BESTSELLER/BOOKSBEST10.png",
  ],
  [
    "OURBOOKS/BOOKLATEST/BOOKSLATEST01.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST02.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST03.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST04.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST05.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST06.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST07.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST08.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST09.png",
    "OURBOOKS/BOOKLATEST/BOOKSLATEST10.png",
  ],
  [
    "OURBOOKS/ROMANCE/BOOKSROMANCE01.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE02.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE03.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE04.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE05.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE06.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE07.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE08.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE09.png",
    "OURBOOKS/ROMANCE/BOOKSROMANCE10.png",
  ],
  [
    "OURBOOKS/SELFHELP/BOOKSHELP01.png",
    "OURBOOKS/SELFHELP/BOOKSHELP02.png",
    "OURBOOKS/SELFHELP/BOOKSHELP03.png",
    "OURBOOKS/SELFHELP/BOOKSHELP04.png",
    "OURBOOKS/SELFHELP/BOOKSHELP05.png",
    "OURBOOKS/SELFHELP/BOOKSHELP06.png",
    "OURBOOKS/SELFHELP/BOOKSHELP07.png",
    "OURBOOKS/SELFHELP/BOOKSHELP08.png",
    "OURBOOKS/SELFHELP/BOOKSHELP09.png",
    "OURBOOKS/SELFHELP/BOOKSHELP10.png",
  ],
  [
    "OURBOOKS/POETRY/BOOKSPOETRY01.png",
    "OURBOOKS/POETRY/BOOKSPOETRY02.png",
    "OURBOOKS/POETRY/BOOKSPOETRY03.png",
    "OURBOOKS/POETRY/BOOKSPOETRY04.png",
    "OURBOOKS/POETRY/BOOKSPOETRY05.png",
    "OURBOOKS/POETRY/BOOKSPOETRY06.png",
    "OURBOOKS/POETRY/BOOKSPOETRY07.png",
    "OURBOOKS/POETRY/BOOKSPOETRY08.png",
    "OURBOOKS/POETRY/BOOKSPOETRY09.png",
    "OURBOOKS/POETRY/BOOKSPOETRY10.png",
  ],
  [
    "OURBOOKS/ACADEMICS/BOOKSACAD01.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD02.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD03.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD04.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD05.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD06.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD07.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD08.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD09.png",
    "OURBOOKS/ACADEMICS/BOOKSACAD10.png",
  ],
  [
    "OURBOOKS/REGIONAL/BOOKSREGIONAL01.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL02.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL03.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL04.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL05.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL06.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL07.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL08.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL09.png",
    "OURBOOKS/REGIONAL/BOOKSREGIONAL10.png",
  ],
];
const bookLink = [
  [
    "https://amzn.eu/d/bCgTHR1",
    "https://amzn.eu/d/i8Hv8Jr",
    "https://amzn.eu/d/i6wpbEb",
    "https://amzn.eu/d/b9wDTQk",
    "https://amzn.eu/d/fmxm6rD",
    "https://amzn.eu/d/dEhok5r",
    "https://amzn.eu/d/gvnpM6T",
    "https://amzn.eu/d/fncMQwd",
    "https://www.amazon.in/Abyss-Summit-Reboot-Arpita-Pathak/dp/8119201485/ref=sr_1_1?crid=EWBR44J97WDB&keywords=abyss+to+summit&qid=1708160127&s=books&sprefix=abyss+to+summ%2Cstripbooks%2C250&sr=1-1",
    "https://amzn.eu/d/cTs7GjK",
  ],
  [
    "https://amzn.eu/d/gnt6YUo",
    "https://amzn.eu/d/c5zc4Z8",
    "https://amzn.eu/d/cUZN91t",
    "https://amzn.eu/d/irt9Tdr",
    "https://amzn.eu/d/9vGkOws",
    "https://amzn.eu/d/fV4SHgs",
    "https://amzn.eu/d/bZiiJV0",
    "https://amzn.eu/d/afq2wjq",
    "https://amzn.eu/d/6BhH7xf",
    "https://amzn.eu/d/0iGsHat",
  ],
  [
    "https://amzn.eu/d/gnt6YUo",
    "https://amzn.eu/d/5D3Xaht",
    "https://amzn.eu/d/1mx1Euc",
    "https://amzn.eu/d/byCh9Jq",
    "https://amzn.eu/d/hGEKXo1",
    "https://amzn.eu/d/5tDPMRa",
    "https://amzn.eu/d/9vGkOws",
    "https://amzn.eu/d/3Nh7sBj",
    "https://amzn.eu/d/97hRwCi",
    "https://amzn.eu/d/a6rZigJ",
  ],
  [
    "https://amzn.eu/d/c7pscSJ",
    "https://amzn.eu/d/9wxImmq",
    "https://amzn.eu/d/01W2XKK",
    "https://amzn.eu/d/hy5t0Ux",
    "https://amzn.eu/d/9ledDQR",
    "https://www.amazon.in/Mind-Universe-Three-Thousand-Ways/dp/8196146272/ref=sr_1_7?crid=2FMOR1T81EXVU&keywords=mind+universe&qid=1708160735&s=books&sprefix=mind+univers%2Cstripbooks%2C284&sr=1-7",
    "https://amzn.eu/d/baL0n97",
    "https://amzn.eu/d/6a7WdGx",
    "https://amzn.eu/d/aiHTF5f",
    "https://amzn.eu/d/3tK2HuH",
  ],
  [
    "https://amzn.eu/d/4W0gLWd",
    "https://amzn.eu/d/hZJ6CVH",
    "https://amzn.eu/d/iJI2oE3",
    "https://amzn.eu/d/7Ssk8O2",
    "https://amzn.eu/d/0YTTy1B",
    "https://amzn.eu/d/0vT4S9Y",
    "https://amzn.eu/d/99NfzXW",
    "https://amzn.eu/d/3OhDszz",
    "https://amzn.eu/d/eXa2f6b",
    "https://amzn.eu/d/gYQCM3A",
  ],
  [
    "https://amzn.eu/d/fiVQF1X",
    "https://amzn.eu/d/9doRyUn",
    "https://amzn.eu/d/5LPFUxq",
    "https://www.amazon.in/BOOST-YOUR-SALES-MSME-PROFESSIONALS-ebook/dp/B0C5MCR8M9/ref=sr_1_3?crid=VC0U8DE0HAU9&keywords=boost+your+sales+for+msme+professionals&qid=1708161382&s=books&sprefix=boost+your+sales+for+msme+professional%2Cstripbooks%2C239&sr=1-3",
    "https://amzn.eu/d/dGqdmld",
    "https://www.amazon.in/Numerology-Answer-Book-Questions-Answers-ebook/dp/B0CFHBGS3P/ref=sr_1_1?crid=2989BRA68HNIX&keywords=the+numerology+book&qid=1708161443&s=books&sprefix=the+numerology+book%2Cstripbooks%2C390&sr=1-1",
    "https://amzn.eu/d/99hkDJW",
    "https://www.amazon.in/DREAMS-WINGS-AEROMODELLING-Siddharth-Sharma-ebook/dp/B0CPPVRWKK/ref=sr_1_1?crid=3NICE1D73NSSM&keywords=dreams+to+wings&qid=1708161487&s=books&sprefix=dreams+to+wing%2Cstripbooks%2C251&sr=1-1",
    "https://amzn.eu/d/f3iJRY3",
    "https://amzn.eu/d/1Xp6W0a",
  ],
  [
    "https://amzn.eu/d/2x7pa2m",
    "https://amzn.eu/d/iHQrE71",
    "https://amzn.eu/d/haLrRtq",
    "https://amzn.eu/d/dNeR897",
    "https://amzn.eu/d/j4HQgj5",
    "https://amzn.eu/d/dEhok5r",
    "https://amzn.eu/d/1sjxILG",
    "https://amzn.eu/d/4TmMsdZ",
    "https://amzn.eu/d/euOlCAv",
    "https://amzn.eu/d/1nkUREU",
  ],
];

function OurBooks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controlAnim = useAnimation();

  useEffect(() => {
    if (isInView) {
      controlAnim.start("visible");
    }
  }, [isInView]);

  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controlAnim}
      transition={{ duration: 1, delay: 0.25 }}
      ref={ref}
      className={styles.ourBooks}
    >
      <HeadingText />
      <BookTabs activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      <BookContent activeBtn={activeBtn} />
    </motion.div>
  );
}

function HeadingText() {
  return (
    <div className={styles.headingText}>
      <h3>WE FEEL PROUD TO PRESENT</h3>
      <h1>Our Books</h1>
    </div>
  );
}

function BookTabs({ activeBtn, setActiveBtn }) {
  function handleActiveBtn(id) {
    setActiveBtn(id);
    handleAnimate();
  }
  return (
    <div className={styles.bookTabs}>
      <ul>
        <li>
          <button
            onClick={() => handleActiveBtn(0)}
            style={
              activeBtn === 0
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Best Seller
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(1)}
            style={
              activeBtn === 1
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Latest
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(2)}
            style={
              activeBtn === 2
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Romance
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(3)}
            style={
              activeBtn === 3
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Self Help
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(4)}
            style={
              activeBtn === 4
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Poetry
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(5)}
            style={
              activeBtn === 5
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Academics
          </button>
        </li>
        <li>
          <button
            onClick={() => handleActiveBtn(6)}
            style={
              activeBtn === 6
                ? { backgroundColor: "black", color: "white" }
                : {}
            }
          >
            Regional
          </button>
        </li>
      </ul>
      <select
        value={activeBtn}
        onChange={(e) => handleActiveBtn(e.target.value)}
        className={styles.selectBook}
      >
        <option value={0}>Best Seller</option>
        <option value={1}>Latest</option>
        <option value={2}>Romance</option>
        <option value={3}>Self Help</option>
        <option value={4}>Poetry</option>
        <option value={5}>Academics</option>
        <option value={6}>Regional</option>
      </select>
    </div>
  );
}

function BookContent({ activeBtn }) {
  const [scope, animate] = useAnimate();
  async function handleAnimate() {
    animate("div", { opacity: [0, 0, 1] }, { duration: 1 });
  }
  useEffect(() => {
    handleAnimate();
  }, [activeBtn]);
  return (
    <div ref={scope} className={styles.bookContent}>
      <div id="bookRow" className={styles.bookContentRow}>
        {bookData[activeBtn].map(
          (srrc, i) =>
            i < 5 && (
              <a key={i} target="_blank" href={bookLink[activeBtn][i]}>
                <img className={styles.bookImg} src={srrc} key={i} />
              </a>
            )
        )}
      </div>
      <div className={styles.bookContentRow}>
        {bookData[activeBtn].map(
          (srrc, i) =>
            i >= 5 && (
              <a key={i} target="_blank" href={bookLink[activeBtn][i]}>
                {" "}
                <img className={styles.bookImg} src={srrc} key={i} />
              </a>
            )
        )}
      </div>
    </div>
  );
}

export default OurBooks;
