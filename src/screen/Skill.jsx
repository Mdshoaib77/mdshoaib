import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaSketch,  // Importing FaSketch for the Sketch icon
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";

const skills = [
  { id: 1, name: "HTML5", percent: 96, icon: <FaHtml5 /> },
  { id: 2, name: "CSS3", percent: 90, icon: <FaCss3Alt /> },
  { id: 3, name: "JavaScript", percent: 93, icon: <FaJs /> },
  { id: 4, name: "React", percent: 92, icon: <FaReact /> },
  { id: 5, name: "Tailwind CSS", percent: 90, icon: <SiTailwindcss /> },
  { id: 6, name: "Node.js", percent: 87, icon: <FaNodeJs /> },
  { id: 7, name: "Express.js", percent: 86, icon: <SiExpress /> },
  { id: 8, name: "MongoDB", percent: 88, icon: <FaDatabase /> },
  // Adding new skills:
  { id: 9, name: "Responsive", percent: 99, icon: <FaCss3Alt /> }, // Using CSS icon for responsive
  { id: 10, name: "Sketch", percent: 86, icon: <FaSketch /> }, // Using FaSketch for Sketch
];

export const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        paddingTop: "120px", // Padding for top section
        paddingBottom: "120px", // Padding for bottom section
        background: "var(--tj-theme-accent-1)", // Background color inline
        color: "#fff",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
      }}
    >
      <motion.h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "12px",
          color: "white",
          fontWeight: "bold",
          background: "linear-gradient(to right, #a855f7, #6366f1)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        style={{
          color: "#ccc",
          maxWidth: "700px",
          margin: "0 auto 50px",
          fontSize: "1.05rem",
        }}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        We put your ideas and thus your wishes in the form of a unique web
        project that inspires you and your customers.
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", // Responsive grid layout
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(168,85,247,0.4)",
              border: "1px solid rgba(168,85,247,0.5)",
            }}
            style={{
              background: "var(--tj-theme-accent-2)", // Inline background color for skill items
              borderRadius: "25px",
              padding: "40px 15px 30px",
              border: "1px solid transparent",
              marginBottom: "15px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              transition: "all 0.6s",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 5 }}
              style={{
                fontSize: "42px",
                color: "#a855f7",
                transition: "transform 0.3s ease",
              }}
            >
              {skill.icon}
            </motion.div>
            <p style={{ fontWeight: "bold", marginTop: "16px", fontSize: "18px", color: "#b794f4" }}>
              {skill.name}
            </p>
            <p style={{ fontWeight: "500", fontSize: "16px", marginTop: "6px", color: "#aaa" }}>
              {skill.percent}%
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
