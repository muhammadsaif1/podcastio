import CategoryMenu from "./CategoryMenu";
import { CategoryDataList, categoryNavLink } from "../../data/CategoryData";
import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

const CategoryBtn = () => {
  const [activeModal, setActiveModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setActiveModal(false));

  return (
    <div ref={ref}>
      <button
        className={`category-toggle-btn d-flex align-items-center justify-content-between justify-content-lg-start gap-2 ${
          activeModal ? "active" : ""
        }`}
        onClick={() => setActiveModal(!activeModal)}
      >
        <span className="d-flex align-items-center gap-2">
          <i className="ti ti-category"></i>
          <span>Category</span>
        </span>
        {activeModal ? (
          <i className="ti ti-minus"></i>
        ) : (
          <i className="ti ti-plus"></i>
        )}
      </button>

      <div className="p-0">
        <CategoryMenu
          isActive={activeModal}
          categoryList={CategoryDataList}
          categoryNavLink={categoryNavLink}
        />
      </div>
    </div>
  );
};

export default CategoryBtn;
