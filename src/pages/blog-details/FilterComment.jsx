import { useEffect, useState } from "react";
import useSelectOption from "@/hooks/useSelectOption/useSelectOption";

const FilterComment = () => {
  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();
  const [commentType, setCommentType] = useState("");

  const commentTypeList = ["All", "New Comments", "Most Relevant", "Oldest"];

  useEffect(() => {
    // console.log(commentType);
  }, [commentType]);

  return (
    <div className="common-select-area mini-select bgc-2">
      <div
        onClick={(e) => {
          handleDropdownClick();
          handleValue(e);
        }}
        ref={dropdownBtnRef}
      >
        <span className="selected-item">{dropdownValue || "All"}</span>
        <i className="ti ti-chevron-down"></i>
      </div>
      <div
        ref={dropdownRef}
        className={`select-items ${isOpen ? "active" : ""}`}
      >
        <ul className="d-grid">
          {commentTypeList?.map((item, idx) => (
            <li
              className="select-item"
              key={idx}
              onClick={() => setCommentType(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterComment;
