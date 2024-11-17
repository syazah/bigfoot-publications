import Navbar from "../components/Navbar/Navbar";
import styles from "./Packages.module.css";
import RoyaltyCalculator from "../components/RoyaltyCalculator/RoyaltyCalculator";
import Footer from "../components/Footer/Footer";
import PreLoader from "../components/PreLoader/PreLoader";
import SampleSection from "../components/SampleSection/SampleSection";
import KnowBetter from "../components/KnowBetter/KnowBetter";
import LearnBasics from "../components/LearnBasics/LearnBasics";
import PublishingProcedure from "../components/PublishingProcedure/PublishingProcedure";

const cont = [
  {
    heading: " AMAZON A+ LISTING",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    vid: "SAMPLE/aa1.mp4",
  },
  {
    heading: "VIDEO AD CAMPAIGN",
    subHeading: "WE DELVE IN THE INTRICACIES OF OF SAMPLE DISTRIBUTION",
    vid: "SAMPLE/vidcampaign.MP4",
  },
  {
    heading: "EXHAUSTIVE MARKETING FOR WIKIPEDIA",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    vid: "SAMPLE/wiki.jpg",
  },
  {
    heading: "AMAZON BESTSELLER",
    subHeading: "WE DELVE IN THE INTRICACIES OF OF SAMPLE DISTRIBUTION",
    vid: "SAMPLE/amazonbest.jpg",
  },
  {
    heading: "VIDEO AD CAMPAIGN",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    vid: "vidad.mp4",
  },
];

function Packages() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <LearnBasics />
      <PublishingProcedure />
      <div className={styles.package}>
        <img src="PACKAGES.jpg" />
      </div>
      <KnowBetter />
      <RoyaltyCalculator />
      <SampleSection content={cont} />
      <Footer />
    </div>
  );
}
function AboutHeader() {
  return (
    <div className={styles.AboutHeader}>
      <div className={styles.textContent}>
        <h3>WE HAVE THE MOST AFFORDABLE</h3>
        <h1>PACKAGES</h1>
      </div>
    </div>
  );
}

export default Packages;
