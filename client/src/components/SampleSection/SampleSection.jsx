import { useState } from "react";
import styles from "./SampleSection.module.css";
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

const cont = [
  {
    heading: " BOOK LAUNCH",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    paras: [
      "📌 Our book launch event is your moment to shine, as we celebrate the culmination of your hard work and dedication in the most extraordinary way possible.",
      "📌 Our launch event provides invaluable opportunities to network with industry professionals, engage in insightful discussions, and build lasting relationships that can propel your career to new heights",
      "📌 Whether you prefer an intimate gathering or a lavish affair, our team of experts is dedicated to bringing your vision to life, ensuring that your launch is a true reflection of your personality and creative spirit.",
    ],
    vid: "SAMPLE/sampleLaunch.mp4",
  },
  {
    heading: "BOOKFAIR DISTRIBUTION",
    subHeading: "WE DELVE IN THE INTRICACIES OF OF SAMPLE DISTRIBUTION",
    paras: [
      "📌 Sample distribution encompasses the strategic dissemination of product samples, promotional materials, or content excerpts to targeted audiences.",
      "📌 By placing samples in the hands of consumers, businesses create opportunities for direct interaction and engagement.",
      "📌 Unlike passive forms of marketing, sample distribution invites individuals to experience a brand's offerings firsthand, encouraging them to form personal connections and emotional attachments.",
    ],
    vid: "SAMPLE/bookDist.mp4",
  },
  {
    heading: "BOOKSTORE DISTRIBUTION",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    paras: [
      "📌 Our book launch event is your moment to shine, as we celebrate the culmination of your hard work and dedication in the most extraordinary way possible.",
      "📌 Our launch event provides invaluable opportunities to network with industry professionals, engage in insightful discussions, and build lasting relationships that can propel your career to new heights",
      "📌 Whether you prefer an intimate gathering or a lavish affair, our team of experts is dedicated to bringing your vision to life, ensuring that your launch is a true reflection of your personality and creative spirit.",
    ],
    vid: "SAMPLE/sampleBookStore.jpg",
  },
  {
    heading: "PRESS RELEASE",
    subHeading: "WE DELVE IN THE INTRICACIES OF OF SAMPLE DISTRIBUTION",
    paras: [
      "📌 Sample distribution encompasses the strategic dissemination of product samples, promotional materials, or content excerpts to targeted audiences.",
      "📌 By placing samples in the hands of consumers, businesses create opportunities for direct interaction and engagement.",
      "📌 Unlike passive forms of marketing, sample distribution invites individuals to experience a brand's offerings firsthand, encouraging them to form personal connections and emotional attachments.",
    ],
    vid: "SAMPLE/samplePress.jpg",
  },
];
function SampleSection({ content = cont }) {
  return (
    <div className={styles.SampleSection}>
      <SampleSectionText />
      <div>
        <Sample content={content} num />
        {content.length > 4 && <Sample2 content={content} />}
      </div>
    </div>
  );
}

function SampleSectionText() {
  return (
    <div className={styles.textContent}>
      <h3>HERE'S OUR SAMPLES OF OFFERINGS</h3>
      <h1>HOW WE BOOST YOUR SALES ?</h1>
    </div>
  );
}

function Sample({ content }) {
  return (
    <div className={styles.sampleRow}>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[0].heading}</h1>
        </div>

        <div className={styles.launchContent}>
          <video controls muted loop src={content[0].vid} />
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[3].heading}</h1>
        </div>

        <div className={styles.launchContent}>
          <img src={content[3].vid} />
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[2].heading}</h1>
        </div>

        <div className={styles.launchContent}>
          <img src={content[2].vid} />
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[1].heading}</h1>
        </div>
        <div className={styles.launchContent}>
          <video controls muted loop src={content[1].vid} />
        </div>
      </div>
    </div>
  );
}
function Sample2({ content }) {
  return (
    <div className={"flex md:flex-row flex-col justify-center items-center gap-4 mt-4 w-full"}>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[4].heading}</h1>
        </div>
        <div className={styles.launchContent}>
          <video controls muted loop src={content[4].vid} />
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[5].heading}</h1>
        </div>
        <div className={styles.launchContent}>
          <img src={content[5].vid} />
        </div>
        <p className="text-sm font-normal font-poppins">
          {content[5].subHeading}
        </p>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[6].heading}</h1>
        </div>

        <div className={styles.launchContent}>
          <video controls muted src={content[6].vid} />
        </div>
      </div>
      <div className={styles.launch}>
        <div className={styles.launchText}>
          <h1>{content[7].heading}</h1>
        </div>
        <div className={styles.launchContent}>
          <video controls muted loop src={content[7].vid} />
        </div>
      </div>
    </div>
  );
}

export default SampleSection;
