import SectionHeading from "../../components/Shared/SectionHeading";
import TestimonialSlider from "../../components/Shared/Slider/TestimonialSlider";
import testimonialData from "../../data/testimonialSlider";
import FadeDown from "../../motion/FadeDown";

const Testimonial = () => {
  return (
    <section className="testimonials-section pt-60 pb-60 texture-bg-2">
      <div className="container">
        <div className="row justify-content-center mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-7">
            <FadeDown>
              <SectionHeading
                subTxt="Testimonial"
                icon={<i className="ti ti-rocket"></i>}
                headTxt={
                  <>
                    Listener <span className="tcp-1">Love</span>, What They Say
                  </>
                }
                headFs="display-four"
                alignItems="center"
                descText="Explore what listeners have to say about their journey, experiences, and the Return Podast."
                descClass="mt-lg-6 mt-4"
              />
            </FadeDown>
          </div>
        </div>
        {/* swiper  */}
        <div className="testimonials-slider">
          <TestimonialSlider
            sliderData={testimonialData}
            nextEl={".testimonials-slider-next"}
            prevEl={".testimonials-slider-prev"}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
