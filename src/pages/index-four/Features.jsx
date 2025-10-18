import SectionHeading from "@/components/Shared/SectionHeading";
import FeaturesSlider from "@/components/Shared/Slider/FeaturesSlider";
import SliderNavigatorBtn from "@/components/Shared/Slider/SliderNavigatorBtn";
import FadeDown from "@/motion/FadeDown";
import FadeRight from "@/motion/FadeRight";

const featureList = [
  {
    id: 1,
    icon: "ti ti-playlist",
    title: "Tailored Playlists",
    description: "Curated playlists to match your mood and interests",
  },
  {
    id: 2,
    icon: "ti ti-ad-circle-off",
    title: "Ad-Free Listening",
    description: "Enjoy uninterrupted episodes without pesky ads.",
  },
  {
    id: 3,
    icon: "ti ti-device-mobile-off",
    title: "Offline Mode",
    description:
      "Download episodes and listen on the go, even without internet.",
  },
  {
    id: 4,
    icon: "ti ti-headset",
    title: "Listener Surveys",
    description:
      "Shape the content with your preferences through regular surveys.",
  },
  {
    id: 5,
    icon: "ti ti-playlist",
    title: "Tailored Playlists",
    description: "Curated playlists to match your mood and interests",
  },
  {
    id: 6,
    icon: "ti ti-ad-circle-off",
    title: "Ad-Free Listening",
    description: "Enjoy uninterrupted episodes without pesky ads.",
  },
  {
    id: 7,
    icon: "ti ti-device-mobile-off",
    title: "Offline Mode",
    description:
      "Download episodes and listen on the go, even without internet.",
  },
  {
    id: 8,
    icon: "ti ti-headset",
    title: "Listener Surveys",
    description:
      "Shape the content with your preferences through regular surveys.",
  },
];

const Features = () => {
  return (
    <section className="featured-section pt-120 pb-120 texture-bg-1">
      <div className="container pt-20">
        <div className="row g-6 justify-content-between align-items-center mb-lg-15 mb-sm-10 mb-6">
          <div className="col-xxl-6 col-lg-8">
            <div className="text-center text-lg-start">
              <FadeRight>
                <SectionHeading
                  subTxt="Features"
                  icon={<i className="ti ti-rocket"></i>}
                  headTxt="Explore Podcast What Sets Us Apart"
                  headFs="display-four"
                  fw="fw-semibold"
                />
              </FadeRight>
            </div>
          </div>
          <div className="col-lg-2 d-none d-lg-block">
            <SliderNavigatorBtn
              nextBtn={"features-next"}
              prevBtn={"features-prev"}
            />
          </div>
        </div>
        <FadeDown>
          <FeaturesSlider
            sliderData={featureList}
            nextEl={".features-next"}
            prevEl={".features-prev"}
          />
          <div className="mt-sm-8 mt-6 d-lg-none">
            <SliderNavigatorBtn
              justify="justify-content-center"
              nextBtn={"features-next"}
              prevBtn={"features-prev"}
            />
          </div>
        </FadeDown>
      </div>
    </section>
  );
};

export default Features;
