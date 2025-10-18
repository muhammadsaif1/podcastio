import SunShape from "@/components/ShapeAnimation/SunShape";
import SectionHeading from "@/components/Shared/SectionHeading";
import TestimonialSlider from "@/components/Shared/Slider/TestimonialSlider";
import testimonialData from "@/data/testimonialSlider";
import FadeDown from "@/motion/FadeDown";

const Testimonial = () => {
  return (
    <section className="testimonials-section pt-120 pb-120 texture-bg-1">
      <SunShape position={"sun-shape-4"} visibility={"d-none d-lg-block"} />
      <SunShape position={"sun-shape-5"} visibility={"d-none d-lg-block"} />
      <div className="container">
        <div className="row justify-content-center mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-6">
            <FadeDown>
              <SectionHeading
                subTxt="Testimonial"
                icon={<i className="ti ti-rocket"></i>}
                headTxt="Listener Love, What They Say"
                headFs="display-four"
                alignItems="center"
                padding="px-5"
                descText="Explore what our listeners have to say about their experiences with our podcast. Their testimonials capture the essence of the joy, inspiration"
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
