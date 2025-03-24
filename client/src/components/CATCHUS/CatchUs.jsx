import styles from "./CatchUs.module.css";
import { useState, useEffect } from "react";
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

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function CatchUs() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={styles.platformMain}>
      <div className={styles.platform}>
        <h3>WE ARE AVAILABLE ON THE FOLLOWING</h3>
        <h1>Platforms</h1>
      </div>
      <div className={styles.CarouselSwipe}>
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={windowSize.innerWidth > 768 ? 4 :2}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
        >
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform01.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform02.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform03.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform04.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform05.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform06.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform08.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform09.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform10.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform11.png" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.platformImage}>
              <img src="/platform/platform12.png" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CatchUs;
