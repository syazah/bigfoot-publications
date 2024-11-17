import Navbar from "../components/Navbar/Navbar";
import PreLoader from "../components/PreLoader/PreLoader";
import MainBook from "../components/MainBook/MainBook";
import Footer from "../components/Footer/Footer";
import AuthorHome from "../components/Author/AuthorHome";
import styles from "./Authors.module.css";
import { useState, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import Marquee from "../components/Marquee/Marquee";

function Authors() {
  const images = [
    "/catal/pages01.png",
    "/catal/pages02.png",
    "/catal/pages03.png",
    "/catal/pages04.png",
    "/catal/pages05.png",
    "/catal/pages06.png",
    "/catal/pages07.png",
    "/catal/pages08.png",
    "/catal/pages09.png",
    "/catal/pages10.png",
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const [downloaded, setDownloaded] = useState(false);
  const ReachedEnd = currentPage == 9;
  const ReachedStart = currentPage == 0;
  const [curr, setCurr] = useState(true);
  function handleNext() {
    setCurrentPage(currentPage + 1);
    setCurr(true);
  }
  function handlePrev() {
    setCurrentPage(currentPage - 1);
    setCurr(false);
  }

  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <div className={styles.bookPageContainer}>
        <div className={styles.bookTexts}>
          <h3>1200 BOOKS PUBLISHED IN 2023</h3>
          <h1>Our Catalogue</h1>
          <div className={styles.buttonContainer}>
            <button disabled={ReachedStart} onClick={handlePrev}>
              SEE PREVIOUS
            </button>
            <button disabled={ReachedEnd} onClick={handleNext}>
              SEE NEXT
            </button>
          </div>
          <a
            download
            href="Catalogue.pdf"
            onClick={() => setDownloaded(!downloaded)}
          >
            {downloaded ? "DOWNLOADED 🫡" : "DOWNLOAD"}
          </a>
        </div>
        <Book images={images} currentPage={currentPage} curr={curr} />
      </div>
      <Marquee />
      <Footer />
    </div>
  );
}

function Book({ images, currentPage, curr }) {
  const [scope, animate] = useAnimate();

  async function handleAnimate() {
    animate(
      scope.current,
      {
        x: [0, -70, 0],
        opacity: [0, 0, 1],
      },
      { duration: 1 }
    );
  }
  async function handleAnimate2() {
    animate(
      scope.current,
      {
        x: [0, 70, 0],
        opacity: [0, 0, 1],
      },
      { duration: 1 }
    );
  }

  useEffect(() => {
    curr ? handleAnimate() : handleAnimate2();
  }, [currentPage]);
  return (
    <div className={styles.book}>
      <motion.div className={styles.page}>
        <img ref={scope} src={images[currentPage]} />
      </motion.div>
    </div>
  );
}

export default Authors;
