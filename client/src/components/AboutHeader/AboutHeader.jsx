import styles from "./AboutHeader.module.css";
function AboutHeader() {
  return (
    <div className={styles.AboutHeader}>
      <div className={styles.textContent}>
        <h3>FEEL FREE TO KNOW MORE</h3>
        <h1>About Us</h1>
      </div>
    </div>
  );
}

export default AboutHeader;
