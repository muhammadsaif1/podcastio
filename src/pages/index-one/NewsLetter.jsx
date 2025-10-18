import NewsLetterForm from "@/components/Shared/NewsLetterForm";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-3.png";
import banner from "@/images/record-mic.png";
import FadeUp from "@/motion/FadeUp";

const NewsLetter = ({ bg, pb = "" }) => {
  return (
    <section className={`news-letter-section ${bg} ${pb}`} id="newsletter">
      <div className="container news-letter-wrapper rounded-4">
        <FadeUp>
          <div className="row justify-content-between">
            <div className="col-xxl-6 col-xl-7 col-lg-8 pt-sm-20 pt-10 pb-lg-20 pb-sm-10 pb-6">
              <div className="news-letter-content pt-xxl-10 pb-xxl-10">
                <h4 className="display-four fw-bold tcn-700 mb-lg-10 mb-sm-6 mb-4">
                  Get the Latest Episode & Never Miss an Episode
                </h4>
                <NewsLetterForm iconOnly={false} />
              </div>
            </div>
            <div className="col-xl-5 col-lg-4">
              <div className="news-letter-banner-wrapper">
                <SlideTrack trackImg={trackImg} position={"top-img"} />
                <div className="news-letter-banner">
                  <img className="w-100" src={banner} alt="microphone" />
                </div>
                <SlideTrack trackImg={trackImg} position={"bottom-img"} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default NewsLetter;
