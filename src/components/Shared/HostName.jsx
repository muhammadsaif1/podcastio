/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HostName = ({
  link,
  icon,
  hostName,
  iconColor = "tcp-1",
  txtColor = "tcn-n0",
  hoverColor = "link-text",
}) => {
  return (
    <Link
      to={link}
      className="episode-host d-flex align-items-center gap-2 text-nowrap"
    >
      <span className={`${iconColor} fs-lg`}>{icon}</span>
      <span className={`fs-lg fw-normal text-nowrap ${txtColor} ${hoverColor}`}>
        {hostName}
      </span>
    </Link>
  );
};

export default HostName;
