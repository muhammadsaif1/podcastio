import SectionHeading from "@/components/Shared/SectionHeading";
import TestimonialSliderFour from "@/components/Shared/Slider/TestimonialSliderFour";
import testimonialData from "@/data/testimonialSliderFour";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const Testimonial = ({ bg = "texture-bg-2" }) => {
  return (
    <section className={`testimonial-section-04 pt-120 pb-120 ${bg}`}>
      <div className="container">
        <div className="row justify-content-center mb-lg-10 mb-sm-8 mb-6">
          <div className="col-lg-6 text-center">
            <FadeUp>
              <SectionHeading
                subTxt="Testimonial"
                icon={<i className="ti ti-rocket"></i>}
                headTxt="What People Say About Our Podcast"
                headFs="display-four"
              />
            </FadeUp>
          </div>
        </div>
        {/* <!-- testimonial slider  --> */}
        <div className="row g-6 justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-1 d-none d-lg-block">
            <div className="swiper-btns">
              <div className="ts-swiper-4-prev button-prev fs-lg">
                <i className="ti ti-chevron-left"></i>
              </div>
            </div>
          </div>
          <div className="col-xxl-7 col-lg-8">
            <FadeDown>
              <TestimonialSliderFour
                sliderData={testimonialData}
                nextEl={".ts-swiper-4-next"}
                prevEl={".ts-swiper-4-prev"}
              />
            </FadeDown>
          </div>
          <div className="col-lg-1 d-none d-lg-block">
            <div className="swiper-btns">
              <div className="ts-swiper-4-next button-next ms-auto fs-lg">
                <i className="ti ti-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
