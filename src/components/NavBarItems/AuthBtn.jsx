import { Link } from "react-router-dom";

const AuthBtn = () => {
  return (
    <div className="auth-btn order-last d-flex align-items-center flex-column flex-sm-row gap-xxl-6 gap-xl-4 gap-2 w-100">
      <Link to="/login" className="bttn-1 bttn-outline">
        <span className="text-nowrap fw-semibold">Login</span>
        <span className="icon icon-right">
          <i className="ti ti-arrow-right"></i>
        </span>
      </Link>
      <Link to="/register" className="bttn-1 alt-position">
        <span className="text-nowrap fw-semibold">Register</span>
        <span className="icon icon-right">
          <i className="ti ti-arrow-right"></i>
        </span>
      </Link>
    </div>
  );
};

export default AuthBtn;
