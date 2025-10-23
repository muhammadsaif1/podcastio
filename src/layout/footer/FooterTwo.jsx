import logo from "../../images/navbar-logo.png";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record.base64?raw";
import SocialIcons from "@/components/Shared/Social/SocialIcons";
import { NavLink } from "react-router-dom";
import NewsLetter from "@/pages/index-one/NewsLetter";
import "./footer-two-custom.scss";

const FooterTwo = () => {
  return (
    <footer className="footer-two-section footer-two-bg pt-60">
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
          <NavLink to="/about-us">About</NavLink>
          <span> | </span>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="footer-two-kurudy">
          <a href="https://www.kurudy.com/">Kurudy.com</a>
        </div>
        <SocialIcons />
        <div className="footer-two-bottom">
          <span className="footer-two-copyright">
            © Returnus 2025 – Powered by Kurudy. Equity Crowdfunding for
            Generational Impact.
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
