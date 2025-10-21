import logo from "@/images/logo2-6556cbb2.png";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record.base64?raw";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";

import { Youtube, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterTwo = () => {
  return (
    <footer className="footer-section footer-bg pt-120">
      <div className="container">
        <div className="footer-top d-between-2 gap-lg-6 gap-4 flex-wrap flex-lg-nowrap">
          {/* LOGO */}
          <div className="footer-logo">
            <a href="/">
              <div style={{ maxWidth: 200, maxHeight: 200 }}>
                <img
                  src={logo}
                  alt="Return Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </a>
          </div>

          {/* SLIDE TRACK */}
          <SlideTrack trackImg={trackImg} isFooter={true} />

          {/* FOOTER PAGES */}
          <div className="footer-pages">
            <span className="styling pages">Pages</span>
            <div className="pages-links styling">
              <a href="/">Home</a>
              <a href="/latest-episode">Episodes</a>
              <a href="/pitch-contest">Pitch</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="footer-podcast-icons d-flex align-items-center gap-xl-6 flex-sm-nowrap flex-wrap gap-4">
            <p className="fs-lg fw-medium text-nowrap text-display-one">
              Follow Us:
            </p>
            <div className="footer-socials d-flex gap-3">
              <a
                className="yt"
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube />
              </a>
              <a
                className="ig"
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
              <a
                className="tw"
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                className="ln"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                className="sp"
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ListenOnBtns />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom d-between flex-wrap-reverse gap-2 mt-lg-15 mt-sm-10 mt-6 py-lg-8 py-sm-6 py-4 bt-2">
          <span className="text-display-one">
            © Returnus 2025 — powered by
            <a
              href="https://www.kurudy.com/"
              className="kurudy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Kurudy
            </a>
            . Equity crowdfunding for Generational Impact
          </span>
          <ul className="footer-menu d-flex gap-lg-6 gap-sm-4 gap-2">
            <li>
              <a
                href="/terms-and-conditions"
                className="link-text text-display-one"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="link-text text-display-one">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
