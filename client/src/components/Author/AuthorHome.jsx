import styles from "./AuthorHome.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const AuthorData = [
  {
    id: 0,
    name: "Adya Manan",
    src: "/AUTHORS/ADYAMANAN.jpg",
  },
  {
    id: 1,
    name: "Ekata Deb",
    src: "/AUTHORS/EKATADEB.jpg",
  },
  {
    id: 2,
    name: "Himanshu Chate",
    src: "/AUTHORS/HIMANSHUCHATE.jpg",
  },
  {
    id: 3,
    name: "Rajat K",
    src: "/AUTHORS/RAJATK.jpg",
  },
  {
    id: 4,
    name: "MARIETTA PEREIRA",
    src: "/AUTHORS/MARIETTAPEREIRA.jpg",
  },
  {
    id: 5,
    name: "Madhuri Suma",
    src: "/AUTHORS/MADHURISUMA.jpg",
  },
  {
    id: 6,
    name: "Jahnvvi Kuumar",
    src: "/AUTHORS/JAHNVVIKUUMAR.jpg",
  },
  {
    id: 7,
    name: "Priyanka Kuumar",
    src: "/AUTHORS/PRIYANKAKUUMAR.jpg",
  },
];

function AuthorHome() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controlAnim = useAnimation();
  useEffect(() => {
    if (inView) {
      controlAnim.start("vis");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      variants={{ hidden: { opacity: 0, x: -200 }, vis: { opacity: 1, x: 0 } }}
      initial="hidden"
      animate={controlAnim}
      transition={{ duration: 1 }}
      className={styles.main}
    >
      <AuthorHeader />
      <AuthorHomeCards />
    </motion.div>
  );
}

function AuthorHeader() {
  return (
    <div className={styles.AuthorHeaderContainer}>
      <h3>LET&apos;S MEET OUR</h3>
      <h1>Authors</h1>
    </div>
  );
}

function AuthorHeaderImage() {
  return (
    <div className={styles.AuthorHeaderImageContainer}>
      <img src="AUTHORHOMEHEADERIMAGE.png" alt="" />
    </div>
  );
}

function AuthorHomeCards() {
  return (
    <ul className={styles.authorContent}>
      <li className={styles.authorContentRow}>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer}></div>
          <h3>Adya Manan</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer2}></div>
          <h3>Ekata Deb</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer3}></div>
          <h3>Jahnvvi Kuumar</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer4}></div>
          <h3>Madhuri Suma</h3>
        </div>
      </li>
      <li className={styles.authorContentRow}>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer5}></div>
          <h3>Priyanka Kuumar</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer6}></div>
          <h3>Rajat K</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer7}></div>
          <h3>Marietta Pereira</h3>
        </div>
        <div className={styles.authorCard}>
          <div className={styles.imageContainer8}></div>
          <h3>Himanshu Chate</h3>
        </div>
      </li>
    </ul>
  );
}

export default AuthorHome;
