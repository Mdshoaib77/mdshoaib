import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { hero } from "../../assets/data/data";
import { motion } from "framer-motion";

export const Hero = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      setTimeout(() => {
        const section = document.getElementById("contact-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  }, [location]);

  const socialIcons = [
    {
      id: 1,
      icon: <FaXTwitter size={17} />,
      url: "https://x.com/mdshoaibdev",
    },
    {
      id: 2,
      icon: <FaFacebookF size={20} />,
      url: "https://www.facebook.com/md.shoaib.959839/",
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/md-shoaib-07b32a314",
    },
    {
      id: 4,
      icon: <FaWhatsapp size={20} />,
      url: "https://wa.me/8801724519674",
    },
    {
      id: 5,
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/shoaib8749/",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <motion.div
          className="intro_text"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">HI</text>
          </svg>
        </motion.div>

        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <motion.span
                  className="hero-sub-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  I am Md Shoaib
                </motion.span>

                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                >
                  Web Developer +<br /> UI Designer
                </motion.h1>

                <div className="text-center hero-image-box d-md-none">
                  <motion.img
                    src="assets/img/hero/me.png"
                    alt=""
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                  />
                </div>

                <motion.p
                  className="lead"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                >
                  I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                </motion.p>

                <motion.div
                  className="button-box flexG"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                >
                  <a
                    href="/MdShoaibResume.pdf"
                    download="Md_Shoaib_Resume"
                    className="btn tj-btn-secondary"
                  >
                    Download CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                      >
                        <a href={icon.url} target="_blank" rel="noopener noreferrer">
                          {icon.icon}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

            <div className="right w-half">
              <div className="text-center hero-image-box">
                <motion.img
                  src="../images/common/profile1.jpg"
                  alt="profile"
                  style={{ width: "400px", height: "500px", objectFit: "cover" }}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.7 }}
                />
              </div>
            </div>
          </div>

          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <motion.div
                className="funfact-item"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 + index * 0.2 }}
              >
                <div className="number"><span>{item.text}</span></div>
                <div className="text">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
