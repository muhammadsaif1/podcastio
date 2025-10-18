/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkItem = ({ item }) => {
  return (
    <li className="category-bottom-link">
      <Link to={item?.link}>{item?.title}</Link>
    </li>
  );
};

export default LinkItem;
