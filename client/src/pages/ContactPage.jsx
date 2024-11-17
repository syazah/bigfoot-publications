import Contact from "../components/ContactUs/Contact";
import Navbar from "../components/Navbar/Navbar";
import PreLoader from "../components/PreLoader/PreLoader";
import Footer from "../components/Footer/Footer";
import styles from "./ContactPage.module.css";
function ContactPage() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <Contact />
      <Footer/>
    </div>
  );
}

export default ContactPage;
