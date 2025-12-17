import logo from "../../images/navbar-logo.png";
import { NavLink } from "react-router-dom";
import NewsLetter from "@/pages/index-one/NewsLetter";
import "./footer-two-custom.scss";

const FooterTwo = () => {
  return (
    <footer className="footer-two-section footer-two-bg pt-60 texture-bg-2">
      <NewsLetter />
      <div className="footer-two-container">
        <div className="footer-two-top">
          <div className="footer-two-logo">
            <a href="/">
              <img src={logo} alt="Return Logo" />
            </a>
          </div>
          {/* <SlideTrack trackImg={trackImg} /> */}
          <div className="footer-two-listen">
            {/* <span className="footer-two-listen-text">
              Listen to Returnus through:
            </span> */}
          </div>
        </div>
        <div className="footer-two-nav-border"></div> {/* New border div */}
        <div className="footer-two-nav">
          <NavLink to="/">Home</NavLink>
          <span> | </span>
          <NavLink to="/latest-episode">Episode</NavLink>
          <span> | </span>
          <NavLink to="/pitch">Pitch Contest</NavLink>
          <span> | </span>
          {/* <NavLink to="/products">Products</NavLink>
          <span> | </span> */}
          <NavLink to="/about-us">About</NavLink>
          <span> | </span>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {/* removed kurudy */}
        {/* <div className="footer-two-kurudy">
          <a target="_blank" href="https://www.kurudy.com/">
            Kurudy.com
          </a>
        </div> */}
        <div
          className="social-links"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            target="_blank"
            href="http://creators.spotify.com/pod/show/returnus"
          >
            <i className="ti ti-brand-spotify"></i>
          </a>
          <a target="_blank" href="https://www.youtube.com/@ReturnUs">
            <i className="ti ti-brand-youtube"></i>
          </a>
          <a target="_blank" href="https://www.instagram.com/returnus2025/">
            <i className="ti ti-brand-instagram"></i>
          </a>
        </div>
        <div className="footer-two-bottom">
          <span className="footer-two-copyright">
            © Returnus 2025 {/* –Powered by Kurudy. */}
            {/* Equity Crowdfunding for Generational Impact. */}
          </span>
          <div className="footer-two-links">
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
