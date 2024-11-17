import BlogNavbar from "../BlogNavbar/BlogNavbar";
import PreLoader from "../PreLoader/PreLoader";
import styles from "./BlogContent.module.css";

const BlogCon = [
  {
    id: 0,
    title:
      "Unveiling the Mysteries: Bigfoot Publications and their Impact on Gurgaon's Literary Scene",
    date: "5 Jan 2023",
    img: "/BLOG/mystery.png",
    p: "In the bustling city of Gurgaon, known for its towering skyscrapers and thriving corporate culture, a quiet revolution is taking place within the realm of literature. Bigfoot Publications, a prominent publishing house, has been leaving an indelible mark on the city's literary landscape....",
    url: "/mystery",
  },
  {
    id: 1,
    title:
      "Unveiling Excellence: Why Bigfoot Publications Reigns Supreme in the Indian Publishing Landscape",
    date: "17 Jan 2024",
    img: "/BLOG/excel.png",
    p: "In the vibrant and diverse literary landscape of India, where countless publishing houses strive for prominence, one name stands out as a beacon of excellence – Bigfoot Publications....",
    url: "/excel",
  },
  {
    id: 2,
    title:
      "Unveiling the Enigma: Bigfoot Publications - India's Best Publishers",
    date: "29 Jan 2024",
    img: "/BLOG/enigma.png",
    p: "In the vast landscape of India's publishing industry, one name stands out for its exceptional commitment to quality and innovation - Bigfoot Publications. As a leading player in the field, Bigfoot Publications has garnered a stellar reputation for producing top-notch content across various genres....",
    url: "/enigma",
  },
];

function BlogExcel() {
  return (
    <div>
      <PreLoader />
      <BlogNavbar />
      <BlogContent />
    </div>
  );
}
function BlogContent() {
  return (
    <div className={styles.blogcontent}>
      <MainContent />
      <SideBar />
    </div>
  );
}
function SideBar() {
  return (
    <div className={styles.SideBar}>
      <div className={styles.headerRow}>
        <h1>POPULAR POSTS</h1>
      </div>
      {BlogCon.map((blog) => (
        <SideBarComponent blog={blog} />
      ))}
    </div>
  );
}
function SideBarComponent({ blog }) {
  return (
    <div className={styles.SideBarCard}>
      <img src={blog.img} />
      <div className={styles.textContent}>
        <p>{blog.title}</p>
        <h5>{blog.date}</h5>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className={styles.MainContentText}>
      <div className={styles.imageContainer}>
        <img src="/BLOG/excel.png" />
      </div>
      <h1>
        Unveiling Excellence: Why Bigfoot Publications Reigns Supreme in the
        Indian Publishing Landscape
      </h1>
      <h2>Introduction:</h2>
      <p>
        In the vibrant and diverse literary landscape of India, where countless
        publishing houses strive for prominence, one name stands out as a beacon
        of excellence – Bigfoot Publications. Renowned for its unwavering
        commitment to quality, innovation, and author empowerment, Bigfoot
        Publications has carved a niche for itself as the go-to publishing house
        in the country. In this article, we delve into the key factors that make
        Bigfoot Publications the undisputed leader in Indian publishing.
      </p>
      <ol>
        <li>
          <h2>1. Diverse and Inclusive Portfolio:</h2>
          <p>
            Bigfoot Publications takes pride in its diverse and inclusive
            approach to publishing. From fiction to non-fiction, poetry to
            academic works, Bigfoot caters to a wide array of genres and
            subjects. This commitment to diversity ensures that authors from
            various backgrounds and genres find a welcoming platform for their
            creative expressions.
          </p>
        </li>
        <li>
          <h2>2. Author-Centric Philosophy:</h2>
          <p>
            Unlike many publishing houses that treat authors as mere content
            providers, Bigfoot Publications adopts an author-centric philosophy.
            The team at Bigfoot works closely with authors, offering support at
            every stage of the publishing journey. This hands-on approach
            fosters a collaborative environment, allowing authors to realize
            their creative vision while benefiting from the expertise of
            seasoned professionals.
          </p>
        </li>
        <li>
          <h2>3. State-of-the-Art Production Quality:</h2>
          <p>
            Bigfoot Publications is synonymous with top-notch production
            quality. The company employs cutting-edge printing technologies and
            design aesthetics that elevate the visual appeal of each
            publication. Whether it's hardcovers, paperbacks, or digital
            editions, Bigfoot ensures that every book is a masterpiece in terms
            of both content and presentation.
          </p>
        </li>
        <li>
          <h2>4. Global Reach and Distribution:</h2>
          <p>
            Recognizing the importance of global exposure, Bigfoot Publications
            has established a robust distribution network. Through strategic
            partnerships and collaborations, Bigfoot ensures that its
            publications reach readers not only across India but also on a
            global scale. This global reach amplifies the impact of each work
            and contributes to the international recognition of Bigfoot authors.
          </p>
        </li>
        <li>
          <h2> 5. Innovative Marketing Strategies:</h2>
          <p>
            In the dynamic world of publishing, effective marketing is crucial.
            Bigfoot Publications stands out for its innovative marketing
            strategies that go beyond traditional approaches. Leveraging digital
            platforms, social media, and events, Bigfoot maximizes the
            visibility of its authors and their works, ensuring they reach a
            wider audience.
          </p>
        </li>
        <li>
          <h2> 6. Commitment to Literary Excellence:</h2>
          <p>
            At the core of Bigfoot Publications' success is an unwavering
            commitment to literary excellence. The editorial team, comprising
            seasoned professionals with a keen eye for quality, ensures that
            every manuscript undergoes a meticulous editing process. This
            commitment has earned Bigfoot the reputation of being a curator of
            exceptional literary works.
          </p>
        </li>
        <li>
          <h2> Conclusion:</h2>
          <p>
            Bigfoot Publications has emerged as a trailblazer in the Indian
            publishing industry, setting new standards of excellence and
            innovation. Its author-centric approach, commitment to diversity,
            top-tier production quality, global reach, innovative marketing
            strategies, and dedication to literary excellence collectively make
            Bigfoot Publications the best publishing house in India. For authors
            aspiring to see their works not only published but celebrated,
            Bigfoot Publications is undeniably the ideal partner in their
            literary journey.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default BlogExcel;
