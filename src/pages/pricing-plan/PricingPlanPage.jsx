import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import Testimonial from "../index-four/Testimonial";
import PricingPlan from "../index-two/PricingPlan";
import Faqs from "./Faqs";

const PricingPlanPage = () => {
  return (
    <>
      <PageHero
        pageTitle="Subscription"
        highlightWord="Plan"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <PricingPlan />
      <Faqs />
      <Testimonial bg="texture-bg-1" />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default PricingPlanPage;
