import CopyRight from "@/components/Shared/CopyRight";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import FooterWidget from "./FooterWidget";
import trackImg from "@/images/record-8.png";

const FooterFour = () => {
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

  return (
    <footer className="footer-section footer-4 texture-bg-2">
      <div className="container">
        {/* <!-- footer menu --> */}
        <div className="row g-6 position-relative">
          <div className="col-lg-4">
            <div className="newsletter position-relative">
              <div className="footer-widget">
                <h3 className="mb-lg-6 mb-4">Newsletter</h3>
                <p className="mb-lg-6 mb-4">
                  Get the Latest Episode & Never Miss an Episode
                </p>
                <form action="#" className="me-xxl-6">
                  <div className="input-area">
                    <input
                      type="email"
                      className="py-1"
                      placeholder="Type your email"
                    />
                    <div className="icon-btn">
                      <span className="icon fs-xl fw-bold">
                        <i className="ti ti-send"></i>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="record-img">
                <div className="one-direction-animation d-flex">
                  <img className="w-100" src={trackImg} alt="record" />
                  <img className="w-100" src={trackImg} alt="record" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-md-flex d-grid justify-content-between footer-4-pt footer-4-pb">
              <FooterWidget data={pages} />
              <span className="d-block footer-4-border"></span>
              <FooterWidget data={contact} />
              <span className="d-block footer-4-border"></span>
              <div className="footer-widget">
                <h4 className="widget-title mb-lg-6 mb-4 fw-semibold text-md-center">
                  Subscribe On
                </h4>
                <ListenOnBtns
                  iconSize={"brand-icon-mid"}
                  justify={"justify-content-md-center"}
                  gap="gap-xl-4 gap-2"
                />
              </div>
            </div>
            {/* <!-- footer bottom  --> */}
            <div className="footer-bottom py-lg-8 py-sm-6 py-4 bt-2 text-lg-end text-center">
              <CopyRight />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
