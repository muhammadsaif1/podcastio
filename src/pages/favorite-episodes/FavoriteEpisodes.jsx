import EpisodesCardThree from "@/components/EpisodesCard/EpisodesCardThree";
import EpisodesData from "@/data/EpisodesData";
import FadeUp from "@/motion/FadeUp";
import Pagination from "@/components/Shared/Pagination";

const FavoriteEpisodes = () => {
  return (
    <section className="favorite-episode-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6">
          {EpisodesData.slice(0, 8).map((episode) => (
            <div className="col-xxl-6" key={episode.id}>
              <FadeUp>
                <EpisodesCardThree data={episode} />
              </FadeUp>
            </div>
          ))}
        </div>

        {/* <!-- pagination start --> */}
        <Pagination />
        {/* <!-- pagination end --> */}
      </div>
    </section>
  );
};

export default FavoriteEpisodes;
