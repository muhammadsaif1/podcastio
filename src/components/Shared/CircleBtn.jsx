import { Link } from "react-router-dom";

const CircleBtn = ({
  type,
  link,
  text,
  icon,
  iconSize = "",
  altColor = "",
  onClick,
}) => {
  return type === "link" ? (
    <Link to={link} className={`icon-btn d-center gap-3  ${altColor}`}>
      <span className={`icon icon-lg ${iconSize}`}> {icon}</span>
      <span className={`text fw-semibold`}> {text}</span>
    </Link>
  ) : (
    <button
      className={`icon-btn d-center gap-3  ${altColor}`}
      onClick={onClick}
    >
      <span className={`icon icon-lg ${iconSize}`}> {icon}</span>
      <span className="text fw-semibold"> {text}</span>
    </button>
  );
};

export default CircleBtn;
