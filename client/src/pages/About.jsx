import AboutHeader from "../components/AboutHeader/AboutHeader";
import Overview from "../components/AboutOverview/Overview";
import Navbar from "../components/Navbar/Navbar";
import styles from "./About.module.css";
import Footer from "../components/Footer/Footer";
import Contact from "../components/ContactUs/Contact";
import PublishingProcedure from "../components/PublishingProcedure/PublishingProcedure";
import PreLoader from "../components/PreLoader/PreLoader";
import LearnBasics from "../components/LearnBasics/LearnBasics";
import KnowBetter from "../components/KnowBetter/KnowBetter";
function About() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <FounderMessage />
      <div className={styles.imageWhy}>
        <img src="ABOUTUSWHY.jpg" alt="" />
      </div>
      <Overview />
      <Contact />
      <Footer />
    </div>
  );
}

function FounderMessage() {
  return (
    <div className={styles.founderMessage}>
      <div className={styles.headerTalk}>
        <h1>FOUNDER'S DESK</h1>
      </div>
      <FounderMessageContent />
    </div>
  );
}

function FounderMessageContent() {
  return (
    <div className={styles.content}>
      <div className={styles.founderMessageText}>
        <h1>DEEPAK YADAV</h1>
        <h3>FOUNDER, BIGFOOT PUBLICATIONS</h3>
        <p>
          Hello, I'm Deepak Yadav, Founder and CEO of Bigfoot Publications and I
          have sold more than 25,000 copies of my book 'Daughters of the
          brothel' since its launch in October, 2019 generating royalty of more
          25 lakh rupees.
          <br />
          <br />
          I'm in this Industry for more than a decade. Daughters of the Brothel
          is my second book, my first book, 'Walking with You, in the shades of
          love' was published under the banner of 'Diamond Books' in 2013 when I
          was 17 years old. My first book didn't sell well. Only 112 copies were
          sold in lifetime. It was shattered and demotivated. In my opinion, my
          publisher didn't guide me how to market the book or brand myself. I
          asked myself, Why would anyone purchase my book? There are millions of
          titles available on Amazon. I contacted few authors in fraternity and
          found the same problem with every budding writer.
          <br />
          <br />
          NO PUBLISHER GUIDE AUTHORS REGARDING SALES AND MARKETING.
          <br />
          <br />
          And that's how the idea of Bigfoot Publications came into existence
          from my Hostel Dormatory in Banaras Hindu University. And till date,
          more than 5000 authors trust us.
          <br />
          <br />
          And that's how the idea of Bigfoot Publications came into existence
          from my Hostel Dormatory in Banaras Hindu University. And till date,
          more than 5000 authors trust us.
          <br />
          <br />
          PURCHASE MY BOOK FROM THE LINK PROVIDED BELOW (as I always say, Never
          stop Promoting your book.)
        </p>
        <a
          href="https://www.amazon.in/Daughters-brothel-Deepak-Yadav/dp/8194202191/ref=sr_1_1?crid=2XF1NHOZVBYEH&keywords=daughters+of+brothel&qid=1707901294&sprefix=%2Caps%2C446&sr=8-1"
          target="_blank"
        >
          ORDER MY BOOK
        </a>
      </div>
      <div className={styles.founderMessageImg}>
        <img
          src="https://scontent.fdel16-1.fna.fbcdn.net/v/t31.18172-8/22095968_1464863510228472_8789549166784016576_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=RnqC4Iu9kh0AX_3I2sa&_nc_ht=scontent.fdel16-1.fna&oh=00_AfAiYOHzjeDhZdp-CF8QTQiu1EkrxlEO-pThj76YY0M_Dw&oe=65E1A160"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
