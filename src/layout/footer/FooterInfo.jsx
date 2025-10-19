import { Link } from "react-router-dom";
import FooterLogo from "@/components/NavBarItems/FooterLogo";
import logo from "@/images/logo.png";

const footerInfoData = {
  logo: logo,
  info: "Welcome to Podcastio - Where Conversations Resonate. we believe in the power of diverse voices.",
  social: [
    {
      id: 1,
      icon: "ti ti-brand-facebook",
      link: "#",
    },
    {
      id: 2,
      icon: "ti ti-brand-twitter",
      link: "#",
    },
    {
      id: 3,
      icon: "ti ti-brand-linkedin",
      link: "#",
    },
    {
      id: 4,
      icon: "ti ti-brand-youtube",
      link: "#",
    },
  ],
};

const FooterInfo = () => {
  return (
    <>
      <div className="footer-logo mb-lg-6 mb-4">
        <FooterLogo logo={footerInfoData?.logo} className="footer-logo" />
      </div>
    </>
  );
};

export default FooterInfo;
