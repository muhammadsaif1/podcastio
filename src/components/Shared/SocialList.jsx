import { Link } from "react-router-dom";

const SocialList = ({ socials, className }) => {
  return (
    <ul
      className={`social-link d-flex align-items-center gap-3 fs-xl ${className}`}
    >
      {socials?.map((item, index) => {
        return (
          <li key={index}>
            <Link to={item.link}>
              <i className={item.icon}></i>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialList;
