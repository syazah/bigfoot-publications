import styles from "./RoyaltyCalculator.module.css";
import RoyaltyCalculatorHeader from "./RoyaltyCalculatorHeader";
function RoyaltyCalculator() {
  return (
    <div className={styles.royalCalMain}>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
        <div key={num}></div>
      ))}
      <RoyaltyCalculatorHeader />
    </div>
  );
}

export default RoyaltyCalculator;
