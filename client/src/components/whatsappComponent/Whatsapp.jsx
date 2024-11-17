import { useEffect } from "react";
import "./Whatsapp.css";
import { motion, useAnimate } from "framer-motion";
function Whatsapp() {
  const [scope, animate] = useAnimate();
  function AnimateWhap() {
    animate(
      "img",
      { x: [1000, 0, 10, -10, 10, -10, 10, -10, 0], opacity: [0, 1] },
      { duration: 3, delay: 3.5 }
    );
  }
  useEffect(() => {
    AnimateWhap();
  }, []);
  return (
    <div ref={scope} className="mainWhat">
      <a href="http://wa.aisensy.com/+919306620704">
        <img
          src="/HEADERSEC/whatsapp.svg"
        />
      </a>
    </div>
  );
}

export default Whatsapp;
