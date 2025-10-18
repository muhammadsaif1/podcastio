/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Logo = ({ data }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          className="w-100"
          src={data?.imgSrc2}
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Logo;
