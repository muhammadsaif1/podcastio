import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import TendingArticles from "./TendingArticles";
const BlogList = () => {
  return (
    <>
      <PageHero
        pageTitle="Our Tending"
        highlightWord="Articles"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <TendingArticles />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default BlogList;
