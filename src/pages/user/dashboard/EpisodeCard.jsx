import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-2.png";
import banner from "@/images/mic.png";

const EpisodeCard = () => {
  return (
    <div className="overview-card d-flex justify-content-lg-start justify-content-sm-between flex-lg-column flex-sm-row flex-column overflow-hidden rounded bcp-1-2">
      <div className="d-flex align-items-center gap-xxl-6 gap-4 p-xxl-6 p-lg-4 p-sm-2 p-6">
        <div className="icon-area alt-color">
          <i className="ti ti-headphones"></i>
        </div>
        <div className="content-area">
          <span className="d-block mb-2 tcn-700">Total Episode</span>
          <h3 className="fw-semibold tcn-700">692.9k</h3>
        </div>
      </div>
      <div className="card-banner-wrapper position-relative d-none d-sm-block">
        <SlideTrack trackImg={trackImg} />
        <div className="card-banner">
          <img className="w-100" src={banner} alt="banner" />
        </div>
        <SlideTrack trackImg={trackImg} />
      </div>
    </div>
  );
};

export default EpisodeCard;
