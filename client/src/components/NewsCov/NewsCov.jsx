import { Link, Link2 } from "react-feather";
import styles from "./NewsCov.module.css";
import { VisualElement } from "framer-motion";
function NewsCov() {
  return (
    <div className={styles.container}>
      <div className={styles.headText}>
        <h1>NEWS COVERAGES</h1>
      </div>
      <div className={styles.gallery}>
        <div className={styles.galleryRow}>
          <a href="https://www.outlookindia.com/amp/story/outlook-spotlight/-bigfoot-publishing-s-motive-is-to-make-authors-publishing-journey-simple-says-founder-deepak-yadav-news-233184">
            <img src="/newscov/out.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
          <a href="https://news24online.com/lifestyle/with-bigfoot-publications-authors-can-now-easily-diy-their-books/47398/">
            <img src="/newscov/news24.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
        </div>
        <div className={styles.galleryRow}>
          <a href="https://www.apnnews.com/bigfoot-publications-empowering-self-publishing-authors-worldwide/">
            <img src="/newscov/apn.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
          <a href="https://www.abplive.com/news/bigfoot-publishing-offering-do-it-yourself-publishing-over-3000-authors-connected-in-last-five-years-2386846">
            <img src="/newscov/abp.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
        </div>
        <div className={styles.galleryRow}>
          <a href="https://www.theweek.in/news/biz-tech/2022/11/22/with-his-brainchild-bigfoot-publications-deepak-yadav-brings-revolution-to-publishing-industry.amp.html">
            <img src="/newscov/week.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
          <a href="https://www.bhaskarhindi.com/business/news/bigfoot-publications-an-amazing-publication-475198">
            <img src="/newscov/dainik.jpg" />
            <span>
              READ FULL ARTICLE <Link />
            </span>
          </a>
        </div>
        <a className={styles.view}>VIEW MORE</a>
      </div>
    </div>
  );
}

export default NewsCov;
