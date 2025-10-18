import FeaturedShows from "./FeaturedShows";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import OurHost from "./OurHost";
import RecentEpisode from "./RecentEpisode";
import Testimonial from "./Testimonial";
import WhyChooseUS from "./WhyChooseUS";

const HomeOne = () => {
  return (
    <>
      <Hero />
      <FeaturedShows />
      <WhyChooseUS />
      <RecentEpisode />
      <OurHost />
      <Testimonial />
      <NewsLetter bg={"texture-bg-1"} pb={"pb-120"} />
    </>
  );
};

export default HomeOne;
