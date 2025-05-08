import { testimonialData } from "../assets/data/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="testimonial-section"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            My Clients Stories
          </motion.h2>
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering people in a new digital journey with my super services
          </motion.p>
        </div>

        <div className="testimonials-widget grid5">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              className="testimonial-item"
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="top-area flex">
                <div className="logo-box">
                  <img src={testimonial.logo} alt="logo" />
                </div>
                <div className="image-box">
                  <img src={testimonial.userImage} alt="user" />
                </div>
              </div>

              <div className="icon-box">
                {/* Decorative SVG quote icons */}
                {[263588, 263589].map((id) => (
                  <svg
                    key={id}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.105431 2.18998C0.0301532 0.988687 1.02531 -0.00647222 2.2266 0.0688056L19.4961 1.15097C21.2148 1.25867 22.0029 3.34358 20.7852 4.56127L4.5979 20.7486C3.3802 21.9663 1.2953 21.1781 1.1876 19.4594L0.105431 2.18998Z"
                      fill={`url(#paint0_linear_${id})`}
                    />
                    <defs>
                      <linearGradient
                        id={`paint0_linear_${id}`}
                        x1="-0.0363755"
                        y1="-0.0729998"
                        x2="35.3333"
                        y2="-0.0729991"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="1" stopColor="var(--tj-theme-primary)" />
                        <stop offset="1" stopColor="#140C1C" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                ))}
              </div>

              <p className="quote">{testimonial.quote}</p>
              <h4 className="name">{testimonial.name}</h4>
              <span className="designation">{testimonial.designation}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
