import FaqPage from "../components/FAQS/FaqPage";
import Navbar from "../components/Navbar/Navbar";
import PreLoader from "../components/PreLoader/PreLoader";
import styles from "./Faqs.module.css";
function Faqs() {
  return (
    <div className={styles.main}>
      <PreLoader />
      <Navbar />
      <FaqPage />
    </div>
  );
}

export default Faqs;
