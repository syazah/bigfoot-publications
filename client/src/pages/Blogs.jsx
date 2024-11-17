import BlogNavbar from "../components/BlogNavbar/BlogNavbar";
import PreLoader from "../components/PreLoader/PreLoader";
import styles from "./Blogs.module.css";
import BlogContent from "../components/BlogContent/BlogContent";
import Footer from "../components/Footer/Footer";
function Blogs() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <BlogNavbar />
      <BlogContent />
      <Footer />
    </div>
  );
}

export default Blogs;
