import { Link } from "react-router-dom";
import styles from "./BlogContent.module.css";

const BlogCon = [
  {
    id: 0,
    title:
      "Unveiling the Mysteries: Bigfoot Publications and their Impact on Gurgaon's Literary Scene",
    date: "5 Jan 2023",
    img: "/BLOG/mystery.jpg",
    p: "In the bustling city of Gurgaon, known for its towering skyscrapers and thriving corporate culture, a quiet revolution is taking place within the realm of literature. Bigfoot Publications, a prominent publishing house, has been leaving an indelible mark on the city's literary landscape....",
    url: "/mystery",
  },
  {
    id: 1,
    title:
      "Unveiling Excellence: Why Bigfoot Publications Reigns Supreme in the Indian Publishing Landscape",
    date: "17 Jan 2024",
    img: "/BLOG/excel.jpg",
    p: "In the vibrant and diverse literary landscape of India, where countless publishing houses strive for prominence, one name stands out as a beacon of excellence – Bigfoot Publications....",
    url: "/excel",
  },
  {
    id: 2,
    title:
      "Unveiling the Enigma: Bigfoot Publications - India's Best Publishers",
    date: "29 Jan 2024",
    img: "/BLOG/enigma.jpg",
    p: "In the vast landscape of India's publishing industry, one name stands out for its exceptional commitment to quality and innovation - Bigfoot Publications. As a leading player in the field, Bigfoot Publications has garnered a stellar reputation for producing top-notch content across various genres....",
    url: "/enigma",
  },
];

function BlogContent() {
  return (
    <div className={styles.blogcontentcontainer}>
      <div className={styles.mainVideo}>
        <h3>WE WRITE THE BEST, WE PUBLISH THE BEST</h3>
        <h1>BLOGS BY BIGFOOT PUBLICATIONS</h1>
      </div>
      <div className={styles.blogcontent}>
        <MainContent />
        <SideBar />
      </div>
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
    <div className={styles.MainContent}>
      {BlogCon.map((blog) => (
        <MainContentComponent blog={blog} />
      ))}
    </div>
  );
}

function MainContentComponent({ blog }) {
  return (
    <div className={styles.mainComponent}>
      <div>
        <img src={blog.img} alt="" />
      </div>
      <div className={styles.mainText}>
        <a>{blog.title}</a>
        <p>{blog.p}</p>
        <Link className={styles.readLink} to={blog.url}>
          <h6>READ MORE</h6>
        </Link>
      </div>
    </div>
  );
}

export default BlogContent;
