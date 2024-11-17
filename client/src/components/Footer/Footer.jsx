import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "react-feather";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.footer}>
      <FooterHeader />
      <FooterRow />
      <FooterRow2 />
    </div>
  );
}

function FooterHeader() {
  return (
    <div className={styles.footerHeader}>
      <h2>Bigfoot Publications India </h2>
      <p>
        Bigfoot publications an international publishing house based in India &
        Sri Lanka aimed at providing hassle free publishing experience to
        budding Authors & writers. Not just online we provide offline
        distributions to Oxford, Crossword, Bahrisons, Kitaab Khana much more
      </p>
    </div>
  );
}

function FooterRow() {
  return (
    <div className={styles.footerRow}>
      <div className={styles.footerColumn}>
        <img src="LOGO3.png" />
      </div>
      <div className={styles.footerColumn}>
        <h3>Links</h3>
        <Link className={styles.linkFooter} to="/">
          Home
        </Link>
        <Link className={styles.linkFooter} to="/packages">
          Packages
        </Link>
        <Link className={styles.linkFooter} to="/catalogue">
          Catalogue
        </Link>
        <Link className={styles.linkFooter} to="/catalogue">
          Order
        </Link>
        <Link className={styles.linkFooter} to="/company">
          Company
        </Link>
        <Link className={styles.linkFooter} to="/blogs">
          Blogs
        </Link>
        <Link className={styles.linkFooter} to="/anthology">
          Anthology
        </Link>
        <Link
          className={styles.linkFooter}
          to="https://bigfootpublicationstraditional.in/"
        >
          Order Books
        </Link>
      </div>

      <div className={styles.footerColumn}>
        <h3>Follow Us</h3>
        <a href="https://www.instagram.com/bigfoot_publications/">
          <Instagram className={styles.icon} />
        </a>
        <a href="https://www.facebook.com/BigfootPublicationsIndia">
          <Facebook className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/company/bigfootpublications/mycompany/">
          <Linkedin className={styles.icon} />
        </a>
        <a href="https://www.youtube.com/@bigfootpublications">
          <Youtube className={styles.icon} />
        </a>
        <a href="https://linktr.ee/BigFootPublications">LINKTREE</a>
      </div>

      <div className={styles.footerColumn}>
        <h3>Address</h3>
        <h4>
          📌 1st Floor, BSR Building, Daulatabad Flyover, Phase 2 Gurugram,
          122001, HR, India, 110059, Delhi, India
        </h4>
        <h4>
          📌 171/1 Panchikawatte Road, Colombo, Sri Lanka (+94) ( 011) 2438236
        </h4>
      </div>

      <div className={styles.socialLinkContact}>
        <h3>Contact Us </h3>
        <h4>📞 (IN) +91 86848 69690</h4>
        <h4>📞 (IN) +91 120 466 2941</h4>
        <h4>📞 (+94) ( 011) 2439454</h4>
        <a download href="privacy.pdf">
          🔏 PRIVACY POLICY{" "}
        </a>
      </div>
    </div>
  );
}
function FooterRow2() {
  return (
    <div className={styles.footerRowSocial}>
      <div className={styles.mapAc}>
        <div className={styles.mappcontainer}>
          <iframe
            width="600"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=1st%20Floor,%20BSR%20Building,%20Daulatabad%20Flyover,%20Phase%202%20Gurugram,%20122001,%20HR,%20India,%20110059,%20Delhi,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
          ></iframe>
          <video autoPlay muted loop src="/sampletour.mp4" />
        </div>
        <button>VISIT US</button>
      </div>
    </div>
  );
}
function FooterRow3() {
  return <div className={styles.footerRowSocial}></div>;
}
function FooterRow4() {
  return (
    <div className={styles.footerRow}>
      <a
        href="https://www.flaticon.com/free-stickers/library"
        title="library stickers"
        style={{ color: "white" }}
      ></a>
    </div>
  );
}

export default Footer;
