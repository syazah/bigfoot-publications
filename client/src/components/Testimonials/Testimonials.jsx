import styles from "./Testimonials.module.css";
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

const reviewsData = [
  {
    id: 0,
    name: "Yash Tiwari",
    post: "Tedx Spearker and Influencer",
    review:
      "Great support and communication by the team. Timely publishing process completion and insightful suggestions are shared as well. Certainly recommended.",
    img: "/testimonial/yati.jpg",
  },
  {
    id: 1,
    name: "Tulika Saha",
    post: "Bestselling author and Advocate",
    review:
      "Im glad to be the part of BigFoot Publication and I term this house as my first friend, philosopher, guide and my family in this vast literature world. From one who was intending to be an author to becoming a successful one, it was a nice journey with BigFoot. I recommend new author to be the part of this family in your new journey, it will be a wonderful experience for sure.",
    img: "/testimonial/tulsa.jpg",
  },
  {
    id: 2,
    name: "Archana Pingley",
    post: "Award winning Entrepreneur",
    review:
      " Very good services in affordable prices. The team is helpful and courteous. The designers are creative and suggests good stuff. Great experience. Overall, happy and satisfied.",
    img: "/testimonial/archpill.jpg",
  },
  {
    id: 3,
    name: "Dr. Rita Chettri",
    post: "Doctor",
    review:
      "I had a great time working with them. Would definitely recommend new author to publish their work with them. Looking forward for more projects with them .  Im happy with the quality of services they provide. Thanks to all the cooperative staff and publisher Deepak Yadav.",
    img: "/testimonial/ritch.jpg",
  },
  {
    id: 4,
    name: "Shreyansh Ojha",
    post: "Academician",
    review:
      "Team Bigfoot is a great place for a first time author. Deepak is a very sincere person, he is a man of his words and delivers what he promises. I feel blessed to have joined such an ecosystem where your emotions are understood and duly taken care of. Right from my first conversation with team Bigfoot to the delivery of the paperback, everything was beyond expectation. Full marks on everything. Bigfoot publication is a secure place for every author.",
    img: "/testimonial/shroj.jpg",
  },
  {
    id: 5,
    name: "Niyati Swami",
    post: "Corporate worker",
    review:
      "I published my first book with BigFoot Publications and the process has been smooth and easy. For a person like me with a regular job and so many other things going, Deepak & his team has been extremely helpful and gives good suggestions at every step of the publishing process. I’d recommend BigFoot to new authors. Approaching publishers directly is the best way of going about publishing and BigFoot Publications has been very supportive and welcoming to new authors. I wish them luck.",
    img: "/testimonial/niysw.jpg",
  },
  {
    id: 6,
    name: "Shubham Singh",
    post: "Bestselling Author & Entrepreneur",
    review:
      "BigFoot Publications gave me the breakthrough that I was looking for my debut book. The team is very professional and they handle the emotions of writers very maturely. Mr. Deepak Yadav is a very good-natured person. You can trust him on all grounds. The book cover, page quality, and overall appeal they provide to the book is perfect. Everybody, literally everybody, who has held the book, has appreciated it",
    img: "/testimonial/shusi.jpg",
  },
  {
    id: 7,
    name: "Bina Pillai",
    post: "Award winning Author",
    review:
      "It was an awesome experience with BigFoot Publications. Deepak Yadav and Jasmeet were very cooperative and kept their word every-time. They delivered the books to me in time and always met their targets. The quality of the book and the cover designed by team is very nice. I’m very happy with this publisher and will recommend other writers to sign up with him. I give him a 5 star rating.",
    img: "/testimonial/binpill.jpg",
  },
];

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Testimonials() {
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
    <div className={styles.testimonials}>
      <Swiper
        className={styles.CarouselSwipe}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={windowSize.innerWidth > 768 ? 3 : 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
      >
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[0].img} />

            <h4>{reviewsData[0].name}</h4>
            <h3>{reviewsData[0].post}</h3>
            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[0].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[1].img} />

            <h4>{reviewsData[1].name}</h4>
            <h3>{reviewsData[1].post}</h3>

            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[1].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[2].img} />

            <h4>{reviewsData[2].name}</h4>
            <h3>{reviewsData[2].post}</h3>

            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[2].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[3].img} />
            <h4>{reviewsData[3].name}</h4>
            <h3>{reviewsData[3].post}</h3>

            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[3].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[4].img} />

            <h4>{reviewsData[4].name}</h4>
            <h3>{reviewsData[4].post}</h3>
            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[4].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[5].img} />

            <h4>{reviewsData[5].name}</h4>
            <h3>{reviewsData[5].post}</h3>

            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[5].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[6].img} />

            <h4>{reviewsData[6].name}</h4>
            <h3>{reviewsData[6].post}</h3>

            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[6].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.revcard}>
            <img className={styles.realpic} src={reviewsData[7].img} />

            <h4>{reviewsData[7].name}</h4>
            <h3>{reviewsData[4].post}</h3>
            <h5>
              <img className={styles.quotepic} src="/HEADERSEC/quote.png" />
              {reviewsData[7].review}{" "}
              <img className={styles.quotepic} src="/HEADERSEC/quote2.png" />
            </h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

// function ReviewCard({ review }) {
//   return (
//   );
// }

export default Testimonials;
