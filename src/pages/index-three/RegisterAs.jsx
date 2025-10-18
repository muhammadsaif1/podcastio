import { Link } from "react-router-dom";
import listener from "@/images/listener.png";
import podcaster from "@/images/podcaster.png";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-2.png";
import FadeDown from "@/motion/FadeDown";

const RegisterAs = () => {
  const registerAsData = [
    {
      icon: "ti ti-microphone",
      //   icon: "ti ti-rocket",
      registerType: "podcaster",
      title: "Register Yourself as a Podcaster",
      btnText: "Get Started",
      link: "register",
      banner: podcaster,
    },
    {
      icon: "ti ti-headset",
      //   icon: "ti ti-rocket",
      registerType: "listener",
      title: "Register Yourself as a Listener",
      btnText: "Get Started",
      link: "register",
      banner: listener,
    },
  ];
  return (
    <section className="register-as-section texture-bg-2">
      <div className="container">
        <div className="row g-6">
          {registerAsData.map((item, index) => {
            return (
              <div className="col-lg-6" key={index}>
                <FadeDown>
                  <div
                    className={`register-as-card p-lg-10 p-sm-6 p-4 rounded-3 overflow-hidden ${
                      item.registerType === "podcaster" ? "bcp-1" : "bcp-4"
                    }`}
                  >
                    <div className="d-between justify-content-center justify-content-lg-between mb-4">
                      <span className="subheading-border alt-color fw-medium fs-xl">
                        <span className="fs-2xl">
                          <i className={item.icon}></i>
                        </span>
                        {item.registerType}
                      </span>
                      <SlideTrack
                        visibility={"d-none d-lg-block"}
                        trackImg={trackImg}
                      />
                    </div>
                    <span className="display-four text-center text-lg-start fw-bold tcn-700">
                      {item.title}
                    </span>
                    <div className="text-center text-lg-start">
                      <Link
                        to={item.link}
                        className="bttn-1 cus-bttn alt-color mt-lg-10 mt-sm-6 mt-4"
                      >
                        {item.btnText}
                        <span className="icon d-center icon-right">
                          <i className="ti ti-arrow-narrow-right"></i>
                        </span>
                      </Link>
                      <div className="register-as-banner">
                        <img className="w-100" src={item.banner} alt="image" />
                      </div>
                    </div>
                  </div>
                </FadeDown>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RegisterAs;
