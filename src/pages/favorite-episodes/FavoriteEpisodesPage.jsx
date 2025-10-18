import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import FavoriteEpisodes from "./FavoriteEpisodes";

const FavoriteEpisodesPage = () => {
  return (
    <>
      <PageHero
        pageTitle="Favorite"
        highlightWord="Episodes"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <FavoriteEpisodes />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default FavoriteEpisodesPage;
