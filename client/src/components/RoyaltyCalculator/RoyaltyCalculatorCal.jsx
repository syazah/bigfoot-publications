import { useState } from "react";
import styles from "./RoyaltyCalculator.module.css";
import React from "react";

function RoyaltyCalculator() {
  return (
    <section className={styles.royaltyCalculator}>
      <RoyaltyForm />
    </section>
  );
}

function RoyaltyForm() {
  const [typeOfBook, setTypeOfBook] = useState("");
  const [numPage, setNumPage] = useState("");
  const [mrp, setMrp] = useState("");
  const [royaltyCal, setRoyaltyCal] = useState(0);

  function calculateRoyalty(e) {
    e.preventDefault();
    if (typeOfBook === "" || numPage === 0 || mrp === 0) {
      alert("Kindly Fill The Form");
      return;
    }
    if (typeOfBook === "PaperBack") {
      const manCost = Math.round(numPage / 2 + 40);
      const minMrp = manCost + 80;
      setRoyaltyCal(mrp - minMrp);
    } else if (typeOfBook === "HardCover") {
      const manCost = Math.round(numPage / 2 + 100);
      const minMrp = manCost + 80;
      setRoyaltyCal(mrp - minMrp);
    } else if (typeOfBook === "EBook") {
      if (mrp < 100) {
        alert("Minimum MRP For An E-Book Must be Rs. 100");
        return;
      } else {
        setRoyaltyCal(Math.round((52 * mrp) / 100));
      }
    } else {
      if (mrp < 150) {
        alert("Minimum MRP For An E-Book Must be Rs. 150");
        return;
      } else {
        setRoyaltyCal(Math.round((52 * mrp) / 100));
      }
    }

    setNumPage("");
    setMrp("");
  }

  return (
    <section className={styles.royaltyCalCal}>
      <form className={styles.royaltyForm} onSubmit={calculateRoyalty}>
        <section id="anim0" className={styles.royaltyContainer}>
          <section className={styles.bookType}>
            <h3>Type Of Book</h3>
            <select
              id="anim1"
              value={typeOfBook}
              onChange={(e) => setTypeOfBook(e.target.value)}
            >
              <option value="">------</option>
              <option value="PaperBack">Paperback</option>
              <option value="HardCover">Hard Bound</option>
              <option value="AudioBook">Audio Book</option>
              <option value="EBook">E-Book</option>
            </select>
          </section>
          <section className={styles.bookType}>
            <h3>Number Of Pages</h3>
            <input
              id="anim2"
              type="text"
              disabled={typeOfBook === "EBook" || typeOfBook === "AudioBook"}
              value={numPage}
              onChange={(e) => {
                setNumPage(Number(e.target.value));
              }}
              placeholder="Enter Num Page"
            />
          </section>
          <section className={styles.bookType}>
            <h3>Estimated MRP</h3>
            <input
              id="anim3"
              type="text"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
              placeholder="Enter MRP"
            />
          </section>
        </section>

        <section id="anim4" className={styles.royaltyButtons}>
          <button>Submit</button>
        </section>
      </form>
      <h2>
        {royaltyCal
          ? royaltyCal > 0
            ? `Royalty Calculated = Rs ${royaltyCal} /. `
            : `The Royalty is negative, Kindly Increase the estimated MRP /. `
          : `Fill The Details To Get Royalty`}
      </h2>
    </section>
  );
}

export default RoyaltyCalculator;
