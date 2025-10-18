import { Link } from "react-router-dom";
import SocialList from "@/components/Shared/SocialList";

const HostDetails = ({ data }) => {
  // console.log(data);
  return (
    <div className="host-card-wrapper p-xxl-8 p-4 rounded bgc-1">
      <div className="host-thumb mx-auto position-relative mb-lg-6 mb-4">
        <img
          className="w-100 rounded-circle"
          src={data?.profile}
          alt="host thumb"
        />
        <span className="online-active me-md-2 me-1 mb-md-2 mb-1"></span>
      </div>
      <div className="host-details mb-lg-6 mb-4">
        <span className="text-center d-block tcp-1 mb-2">Hosted by</span>
        <h4 className="text-center fw-semibold mb-2 link-text">
          <Link to={data?.link}>{data?.name}</Link>
        </h4>
        <span className="text-center d-block">Love Story</span>
      </div>
      <SocialList socials={data?.socials} className="justify-content-center" />
    </div>
  );
};

export default HostDetails;
