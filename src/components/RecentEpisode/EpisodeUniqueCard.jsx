import HostName from "../Shared/HostName";
import PodcastTime from "../Shared/PodcastTime";
import AddToWishlist from "../Shared/AddToWishlist";
import SlideTrack from "../Shared/SlideTrack";
import trackImg from "../../images/record-2.png";
import { Link } from "react-router-dom";
import Heading from "../Shared/Heading";
import CircleBtn from "../Shared/CircleBtn";
const EpisodeUniqueCard = ({ cardData }) => {
  return (
    <div className="unique-episode-card d-flex flex-column flex-lg-row rounded-4 bcp-1-2">
      <div className="card-banner d-none d-sm-block ms-xxl-10">
        <img className="w-100" src={cardData.banner} alt="image" />
      </div>
      <div className="card-content p-xxl-10 p-6">
        <div className="card-top d-between gap-xxl-6 gap-4 mb-6">
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
        <Link to={`${cardData.textLink}`} className="link-text-2 tcn-700">
          <Heading
            HeadType="h3"
            headText={cardData.title}
            charLimit={90}
            headClass="fw-semibold mb-4"
          />
        </Link>
        <p className="fs-sm tcn-700">{cardData.desc}</p>
        <div className="d-between flex-wrap flex-sm-nowrap gap-6 mt-8">
          <CircleBtn
            type={"button"}
            text={"Listen Now"}
            // onClick={() => {}}
            icon={<i className="ti ti-player-play"></i>}
            // iconColor="tcn-700"
            altColor="alt-color"
          />
          <span className="tag-btn alt-color">{cardData.episode}</span>
        </div>
      </div>
    </div>
  );
};

export default EpisodeUniqueCard;
