
import { Link } from "react-router-dom";

const PriceCard2 = ({ data, showYear }) => {
  return data.map((item, index) => {
    return (
      <div className="col-lg-12 col-md-6" key={index}>
        <div
          className={`pricing-card pricing-card-2 d-flex align-items-lg-center justify-content-between flex-column flex-lg-row py-lg-8 py-6  px-xxl-10 px-xl-8 px-4 bgc-2 rounded ${
            item?.isPopular === true ? "bcp-1-2" : "bgc-2"
          }`}
        >
          <div>
            <span
              className={`package-type fs-four fw-bold ${
                item?.isPopular === true ? "tcn-700" : "tcn-0"
              }`}
            >
              {item?.name}
            </span>
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
            <span
              className={`${item?.isPopular === true ? "tcn-700" : "tcn-0"}`}
            >
              Free 20 Days Trail
            </span>
          </div>
          <ul
            className={`package-feature d-lg-flex flex-wrap fs-lg fw-medium fill-check-box alt-size px-xxl-10 px-lg-2 mx-xxl-10 mx-lg-4 py-4 my-4 ${
              item?.isPopular === true ? "tcn-700 brc-2" : "tcn-0"
            }`}
          >
            {item?.features?.map((feature, index) => {
              return (
                <li
                  key={index}
                  className={`d-flex align-items-center gap-4 my-2 ${
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
          <div>
            <Link
              to="/signup"
              className={`bttn-1 w-100 text-nowrap ${
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
      </div>
    );
  });
};

export default PriceCard2;
