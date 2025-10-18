import AddToWishlist from "../Shared/AddToWishlist";
import HostName from "../Shared/HostName";
import PodcastTime from "../Shared/PodcastTime";
import SlideTrack from "../Shared/SlideTrack";
import trackImg from "../../images/record-2.png";
import { Link } from "react-router-dom";
import Heading from "../Shared/Heading";
import CircleBtn from "../Shared/CircleBtn";

const EpisodeUniqueCard2 = ({ cardData }) => {
  return (
    <div className="unique-episode-card-2 d-flex flex-column rounded-4 p-xxl-10 p-6 bcp-1-2">
      <div className="card-top d-between gap-xxl-6 gap-4 mb-6 pb-xxl-18 pb-10">
        <div className="d-flex align-items-center gap-sm-4 gap-2 flex-wrap flex-sm-nowrap">
          <HostName
            link={cardData.host.hostLink}
            icon={<i className="ti ti-microphone"></i>}
            iconColor="tcn-700"
            hostName={cardData.host.hostName}
            txtColor="tcn-700"
            hoverColor="link-text-2"
          />
          <PodcastTime
            time={cardData.time}
            icon={<i className="ti ti-clock"></i>}
            txtColor="tcn-700"
            iconColor="tcn-700"
          />
          <AddToWishlist color="tcn-700" />
        </div>
        <SlideTrack
          visibility={"d-none d-sm-block"}
          trackImg={trackImg}
          trackHeight={"height-46"}
        />
      </div>
      <div className="py-20 my-md-20 my-10 position-relative">
        <div className="card-banner position-absolute z-n1">
          <img className="w-100" src={cardData.banner} alt="image" />
        </div>
      </div>
      <div className="card-content">
        <Link to={`${cardData.textLink}`} className="link-text-2 tcn-700">
          <Heading
            HeadType="h3"
            headText={cardData.title}
            charLimit={100}
            headClass="fw-semibold mb-4"
          />
        </Link>
        <p className="fs-sm tcn-700">{cardData.desc}</p>
        <div className="d-between flex-wrap flex-sm-nowrap gap-sm-6 gap-4 mt-8">
          <CircleBtn
            type={"link"}
            link={cardData?.textLink}
            text={"Listen Now"}
            icon={<i className="ti ti-player-play"></i>}
            altColor="alt-color"
          />
          <span className="tag-btn alt-color">{cardData.episode}</span>
        </div>
      </div>
    </div>
  );
};

export default EpisodeUniqueCard2;
