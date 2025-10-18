import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import AboutUs from "./AboutUs";
import FeaturedShows from "./FeaturedShows";
import Hero from "./Hero";
import PricingPlan from "./PricingPlan";
import RecentEpisode from "./RecentEpisode";
import Testimonial from "./Testimonial";

const HomeTwo = () => {
  return (
    <>
      <Hero />
      <RecentEpisode />
      <AboutUs />
      <PricingPlan />
      <FeaturedShows />
      <Testimonial />
      <NewsLetterForm2 shape />
    </>
  );
};

export default HomeTwo;
