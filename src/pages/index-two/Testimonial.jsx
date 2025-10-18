import SunShape from "@/components/ShapeAnimation/SunShape";
import SectionHeading from "@/components/Shared/SectionHeading";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import SliderPaginationBtn from "@/components/Shared/Slider/SliderPaginationBtn";
import TestimonialSliderTwo from "@/components/Shared/Slider/TestimonialSliderTwo";
import testimonialData from "@/data/testimonialSliderTwo";
import FadeDown from "@/motion/FadeDown";
import FadeLeft from "@/motion/FadeLeft";
const Testimonial = ({ secBg = "texture-bg-1", cardBg = "bgc-2" }) => {
  return (
    <section className={` testimonial-section-02 pt-120 pb-120 ${secBg}`}>
      <SunShape position={"sun-shape-4"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-5"} visibility={"d-none d-md-block"} />
      <div className="container">
        <div className="row align-items-center mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-8">
            <FadeLeft>
              <div className="text-center text-lg-start">
                <SectionHeading
                  subTxt="Testimonial"
                  icon={<i className="ti ti-rocket"></i>}
                  headTxt="What Our Listener Say"
                  headFs="display-four"
                  fw="fw-semibold"
                />
              </div>
            </FadeLeft>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <SliderNavigatorBtn
              nextBtn={"testimonial-02-next"}
              prevBtn={"testimonial-02-prev"}
            />
          </div>
        </div>
        <FadeDown>
          <TestimonialSliderTwo
            paginationEl={".testimonial-02-pagination"}
            nextEl={".testimonial-02-next"}
            prevEl={".testimonial-02-prev"}
            sliderData={testimonialData}
            cardBg={cardBg}
          />

          <div className="mt-lg-10 mt-8 text-center">
            <div className="d-none d-lg-block">
              <SliderPaginationBtn paginationEl={"testimonial-02-pagination"} />
            </div>
            <div className="d-lg-none d-block">
              <SliderNavigatorBtn
                justify="justify-content-center"
                nextBtn={"testimonial-02-next"}
                prevBtn={"testimonial-02-prev"}
              />
            </div>
          </div>
        </FadeDown>
      </div>
    </section>
  );
};

export default Testimonial;
