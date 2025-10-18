import FooterLogo from "@/components/NavBarItems/FooterLogo";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-4.png";
import logo from "@/images/logo.png";
import FooterWidget from "./FooterWidget";
import CopyRight from "@/components/Shared/CopyRight";
import FooterBottomNav from "@/components/Shared/FooterBottomNav";

const pages = {
  title: "Pages",
  items: [
    {
      title: "Home",
      isLink: true,
      link: "/",
      hasIcon: false,
    },
    {
      title: "Episode",
      isLink: true,
      link: "/latest-episodes",
      hasIcon: false,
    },
    {
      title: "Pricing Plan",
      isLink: true,
      link: "/pricing-plan",
      hasIcon: false,
    },
  ],
};
const contact = {
  title: "Contact",
  items: [
    {
      title: "+123 456 7890",
      isLink: true,
      link: "tel:+1234567890",
      hasIcon: true,
      icon: "ti ti-phone",
    },
    {
      title: "+123 456 7890",
      isLink: true,
      link: "tel:+1234567890",
      hasIcon: true,
      icon: "ti ti-phone",
    },
    {
      title: "info@example.com",
      isLink: true,
      link: "mailto:info@example.com",
      hasIcon: true,
      icon: "ti ti-mail",
    },
  ],
};
const address = {
  title: "Address",
  items: [
    {
      title: "123, Main Street, Your City",
      isLink: true,
      link: "#",
      hasIcon: true,
      icon: "ti ti-map-pin",
    },
    {
      title: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
      isLink: true,
      link: "#",
      hasIcon: true,
      icon: "ti ti-map-pin",
    },
  ],
};
const usefulLinks = [
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
];

const FooterOne = () => {
  return (
    <footer className="footer-section texture-bg-1">
      <div className="container">
        <div className="footer-top d-between gap-lg-6 gap-4 flex-wrap flex-lg-nowrap">
          <FooterLogo logo={logo} className="footer-logo" />
          <SlideTrack
            trackImg={trackImg}
            isFooter={true}
            visibility={"d-none d-lg-block"}
          />
          <div className="footer-podcast-icons d-flex align-items-center gap-xl-6 flex-sm-nowrap flex-wrap gap-4">
            <p className="fs-lg fw-medium text-nowrap">Subscribe on :</p>
            <ListenOnBtns iconSize={"brand-icon-mid"} />
          </div>
        </div>
        <span className="d-block  my-xxl-15 my-lg-10 my-sm-8 my-6 bt-2"></span>
        <div className="row g-6 justify-content-between">
          <div className="col-lg-3 footer-right-border">
            <FooterWidget data={pages} />
          </div>
          <div className="col-lg-4 footer-right-border">
            <div className="footer-widget">
              <FooterWidget data={contact} />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <FooterWidget data={address} />
            </div>
          </div>
        </div>

        <div className="footer-bottom d-between flex-wrap-reverse gap-2 mt-lg-15 mt-sm-10 mt-6 py-lg-8 py-sm-6 py-4 bt-2">
          <CopyRight />
          <FooterBottomNav items={usefulLinks} />
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
