
import PageHero from "@/components/PageHero/PageHero";
import RecentArticles from "./RecentArticles";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";

const BlogGrid = () => {
  return (
    <>
      <PageHero
        pageTitle="Our Recent"
        highlightWord="Articles"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <RecentArticles />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default BlogGrid;
