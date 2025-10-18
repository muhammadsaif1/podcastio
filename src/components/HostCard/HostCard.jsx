// import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const HostCard = ({ cardData }) => {
  const [showSocialItems, setShowSocialItems] = useState(false);
  return (
    <div className="host-card">
      <div className="host-profile position-relative pb-5">
        <div className="img-area overflow-hidden">
          <img
            className="w-100 rounded"
            src={cardData?.host?.img}
            alt={cardData?.host?.name}
          />
        </div>
        <div className="host-social-link d-flex justify-content-end align-items-end v-line mx-5">
          <div
            className={`social-link ${
              showSocialItems === true ? "active" : ""
            }`}
          >
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
          </div>
        </div>
      </div>
      <div className="host-info mt-5 ms-5">
        <Link to={cardData?.host?.link} className="fs-four fw-medium link-text">
          {cardData?.host?.name}
        </Link>
        <span className="fs-sm fw-normal">{cardData?.host?.title}</span>
      </div>
    </div>
  );
};

export default HostCard;
