import styles from "./Marquee.module.css";
const data = [];
for (let i = 1; i < 44; i++) {
  data.push(`/catalMove/${i}.png`);
}
function Marquee() {
  return (
    <div className={styles.marqueecontainer}>
      <marquee
        loop
        scrollamount="5"
        behavior="alternate"
        className={styles.marquee}
      >
        <div className={styles.imagecontainer}>
          {data.map((d, i) => i < 21 && <img src={data[i]} />)}
        </div>
      </marquee>
      <marquee
        scrollamount="8"
        loop
        behavior="alternate"
        className={styles.marquee}
      >
        <div className={styles.imagecontainer}>
          <div className={styles.imagecontainer}>
            {data.map((d, i) => i >= 21 && <img src={data[i]} />)}
          </div>
        </div>
      </marquee>
    </div>
  );
}

export default Marquee;
