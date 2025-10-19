import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import Testimonial from "./Testimonial";

const HomeOne = () => {
  return (
    <>
      <Hero />
      {/* <FeaturedShows /> */}
      <Testimonial />
      <NewsLetter bg={"texture-bg-1"} pb={"pb-120"} />
    </>
  );
};

export default HomeOne;
