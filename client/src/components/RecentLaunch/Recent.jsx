import styles from "./Recent.module.css";
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

function Recent() {
  return (
    <div className={styles.main}>
      <RecentText />
      <RecentContent />
    </div>
  );
}

function RecentText() {
  return (
    <div className={styles.recentText}>
      <h1>Recent Book Launch</h1>
      <h3>AT CROSSWORD BOOKSTORE</h3>
    </div>
  );
}
function RecentContent() {
  return (
    <div className={styles.recentContent}>
      <div className={styles.recentContentText}>
        <h2>Rozin Berry's Escapades</h2>
        <h4>By Tarana Fazal</h4>

        <p>
          It is the hundredth time I had the same dream last night. I think I'm
          soon starting to daydream about it too." A recurrent dream has kept
          Rozin thinking ever since she came back from her last escapade at
          Ashberg. Do the "orange" twinkling eyes belong to a mishiboo? And why
          do her own eyes exhibit a similar glow? Is the mishiboo tribe extinct
          or does it still exist on the face of Earth? The last visit to
          Glamshire had left too many questions unanswered for her. This time
          she has made up her mind to unravel all these hidden mysteries.
        </p>
        <a href="https://www.amazon.in/Rozin-Berrys-Escapades-The-Mishiboo/dp/8196808577/ref=sr_1_fkmr2_1?crid=1N87486EUIC7K&keywords=rosin+berry+escapades&qid=1706536718&sprefix=rosin+berry+escapae%2Caps%2C245&sr=8-1-fkmr2">
          KNOW MORE
        </a>
      </div>
      <div className={styles.recentContentImg}>
        <Swiper className={styles.carousel}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
        >
          <SwiperSlide className={styles.swipe}>
            <img src="RECENT/rozinBer1.jpg" />
          </SwiperSlide>
          <SwiperSlide className={styles.swipe}>
            <img src="RECENT/rozinBer2.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Recent;
