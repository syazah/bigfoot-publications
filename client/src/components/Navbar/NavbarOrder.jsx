import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { Mail, Menu, Phone } from "react-feather";
import { X } from "react-feather";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "backInOut", delay: 3 }}
      className={styles.navbar}
    >
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.logo} src="/LOGO.png" />
        </Link>
        <div>
          <p>
            <Mail className={styles.headericons} />
            info@bigfootpublications.in
          </p>
          <p>
            <Phone className={styles.headericons} />
            +91 120 466 2941
          </p>
        </div>
      </div>

      <div className={styles.iconsContainer}>
        <Link to={"/"}>
          <img className="w-6 md:w-8" src={"/NavbarIcons/home.png"} />
        </Link>
        <Link to={"https://www.facebook.com/BigfootPublicationsIndia"}>
          <img className="w-6 md:w-8" src={"/NavbarIcons/facebook.png"} />
        </Link>
        <Link to={"https://www.instagram.com/bigfoot_publications/"}>
          <img className="w-6 md:w-8" src={"/NavbarIcons/social.png"} />
        </Link>
        <Link to={"http://Wa.me/+918684869690"}>
          <img className="w-6 md:w-8" src={"/NavbarIcons/help.png"} />
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
