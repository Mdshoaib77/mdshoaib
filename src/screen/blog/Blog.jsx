import { blogs } from "../../assets/data/data";
import { CiCalendar } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="blog-section"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-header text">
          <motion.h2
            className="section-title"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Recent Blogs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        <div className="grid4">
          {blogs.map((blog, index) => (
            <motion.div
              className="blog-item"
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
            >
              <div className="blog-thumb">
                <img src={blog.image} alt={blog.title} />
                <a href="#" className="category">
                  {blog.category}
                </a>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <ul className="ul-reset">
                    <li>
                      <i>
                        <CiCalendar size={20} />
                      </i>
                      {blog.date}
                    </li>
                    <li>
                      <i>
                        <FaRegComments size={20} />
                      </i>
                      Comment ({blog.commentCount})
                    </li>
                  </ul>
                </div>
                <h3 className="blog-title">
                  <a href={blog.link}>{blog.title}</a>
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
