// import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HostCard = ({ cardData }) => {
  const [showSocialItems, setShowSocialItems] = useState(false);
  return (
    <div className="host-card host-card-2 position-relative mx-auto">
      <div className="host-profile position-relative">
        <div className="img-area overflow-hidden">
          <div className="overlay"></div>
          <img
            className="w-100 rounded"
            src={cardData?.host?.img}
            alt={cardData?.host?.name}
          />
        </div>
        <div className="host-social-link position-absolute top-0 end-0 mt-xxl-5 mt-3 me-xxl-5 me-3">
          <div className="social-link alt-link gap-xxl-5 gap-2">
            <button
              className="link-expand-btn fs-lg"
              onClick={() => setShowSocialItems(!showSocialItems)}
            >
              {showSocialItems === true ? (
                <i className="ti ti-minus"></i>
              ) : (
                <i className="ti ti-plus"></i>
              )}
            </button>
            <ul
              className={`social-link-list ${
                showSocialItems === true ? "active" : ""
              }`}
            >
              {cardData?.social?.map((item) => (
                <li key={item?.id}>
                  <Link to={item?.link} className="social-link-item icon-lg">
                    <i className={item?.icon}></i>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="host-info position-absolute bottom-0 start-0 w-100 mb-lg-6 mb-4 text-center">
        <Link
          to={cardData?.host?.link}
          className="fs-four fw-medium link-text mb-2"
        >
          {cardData?.host?.name}{" "}
        </Link>
        <span className="fs-sm fw-normal">{cardData?.host?.title}</span>
      </div>
    </div>
  );
};

export default HostCard;
