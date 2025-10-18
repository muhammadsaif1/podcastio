import { Link } from "react-router-dom";
import HostName from "../Shared/HostName";
import AddToWishlist from "../Shared/AddToWishlist";
import Heading from "../Shared/Heading";
import MiniPlayer from "../MiniPlayer/MiniPlayer";

const EpisodesCardThree = ({ data }) => {
  return (
    <div className="favorite-episode-card d-flex flex-md-row flex-column rounded-3 bgc-2">
      <div className="img-area p-3">
        <img className="w-100 h-100 rounded" src={data?.banner} alt="img" />
      </div>
      <div className="card-content p-6">
        <div className="card-top d-between flex-wrap flex-sm-nowrap gap-4 mb-5">
          <div className="d-flex align-items-center flex-wrap flex-sm-nowrap gap-4">
            <span className="tag-btn text-nowrap">{data?.episode}</span>
            <HostName
              link={data?.host?.link}
              icon={<i className="ti ti-microphone"></i>}
              hostName={data?.host?.name}
            />
          </div>
          <AddToWishlist />
        </div>
        <Link to={`${data?.link}`} className="link-text">
          <Heading
            headText={data?.title}
            charLimit={60}
            headClass="fs-three fw-semibold mb-4"
          />
        </Link>
        <div className="play-podcast-area mb-sm-8 mb-4">
          <MiniPlayer audio={data?.audio} />
        </div>
        <div className="mb-3">
          <Link to="#" className="link-btn">
            Listen Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EpisodesCardThree;
