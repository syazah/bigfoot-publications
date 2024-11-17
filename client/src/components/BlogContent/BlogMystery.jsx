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

function BlogMystery() {
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
        <img src="/BLOG/mystery.png" />
      </div>
      <h1>
        Unveiling the Mysteries: Bigfoot Publications and their Impact on
        Gurgaon's Literary Scene
      </h1>
      <h2>Introduction:</h2>
      <p>
        In the bustling city of Gurgaon, known for its towering skyscrapers and
        thriving corporate culture, a quiet revolution is taking place within
        the realm of literature. Bigfoot Publications, a prominent publishing
        house, has been leaving an indelible mark on the city's literary
        landscape. This article delves into the fascinating world of Bigfoot
        Publications, exploring their journey, notable works, and the impact
        they've had on Gurgaon's literary community.
      </p>
      <ol>
        <li>
          <h2>1. The Genesis of Bigfoot Publications:</h2>
          <p>
            Bigfoot Publications, based in Gurgaon, was founded with a vision to
            bridge the gap between talented writers and avid readers.
            Established by a team of passionate literary enthusiasts, the
            publishing house has quickly become a cornerstone of the city's
            literary community. Their commitment to nurturing emerging voices
            and promoting diverse genres sets them apart in the competitive
            world of publishing.
          </p>
        </li>
        <li>
          <h2>2. A Diverse Array of Genres:</h2>
          <p>
            One of Bigfoot Publications' strengths lies in its commitment to
            publishing a diverse array of genres. From gripping mysteries and
            heartwarming romances to thought-provoking non-fiction, Bigfoot
            caters to a wide range of literary tastes. This diversity not only
            enriches the reading experience for Gurgaon's residents but also
            contributes to the city's cultural vibrancy.
          </p>
        </li>
        <li>
          <h2>3. Spotlight on Local Authors:</h2>
          <p>
            Bigfoot Publications has actively sought out and supported local
            talent in Gurgaon. By providing a platform for aspiring authors to
            showcase their work, the publishing house has played a pivotal role
            in nurturing the city's literary ecosystem. This focus on local
            voices fosters a sense of community and pride among Gurgaon's
            writers.
          </p>
        </li>
        <li>
          <h2>4. Collaborations and Literary Events:</h2>
          <p>
            In addition to publishing, Bigfoot actively engages with the local
            community through literary events, book launches, and
            collaborations. These initiatives not only bring authors and readers
            together but also contribute to the cultural enrichment of Gurgaon.
            By creating spaces for dialogue and celebration, Bigfoot
            Publications has become a catalyst for fostering a vibrant literary
            scene in the city.
          </p>
        </li>
        <li>
          <h2> 5. Digital Presence and Accessibility:</h2>
          <p>
            Recognizing the digital era's influence, Bigfoot Publications has
            strategically expanded its reach through an online presence. With an
            easily navigable website and a strong social media presence, the
            publishing house ensures that its publications are accessible to a
            global audience. This approach not only enhances the visibility of
            Gurgaon's literary offerings but also positions Bigfoot Publications
            as a modern and forward-thinking entity.
          </p>
        </li>
        <li>
          <h2> Conclusion:</h2>
          <p>
            Bigfoot Publications has emerged as a literary trailblazer in
            Gurgaon, contributing significantly to the city's cultural richness.
            Through its commitment to diversity, support for local authors, and
            active community engagement, Bigfoot has carved a niche for itself
            in the competitive world of publishing. As Gurgaon continues to
            evolve, the presence of such a dynamic publishing house ensures that
            the city's literary spirit remains alive and thriving.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default BlogMystery;
