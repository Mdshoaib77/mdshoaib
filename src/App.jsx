import { useEffect, useState } from "react";
import {
  Home,
  Layout,
  Portfolio,         // Add Portfolio here
  PortfolioDetails,
  Service,
  Resume,
  Skill,
  Testimonial,
  Blog,
  Contact,
} from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && (
        <div className="preloader">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
          </svg>

          <div className="preloader-heading">
            <div className="load-text">
              <span>M</span>
              <span>D</span>
              <span>S</span>
              <span>H</span>
              <span>O</span>
              <span>A</span>
              <span>I</span>
              <span>B</span>
            </div>
          </div>
        </div>
      )}

      {!showLoader && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/details"
              element={
                <Layout>
                  <PortfolioDetails />
                </Layout>
              }
            />
            <Route
              path="/service"
              element={
                <Layout>
                  <Service />
                </Layout>
              }
            />
            <Route
              path="/portfolio"  // Correct route for Portfolio (Works)
              element={
                <Layout>
                  <Portfolio />
                </Layout>
              }
            />
            <Route
              path="/resume"
              element={
                <Layout>
                  <Resume />
                </Layout>
              }
            />
            <Route
              path="/skill"
              element={
                <Layout>
                  <Skill />
                </Layout>
              }
            />
            <Route
              path="/testimonials"
              element={
                <Layout>
                  <Testimonial />
                </Layout>
              }
            />
            <Route
              path="/blog"
              element={
                <Layout>
                  <Blog />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <Contact />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
