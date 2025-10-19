import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

const HomeOne = () => {
  return (
    <>
      <Hero classes="pt-200 pb-150" />
      {/* <FeaturedShows /> */}
      <Testimonial />
      <NewsLetter bg={"texture-bg-1"} pb={"pb-120"} />
    </>
  );
};

export default HomeOne;
