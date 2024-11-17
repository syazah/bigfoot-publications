import styles from "./HeadSlider.module.css";
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
import "./HeadSlider.css";

function HeadSlider() {
  return (
    <div className={styles.headSlider}>
      <HeadingText />
      <Swiper
        className={styles.CarouselSwipe}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
      >
        <SwiperSlide className={styles.swipe}>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide5 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide6 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function HeadingText() {
  return (
    <div className={styles.headingText}>
      <h1> Why Choose Us ?</h1>
    </div>
  );
}

function Slide1() {
  return (
    <div className={styles.slide1}>
      <div className={styles.SlideOneImageContainer}></div>
    </div>
  );
}

function Slide2() {
  return <div className={styles.slide2}></div>;
}

function Slide3() {
  return <div className={styles.slide3}></div>;
}

function Slide4() {
  return <div className={styles.slide4}></div>;
}
function Slide5() {
  return <div className={styles.slide5}></div>;
}
function Slide6() {
  return <div className={styles.slide6}></div>;
}

export default HeadSlider;
