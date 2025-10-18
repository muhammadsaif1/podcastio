import HostName from "./../Shared/HostName";
import PodcastTime from "../Shared/PodcastTime";
import AddToWishlist from "../Shared/AddToWishlist";
import SlideTrack from "../Shared/SlideTrack";
import trackImg from "../../images/record.png";
import { Link } from "react-router-dom";
import Heading from "../Shared/Heading";
import CircleBtn from "../Shared/CircleBtn";

const EpisodeCommonCard = ({ cardData }) => {
  return (
    <div className="common-episode-card p-xxl-10 p-6 bgc-2 rounded">
      <div className="card-top d-between gap-xxl-6 gap-4 mb-6">
        <div className="d-flex align-items-center gap-sm-4 gap-2 flex-wrap flex-sm-nowrap">
          <HostName
            link={cardData?.host?.hostLink}
            icon={<i className="ti ti-microphone"></i>}
            hostName={cardData.host?.hostName}
          />
          <PodcastTime
            time={cardData?.time}
            icon={<i className="ti ti-clock"></i>}
          />
          <AddToWishlist />
        </div>
        <SlideTrack
          visibility={"d-none d-sm-block"}
          trackImg={trackImg}
          trackHeight={"height-46"}
        />
      </div>
      <Link to={`${cardData?.textLink}`} className="link-text">
        <Heading
          HeadType="h3"
          headText={cardData?.title}
          charLimit={60}
          headClass="fw-semibold mb-4"
        />
      </Link>
      <p className="fs-sm fw-normal">{cardData?.desc}</p>
      <div className="d-between flex-wrap flex-sm-nowrap gap-6 mt-8">
        <CircleBtn
          type={"link"}
          link={cardData?.textLink}
          text={"Listen Now"}
          icon={<i className="ti ti-player-play"></i>}
          iconSize="fs-xl"
        />
        <span className="tag-btn">{cardData?.episode}</span>
      </div>
    </div>
  );
};

export default EpisodeCommonCard;
