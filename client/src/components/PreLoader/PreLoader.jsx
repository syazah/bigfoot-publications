import styles from "./PreLoader.module.css";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

function PreLoader() {
  const [scope, animate] = useAnimate();
  async function handleAnimate() {
    await animate(
      scope.current,
      { opacity: 0, x: 10000 },
      { duration: 1, delay: 3 }
    );
  }

  useEffect(() => {
    animate(
      "img",
      {
        opacity: [0, 0, 1, 1, 1],
        scale: [1, 1, 1.5, 1.5, 1.5, 1.5, 1, 1.5, 1.5, 1.5],
      },
      { duration: 1.5 }
    );

    handleAnimate();
  }, []);

  return (
    <motion.div ref={scope} className={styles.preloader}>
      <img src={"LOGO.png"} />
    </motion.div>
  );
}

export default PreLoader;
