import styles from "./Packages.module.css";
import { useState } from "react";
import { Disc } from "react-feather";
import { Link } from "react-router-dom";

const data = [
  {
    p: "Our book experts will analyse your competition and help you plan,design and publish a beautiful book in print and eBook formats, which you can sell worldwide.",
  },
  {
    p: "Publish a beautiful book worldwide. Take advantage of enriched multimedia to tell your brand's story and entice more readers, enhance the user experience, increase your conversion rate and boost sales",
  },
  {
    p: "Publish and promote a well-edited book. Make your book visible to the right target audience across different social media platforms and sell more copies. Our experts will set everything up.",
  },
  {
    p: "Allow our team of book specialists to evaluate your competitors and assist you in strategizing, crafting, and launching a captivating book.",
  },
  {
    p: "Unleash your story's potential by publishing a stunning book globally. Harness the power of multimedia enhancements to narrate your brand's journey,",
  },
  {
    p: "Embark on the journey of publishing and promoting your finely crafted book. With our expertise, your book will shine brightly in front of the perfect audience across various social media channels, paving the way for enhanced visibility and boosted sales.",
  },
];

function Packages() {
  const [currentPack, setCurrentPack] = useState(0);
  function handleClick(id) {
    setCurrentPack(id);
  }
  return (
    <div className={styles.mainPackages}>
      <div className={styles.textContent}>
        <h3>WE HAVE THE MOST VALUE TO MONEY</h3>
        <h1>Packages</h1>
      </div>

      <div className={styles.buttonRow}>
        <button>Without Offline Distribution</button>
      </div>

      <ul className={styles.packageRow}>
        <PackageComponent
          packageName="SILVER"
          detail={data[0].p}
          price="Rs.11,999/-"
          quote="Ideal for Short Story books under 100 pages."
          color="#808080"
        >
          <li>
            <h5>&bull; &nbsp; Copyright</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Amazon + Flipkart Listing</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Publishing Support</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Author Copies </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Cover Reveal Contest </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; ISBN</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Copyright</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; COVER DESIGN</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; FORMATTING & LAYOUT</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; AMAZON & FLIPKART LISTING</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; PUBLISHING SUPPORT</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; AUTHOR COPIES</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; COVER REVEAL CONTEST</h5>
          </li>
        </PackageComponent>
        <PackageComponent
          packageName="GOLD"
          detail={data[1].p}
          price="Rs.24,999/-"
          quote="Ideal for Poetry books under 150 pages"
          color="#f1c900"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN SILVER PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Ebook</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Editing</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Lifetime Stocking</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Newspaper Review </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Email marketing</h5>
          </li>
        </PackageComponent>
        <PackageComponent
          packageName="PLATINUM"
          detail={data[2].p}
          price="Rs.44,999/-"
          quote="Ideal for Poetry books with illustrations and Fiction books under 200 Pages"
          color="#7491c5"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN GOLD PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Hardbound books</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Daily updates</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Unlimited cover designs</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; A+ Listing</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Video trailer</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Prime Listing</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Podcast interview</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Ads on Facebook & Instagram</h5>
          </li>
        </PackageComponent>
      </ul>
      <div className={styles.buttonRow}>
        <button>With Offline Distribution</button>
      </div>
      <div className={styles.packageRow}>
        <PackageComponent
          packageName="RUBY"
          detail={data[0].p}
          price="Rs.89,999/-"
          quote="Ideal for Fiction and Non Fiction books under 250 Pages"
          color="#ff2929"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN PLATINUM PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Global Distribution</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Bookstore Distribution in 1 City</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Dummy copy</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Amazon Ads</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Youtube ads</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Library Distribution in 1 city</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Press Release in 20 newspapers</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Author Website</h5>
          </li>
        </PackageComponent>
        <PackageComponent
          packageName="DIAMOND"
          detail={data[1].p}
          price="Rs.1,34,999/-"
          quote="Ideal for full length Fictions and Non Fictions under 300 Pages"
          color="#8fa4b6"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN RUBY PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp;Duplex Cover</h5>
          </li>
          <li>
            <h5>
              &bull; &nbsp; Bookstore Distribution in 2 Cities including Oxford
              bookstores
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Newspaper endorsement</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Amazon reviews by professionals</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Book award nomination</h5>
          </li>
        </PackageComponent>
        <PackageComponent
          packageName="IVORY"
          detail={data[2].p}
          quote="Ideal for coloured coffee table books and commercial books upto 350 Pages"
          price="Rs.1,84,999/-"
          color="#538234"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN DIAMOND PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Bookstore Distribution in 4 Cities</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Audiobook</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Printed Newspaper Review</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Book launch Event</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; 100 reviews on Goodreads by pro</h5>
          </li>
        </PackageComponent>
        <PackageComponent
          packageName="IVORY PLUS"
          detail={data[2].p}
          quote="Ideal for all books who want to make it big."
          price="Rs.2,29,999/-"
          color="#385624"
        >
          <li>
            <h5
              style={{
                color: "blue",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              EVERYTHING IN IVORY PLAN +
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp;100 Author copies</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Instagram live book launch</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Bookstore Distribution in 6 Cities</h5>
          </li>
          <li>
            <h5>
              &bull; &nbsp;Paperback and Hardbound in Walmart stores (US,UK,AUS)
            </h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Signing event</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; Amazon Bestseller Guarantee</h5>
          </li>
          <li>
            <h5>&bull; &nbsp;150 professional reviews</h5>
          </li>
          <li>
            <h5>&bull; &nbsp; 3 months social media management</h5>
          </li>
        </PackageComponent>
      </div>
    </div>
  );
}

function PackageComponent({ packageName, price, children, quote, color }) {
  return (
    <div className={styles.PackageComponent}>
      <div style={{ backgroundColor: color }} className={styles.topHeadText}>
        <h2>{packageName}</h2>
        <h3>{price}</h3>
        <p>{quote}</p>
        <p>*24 Months EMI Option Available On CC Only</p>
      </div>

      <ul className={styles.detail}>
        <div className={styles.detailList}>{children}</div>
        <Link className={styles.redirect} to="/packages">
          KNOW MORE
        </Link>
      </ul>
    </div>
  );
}

export default Packages;
