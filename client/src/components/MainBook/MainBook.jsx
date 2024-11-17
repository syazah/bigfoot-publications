import styles from "./MainBook.module.css";
function MainBook() {
  return (
    <div className={styles.mainBook}>
      <h3>OVER 25000+ COPIES SOLD</h3>
      <h1>Daughters Of The Brothel</h1>
      <h4> Stories from Delhi's Red-light District</h4>
      <div className={styles.mainBookRow}>
        <div className={styles.textContent}>
          <h2> About The Book</h2>
          <p>
            “My nath utrai (Taking off the nose ring) was performed when I was
            twelve or thirteen. The initial days were tough but now it gives me
            pleasure. I have inherited the art of making love from my
            grandmother.”
            <br />
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
              -Roopal, a sex worker from the Bedia community in brothel number
              56. Nath Utrai ceremony is nothing but the auction of the girl by
              the highest bidder near Bharatpur in Rajasthan. <br />
            </span>
            <br />
            “Everyone believes that all hijras are castrated, but this is not
            true. We call it nirvana. Castration is usually optional. It cannot
            be forced upon a hijra.”
            <br />
            <span style={{ fontSize: "1rem", fontWeight: "bold" }}>
              -Sharmila, a eunuch from the streets of Varanasi.
            </span>
            <br />
            <br />
            The narrator spends a considerable amount of time in G.B. Road, the
            famous red-light district in New Delhi during his stint with an NGO.
            He records the narratives of the sex workers of brothel number 56,
            insights of their daily lives, local lingos, quarrels, and the ins
            and outs of their business with an honest stoicism that does not
            dilute the terrible pathos of their lives. Through this voyage
            within the walls of pleasurable cells, the writer learns that the
            G.B. road is an inexorable web...but only because the women trapped
            in it believe it to be so.
          </p>
          <a href="https://www.amazon.in/Daughters-Brothel-Stories-Red-light-District-ebook/dp/B07YSCJK8W/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1667296682&sr=1-1">
            ORDER NOW
          </a>
        </div>
        <div className={styles.mainBookImg}>
          <img src="DOB.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MainBook;
