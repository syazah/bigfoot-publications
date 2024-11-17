import styles from "./HeaderSection.module.css";
function NewsSection() {
  return (
    <div className={styles.newsmain}>
      <a
        target="_blank"
        href="https://www.businessworld.in/article/Bigfoot-Publications-Evolves-With-Changing-Trends-In-The-Publishing-Industry/12-11-2022-453904/"
        className={styles.headSliderText}
      >
        <p>
          Bigfoot Publications Evolves With Changing Trends In The Publishing
          Industry
        </p>
        <h4>Business World</h4>
      </a>
      <a
      target="_blank"
        href="https://www.theweek.in/news/biz-tech/2022/11/22/with-his-brainchild-bigfoot-publications-deepak-yadav-brings-revolution-to-publishing-industry.html"
        className={styles.headSliderText}
      >
        <p>
          With his brainchild Bigfoot Publications, Deepak Yadav brings
          revolution to Publishing industry
        </p>
        <h4>The Week</h4>
      </a>
      <a
      target="_blank"
        href="https://www.mid-day.com/brand-media/article/bigfoot-publications-an-initiative-to-ease-up-the-journey-of-new-writers-23254497"
        className={styles.headSliderText}
      >
        <p>
          Bigfoot Publications-An initiative to ease up the journey of new
          writers
        </p>
        <h4>Mid Day</h4>
      </a>
      <a
      target="_blank"
        href="https://www.outlookindia.com/outlook-spotlight/-bigfoot-publishing-s-motive-is-to-make-authors-publishing-journey-simple-says-founder-deepak-yadav-news-233184"
        className={styles.headSliderText}
      >
        <p>
          Bigfoot Publications Motive Is To Make Authors' Publishing Journey
          Simple.
        </p>
        <h4>Outlook India</h4>
      </a>
      <a
      target="_blank"
        href="https://news24online.com/lifestyle/with-bigfoot-publications-authors-can-now-easily-diy-their-books/47398/"
        className={styles.headSliderText}
      >
        <p>With Bigfoot Publications, Authors Can Now Easily DIY Their Books</p>
        <h4>News 24</h4>
      </a>
    </div>
  );
}

export default NewsSection;
