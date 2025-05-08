import { linklist } from "../../assets/data/data";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom"; // Import Link

export const Footer = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="tj-footer-area"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container text-center">
        {/* Logo Box */}
        <motion.div
          className="logo-box"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="footer-logo">
            Portfolio
          </Link>
        </motion.div>

        {/* Footer Menu */}
        <motion.div
          className="footer-menu"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <nav>
            <ul>
              {linklist.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Link to={link.link}>{link.text}</Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>

        {/* Copyright Text */}
        <motion.div
          className="copy-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            &copy; 2025 All rights reserved by
            <a href="#" target="_blank"> Md Shoaib </a>
          </p>
        </motion.div>
      </div>

      {/* Scroll Up Button */}
      {showScrollUp && (
        <div className="scroll-up" onClick={scrollToTop}>
          <IoIosArrowUp size={30} />
        </div>
      )}
    </motion.footer>
  );
};
