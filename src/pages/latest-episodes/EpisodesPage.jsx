import PageHero from "@/components/PageHero/PageHero";
import Episodes from "./Episodes";
import CallToAction from "@/components/Shared/CallToAction";
import EpisodesList from "@/components/EpisodesCard/Episode-list";

const EpisodesPage = () => {
  return (
    <div className="episode-page">
      <PageHero
        pageTitle="Latest"
        highlightWord="Episodes"
        highlightColor="tcp-1"
        pb={"pb-lg-15"}
      />
      {/* <Episodes /> */}
      <EpisodesList />
      <CallToAction />
    </div>
  );
};

export default EpisodesPage;
