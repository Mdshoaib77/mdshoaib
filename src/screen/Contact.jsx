import { useState, useEffect, useRef } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";  // Import Toastify
import "react-toastify/dist/ReactToastify.css";  // Import Toastify CSS

export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "+01 123 654 8096",
    email: "gerolddesign@mail.com",
    address: "Warne Park Street Pine, FL 33157, New York",
  });

  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const fetchContactInfo = async () => {
      const dummyData = {
        phone: "+8801724519674",
        email: "mdshoaibfullstack@gmail.com",
        address: "Rajsahi, Bogura, Bangladesh",
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setContactInfo(dummyData);
    };

    fetchContactInfo();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // Set loading state to true when the form is submitted

    const formData = new FormData(e.target);

    // Sending form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "12c24b0a-d0d3-4d28-ad4f-5c5e2159c078",
        ...Object.fromEntries(formData),
      }),
    });

    const result = await response.json();
    setIsLoading(false);  // Set loading state to false after the form is submitted

    if (result.success) {
      // Display success toast notification
      toast.success("Thank you! Your message has been sent successfully.");
    } else {
      // Display error toast notification
      toast.error("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Toast container to show notifications */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <motion.section
        ref={ref} // Attach the ref to this section
        className="contact-section"
        id="contact-section" // Add ID to the section for scroll targeting
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container flexSB">
          {/* Left: Form */}
          <motion.div
            className="contact-form-box w-half"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-header">
              <h2 className="section-title">Let’s work together!</h2>
              <p>
                I design and code beautifully simple things and I love what I do.
                Just simple like that!
              </p>
            </div>

            <div className="tj-contact-form">
              <form
                onSubmit={handleSubmit}
                className="tj-contact-form"
              >
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First name"
                      required
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last name"
                      required
                    />
                  </div>
                </div>

                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="form_group">
                  <select name="service" className="tj-nice-select" required>
                    <option value="" disabled selected>
                      Choose Service
                    </option>
                    <option value="Branding Design">Branding Design</option>
                    <option value="Web Design">Web Design</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Graphics Design">Graphics Design</option>
                  </select>
                </div>

                <div className="form_group">
                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <div className="form_btn">
                  <button type="submit" className="btn tj-btn-primary">
                    {isLoading ? "Sending..." : "Send Message"}  {/* Display loading text */}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="contact-info-list w-half"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ul className="ul-reset">
              <li>
                <div className="icon-box">
                  <IoCallOutline size={25} />
                </div>
                <div className="text-box">
                  <p>Phone</p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <TfiEmail />
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <CiLocationOn size={25} />
                </div>
                <div className="text-box">
                  <p>Address</p>
                  <span>{contactInfo.address}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
