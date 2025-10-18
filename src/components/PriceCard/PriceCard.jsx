import { Link } from "react-router-dom";
import recordImg from "../../images/record-2.png";

const PriceCard = ({ data, showYear }) => {
  return data.map((item, index) => {
    return (
      <div className="col-xl-4 col-md-6" key={index}>
        <div
          className={`pricing-card py-lg-8 py-6 px-xxl-10 px-xl-8 px-6 rounded ${
            item?.isPopular === true ? "bcp-1-2" : "bgc-2"
          }`}
        >
          <div className="d-between mb-2">
            <span
              className={`package-type fs-four fw-bold ${
                item?.isPopular === true ? "tcn-700" : "tcn-0"
              }`}
            >
              {item?.name}
            </span>
            {item?.isPopular === true ? (
              <div className="img-area record-img">
                <img className="w-100" src={recordImg} alt="record icon" />
              </div>
            ) : null}
          </div>
          <div className="d-flex align-items-end gap-1 mb-4">
            {/* <!-- monthly price  --> */}
            <span
              className={`package-price monthly-price display-four ${
                item?.isPopular === true ? "tcn-700" : "tcp-1"
              } 
                  ${showYear ? "hide" : "show"}`}
            >
              {`${item?.monthlyPackage?.price.toFixed(2)}`}
            </span>
            <span
              className={`package-duration monthly-package fs-lg ${
                item?.isPopular === true ? "tcn-700" : "tcp-1"
              } ${showYear ? "hide" : "show"}`}
            >
              /{item?.monthlyPackage?.duration}
            </span>
            {/* <!-- yearly package  --> */}
            <span
              className={`package-price yearly-price display-four ${
                item?.isPopular === true ? "tcn-700" : "tcp-1"
              } ${showYear ? "show" : "hide"}`}
            >
              {`${item?.yearlyPackage?.price.toFixed(2)}`}
            </span>
            <span
              className={`package-duration yearly-package fs-lg ${
                item?.isPopular === true ? "tcn-900" : "tcp-1"
              } ${showYear ? "show" : "hide"}`}
            >
              /{item?.yearlyPackage?.duration}
            </span>
          </div>
          <span className={`${item?.isPopular === true ? "tcn-700" : "tcn-0"}`}>
            {item?.desc}
          </span>
          <span
            className={`d-block border-dashed my-lg-8 my-sm-6 my-4 ${
              item.isPopular ? "alt" : null
            }`}
          ></span>
          <ul
            className={`package-feature d-grid gap-lg-6 gap-sm-4 gap-2 fs-lg fw-medium ${
              item?.isPopular === true ? "tcn-700" : "tcn-0"
            }`}
          >
            {item?.features?.map((feature, index) => {
              return (
                <li
                  key={index}
                  className={`d-flex align-items-center gap-4 ${
                    feature?.isDisabled ? "muted-opacity" : ""
                  }`}
                >
                  <span
                    className={`icon-circle-box alt-size fw-bold fs-lg d-center ${
                      item.isPopular ? "alt-color tcp-1" : "tcn-900"
                    }`}
                  >
                    <i className={`${feature?.icon}`}></i>
                  </span>
                  {feature?.title}
                </li>
              );
            })}
          </ul>
          <span
            className={`d-block border-dashed my-lg-8 my-sm-6 my-4 ${
              item.isPopular ? "alt" : null
            }`}
          ></span>
          <Link
            to="/signup"
            className={`bttn-1 w-100 ${
              item?.isPopular === true ? "bttn-fill fill-alt" : "bttn-outline"
            } `}
          >
            Get Started Now
            <span className=" icon d-center icon-right">
              <i className="ti ti-arrow-narrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    );
  });
};

export default PriceCard;
