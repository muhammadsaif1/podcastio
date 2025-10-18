import CopyRight from "@/components/Shared/CopyRight";
import FooterBottomNav from "@/components/Shared/FooterBottomNav";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import NewsLetterForm from "@/components/Shared/NewsLetterForm";
import FooterInfo from "./FooterInfo";
import FooterWidget from "./FooterWidget";

const FooterThree = () => {
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
    <footer className="footer-section texture-bg-1">
      <div className="container">
        {/* <!-- footer menu --> */}
        <div className="row g-6">
          <div className="col-lg-8 pt-120">
            <div className="row g-6 pb-120">
              <div className="col-lg-5">
                <FooterInfo />
              </div>
              <div className="col-lg-2">
                <FooterWidget data={pages} />
              </div>
              <div className="col-lg-5">
                <FooterWidget data={contact} />
              </div>
            </div>

            {/* <!-- footer bottom  --> */}
            <div className="footer-bottom d-between flex-wrap-reverse gap-2 py-lg-8 py-sm-6 py-4 bt-2">
              <CopyRight />
              <FooterBottomNav items={usefulLinks} />
            </div>
          </div>

          <div className="col-lg-4  order-first order-lg-last">
            <div className="footer-3-newsletter h-100 pt-120 px-xxl-10 px-xl-8 px-lg-4">
              <div className="footer-widget text-lg-center">
                <h3 className="fw-semibold text-center mb-lg-6 mb-4">
                  Newsletter
                </h3>
                <p className="fw-normal text-center mb-lg-6 mb-4">
                  Get the Latest Episode & Never Miss an Episode
                </p>
                <NewsLetterForm
                  iconOnly
                  placeholder={"Type your email"}
                  bg={"bgc-1"}
                  border={"border bc-n400"}
                />
              </div>
              <span className="d-block border-dashed my-lg-10 my-sm-6 my-4"></span>
              <div className="footer-widget">
                <h4 className="widget-title mb-lg-6 mb-4 fw-semibold text-center">
                  Subscribe On
                </h4>
                <ListenOnBtns
                  iconSize={"brand-icon-mid"}
                  justify={"justify-content-center"}
                  gap="gap-xl-4 gap-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
