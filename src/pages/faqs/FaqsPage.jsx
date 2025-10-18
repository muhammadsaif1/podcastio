import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import Faqs from "./Faqs";

const FaqsPage = () => {
  return (
    <>
      <PageHero
        pageTitle="FAQ"
        highlightWord="s"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <Faqs />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default FaqsPage;
