import { service } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate once on scroll into view

  return (
    <motion.section
      ref={ref}
      className="services-section"
      id="services-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            className="section-title"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Quality Services
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        <div className="services-widget position-relative">
          {service.map((item, index) => (
            <motion.div
              className="service-item flexSB"
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="left-box">
                <motion.span
                  className="number"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 * index }}
                >
                  0{item.id}
                </motion.span>
                <h3 className="service-title">{item.title}</h3>
              </div>
              <div className="right-box">
                <p>{item.text}</p>
              </div>
              <motion.i
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + 0.2 * index }}
              >
                <GoArrowUpRight size={40} />
              </motion.i>
              <button className="service-link modal-popup"></button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
