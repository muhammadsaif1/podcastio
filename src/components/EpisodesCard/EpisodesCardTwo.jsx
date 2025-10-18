import { Link } from "react-router-dom";
import Heading from "../Shared/Heading";
import HostName from "../Shared/HostName";
import AddToWishlist from "../Shared/AddToWishlist";
import MiniPlayer from "../MiniPlayer/MiniPlayer";

const EpisodesCardTwo = ({ data }) => {
  return (
    <div className="popular-episode-card p-xxl-6 p-4 rounded bgc-1">
      <div className="d-flex align-items-sm-center flex-column flex-sm-row gap-xxl-8 gap-4">
        <div className="img-area">
          <img className="w-100 rounded" src={data?.img} alt="img" />
        </div>
        <div className="content-area">
          <Link to={`${data?.link}`} className="link-text">
            <Heading
              HeadType="h4"
              headText={data?.title}
              charLimit={25}
              headClass="fw-semibold mb-4"
            />
          </Link>
          <HostName
            icon={<i className="ti ti-microphone"></i>}
            link={data?.host?.link}
            hostName={data?.host?.name}
          />
        </div>
      </div>
      <div className="play-podcast-area my-lg-8 my-sm-6 my-4">
        <MiniPlayer audio={data?.audio} />
      </div>
      <div className="d-between flex-wrap gap-4">
        <Link to={`${data?.link}`} className="link-btn">
          View Details
        </Link>
        <div className="d-flex align-items-center gap-lg-4 gap-2">
          <span className="tag-btn">{data?.episode}</span>
          <AddToWishlist />
        </div>
      </div>
    </div>
  );
};

export default EpisodesCardTwo;
