import ReturnusSection from "@/components/home/ReturnusSection";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";
import PodcastHighlights from "@/components/home/PodcastHighlights";
import PitchContestSection from "@/components/home/PitchContestSection";
import JoinMovementSection from "@/components/home/JoinMovementSection";

const HomeOne = () => {
  return (
    <>
      <Hero classes="pt-200 pb-150" />
      {/* <FeaturedShows /> */}
      <ReturnusSection />
      <PodcastHighlights />
      <PitchContestSection />
      {/* <JoinMovementSection /> */}
      <Testimonial />
      <NewsLetter bg={"texture-bg-1"} pb={"pb-120"} />
    </>
  );
};

export default HomeOne;
