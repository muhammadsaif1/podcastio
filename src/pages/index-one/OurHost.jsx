import TopWave from "@/components/Shared/TopWave";
import BottomWave from "@/components/Shared/BottomWave";
import SectionHeading from "@/components/Shared/SectionHeading";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import HostCardSlider from "@/components/Shared/Slider/HostCardSlider";
import hostList from "@/data/HostList";
import SliderPaginationBtn from "@/components/Shared/Slider/SliderPaginationBtn";
import FadeRight from "@/motion/FadeRight";
import FadeLeft from "@/motion/FadeLeft";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";

const OurHost = () => {
  return (
    <section className="host-profile-section texture-bg-2">
      <TopWave />
      <div className="container pt-120 pb-120">
        <div className="row align-items-center mb-lg-15 mb-sm-10 mb-8">
          <div className="col-lg-8">
            <FadeRight>
              <div className="text-center text-lg-start">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Host Profiles"
                  headTxt="Meet the Voices Behind"
                  headFs="display-four"
                />
              </div>
            </FadeRight>
          </div>
          <div className="col-lg-4 d-none d-lg-block">
            <FadeLeft>
              <SliderNavigatorBtn
                nextBtn={"host-card-next"}
                prevBtn={"host-card-prev"}
              />
            </FadeLeft>
          </div>
        </div>
        {/* swiper  */}
        <div className="host-slider">
          <FadeUp>
            <HostCardSlider
              nextEl={".host-card-next"}
              prevEl={".host-card-prev"}
              paginationEl={".host-swiper-pagination"}
              sliderData={hostList}
            />
          </FadeUp>
          <FadeDown>
            <div className="mt-lg-10 mt-8 text-center">
              <div className="d-none d-lg-block">
                <SliderPaginationBtn paginationEl={"host-swiper-pagination"} />
              </div>
              <div className="d-lg-none d-block">
                <SliderNavigatorBtn
                  justify="justify-content-center"
                  nextBtn={"host-card-next"}
                  prevBtn={"host-card-prev"}
                />
              </div>
            </div>
          </FadeDown>
        </div>
      </div>
      <BottomWave />
    </section>
  );
};

export default OurHost;
