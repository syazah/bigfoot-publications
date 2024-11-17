import AuthorHome from "../components/Author/AuthorHome";
import OurBooks from "../components/BooksSection/OurBooks";
import CatchUs from "../components/CATCHUS/CatchUs";
import Contact from "../components/ContactUs/Contact";
import Faq from "../components/FAQS/Faq";
import Footer from "../components/Footer/Footer";
import HeadSlider from "../components/HeadSlider/HeadSlider";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import Highlights from "../components/Highlights/Highlights";
import MainBook from "../components/MainBook/MainBook";
import Navbar from "../components/Navbar/Navbar";
import Packages from "../components/Packages/Packages";
import PreLoader from "../components/PreLoader/PreLoader";
import Recent from "../components/RecentLaunch/Recent";
import SampleSection from "../components/SampleSection/SampleSection";
import RoyaltyCalculator from "../components/RoyaltyCalculator/RoyaltyCalculator";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "./Home.module.css";
import Whatsapp from "../components/whatsappComponent/Whatsapp";
import NewsSection from "../components/HeaderSection/NewsSection";
import LearnBasics from "../components/LearnBasics/LearnBasics";
import KnowBetter from "../components/KnowBetter/KnowBetter";
import { useEffect } from "react";
import NewsCov from "../components/NewsCov/NewsCov";
import Popup from "../components/Popup/Popup";
function Home() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Popup />
      <Whatsapp />
      <Navbar />
      <HeaderSection />
      <NewsSection />
      <HeadSlider />
      <OurBooks />
      <div className={styles.flowDivContainer}>
        <div  className={styles.flowDiv}>
          <img src="downourbooks.png" />
        </div>
      </div>
      <Highlights />
      <Testimonials />
      <NewsCov />
      <CatchUs />
      <div className={styles.flowDiv}>
        <h1>HOW TO GET PUBLISHED WITH US</h1>
        <img src="flow.png" />
      </div>
      <Packages />
      <RoyaltyCalculator />
      <SampleSection />
      <AuthorHome />
      <MainBook />
      <Recent />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
