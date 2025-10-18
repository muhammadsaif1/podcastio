import SectionHeading from "@/components/Shared/SectionHeading";
import HostCardSlider2 from "@/components/Shared/Slider/HostCardSlider2";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import hostList from "@/data/HostList2";
import FadeLeft from "@/motion/FadeLeft";
import FadeRight from "@/motion/FadeRight";

const HostProfiles = () => {
  return (
    <section className="host-profile-section-2 pt-120 pb-120 texture-bg-2">
      <div className="container-fluid">
        <div className="row g-6 align-items-center justify-content-between">
          <div className="col-xxl-3 col-lg-4 col-md-8 col-sm-10 offset-xxl-2 offset-lg-1 offset-md-2 offset-sm-1 ps-lg-0">
            <FadeLeft>
              <div className="text-center text-lg-start">
                <SectionHeading
                  icon={<i className="ti ti-rocket"></i>}
                  subTxt="Host Profiles"
                  headTxt="Meet the Voices Behind"
                  headFs="display-four mb-6"
                  fw="fw-bold"
                  descText="Explore vibrant soundscapes where stories of every kind come alive, taking you on an immersive journey and through captivating narratives."
                  descClass="me-xxl-10"
                />
                <div className="d-lg-block d-none mt-lg-10 mt-6">
                  <SliderNavigatorBtn
                    justify="justify-content-start"
                    nextBtn={"host-swiper-2-next"}
                    prevBtn={"host-swiper-2-prev"}
                  />
                </div>
              </div>
            </FadeLeft>
          </div>
          <div className="col-lg-7">
            <FadeRight>
              <div className="host-slider">
                <HostCardSlider2
                  nextEl={".host-swiper-2-next"}
                  prevEl={".host-swiper-2-prev"}
                  paginationEl={".host-swiper-pagination"}
                  sliderData={hostList}
                />
                <div className="d-lg-none d-block mt-lg-10 mt-6">
                  <SliderNavigatorBtn
                    justify="justify-content-center"
                    nextBtn={"host-swiper-2-next"}
                    prevBtn={"host-swiper-2-prev"}
                  />
                </div>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostProfiles;
