import SectionHeading from "@/components/Shared/SectionHeading";
import EpisodesSlider from "@/components/Shared/Slider/EpisodesSlider";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import SliderPaginationBtn from "@/components/Shared/Slider/SliderPaginationBtn";
import EpisodesData from "@/data/EpisodesData";
import FadeRight from "@/motion/FadeRight";
import FadeUp from "@/motion/FadeUp";
const MoreEpisode = () => {
  return (
    <section className="more-episodes-section pt-120 pb-120 texture-bg-2">
      <div className="container">
        <div className="row align-items-center g-4 mb-lg-15 mb-sm-10 mb-6">
          <div className="col-lg-8">
            <FadeRight>
              <div className="text-center text-lg-start">
                <SectionHeading
                  subTxt={"More Episode"}
                  HeadingType="h4"
                  headTxt={"More Related Episodes"}
                  icon={<i className="ti ti-rocket"></i>}
                  headFs="display-four"
                  fw="fw-bold"
                />
              </div>
            </FadeRight>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <SliderNavigatorBtn
              nextBtn={"more-episodes-next"}
              prevBtn={"more-episodes-prev"}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <FadeUp>
              <EpisodesSlider
                sliderData={EpisodesData}
                paginationEl={".more-episodes-pagination"}
                nextEl={".more-episodes-next"}
                prevEl={".more-episodes-prev"}
              />
              <div className="mt-lg-10 mt-8 text-center">
                <SliderPaginationBtn
                  paginationEl={"more-episodes-pagination"}
                />
                <div className="d-lg-none">
                  <SliderNavigatorBtn
                    nextBtn={"more-episodes-next"}
                    prevBtn={"more-episodes-prev"}
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreEpisode;
