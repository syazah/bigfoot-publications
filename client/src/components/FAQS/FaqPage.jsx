import { useState } from "react";
import styles from "./FaqPage.module.css";
const questionData = [
  {
    id: 1,
    question: "What is an ISBN, and Why is it Necessary for My Book?",
    ans: "ISBN, or 'International Standard Book Number,' is a 13-digit identification number crucial for book sellers and libraries to recognize books, magazines, newspapers, or other publications. Separate ISBNs are assigned for the Paperback, Hardcover, and eBook versions of your book.",
  },
  {
    id: 2,
    question: "Who Owns the Rights to My Book?",
    ans: "You retain complete ownership of your book! We serve as a conduit to bring your work to the market through our distribution partners and operate as a publishing label. Our non-exclusive publishing agreement ensures that we do not claim ownership of your content, allowing you the freedom to publish it elsewhere if you so choose.",
  },
  {
    id: 3,
    question: "Who Determines the Selling Price of My Book?",
    ans: "Together, you and we decide on the book's price. The selling price is determined by the production cost, which we assist you in calculating based on page extent, size, and format. This information enables you to set the retail price of your book and determine your earnings.",
  },
  {
    id: 4,
    question: "How Many Copies of My Book Will You Print?",
    ans: "For the Silver and Gold plans, we employ the Print-on-Demand (POD) method with an initial print run of 50 copies, contingent upon sales on Amazon and Flipkart in the Indian market. Reprinting occurs once 90% of the stock is sold.",
  },
  {
    id: 5,
    question: "How Many Books Will I Sell",
    ans: "Authors' sales vary—from a few copies to thousands. While your book is available through our distribution partners, effective promotion and marketing efforts are essential for sales. This could involve the various marketing services that we provide like creating a website, reaching out for reviews, and actively engaging potential readers. With focused efforts, a good book has the potential to become a great seller!",
  },
  {
    id: 6,
    question: "Can I Track How Many Books I've Sold?",
    ans: "Certainly! You can monitor your book sales, earnings, track payouts, and order copies at a subsidized price—all conveniently accessible on your author dashboard.",
  },
  {
    id: 7,
    question: "How and When Are Profits Distributed ?",
    ans: "Simply fill in your bank account details on the dashboard. Once the royalty amount reaches the minimum payout of 2500, it will be automatically transferred to your bank account.",
  },
  {
    id: 8,
    question: " In the Future, Can I Choose Another Publisher for My Book?",
    ans: "Absolutely! If you decide to discontinue our services, simply send us an email or make a phone call, and we'll gladly provide you with a No Objection Certificate (NOC). Until you officially discontinue our services, it would be both illegal and unethical to have your book printed and sold by any other source.",
  },
  {
    id: 9,
    question: "What is an Audiobook, and How Can I Get It Done?",
    ans: "Certain poems and stories are best experienced through listening. Many in our audience enjoy audiobooks, especially before bedtime. Our Bengaluru-based dedicated studio produces professional audiobooks for our authors. Following a thorough quality check, these audiobooks are uploaded to popular platforms such as Audible. Our skilled voice-over artists transform your manuscript into a captivating audio experience. The audiobooks are then published on Audible and Google Playbook",
  },
  {
    id: 10,
    question:
      "What Does Amazon #1 Bestseller Mean, and How Can You Guarantee It?",
    ans: "Achieving the status of a Bestselling Author is a writer's ultimate aspiration, and with comprehensive marketing, it becomes attainable. Just like the recognizable orange Bestseller tag on many products on Amazon India, we offer a similar service. Through extensive marketing efforts, we ensure your book becomes an #1 Bestseller on Amazon India. Our marketing strategy incorporates Facebook & Instagram Ads, Amazon Ads, and Email Marketing, with a minimum daily expenditure of 15k. This exclusive service is available in our premium packages. You can add on this service to any other plan. The book attains Bestseller status on Amazon Kindle across various categories after careful market analysis. Kindle is chosen for its swift Ebook delivery within seconds, compared to the minimum 2 days for paperbacks.",
  },
  {
    id: 11,
    question: "What Are the Benefits of Participating in Bookfairs?",
    ans: "Bookfairs serve as pivotal occasions for book signing events, author discussion panels, and book launches. They play a crucial role as a significant marketplace for offline book sales and fostering author-audience interactions. We strongly recommend authors to launch their books at bookfairs for a robust kickstart in sales.",
  },
];

function FaqPage() {
  return (
    <div className={styles.FaqPage}>
      <AboutHeader />
      <FaqContent />
    </div>
  );
}
function AboutHeader() {
  return (
    <div className={styles.AboutHeader}>
      <div className={styles.textContent}>
        <h3>YOUR MOST COMMON QUESTIONS</h3>
        <h1>FAQs</h1>
      </div>
    </div>
  );
}

function FaqContent() {
  const [ansOpen, setAnsOpen] = useState(0);
  return (
    <ul className={styles.FaqQuestions}>
      {questionData.map((query) => (
        <FaqQuestions
          key={query.id}
          query={query}
          ansOpen={ansOpen}
          setAnsOpen={setAnsOpen}
        />
      ))}
    </ul>
  );
}
function FaqQuestions({ query, ansOpen, setAnsOpen }) {
  function handleAnsOpen(id) {
    setAnsOpen(id);
  }
  return (
    <li>
      <h3
        onClick={
          ansOpen === query.id
            ? () => handleAnsOpen(0)
            : () => handleAnsOpen(query.id)
        }
      >
        {query.question}
      </h3>
      {ansOpen === query.id && (
        <div className={styles.ansBox}>
          <p>{query.ans}</p>
        </div>
      )}
    </li>
  );
}

export default FaqPage;
