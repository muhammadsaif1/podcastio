import CopyRight from "@/components/Shared/CopyRight";
import FooterBottomNav from "@/components/Shared/FooterBottomNav";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import SlideTrack from "@/components/Shared/SlideTrack";
import FooterInfo from "./FooterInfo";
import FooterWidget from "./FooterWidget";
import trackImg from "@/images/record-4.png";

const FooterTwo = () => {
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
        title: "About Us",
        isLink: true,
        link: "/about-us",
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
      {
        title: "Blog",
        isLink: true,
        link: "/blog-grid",
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
        title: "info@example.com",
        isLink: true,
        link: "mailto:info@example.com",
        hasIcon: true,
        icon: "ti ti-mail",
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
  return (
    <footer className="footer-section texture-bg-2">
      <div className="container">
        <div className="row g-6 pb-120">
          <div className="col-lg-3 col-sm-6">
            <FooterInfo />
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterWidget data={pages} />
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget">
              <FooterWidget data={contact} />
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="footer-widget">
              <h4 className="widget-title mb-lg-6 mb-4 fw-semibold">
                Subscribe
              </h4>
              <span className="d-block mb-lg-6 mb-4">
                Don&apos;t miss out—subscribe today and let the excitement land
                directly in your inbox!
              </span>
              <ListenOnBtns iconSize={"brand-icon-mid"} gap="gap-xl-4 gap-2" />
            </div>
          </div>
        </div>
        <div className="footer-bottom d-between flex-wrap-reverse gap-2 py-lg-8 py-sm-6 py-4 bt-2">
          <CopyRight />
          <SlideTrack
            trackImg={trackImg}
            isFooter={true}
            visibility={"d-none d-lg-block"}
          />
          <FooterBottomNav items={usefulLinks} />
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
