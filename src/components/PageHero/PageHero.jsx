import ListenOnBtns from "../Shared/ListenOnBtns";
import shape1 from "../../images/shape-1.png";
import shape2 from "../../images/shape-2.png";
import shape3 from "../../images/shape-3.png";
import VLine from "../../images/vector-line-2.png";
import record from "../../images/record-track.png";
import SectionHeading from "../Shared/SectionHeading";
import FadeDown from "../../motion/FadeDown";

const PageHero = ({
  pageTitle,
  highlightWord,
  highlightColor,
  // overflow = "overflow-hidden",
  pb = "",
}) => {
  return (
    <section
      className={`hero-section inner-hero-section texture-bg-2 pt-120  bg-bottom ${pb}`}
    >
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1">
        <img className="w-100" src={VLine} alt="line" />
      </div>
      <div className="circle-shape shape-1 d-none d-sm-block">
        <img className="w-100" src={shape1} alt="shape" />
      </div>
      <div className="circle-shape shape-2 d-none d-sm-block">
        <img className="w-100" src={shape2} alt="shape" />
      </div>
      <FadeDown>
        <div className="container">
          <div className="circle-shape shape-3 d-none d-sm-block">
            <img className="w-100" src={shape3} alt="shape" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="hero-content text-center">
                <div className="img-area mb-4 mx-auto">
                  <img className="w-100" src={record} alt="image" />
                </div>
                <SectionHeading
                  headTxt={pageTitle}
                  highlightWord={highlightWord}
                  highlightColor={highlightColor}
                  headFs={"display-two"}
                  fw="fw-bold"
                  HeadingType="h1"
                />
                <div className="mt-lg-10 mt-6">
                  <ListenOnBtns justify="justify-content-center" />
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
