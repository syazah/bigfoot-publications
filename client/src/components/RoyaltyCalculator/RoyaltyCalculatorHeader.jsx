import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./RoyaltyCalculator.module.css";
import RoyaltyCalculatorCal from "./RoyaltyCalculatorCal";
function RoyaltyCalculatorHeader() {
  const [calculatorActive, setCalculatorActive] = useState(false);
  function handleCalculatorActive() {
    setCalculatorActive(!calculatorActive);
  }

  return (
    <>
      <div className={styles.royalCalContent}>
        {calculatorActive ? (
          <RoyaltyCalculatorCal />
        ) : (
          <>
            <h3>The Only Thing You Need Now Is a</h3>
            <h1>ROYALTY CALCULATOR</h1>
          </>
        )}
        <Link
          onClick={() => handleCalculatorActive()}
          className={styles.calculateLink}
        >
          {calculatorActive ? "BACK" : "CALCULATE"}
        </Link>
      </div>
    </>
  );
}

export default RoyaltyCalculatorHeader;
