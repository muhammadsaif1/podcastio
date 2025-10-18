import SectionHeading from "@/components/Shared/SectionHeading";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import banner from "@/images/testimonial-banner.png";
import TestimonialSliderData from "@/data/testimonialSliderThree";
import TestimonialSlider from "@/components/Shared/Slider/TestimonialSliderThree";
import FadeLeft from "@/motion/FadeLeft";
import FadeUp from "@/motion/FadeUp";
import FadeRight from "@/motion/FadeRight";

const Testimonial = () => {
  return (
    <section className="testimonial-section-3 pt-120 pb-120 texture-bg-2">
      <div className="container">
        <div className="row g-6 justify-content-between">
          <div className="col-xxl-5 col-lg-6">
            <FadeLeft>
              <div className="testimonial-banner mx-auto">
                <img className="w-100 rounded" src={banner} alt="banner" />
              </div>
            </FadeLeft>
          </div>
          <div className="col-lg-6">
            <div className="content-area text-center text-lg-start">
              <FadeUp>
                <SectionHeading
                  subTxt="Testimonial"
                  icon={<i className="ti ti-rocket"></i>}
                  HeadingType="h4"
                  headTxt="Echoes of Appreciation To Listener's"
                  headFs="display-four"
                />
              </FadeUp>
              <FadeRight>
                <div className="mt-xxl-15 mt-xl-10 mt-6">
                  <TestimonialSlider
                    sliderData={TestimonialSliderData}
                    nextEl={".testimonial-3-next"}
                    prevEl={".testimonial-3-prev"}
                  />
                  <div className="mt-lg-10 mt-sm-6 mt-4">
                    <SliderNavigatorBtn
                      justify="justify-content-center"
                      nextBtn={"testimonial-3-next"}
                      prevBtn={"testimonial-3-prev"}
                    />
                  </div>
                </div>
              </FadeRight>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
