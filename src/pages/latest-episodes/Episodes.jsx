import EpisodeCardOne from "@/components/EpisodesCard/EpisodeCardOne";
import Pagination from "@/components/Shared/Pagination";
import EpisodesData from "@/data/EpisodesData";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const Episodes = ({ searchKeyword, removeSearchHistory }) => {
  return (
    <section className="latest-episodes-section pt-15 pb-120 texture-bg-1">
      <div className="container">
        {searchKeyword.length > 0 && (
          <FadeDown>
            <div className="d-between gap-2 flex-wrap align-items-center mb-lg-10 mb-sm-6 mb-4">
              <p>507 Horror Episode Available</p>

              <ul
                className={`search-tag-list d-flex justify-content-lg-end flex-wrap gap-3 tcp-1 ${
                  searchKeyword.length > 6 ? "small-tag-list" : ""
                }`}
              >
                {searchKeyword?.map((item, i) => (
                  <li key={i} className="d-flex align-items-center gap-2">
                    <span>{item}</span>
                    <button onClick={() => removeSearchHistory(item)}>
                      <i className="ti ti-x"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeDown>
        )}
        <div className="row g-6">
          {EpisodesData?.map((item, i) => (
            <div className="col-xxl-6" key={i}>
              <FadeUp>
                <EpisodeCardOne data={item} />
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

export default Episodes;
