import { Link } from "react-router-dom";
import logo1 from "../../images/podcast-icon-1.png";
import logo2 from "../../images/podcast-icon-2.png";
import logo3 from "../../images/podcast-icon-3.png";
import logo4 from "../../images/podcast-icon-4.png";
import logo5 from "../../images/podcast-icon-5.png";

const ListenOnList = [
  {
    logo: logo1,
    link: "#",
  },
  {
    logo: logo2,
    link: "#",
  },
  {
    logo: logo3,
    link: "#",
  },
  {
    logo: logo4,
    link: "#",
  },
  {
    logo: logo5,
    link: "#",
  },
];

const ListenOnBtns = ({
  justify = "",
  iconSize = "",
  gap = "gap-sm-4 gap-2",
}) => {
  return (
    <ul className={`d-flex align-items-center ${gap} ${justify}`}>
      {ListenOnList.map((item, index) => {
        return (
          <li className={`brand-icon ${iconSize}`} key={index}>
            <Link to={item.link}>
              <img className="w-100" src={item.logo} alt="brand icon" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ListenOnBtns;
