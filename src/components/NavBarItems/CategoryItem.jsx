/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoryItem = ({ items }) => {
  return (
    <li className="category-item">
      <Link
        to="#"
        className="category-link p-xxl-8 p-sm-4 p-2 d-flex flex-column gap-0 rounded-3"
      >
        <img
          className="category-thumb mb-xxl-8 mb-lg-6 mb-sm-4 mb-2 rounded-3"
          src={items?.imgSrc}
          alt={items?.title}
        />
        <span className="category-title fs-three mb-xxl-6 mb-lg-4 mb-2">
          {items?.title}
        </span>
        <p className="category-description tcn-40">{items?.description}</p>
      </Link>
    </li>
  );
};

export default CategoryItem;
