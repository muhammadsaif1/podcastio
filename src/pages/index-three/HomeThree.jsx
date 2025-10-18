import CallToAction from "@/components/Shared/CallToAction";
import AboutUs from "./AboutUs";
import ElevateExperience from "./ElevateExperience";
import FeaturedShows from "./FeaturedShows";
import Hero from "./Hero";
import HostProfiles from "./HostProfiles";
import RecentEpisode from "./RecentEpisode";
import RegisterAs from "./RegisterAs";
import Testimonial from "./Testimonial";

const HomeThree = () => {
  return (
    <>
      <Hero />
      <RecentEpisode />
      <AboutUs />
      <FeaturedShows />
      <HostProfiles />
      <RegisterAs />
      <ElevateExperience />
      <Testimonial />
      <CallToAction bg="texture-bg-2" />
    </>
  );
};

export default HomeThree;
