import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";
import LinkItem from "./LinkItem";

/* eslint-disable react/prop-types */
const CategoryMenu = ({ isActive, categoryList, categoryNavLink }) => {
  return (
    <div
      className={`category-toggle-menu texture-bg-3 ${
        isActive ? "active" : ""
      }`}
    >
      <div className="p-xxl-8 p-lg-6 p-sm-4 p-2 pt-xxl-15 ">
        {/* category items list  */}
        <ul className="category-items d-flex flex-wrap align-items-baseline mb-xxl-15 mb-4">
          {/* <!-- category item  --> */}
          {categoryList.map((items) => {
            return <CategoryItem key={items.id} items={items} />;
          })}
        </ul>

        {/* <!-- category list bottom --> */}
        <div className="category-list-bottom border-dashed pt-xxl-8 pt-lg-6 pt-sm-4 pt-2 d-between flex-wrap gap-2">
          <ul className="category-bottom-links d-flex align-items-center gap-lg-6 gap-sm-4 gap-2 flex-wrap">
            {categoryNavLink.map((item) => {
              return <LinkItem key={item.id} item={item} />;
            })}
          </ul>
          <Link to="#" className="bttn-1">
            See All Category
            <span className="icon d-center icon-right">
              <i className="ti ti-arrow-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
