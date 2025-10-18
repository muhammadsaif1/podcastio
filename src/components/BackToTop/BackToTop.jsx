import { useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", toggleVisible);
  // Scroll to top

  return (
    <button
      className={`bottom-to-top position-fixed bottom-0 end-0 mb-4 me-4 fs-xl ${
        visible ? "active" : ""
      }`}
      onClick={scrollToTop}
    >
      <i className="ti ti-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
