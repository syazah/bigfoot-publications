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
      {windowSize.innerWidth > 768 ? (
        <NavItems />
      ) : menuOpen ? (
        <NavItems />
      ) : (
        <></>
      )}

      <div className={styles.toggleMenuContainer}>
        {menuOpen ? (
          <X onClick={() => setMenuOpen(!menuOpen)} />
        ) : (
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        )}
      </div>
    </motion.nav>
  );
}

function NavItems() {
  return (
    <ul className={styles.navItem}>
      <li>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/packages">
          Packages
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/catalogue">
          Catalogue
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/anthology">
          Anthology
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/order">
          Pre-Order
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/company">
          Company
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.navLink} to="/socialMedia">
          Social Media
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
