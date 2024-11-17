import styles from "./HeaderSection.module.css";
import { motion } from "framer-motion";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const buttonVariants = {
  hover: {
    scale: 1.15,
    transition: {
      duration: 0.5,
    },
  },
  press: {
    scale: 0.9,
    rotate: "4deg",
    transition: {
      duration: 0.8,
    },
  },
  rest: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function HeaderSection() {
  return (
    <div className={styles.headerSec}>
      <motion.div
        className={styles.headerEl1}
        initial={{ scale: 0, x: -100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 3 }}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "backInOut", delay: 3 }}
        className={styles.headerEl2}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, x: -10 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1.1, ease: "backInOut", delay: 3 }}
        className={styles.headerEl3}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, y: -80 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "backInOut", delay: 3 }}
        className={styles.headerEl4}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, x: -10 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "backInOut", delay: 3 }}
        className={styles.headerEl5}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "backInOut", delay: 3 }}
        className={styles.headerEl6}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, x: -10 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 2, ease: "backInOut", delay: 3 }}
        className={styles.headerEl7}
      ></motion.div>
      <motion.div
        initial={{ scale: 0, rotate: 10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backInOut", delay: 3 }}
        className={styles.headerEl8}
      ></motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "backInOut", delay: 3 }}
        className={styles.headerEl9}
      ></motion.div>

      <motion.div className={styles.headerEl10}>
        <img src={"LOGO.png"} />
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.1, ease: "circInOut", delay: 3 }}
        >
          THIS IS CHAPTER ONE OF
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 2.5, y: 0 }}
          transition={{ duration: 2.5, ease: "circInOut", delay: 3 }}
        >
          YOUR SUCCESSFUL WRITING CAREER
        </motion.h1>
        <motion.a
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 2.5,
            y: 0,
            transition: { duration: 4, ease: "circInOut", delay: 3 },
          }}
          whileHover="hover"
          whileTap="press"
          variants={buttonVariants}
          className={styles.publishLink}
          href="https://wa.link/f8xnpu"
        >
          PUBLISH NOW
        </motion.a>
      </motion.div>
    </div>
  );
}

{
  /* <motion.div
style={{ marginBottom: "20px" }}
className={styles.headSliders}
initial={{ opacity: 0, y: 100 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 3.5, ease: "circInOut", delay: 3 }}
>
<Swiper
  className={styles.CarouselSwipe}
  modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
  slidesPerView={1}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
>
  <SwiperSlide>
    <div className={styles.headSliderText}>
      <p>
        Bigfoot Publications Evolves With Changing Trends In The
        Publishing Industry
      </p>
      <h4>Business World</h4>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={styles.headSliderText}>
      <p>
        With his brainchild Bigfoot Publications, Deepak Yadav brings
        revolution to Publishing industry
      </p>
      <h4>The Week</h4>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={styles.headSliderText}>
      <p>
        Bigfoot Publications-An initiative to ease up the journey of
        new writers
      </p>
      <h4>Mid Day</h4>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={styles.headSliderText}>
      <p>
        Bigfoot Publications empowering Self-Publishing Authors
        Worldwide
      </p>
      <h4>Front List</h4>
    </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className={styles.headSliderText}>
      <p>
        Wondering how a book gets published and becomes a bestseller?
        Bigfoot Publications has the answer
      </p>
      <h4> Financial Express</h4>
    </div>
  </SwiperSlide>
</Swiper>
</motion.div> */
}

export default HeaderSection;
