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
    heading: "NEWSPAPER REVIEW",
    subHeading: "WE HAVE THE BEST LAUNCH EVENTS AS: ",
    vid: "SAMPLE/newsRev.jpg",
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
  {
    heading: "AWARD NOMINATIONS",
    subHeading:
      "As a publishing house, receiving award nominations is one of the most fulfilling experiences for us. It’s a moment that validates not just our hard work, but also the passion and creativity of the incredible authors, editors, and illustrators we have the privilege of working with.",
    vid: "SAMPLE/awardNom.jpg",
  },
  {
    heading: "BOOK LAUNCH EVENT",
    subHeading: "",
    vid: "SAMPLE/sampleLaunch.mp4",
  },
  {
    heading: "STORE DISTRIBUTIONS",
    subHeading: "",
    vid: "SAMPLE/Distributions.mp4",
  },
];

function Packages() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <LearnBasics />
      <PublishingProcedure />
      <div className={"w-full justify-center flex items-center"}>
        <img className="w-full md:w-[95%]" src="PACKAGES.png" />
      </div>
      <SampleAgreement />
      <KnowBetter />
      <SampleSection content={cont} />
      <RoyaltyCalculator />
      <Footer />
    </div>
  );
}
function SampleAgreement() {
  return (
    <div className="w-full bg-tertiary min-h-[150vh] md:h-[120vh] p-4 md:p-10 flex justify-start items-center flex-col gap-4">
      <h1 className="font-semibold text-xl md:text-4xl text-white font-poppins">
        OUR SAMPLE AGREEMENT
      </h1>
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-1/3 shadow-[5px_5px] shadow-secondary">
          <img
            src="/AGREEMENT/one.jpg"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/3 shadow-[5px_5px] shadow-secondary">
          <img
            src="/AGREEMENT/two.jpg"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/3 shadow-[5px_5px] shadow-secondary">
          <img
            src="/AGREEMENT/three.jpg"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <a
          download
          href="/AGREEMENT/agreement.pdf"
          className="bg-primaryDark px-4 py-2 rounded-full font-semibold font-poppins cursor-pointer"
        >
          DOWNLOAD
        </a>
      </div>
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
