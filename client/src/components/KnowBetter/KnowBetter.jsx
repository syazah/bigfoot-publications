import { useState } from "react";
import styles from "./KnowBetter.module.css";

const data = [
  [
    {
      id: 0,
      title: "AGREEMENT: NON EXCLUSIVE",
      desc: "It means the Authors has the freedom to publish their work with Bigfoot Publications as well as with any other publisher simultaneously.",
    },
    {
      id: 1,
      title: "COPYRIGHT",
      desc: "Copyright shall be registered in the name of the Author in every case. Bigfoot Publications hold no Copyright in Author’s work.",
    },
    {
      id: 2,
      title: "ISBN",
      desc: "International Standard Book Number is a mandatory number alloted by Govt. of India for every book which is published in India for Commercial Purpose. ISBN is mandatory for selling books on every e-commerce website like Amazon and Flipkart.",
    },
    {
      id: 3,
      title: "BARCODE & QR CODE",
      desc: "We will make a Barcode and QR code for the allotted ISBN number provided by Govt. This Barcode and QR code shall be placed at the back cover of the book making it easy for bookstore owners to identify the product and manage inventory.",
    },
  ],
  [
    {
      id: 0,
      title: "PROJECT MANAGER",
      desc: "Project manager is the person who has been assigned to the author and will be responsible for complete hand holding during the project. It will be the immediate person of contact between Author and Publisher.",
    },
    {
      id: 1,
      title: "GUIDED PUBLISHING",
      desc: "The author will be Guided at every step of publishing like Cover Design, Editing, Formatting & Layout, Printing and how to market the book by our experts.",
    },
    {
      id: 2,
      title: "DAILY UPDATES",
      desc: "The Project manager will be responsible for providing Daily Updates regarding the book until all the services mentioned in the author’s agreement are fulfilled.",
    },
    {
      id: 3,
      title: "WHATSAPP SUPPORT",
      desc: "Once the Agreement has been signed, Creating a Whatsapp group is the first thing we do. This Whatsapp group involves the concern team handling the project involving Cover Designer, Project Manager, Editor, Formatter, Marketeer and others. The sole purpose of this Whatsapp group is to make the Author's publishing journey hassle free and author need not to Email us over every suggestion we offer. We will share Daily Updates, Cover Designs, Formatted Draft and Marketing updates, Sales Report in the Whatsapp Group.",
    },
  ],
  [
    {
      id: 0,
      title: "COVER DESIGN",
      desc: "Who doesn’t judge a book by its cover? Our team will connect with Author for their cover designing idea and will come up with something similar. The cover design will be coloured in every  Package. In Silver and Gold Plan, 1 and 2 Cover Design suggestions shall be provided from Scratch, Author cannot ask to remake the cover design from scratch on a new idea under Silver and Gold Plan, however they can make any number of changes regarding Font Style, Colour Scheme and Layout. From Platinum Plan onwards, Unlimited Designs can be made from Scratch until Author’s Satisfaction.",
    },
    {
      id: 1,
      title: "COVER LAMINATION",
      desc: "Lamination Helps the book against dirt and moisture. Glossy is Shiny lamination While Matte is Dull lamination. Matte Lamination is currently in trend.",
    },
    {
      id: 2,
      title: "  EDITING",
      desc: "Editing means removing errors from the manuscript and using better expressions, words and vocabulary to make the draft more gripping for the reader.Proof Reading means the basic editing where spelling errors and punctuation are rectified from the draft. Copy Editing means Proof Reading plus focus on grammar and vocabulary.Substantive Editing/In Line Editing focus on rephrasing/rewriting the complete draft in a professional manner and omit or remove the unwanted, jarring and boring paragraphs from the manuscript without changing storyline. ",
    },
    {
      id: 3,
      title: "WHATSAPP SUPPORT",
      desc: "Once the Agreement has been signed, Creating a Whatsapp group is the first thing we do. This Whatsapp group involves the concern team handling the project involving Cover Designer, Project Manager, Editor, Formatter, Marketeer and others. The sole purpose of this Whatsapp group is to make the Author's publishing journey hassle free and author need not to Email us over every suggestion we offer. We will share Daily Updates, Cover Designs, Formatted Draft and Marketing updates, Sales Report in the Whatsapp Group.",
    },
    {
      id: 4,
      title: "FORMATTING",
      desc: "Formatting & Layout means converting a edited file into a standard book size as per international standards using correct combination of font schemes, headings, font colour, illustrations, text etc. which varies from project to project.",
    },
    {
      id: 5,
      title: "A+ LISTING",
      desc: "A+ listing means adding pictures, illustrations and highlights in the description of the product page on Amazon and Flipkart.  ",
    },
    {
      id: 6,
      title: "DUMMY COPY",
      desc: "A printed copy is provided to the Author’s address via courier before mass printing and launching the book on E commerce websites. Author’s approval is required to start mass production of the book. If there are any changes in the manuscript regarding editing and layout, they will be entertained too. ",
    },
    {
      id: 7,
      title: "INTERIOR",
      desc: "Interior refers to the Interior pages of the book either Black and White (for Fictions, Non fictions, poetry and General reads) or Coloured Pages (for Children literature, Coffee Table Books). Cover Design in both the cases will be in Coloured format.  ",
    },
  ],
  [
    {
      id: 0,
      title: "MAXIMUM PAGES",
      desc: "Maximum Pages means the total number of pages we entertain in the standard book size. Additional Pages in the manuscript will cost Rs. 50/page for lifetime. Example: Author choose Gold Plan which consists of 150 Pages, and after formatting as per international standard, the book ends up in 200 Pages, the author needs to pay for 50 additional pages at Rs. 50/page (i.e. 50 additional pages x Rs 50/page = Rs. 2500)  at the time of final instalment paid to the company. The standard book size is 5.5x8.5 inches. ",
    },
    {
      id: 1,
      title: "BOOK SIZE: ",
      desc: "The standard book size of 5.5x8.5 inches else specified by the Author. Book size can be altered by mutual discussion between author and publisher. ",
    },
    {
      id: 2,
      title: "AUTHOR COPIES",
      desc: "These are free copies provided to the author by publishing house via courior. Additional number of author copies will be provided to the author at manufacturing cost of the book plus courior/transport charges.",
    },
    {
      id: 3,
      title: "PAPERBACK/HARDBOUND",
      desc: "Paperbacks are books with soft cover and perfect binding. Recommended for books with 100 to 250 pages. Hardbounds are books with Hard thick covers (like cover of a Diary) and Saddle stitch binding (binding using needle and thread) is used. Recommended for books with under 100 pages (because books under 100 pages are very thin and doesn’t look good in shape) or over 250 pages (because books with 250+ pages look very thick and paperback binding is not sufficient to handle the weight of the book).Hardbound books look premium and majorly used for gifting purpose and bookstore distribution. Hardbound books have at least 50% more MRP than Paperbacks.   ",
    },
    {
      id: 4,
      title: "SIMPLEX COVER/DUPLEX COVER",
      desc: "Simplex Cover mean the cover has design on the exterior part of the cover.Duplex Cover means the cover has design on the exterior as well as the interior part of the book. Duplex covers are used for putting author pictures in the interior part of the book. ",
    },
    {
      id: 5,
      title: "E-BOOK",
      desc: "E-book or Electronic Books are the digital version of the book available for audience on Cell phones, Desktops and Devices like Kindle. We make the E-book Available on Amazon Kindle, Google Playbook, Kobo and Apple Books. ",
    },
    {
      id: 6,
      title: "PRIME LISTING",
      desc: "Prime listing on Amazon and Assured listing on Flipkart means free delivery charges for the customer and PAN India 48 hours delivery from the date of purchase of the book. Prime listing valid for Paperbacks and Hardbounds only. E-books and Audiobooks delivery time is 60 seconds.",
    },
    {
      id: 7,
      title: "PRE-ORDER ON AMAZON",
      desc: "Attract your Audience by keeping your book on Pre-Orders on Amazon India, Amazon Global and E-book on Amazon Kindle. You can select 10, 15, 20, 30 days as Pre-Order duration for your readers. Pre-Orders helps in getting attention from readers.",
    },
    {
      id: 8,
      title: "AUDIOBOOK",
      desc: "An Audiobook will be created by our professional voice over artist/narrator for your book. WE DO NOT USE ANY ARTIFICIAL INTELLIGENCE (AI) TOOL FOR CREATING AUDIOBOOKS. Audiobooks are distributed on Audible, Storytel and MyAudioBits.com. The maximum number of pages for Audiobook creation is 100 pages in standard book size.  Additional pages will cost Rs. 150/page additional.",
    },
  ],
  [
    {
      id: 0,
      title: "AMAZON & FLIPKART DISTRIBUTION",
      desc: "Your book will be available Nationwide (Indiawide) as Paperback/Hardbound across Amazon and Flipkart. ",
    },
    {
      id: 1,
      title: "GLOBAL ONLINE DISTRIBUTION",
      desc: "Your book will be available Globally as Paperback/Hardbound, E-Book or Audiobook across 131 countries via Amazon and affiliates. Countries include: China, United States, Indonesia, Pakistan,Nigeria,Brazil,Bangladesh,Russia,Mexico,Japan,Philippines,Egypt,Vietnam,Turkey,Germany,Thailand,Tanzania,United Kingdom, France,South Africa,Italy,Kenya,Colombia,South Korea,Uganda,Spain,Algeria,Argentina,Poland,Canada,Morocco,Ukraine,Angola,Saudi Arabia,Ghana,Peru,Malaysia,Venezuela, Cameroon,Australia,Taiwan,Sri Lanka,Kazakhstan,Chile,Romania,Ecuador,Guatemala,Senegal,Netherlands,Cambodia,Zimbabwe,Bolivia,Tunisia,Belgium,Dominican Republic Jordan,Honduras,Sweden,Czech Republic,Greece,Portugal,Hungary,United Arab Emirates,Belarus,Israel,Austria,Switzerland,Hong Kong,Serbia,Paraguay,Kyrgyzstan, Bulgaria,El Salvador,Singapore,Denmark,Slovakia,Finland,Norway,Palestine,New Zealand,Costa Rica,Ireland,Oman,Panama,Kuwait,Croatia,Uruguay,Bosnia,Herzegovina, Albania,Jamaica, Armenia,Qatar,Botswana,Lithuania,Namibia,Slovenia,Latvia,Trinidad,Tobago,Bahrain,Estonia,Mauritius,Cyprus,Reunion Fiji, Macau,Luxembourg,Malta, Belize, Guadeloupe,Iceland,Martinique, Mayotte,French Guiana,New Caledonia,Barbados,Micronesia,Aruba,Andorra,Cayman Islands,Bermuda,Saint Kitts,Nevis Marshall Islands, Liechtenstein,Monaco,San Marino,Gibraltar,Saint Martin,Palau,Saint Barthelemy,Vatican City",
    },
    {
      id: 2,
      title: "GLOBAL OFFLINE DISTRIBUTION",
      desc: "Your book will be available Globally as Paperback/Hardbound  across selected Walmart, Target and Barnes & Noble book stores in USA, UK and Australia. ",
    },
    {
      id: 3,
      title: "KINDLE AND PLAYBOOK",
      desc: "The book will be available on Amazon Kindle and Google Playbook worldwide.",
    },
    {
      id: 4,
      title: "STOCK & REPRINTING",
      desc: "We will be stocking and reprinting the book at our own expenses. The author do not need to pay any upfront fee for reprinting the book in lifetime. ",
    },
  ],
  [
    {
      id: 0,
      title: "AMAZON #1 BESTSELLER",
      desc: "We guarantee that the book will hit #1 position on Amazon. Our marketing team will analyse the competition and run ads until your book gets #1 position. Marketing shall be done for Kindle version. Once the book get #1 Bestseller position, we will add a strip ‘Amazon #1 Bestseller’ on the paperback/hardbound version of your book. It will help in getting attention from readers worldwide.  ",
    },
    {
      id: 1,
      title: "DIGITAL NEWSPAPER REVIEWS",
      desc: "We will get reviews from popular digital newspapers like Daily hunt, Medium.com which have potential reader base of 1 million plus audience. We have tie-up with more than 200 digital newspapers in India.",
    },
    {
      id: 2,
      title: "PRINTED NEWSPAPER REVIEWS",
      desc: "We will get reviews from popular digital newspapers like Times of India, Hindustan Times, Mid Day, Navbharat Times etc which have potential reader base of 10 million plus audience. We have tie-up with 12 such newspapers in India including India Today, Financial Express, ABP news. ",
    },
    {
      id: 3,
      title: "BOOKSTORE DISTRIBUTION",
      desc: "We will distribute your book in premium bookstores like Oxford, Sapna Bookstores, Crossword, Higgin Botthoms, Starmark, Bahrisons, Om Bookstores, Midland, Blossoms, Kitaabkhana and WH Smith. The distribution shall be done city wise. 1 city consists of 5 premium bookstores. The shelf life is 3 months. The initial number of copies sent to these stores shall be 5 in number which are subject to replenish as per demand. The cities where we distribute are Delhi/NCR, Mumbai, Kolkata, Chennai, Bengaluru and Jaipur.",
    },
    {
      id: 4,
      title: "AUTHOR WEBSITE",
      desc: "Author website helps in getting recognition on Google search and works as SEO. We will offer you templates for author website. The text and pictures in the website shall be provided by the author. Our service include Designing, Domain registration, Hosting and 1 year maintenance. ",
    },
    {
      id: 5,
      title: "DIGITAL POSTERS",
      desc: "We will create graphics and posts with your book using a good background solely for social media promotions. ",
    },
    {
      id: 6,
      title: "AMAZON BOOK REVIEWS",
      desc: "Your book/e-book will be provided to professional book reviewers who will be reviewing and rating your book critically ON Amazon India. These reviews will be visible to global audience across 130 countries where amazon distributes the book. Reviewers take 30 working days to read and drop a review on your book. Additional book reviews apart from publishing plan will cost Rs. 200/review. Recommended reviews on Amazon shall be 300, the more is the quantity of reviews, the more attention and trust it built in reader’s mind.  ",
    },
    {
      id: 7,
      title: "GOODREADS BOOK REVIEWS",
      desc: "Your book/e-book will be provided to professional book reviewers who will be reviewing and rating your book critically on Goodreads.com. Goodreads is the world’s largest social media platform for readers and writers. Reviewers take 30 working days to read and drop a review on your book and is generally done by the same set of people who are reviewing on Amazon and is covered along with Amazon reviews without any additional cost. ",
    },
    {
      id: 8,
      title: "BOOKFAIR DISTRIBUTION",
      desc: "We make the book available in Delhi World Bookfair, Lucknow Bookfair and Pune International Bookfair for 1 year. The author will be invited in these bookfair for signing event.",
    },
    {
      id: 9,
      title: "PODCAST INTERVIEW",
      desc: "Podcast interview will be done on Swell App. The App is available on iOS and Andriod store. It will be a 30 minutes podcast interview and the author can connect remotely from their homes. It will be an Audio Only Podcast. No physical appearance is required. Questionnaire will be provided to the author before hand. ",
    },
    {
      id: 10,
      title: "VIDEO TRAILER",
      desc: "Video Trailer will be created by our designers for engaging the audience. The maximum video duration is 60 seconds. The video trailer will be uploaded to our official Facebook, Instagram and YouTube portals.",
    },
    {
      id: 11,
      title: "AMAZON SPONSORED ADS",
      desc: "You must have seen the keyword ‘Sponsored’ under many products on Amazon and other e-commerce websites. These are Amazon Ads and we can target customers who are searching books in your genre. Suppose you write Mythological Fiction, then your Ad will be places below Amish Tripathy’s book who write in the same genre. It increases the chance of sale to 70% than usual.  ",
    },
    {
      id: 12,
      title: "VIDEO TRAILER",
      desc: "Video Trailer will be created by our designers for engaging the audience. The maximum video duration is 60 seconds. The video trailer will be uploaded to our official Facebook, Instagram and YouTube portals.",
    },
    {
      id: 13,
      title: "AMAZON SPONSORED ADS",
      desc: "You must have seen the keyword ‘Sponsored’ under many products on Amazon and other e-commerce websites. These are Amazon Ads and we can target customers who are searching books in your genre. Suppose you write Mythological Fiction, then your Ad will be places below Amish Tripathy’s book who write in the same genre. It increases the chance of sale to 70% than usual. ",
    },
    {
      id: 14,
      title: "AMAZON AUTHOR PAGE SETUP",
      desc: "Amazon Author Page will be created so that your readers get to know when your next book is hitting the market.",
    },
    {
      id: 15,
      title: "FACEBOOK AND INSTAGRAM ADS",
      desc: "The world is online and so are your readers. Why not target them online via Facebook or Instagram ads? Most probably you are visiting our website because you have clicked our target ad regarding book publishing on Instagram or Facebook. We will be reaching a wider target audience with Facebook and Instagram.  ",
    },
    {
      id: 16,
      title: "BOOK LAUNCH EVENT",
      desc: "We will organize a book launch event in a reputed bookstore/Art Gallery preferably in Delhi/NCR. The Videography, Moderation, Snacks and Photography of the complete event will be done by Publisher. The audience will be invited by Author. ",
    },
    {
      id: 17,
      title: "SIGNING EVENT",
      desc: "Same as Book Launch event. ",
    },
    {
      id: 18,
      title: "EMAIL MARKETING",
      desc: "We share 2 sample chapters, book cover design, Amazon Paperback and E-book link, Author’s bio in an Email body to more than 15,000 authors who have contacted us since inception of Bigfoot Publications. The sales generation from Email Marketing is less than 1% in India.",
    },
    {
      id: 19,
      title: "COVER REVEAL CONTEST",
      desc: "We will hide few letters from your book title and ask the audience to guess it on social media platforms like Instagram and Facebook. The person who guesses it right, are provided with Rs. 500 Amazon Giftcard to purchase your book. The sole purpose of this marketing is to get engagement from readers. ",
    },
    {
      id: 20,
      title: "YOUTUBE AD CAMPAIGN",
      desc: "We will run ad of your book video trailer on YouTube targeting readers who are interested in your genre. ",
    },
    {
      id: 21,
      title: "WHATSAPP MARKETING",
      desc: "We share 2 sample chapters, book cover design, Amazon Paperback and E-book link, Author’s bio in WhatsApp message to more than 6,000 writers who have contacted us since inception of Bigfoot Publications. The sales generation from WhatsApp Marketing is less than 1% in India but comparatively more than Email Marketing.",
    },
    {
      id: 22,
      title: "BOOK AWARD NOMINATION",
      desc: "We will nominate your book for Regional, National and International Awards. If any fee is needed to pay for nomination, it will be paid by the author.",
    },
    {
      id: 23,
      title: "LIBRARY DISTRIBUTION",
      desc: "We will distribute your book in School, College and Public Libraries in 50+ institutions across India including BITS Pilani, Banaras Hindu University, Aligarh Muslim University, Delhi University, JNU, Jamia Millia Islamia, Rajiv Gandhi University and more.",
    },
  ],
  [
    {
      id: 0,
      title: "AUTHOR DASHBOARD",
      desc: "Author Dashboard will be provided to author once the book is live on Amazon and other stores. This Dashboard will be updated between 20th to 30th of every month along with the generated Royalties. The minimum withdrawal threshold is Rs. 2500. ",
    },
    {
      id: 1,
      title: "ROYALTY",
      desc: "We offer highest in Industry royalty which is 100% of the profit. Profit can be calculated by this equation. MRP minus (Book manufacturing cost + E-commerce website charges). Kindly use Royalty Calculator to get an estimate of manufacturing cost and minimum MRP.  ",
    },
  ],
];

function KnowBetter() {
  const [currentId, setCurrentId] = useState(0);
  function handleSelectChange(id) {
    setCurrentId(id);
  }
  return (
    <div className={styles.knowbetter}>
      <div className={styles.headText}>
        <h1>&uArr; WHAT THESE SERVICES MEAN ? &uArr;</h1>
      </div>
      <div className={styles.buttonRow}>
        <h3>Select The Type Of Service</h3>
        <select onChange={(e) => handleSelectChange(e.target.value)}>
          <option value={0}>LEGAL</option>
          <option value={1}>SUPPORT</option>
          <option value={2}>DESIGNING</option>
          <option value={3}>PRINTING</option>
          <option value={4}>DISTRIBUTION</option>
          <option value={5}>MARKETING</option>
          <option value={6}>SALES REPORT</option>
        </select>
      </div>
      <div className={styles.detailList}>
        <div className={styles.detailelements}>
          {data[currentId].map((data) => (
            <Details data={data} currentId={currentId} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Details({ data }) {
  return (
    <li>
      <h2>&bull; {data.title}</h2>
      <p>{data.desc}</p>
    </li>
  );
}

export default KnowBetter;
