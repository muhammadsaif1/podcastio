import BottomWave from "@/components/Shared/BottomWave";
import SectionHeading from "@/components/Shared/SectionHeading";
import FeaturedSliderTwo from "@/components/Shared/Slider/FeaturedSliderTwo";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import SliderPaginationBtn from "@/components/Shared/Slider/SliderPaginationBtn";
import TopWave from "@/components/Shared/TopWave";
import FeaturedSliderData from "@/data/FeaturedSlider";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";

const FeaturedShows = () => {
  return (
    <section className="featured-shows-2 texture-bg-2">
      <TopWave />
      <div className="section-wrapper pt-120 pb-120">
        <div className="container mb-lg-15 mb-sm-10 mb-8">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <FadeRight>
                <div className="text-center text-lg-start">
                  <SectionHeading
                    subTxt="Featured Shows"
                    icon={<i className="ti ti-rocket"></i>}
                    headTxt="Top Listens Now"
                    headFs="display-four"
                    fw="fw-semibold"
                  />
                </div>
              </FadeRight>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <SliderNavigatorBtn
                nextBtn={"featured-show-next"}
                prevBtn={"featured-show-prev"}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <FadeUp>
            <FeaturedSliderTwo
              nextEl={".featured-show-next"}
              prevEl={".featured-show-prev"}
              sliderData={FeaturedSliderData}
              paginationEl={".featured-show-swiper-pagination"}
            />
            <div className="mt-lg-10 mt-8 text-center">
              <div className="d-none d-lg-block">
                <SliderPaginationBtn
                  paginationEl={"featured-show-swiper-pagination"}
                />
              </div>
              <div className="d-lg-none d-block">
                <SliderNavigatorBtn
                  justify="justify-content-center"
                  nextBtn={"featured-show-next"}
                  prevBtn={"featured-show-prev"}
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default FeaturedShows;
