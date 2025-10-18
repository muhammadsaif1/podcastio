import { Link } from "react-router-dom";
import HostName from "../Shared/HostName";
import PodcastTime from "../Shared/PodcastTime";
import Heading from "../Shared/Heading";
import CircleBtn from "../Shared/CircleBtn";

const EpisodeUniqueCard3 = ({ cardData }) => {
  return (
    <div className="d-flex flex-column rounded-4 p-xxl-10 p-3 bcp-1-2">
      <div className="card-top d-between flex-wrap gap-xxl-6 gap-4 mb-lg-8 mb-sm-6 mb-4">
        <span className="tag-btn alt-color">{cardData?.episode}</span>
        <div className="d-flex align-items-center gap-sm-4 gap-2 flex-wrap flex-sm-nowrap">
          <HostName
            link={cardData?.host?.hostLink}
            icon={<i className="ti ti-microphone"></i>}
            iconColor="tcn-700"
            hostName={cardData?.host?.hostName}
            txtColor="tcn-700"
            hoverColor="link-text-2"
          />
          <PodcastTime
            time={cardData?.time}
            icon={<i className="ti ti-clock"></i>}
            txtColor="tcn-700"
            iconColor="tcn-700"
          />
        </div>
      </div>
      <div className="card-banner mb-lg-8 mb-sm-6 mb-4">
        <img className="w-100" src={cardData?.banner} alt="image" />
      </div>
      <div className="card-content">
        <Link to={`${cardData?.textLink}`} className="link-text-2 tcn-700">
          <Heading
            HeadType="h3"
            headText={cardData?.title}
            charLimit={100}
            headClass="fw-semibold mb-4"
          />
        </Link>
        <p className="fs-sm tcn-700">{cardData?.desc}</p>
        <div className="card-btns d-between flex-wrap gap-6 mt-lg-8 mt-6">
          <CircleBtn
            type={"button"}
            text={"Listen Now"}
            // onClick={() => {}}
            icon={<i className="ti ti-player-play"></i>}
            // iconColor="tcn-700"
            altColor="alt-color"
          />
          <a href="episodes-details.html" className="bttn-1 bttn-outline-2">
            Read More
            <span className="icon d-center icon-right fs-xl fw-bold">
              <i className="ti ti-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EpisodeUniqueCard3;
