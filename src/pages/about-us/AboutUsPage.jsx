import PageHero from "@/components/PageHero/PageHero";
import CounterUp from "./CounterUp";
import JoiningReason from "./JoiningReason";
import OurHost from "../index-one/OurHost";
import Testimonial from "../index-one/Testimonial";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import ElevateExperience from "../index-three/ElevateExperience";
import WhyChooseUS from "../index-one/WhyChooseUS";
import AboutUsSection from "../index-two/AboutUs";
const AboutUsPage = () => {
  return (
    <>
      <PageHero
        pageTitle="The"
        highlightWord="Podcastio"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <ElevateExperience />
      <WhyChooseUS />
      <CounterUp />
      <AboutUsSection />
      <JoiningReason />
      <OurHost />
      <Testimonial />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default AboutUsPage;
