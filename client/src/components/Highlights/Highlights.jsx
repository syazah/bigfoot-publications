import styles from "./Highlights.module.css";
import { useEffect, useRef } from "react";
import { animate, motion, useAnimation, useInView } from "framer-motion";

const cardData = [
  {
    id: 0,
    title: "WE ACCEPT ALL LANGUAGES",
    img: "/highlights/language.png",
  },
  {
    id: 1,
    title: "PROFESSIONAL SERVICES",
    img: "/highlights/book.png",
  },
  {
    id: 2,
    title: "5000+ AUTHORS TRUST US",
    img: "/highlights/writer.png",
  },
  {
    id: 3,
    title: "VALUE TO MONEY PACKAGES",
    img: "highlights/money-bag.png",
  },
  {
    id: 4,
    title: "WE HAVE 100K+ READERS COMMUNITY ",
    img: "/highlights/group-chat.png",
  },
  {
    id: 5,
    title: "WE HAVE WON 3 GLOBAL AWARDS ",
    img: "/highlights/award.png",
  },
  {
    id: 6,
    title: "OFFLINE BOOKSTORE DISTRIBUTIONS IN PREMIUM STORES ",
    img: "/highlights/book-shop.png",
  },
  {
    id: 7,
    title: "GLOBAL DISTRIBUTION ACROSS 140 COUNTRIES  ",
    img: "/highlights/globe.png",
  },
  {
    id: 8,
    title: "AUDIOBOOKS  ",
    img: "/highlights/reading.png",
  },
  {
    id: 9,
    title: "AMAZON GUARANTEED BESTSELLER",
    img: "/highlights/1st-place.png",
  },
];

function Highlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controlAnimation = useAnimation();
  useEffect(() => {
    if (isInView) {
      controlAnimation.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controlAnimation}
      transition={{ duration: 1, delay: 0.5 }}
      className={styles.highlightMain}
    >
      <HighlightHeader />
      <HighlightCards />
      <TestimonialHeader />
    </motion.div>
  );
}

function HighlightHeader() {
  return (
    <div className={styles.highlightHeader}>
      <h3>DISCOVER OUR PINNACLE FEATURES</h3>
      <h1>OUR HIGHLIGHTS</h1>
    </div>
  );
}

function HighlightCards() {
  return (
    <>
      <ul className={styles.cardRow}>
        {cardData.map(
          (card) => card.id < 5 && <Card data={card} key={card.id} />
        )}
      </ul>
      <ul className={styles.cardRow}>
        {cardData.map(
          (card) => card.id >= 5 && <Card data={card} key={card.id} />
        )}
      </ul>
    </>
  );
}

function Card({ data }) {
  return (
    <li>
      <motion.img src={data.img} />
      <h2>{data.title}</h2>
    </li>
  );
}

function TestimonialHeader() {
  return (
    <div className={styles.testimonialGrid}>
      <div className={styles.imageSec}></div>
      <div className={styles.imageTopSec}></div>
      <div className={styles.testimonialHeader}>
        <h3>Voices of Praise: What Our Readers and Authors Say</h3>
        <h1>Our Testimonials</h1>
      </div>
    </div>
  );
}

export default Highlights;
