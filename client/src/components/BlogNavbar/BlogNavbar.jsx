import styles from "./BlogNavbar.module.css";

import { Link, NavLink } from "react-router-dom";
import { Menu } from "react-feather";
import { Instagram, Facebook, Linkedin, Youtube, X } from "react-feather";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function BlogNavbar() {
  return (
    <div>
      <NavbarBlog />
    </div>
  );
}

function NavbarBlog() {
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
      <div className={styles.socialLink}>
        <a href="https://www.instagram.com/bigfoot_publications/">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/BigfootPublicationsIndia">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/bigfootpublications/mycompany/">
          <Linkedin />
        </a>
        <a href="https://www.youtube.com/@bigfootpublications">
          <Youtube />
        </a>
      </div>
      <Link className={styles.logo} to="/">
        <img className={styles.logo} src="LOGO.png" />
      </Link>
      <NavItems />
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
    </ul>
  );
}

export default BlogNavbar;
