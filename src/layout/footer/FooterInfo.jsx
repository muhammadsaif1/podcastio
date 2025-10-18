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
      <span className="d-block mb-lg-8 mb-sm-6 mb-4 me-xxl-6">
        {footerInfoData?.info}
      </span>
      <ul className="footer-social d-flex align-items-center gap-3 fs-xl">
        {footerInfoData?.social?.map((item) => (
          <li key={item?.id}>
            <Link to={item?.link}>
              <i className={item?.icon}></i>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterInfo;
