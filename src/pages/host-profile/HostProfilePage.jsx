import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import Testimonial from "../index-two/Testimonial";
import HostProfile from "./HostProfile";

const HostProfilePage = () => {
  return (
    <>
      <PageHero
        pageTitle="Our Podcast"
        highlightWord="Host"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <HostProfile />
      <Testimonial secBg="texture-bg-2" cardBg="bgc-1" />
      <CallToAction bg="texture-bg-2 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default HostProfilePage;
