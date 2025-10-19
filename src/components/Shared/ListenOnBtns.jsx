import { Link } from "react-router-dom";
import logo2 from "../../images/podcast-icon-2.png";

const ListenOnList = [
  {
    logo: logo2,
    link: "#",
  }
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
