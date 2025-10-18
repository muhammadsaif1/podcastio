import CircleBtn from "@/components/Shared/CircleBtn";
import Heading from "@/components/Shared/Heading";
import HostName from "@/components/Shared/HostName";
import PodcastTime from "@/components/Shared/PodcastTime";
import HostImg from "@/images/ep-details.png";
import usePlayButtonClick from "@/hooks/useAudioPlayer/usePlayButtonClick";

const EpisodeShortDetails = () => {
  const { handlePlayButtonClick } = usePlayButtonClick();
  const song = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";

  return (
    <div className="episode-details-card d-flex flex-column flex-md-row align-items-center p-xxl-8 p-4 gap-6 rounded bgc-2">
      <div className="img-area">
        <img className="w-100 rounded" src={HostImg} alt="episode image" />
      </div>
      <div className="episode-card small-card ">
        <div className="d-flex flex-wrap flex-sm-nowrap align-items-center gap-lg-6 gap-4 mb-lg-6 mb-4">
          <span className="tag-btn">Episode 04</span>
          <HostName
            icon={<i className="ti ti-microphone"></i>}
            link="/host-details"
            hostName="RJ Jones"
          />
          <PodcastTime
            icon={<i className="ti ti-clock"></i>}
            time="4hr 12min"
          />
        </div>
        <Heading
          HeadType="h3"
          headText="Laughter Unleashed: Join Us for Joyful Conversations Today"
          headClass="fw-semibold mb-4"
        />
        <p className="fs-sm fw-normal">
          Embark on a journey of unexplored wisdom as we delve into fascinating
          topics that challenge the mind
        </p>
        <div className="mt-lg-8 mt-6">
          <CircleBtn
            type={"button"}
            text={"Listen Now"}
            onClick={() => {
              handlePlayButtonClick(song);
            }}
            icon={<i className="ti ti-player-play"></i>}
            iconSize="fs-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EpisodeShortDetails;
