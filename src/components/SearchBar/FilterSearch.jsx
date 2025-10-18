import { useEffect, useState } from "react";
import useSelectOption from "../../hooks/useSelectOption/useSelectOption";

const FilterSearch = ({ setSearchResult, setFilterValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [option, setOption] = useState("Recent");
  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResult(inputValue);
    console.log(inputValue);
    setInputValue("");
  };

  const optionList = [
    "Recent",
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "This Year",
    "All",
  ];

  useEffect(() => {
    setFilterValue(option);
    // console.log(option);
  }, [option]);

  return (
    <div className="d-flex flex-wrap flex-md-nowrap align-items-center gap-lg-6 gap-4">
      <form onSubmit={handleSearch} className="w-100">
        <div className="input-area">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="icon-btn p-0">
            <span className="icon alt-size fs-xl fw-bold">
              <i className="ti ti-search"></i>
            </span>
          </button>
        </div>
      </form>
      <div className="d-flex align-items-center gap-2">
        <span className="text-nowrap">Sort By:</span>
        <div className="common-select-area bgc-3 rounded-pill">
          <div
            onClick={(e) => {
              handleDropdownClick();
              handleValue(e);
            }}
            ref={dropdownBtnRef}
            className="d-between"
          >
            <span className="selected-item">{dropdownValue || option}</span>
            <i className="ti ti-chevron-down"></i>
          </div>
          <div
            ref={dropdownRef}
            className={`select-items ${isOpen ? "active" : ""}`}
          >
            <ul className="d-grid">
              {optionList?.map((item, idx) => (
                <li
                  className="select-item"
                  key={idx}
                  onClick={() => setOption(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
