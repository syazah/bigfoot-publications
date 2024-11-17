import { useEffect, useState } from "react";
import styles from "./Overview.module.css";
import { motion, useAnimate } from "framer-motion";

const headingData = [
  {
    id: 0,
    head: "COMPANY OVERVIEW",
    para: "The company is officially registered under the Company's Act, 2013, and the MSME Act, 2006. This reflects our commitment to operating within the legal framework and upholding professional standards in our publishing endeavors.Our PAN Card number is AAHCB9048D, providing transparency and authenticity to our business operations. Being registered under these acts not only ensures compliance with regulations but also builds trust among our authors, partners, and stakeholders.",
  },
  {
    id: 1,
    head: "OUR EXPERIENCE",
    para: "In the past 8 years, Bigfoot and I have accomplished a remarkable feat in the publishing world by bringing more than 5000 titles to readers. What's even more exciting is that over 150 of these books have earned the coveted Bestseller status. This achievement is a testament to our successful marketing strategies that have propelled these titles to new heights.Our journey in the publishing industry has been marked by a commitment to quality content and an elaborate marketing approach. The combination of these factors has not only contributed to the vast number of titles published but has also resulted in a significant number of Bestsellers.",
  },
  {
    id: 2,
    head: "LANGUAGES IN WHICH WE PUBLISH",
    para: "At Bigfoot Publications, our commitment to diversity and inclusivity is reflected in our publishing portfolio. We take pride in publishing books not only in English but also in Hindi and various regional languages. This multilingual approach is a testament to our belief that stories and knowledge should be accessible to a wide and diverse audience. By embracing multiple languages, we aim to cater to readers across different regions, cultures, and linguistic backgrounds. This allows us to connect with a broader spectrum of readers and contribute to the rich tapestry of literature in various languages.",
  },
  {
    id: 3,
    head: "PROJECT DURATION",
    para: "At Bigf  oot Publications, we are dedicated to ensuring that your book reaches a wide audience through various platforms. Upon signing our agreement, we commit to making your book available on popular online marketplaces such as Amazon, Flipkart, and Kindle, as well as other prominent stores within just 20 days. Our efficient distribution network and collaboration with major retailers enable us to swiftly bring your work to readers across different platforms, maximizing its visibility and accessibility.",
  },
];

function Overview() {
  const [activeTitle, setActiveTitle] = useState(0);
  const [scope, animate] = useAnimate();

  async function handleAnimate() {
    await animate("p", { x: 0, opacity: 0 });
    await animate("p", { x: 0, opacity: 1 }, { duration: 0.8 });
  }

  useEffect(() => {
    handleAnimate();
  }, [activeTitle]);

  function handleActive(id) {
    setActiveTitle(id);
  }
  return (
    <>
      <div className={styles.overviewContainer}>
        <h3>OUTLINE OF THE FIRM'S COMMITMENT </h3>
        <h1>Overview</h1>
      </div>
      <div className={styles.Overview}>
        <ul>
          <li
            onClick={() => handleActive(0)}
            style={activeTitle === 0 ? { backgroundColor: "#005e98" } : {}}
          >
            <h2>COMPANY OVERVIEW</h2>
          </li>
          <li
            onClick={() => handleActive(1)}
            style={activeTitle === 1 ? { backgroundColor: "#005e98" } : {}}
          >
            <h2>OUR EXPERIENCE</h2>
          </li>
          <li
            onClick={() => handleActive(2)}
            style={activeTitle === 2 ? { backgroundColor: "#005e98" } : {}}
          >
            <h2>LANGUAGES IN WHICH WE PUBLISH</h2>
          </li>
          <li
            onClick={() => handleActive(3)}
            style={activeTitle === 3 ? { backgroundColor: "#005e98" } : {}}
          >
            <h2>PROJECT DURATION</h2>
          </li>
        </ul>

        <div ref={scope} className={styles.descBox}>
          <p>{headingData[activeTitle].para}</p>
        </div>
      </div>
    </>
  );
}

export default Overview;
