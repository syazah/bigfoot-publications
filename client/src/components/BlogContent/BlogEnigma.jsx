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

function BlogEnigma() {
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
        <img src="/BLOG/enigma.png" />
      </div>
      <h1>
        Unveiling the Enigma: Bigfoot Publications - India's Best Publishers
      </h1>
      <h2>Introduction:</h2>
      <p>
        In the vast landscape of India's publishing industry, one name stands
        out for its exceptional commitment to quality and innovation - Bigfoot
        Publications. As a leading player in the field, Bigfoot Publications has
        garnered a stellar reputation for producing top-notch content across
        various genres. This article delves into the reasons why Bigfoot
        Publications is considered among the best publishers in India, exploring
        their rich history, diverse portfolio, and their commitment to fostering
        literary excellence.
      </p>
      <ol>
        <li>
          <h2>1. History and Legacy:</h2>
          <p>
            Established with a vision to redefine the publishing landscape,
            Bigfoot Publications has a rich history that spans several decades.
            Since its inception, the company has been at the forefront of
            introducing groundbreaking literature that resonates with readers of
            all ages. With a legacy built on passion, creativity, and a
            relentless pursuit of excellence, Bigfoot Publications has carved a
            niche for itself in the dynamic world of Indian publishing.
          </p>
        </li>
        <li>
          <h2>2. Diverse Portfolio:</h2>
          <p>
            One of the key factors that set Bigfoot Publications apart is its
            diverse portfolio. Catering to a wide range of readers, the company
            publishes books across various genres, including fiction,
            non-fiction, academic, and children's literature. This diverse
            approach ensures that Bigfoot Publications has something to offer
            for every type of reader, making them a go-to choice for
            bibliophiles with varied tastes.
          </p>
        </li>
        <li>
          <h2>3. Quality Content:</h2>
          <p>
            Quality is at the core of Bigfoot Publications' ethos. The company
            is known for its stringent editorial standards, ensuring that each
            publication meets the highest benchmarks of literary excellence.
            Authors collaborating with Bigfoot Publications benefit from a team
            of experienced editors and professionals who work tirelessly to
            refine and enhance the content, ensuring that it captivates and
            engages the audience.
          </p>
        </li>
        <li>
          <h2>4. Innovation and Adaptability:</h2>
          <p>
            In an era of digital transformation, Bigfoot Publications has
            demonstrated a remarkable ability to innovate and adapt to the
            evolving publishing landscape. Embracing technology, the publisher
            has successfully ventured into e-books, audiobooks, and other
            digital formats, making their content accessible to a broader
            audience. This forward-thinking approach has solidified Bigfoot
            Publications' position as an industry leader.
          </p>
        </li>
        <li>
          <h2> 5. Author-Centric Approach:</h2>
          <p>
            Bigfoot Publications takes pride in its author-centric approach. The
            publisher understands the significance of nurturing talent and works
            closely with both established and emerging authors. This
            collaborative spirit fosters a supportive environment where
            creativity flourishes, resulting in literary works that leave a
            lasting impact on readers.
          </p>
        </li>
        <li>
          <h2> 6. Community Engagement:</h2>
          <p>
            Beyond the realm of publishing, Bigfoot Publications actively
            engages with the literary community through events, workshops, and
            collaborations. By fostering a sense of community, the publisher not
            only contributes to the growth of individual authors but also plays
            a role in shaping the broader literary landscape in India.
          </p>
        </li>
        <li>
          <h2> 6. Conclusion:</h2>
          <p>
            In the realm of Indian publishing, Bigfoot Publications stands tall
            as a beacon of quality, innovation, and literary excellence. With a
            rich history, a diverse portfolio, and an unwavering commitment to
            authors and readers alike, the publisher has rightfully earned its
            place among the best in the industry. As we look towards the future
            of Indian literature, it's evident that Bigfoot Publications will
            continue to play a pivotal role in shaping the narrative and
            bringing exceptional stories to readers across the nation and
            beyond.
          </p>
        </li>
      </ol>
    </div>
  );
}

export default BlogEnigma;
