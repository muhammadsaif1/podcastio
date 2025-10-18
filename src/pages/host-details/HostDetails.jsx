import Pagination from "@/components/Shared/Pagination";
import HostCard from "./HostCard";
import hostImg from "@/images/host.png";
import EpisodesCardTwo from "@/components/EpisodesCard/EpisodesCardTwo";
import episodesData from "@/data/EpisodesData";
import ContactForm from "@/components/Forms/ContactForm";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
const HostDetails = () => {
  const hostData = {
    name: "Darrell Steward",
    img: hostImg,
    description:
      "Captivating realm of musicianship, where creativity knows no bounds and emotions find their voice through the art of sound.",
    designation: "Musician",
    social: [
      {
        icon: "ti ti-brand-facebook",
        link: "#",
      },
      {
        icon: "ti ti-brand-twitter",
        link: "#",
      },
      {
        icon: "ti ti-brand-linkedin",
        link: "#",
      },
      {
        icon: "ti ti-brand-youtube",
        link: "#",
      },
      {
        icon: "ti ti-brand-instagram",
        link: "#",
      },
    ],
  };
  return (
    <section className="host-details-section host-details-page texture-bg-1 pb-120 overflow-visible">
      <div className="container">
        <div className="row gx-6 gy-6 gy-lg-0">
          <div className="col-xl-8">
            <div className="host-details-content d-grid gap-6 p-xxl-6 p-lg-4 p-3 rounded bgc-3">
              {/* <!-- host details card  --> */}
              <FadeUp>
                <HostCard cardData={hostData} />
              </FadeUp>
              {/* <!-- host popular episode content --> */}
              <div className="popular-episode d-grid p-xxl-8 p-lg-4 p-3 gap-xxl-8 gap-lg-6 gap-4 rounded bgc-2">
                <h3>Popular Episodes</h3>
                <span className="border-dashed"></span>
                <div className="popular-episode-wrapper">
                  {/* <!-- popular episode card  --> */}
                  <div className="row g-xxl-6 g-4">
                    {episodesData?.map((item, i) => (
                      <div className="col-md-6" key={i}>
                        <FadeUp>
                          <EpisodesCardTwo data={item} />
                        </FadeUp>
                      </div>
                    ))}
                  </div>
                </div>
                <span className="border-dashed"></span>
                {/* <!-- pagination  --> */}
                <FadeDown>
                  <Pagination />
                </FadeDown>
                {/* <!-- pagination  --> */}
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="host-details-sidebar p-xxl-6 p-lg-4 p-3 rounded bgc-3 position-sticky sticky-top sticky-top-position">
              <div className="contact-card-wrapper p-xxl-8 p-lg-4 p-3 rounded bgc-1">
                <FadeUp>
                  <h4 className="fw-semibold mb-4">Efficient Contact</h4>
                  <ContactForm />
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostDetails;
