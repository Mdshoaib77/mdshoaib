import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header
      className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flexSB">
        {/* Logo */}
        <motion.div
          className="logo-box"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <NavLink
            to="/"
            className="portfolio-text"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Portfolio
          </NavLink>
        </motion.div>

        {/* Menu */}
        <motion.div
          className={`header-menu ${isMenuOpen ? "open" : ""}`}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <nav>
            <ul>
              {linklist.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * link.id }}
                >
                  <NavLink
                    to={link.link}
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (link.link === "/") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {link.text}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Right Section */}
        <div className="flexSB">
          <motion.div
            className="header-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <NavLink
              to="/"
              state={{ scrollToContact: true }}
              className="btn tj-btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire me!
            </NavLink>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <IoCloseOutline size={40} /> : <IoMenuOutline size={40} />}
          </div>
        </div>
      </div>
    </motion.header>
  );
};
