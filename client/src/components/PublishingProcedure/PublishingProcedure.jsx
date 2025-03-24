import styles from "./PublishingProcedure.module.css";
function PublishingProcedure() {
  return (
    <div className={styles.publishingProcedure}>
      <h1>PUBLISHING PROCEDURE</h1>
      <div className={styles.contentRow}>
        <video controls muted loop src="/ABOUTPROCED.mp4" />
      </div>
    </div>
  );
}

export default PublishingProcedure;
