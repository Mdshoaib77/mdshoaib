import { educationData, experienceData } from "../assets/data/data";
import { CiMedal } from "react-icons/ci";
import { PiGraduationCap } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="resume-section"
      id="resume-section"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container flexSB">
        {/* Experience Column */}
        <motion.div
          className="w-half"
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title">
              <PiGraduationCap size={50} /> My Experience
            </h2>
          </div>

          <div className="resume-widget">
            {experienceData.map((item, index) => (
              <motion.div
                className="resume-item"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="time">{item.time}</div>
                <h3 className="resume-title">{item.title}</h3>
                <div className="institute">{item.institute}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Column */}
        <motion.div
          className="w-half"
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <h2 className="section-title flexE">
              <CiMedal size={50} /> My Education
            </h2>
          </div>

          <div className="resume-widget">
            {educationData.map((item, index) => (
              <motion.div
                className="resume-item"
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="time">{item.time}</div>
                <h3 className="resume-title">{item.title}</h3>
                <div className="institute">{item.institute}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
