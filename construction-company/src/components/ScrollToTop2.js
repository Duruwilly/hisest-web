import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop2 = () => {
  const [showScrollToTop, setShowScrollTotop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTotop(true);
      } else {
        setShowScrollTotop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollTop}>
        <FaAngleUp
          onClick={scrollTop}
          className='scroll-top'
          />
          </div>
      )}
    </>
  );
};

export default ScrollToTop2