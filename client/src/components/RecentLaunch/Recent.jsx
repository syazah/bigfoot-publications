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
      <RecentContent
        bookTitle={"Rozin Berry's Escapades"}
        authorName={"By Tarana Fazal"}
        para={
          " It is the hundredth time I had the same dream last night. I think I'm soon starting to daydream about it too. A recurrent dream has kept Rozin thinking ever since she came back from her last escapade at Ashberg. Do the orange twinkling eyes belong to a mishiboo? And why do her own eyes exhibit a similar glow? Is the mishiboo tribe extinct or does it still exist on the face of Earth? The last visit to Glamshire had left too many questions unanswered for her. This time she has made up her mind to unravel all these hidden mysteries."
        }
        link={
          "https://www.amazon.in/Rozin-Berrys-Escapades-The-Mishiboo/dp/8196808577/ref=sr_1_fkmr2_1?crid=1N87486EUIC7K&keywords=rosin+berry+escapades&qid=1706536718&sprefix=rosin+berry+escapae%2Caps%2C245&sr=8-1-fkmr2"
        }
        img1={"RECENT/rozinBer1.jpg"}
        img2={"RECENT/rozinBer2.jpg"}
      />
      <RecentContent
        bookTitle={"Can you love this way?"}
        authorName={"By Sunayana Khandelwal"}
        para={
          "And he brought her closer and closer to him. He moved his hands from her sylph-like waist to her hands and she could feel his warm hands as he slid them from her wrist to her shoulders. Hunar could hear her heart pounding and she did not want Abeer to take away the cozy shelter of his arms in which she was melting every moment. Abeer just touched his lips on her neck for the first time and he could sense the subtle floral fragrance of her body. “Can I know you more?” he said. But sometimes destiny has stored some unique experiences for you. “It’s better to be silent for months then to lose everything at once.” A desire to marry, a divorce, an effort for remarriage and a life in bigamy. Can you love this way? Extraordinary true love stories of three ordinary women."
        }
        link={"https://amazon.in/Can-you-Love-This-Way/dp/8194621291"}
        img1={"sunayana.jpg"}
        img2={"sunayana.jpg"}
        rev={"true"}
      />
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
function RecentContent({ bookTitle, authorName, para, link, img1, img2, rev }) {
  return (
    <div className={styles.recentContent}>
      <div className={styles.recentContentText}>
        <h2>{bookTitle}</h2>
        <h4>{authorName}</h4>

        <p>{para}</p>
        <a href={link}>KNOW MORE</a>
      </div>
      <div className={styles.recentContentImg}>
        <Swiper
          className={styles.carousel}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
        >
          <SwiperSlide className={styles.swipe}>
            <img src={img1} />
          </SwiperSlide>
          <SwiperSlide className={styles.swipe}>
            <img src={img2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Recent;
