import { Link } from "react-router-dom";

const ProfileBox = ({ modal, setModal, user }) => {
  return (
    <div
      className={`profile-box p-lg-5 p-sm-3 p-1 border bc-n400 rounded-3 bgc-2 ${
        modal && "active"
      }`}
    >
      <div className="profile-content position-relative">
        <button
          className="profile-close-btn position-absolute top-0 end-0"
          onClick={() => setModal(false)}
        >
          <i className="ti ti-x"></i>
        </button>
        <div className="profile-info d-grid justify-content-center">
          <div className="profile-img mb-2">
            <img className="w-100 rounded-circle" src={user} alt="user" />
          </div>
          <span className="fs-lg fw-medium">Jenny Wilson</span>
          <span className="fs-sm fw-normal tcp-1">@jennywilson</span>
        </div>
        <span className="d-block border-dashed my-lg-4 my-2"></span>
        <ul className="profile-menu d-grid gap-2">
          <li>
            <Link
              to={"/user/profile-setting"}
              className="profile-menu-item py-1 px-2 rounded"
            >
              <span className="fs-lg">
                <i className="ti ti-user"></i>
              </span>{" "}
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to={"/user/balance-history"}
              className="profile-menu-item py-1 px-2 rounded"
            >
              <span className="fs-lg">
                <i className="ti ti-wallet"></i>
              </span>
              Balance
            </Link>
          </li>
          <li>
            <Link to={""} className="profile-menu-item py-1 px-2 rounded">
              <span className="fs-lg">
                <i className="ti ti-logout"></i>
              </span>{" "}
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileBox;
