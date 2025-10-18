import PageHero from "@/components/PageHero/PageHero";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";
import EpisodeDetails from "./EpisodeDetails";
import MoreEpisode from "./MoreEpisode";

const EpisodeDetailsPage = () => {
  return (
    <>
      <PageHero
        pageTitle="Episode"
        highlightWord="Details"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <EpisodeDetails />
      <MoreEpisode />
      <CallToAction bg="texture-bg-2 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default EpisodeDetailsPage;
