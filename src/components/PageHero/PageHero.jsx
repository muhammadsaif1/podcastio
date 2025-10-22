import ListenOnBtns from "../Shared/ListenOnBtns";
import record from "../../images/record-track.png";
import SectionHeading from "../Shared/SectionHeading";
import FadeDown from "../../motion/FadeDown";
import waveLine from "@/images/wave-line.png";

const PageHero = ({
  pageTitle,
  highlightWord,
  highlightColor,
  // overflow = "overflow-hidden",
  pb = "",
}) => {
  return (
    <section
      className={`hero-section inner-hero-section pt-120 bg-bottom ${pb}`}
    >
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <FadeDown>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content text-center">
                <SectionHeading
                  headTxt={pageTitle}
                  highlightWord={highlightWord}
                  highlightColor={highlightColor}
                  headFs={"display-two"}
                  fw="fw-bold"
                  HeadingType="h1"
                />

                {/* <ListenOnBtns justify="justify-content-center" /> */}
                <div className="img-area mb-4 mx-auto">
                  {/* <img className="w-100" src={record} alt="image" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeDown>
    </section>
  );
};

export default PageHero;
