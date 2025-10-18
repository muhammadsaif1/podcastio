import SectionHeading from "@/components/Shared/SectionHeading";
import FeaturedSliderOne from "@/components/Shared/Slider/FeaturedSliderOne";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import FeaturedSliderData from "@/data/FeaturedSlider";
import SliderPaginationBtn from "@/components/Shared/Slider/SliderPaginationBtn";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
const FeaturedShows = () => {
  return (
    <div className="featured-shows pt-120 pb-120 texture-bg-1">
      <div className="container mb-lg-15 mb-sm-10 mb-8">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <FadeDown>
              <div className="text-center text-lg-start">
                <SectionHeading
                  subTxt="Featured Shows"
                  icon={<i className="ti ti-rocket"></i>}
                  headTxt="Top Listens Now"
                  headFs="display-four"
                />
              </div>
            </FadeDown>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <FadeUp>
              <SliderNavigatorBtn
                nextBtn={"top-listens-next"}
                prevBtn={"top-listens-prev"}
              />
            </FadeUp>
          </div>
        </div>
      </div>
      <FadeUp>
        <div className="container-fluid">
          <FeaturedSliderOne
            nextEl={".top-listens-next"}
            prevEl={".top-listens-prev"}
            sliderData={FeaturedSliderData}
            paginationEl={".top-listens-swiper-pagination"}
          />
          <div className="mt-lg-10 mt-8 text-center">
            <div className="d-none d-lg-block">
              <SliderPaginationBtn
                paginationEl={"top-listens-swiper-pagination"}
              />
            </div>
            <div className="d-lg-none d-block">
              <SliderNavigatorBtn
                justify="justify-content-center"
                nextBtn={"top-listens-next"}
                prevBtn={"top-listens-prev"}
              />
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

export default FeaturedShows;
