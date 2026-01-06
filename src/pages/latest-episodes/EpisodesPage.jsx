import CallToAction from "@/components/Shared/CallToAction";
import EpisodesList from "@/components/EpisodesCard/Episode-list";
import "./stle.scss";

const EpisodesPage = () => {
  return (
    <div className="episode-page pt-120 texture-bg-2">
      <div className="podcast-heading">
        <h1>
          Podcast <span>Episodes</span>{" "}
        </h1>
      </div>

      <EpisodesList />
      <CallToAction />
    </div>
  );
};

export default EpisodesPage;
