import { Link } from "react-router-dom";
import EpisodeNumber from "../Shared/EpisodeNumber";
import HostName from "../Shared/HostName";

const EpisodeCommonCard2 = ({ cardData }) => {
  return (
    <div className="episode-common-card-2 bgc-2 rounded d-flex flex-sm-row flex-column align-items-sm-center gap-sm-2 gap-8 p-xxl-6 p-lg-2 p-4">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row gap-xxl-8 gap-sm-4 gap-6 w-100">
        <div className="episode-card-img overflow-hidden rounded">
          <img
            className="w-100 h-100 rounded"
            src={cardData?.thumbs}
            alt={cardData?.title}
          />
        </div>
        <div className="card-content">
          <h3 className="mb-lg-6 mb-4 fw-medium">
            <a href="episodes-details.html" className="link-text">
              Innovation Insights: Diving Deep
            </a>
          </h3>
          <div className="d-flex align-items-center gap-4">
            <EpisodeNumber
              icon={<i className="ti ti-versions"></i>}
              iconSize="fs-xl"
              episode={cardData?.episode}
            />
            <HostName
              link={cardData?.host?.hostLink}
              icon={<i className="ti ti-microphone"></i>}
              hostName={cardData?.host?.hostName}
              hoverColor="link-text-2"
            />
          </div>
        </div>
      </div>
      <Link to={`${cardData?.textLink}`} className="icon-btn-2 fs-xl">
        <i className="ti ti-player-play"></i>
      </Link>
    </div>
  );
};

export default EpisodeCommonCard2;
