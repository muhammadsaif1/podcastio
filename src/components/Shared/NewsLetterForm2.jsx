import FadeDown from "../../motion/FadeDown";
import NewsLetterForm from "./NewsLetterForm";
import SectionHeading from "./SectionHeading";
import TopWave from "./TopWave";
const NewsLetterForm2 = ({ shape }) => {
  return (
    <section className="news-letter-section-02 texture-bg-2" id="newsletter">
      <FadeDown>
        {shape && <TopWave />}
        <div className="container pt-120 pb-120">
          <div className="row g-6">
            <div className="col-lg-8">
              <SectionHeading
                headTxt="Stay in Our Newsletter"
                headFs="display-four"
                fw="fw-semibold"
              />
            </div>
            <div className="col-lg-4">
              <NewsLetterForm iconOnly />
            </div>
          </div>
        </div>
      </FadeDown>
    </section>
  );
};

export default NewsLetterForm2;
