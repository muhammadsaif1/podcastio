import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import BlogDetails from "./BlogDetails";

const BlogDetailsPage = () => {
  return (
    <>
      <PageHero
        pageTitle="Blog"
        highlightWord="Details"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <BlogDetails />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default BlogDetailsPage;
