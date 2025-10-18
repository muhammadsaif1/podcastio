/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Btns = ({
  type, // link
  text, // text
  icon,
  link = "#",
  btnStyle = "", // bttn-outline,
  animPos = "", // alt-position
  iconPosition = "", // icon-right, icon-left
  onClick,
}) => {
  return (
    <>
      {type === "link" ? (
        <Link
          to={link}
          className={`bttn-1 text-nowrap fw-semibold ${btnStyle} ${animPos}`}
        >
          {" "}
          {text} <span className={`icon d-center ${iconPosition}`}>{icon}</span>
        </Link>
      ) : (
        <button className={`bttn-1 ${btnStyle}`} onClick={onClick}>
          {" "}
          {text} <span className={`icon d-center ${iconPosition}`}>{icon}</span>
        </button>
      )}
    </>
  );
};

export default Btns;
