import { useEffect, useState } from "react";
import useSelectOption from "../../hooks/useSelectOption/useSelectOption";

const EpisodeSearchBar = ({ setWord }) => {
  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();

  const [inputValue, setInputValue] = useState("");
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(inputValue);
    console.log(inputValue);
    if (inputValue.length > 0) {
      setWord(inputValue);
    }
    setInputValue("");
  };

  const categoryList = [
    "All",
    "Storytelling",
    "Horror",
    "Drama",
    "Tech",
    "Educational",
    "Comedy",
    "Sports",
    "Music",
    "Entertainment",
    "Gaming",
    "Documentary",
  ];

  useEffect(() => {
    // setCategory(categoryList[0]);
    // console.log(category);
  }, [category]);
  return (
    <div className="search-filter-section texture-bg-2">
      <div className="container">
        <div className="search-with-filter p-sm-3 p-1 bgc-3">
          <form
            onSubmit={(e) => handleSearch(e)}
            className="d-flex align-items-sm-center align-items-baseline gap-md-6 gap-sm-3 gap-1"
          >
            <div className="common-select-area bgc-1 border bc-p1-2">
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
                  {categoryList?.map((item, idx) => (
                    <li
                      className="select-item"
                      key={idx}
                      onClick={() => setCategory(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="input-area p-0 w-100">
              <input
                type="text"
                className="py-1"
                placeholder="Search Episode..."
                value={inputValue}
                onChange={handleChange}
              />
              <button type="submit" className="p-0">
                <span className="d-none d-md-block">
                  <span className="bttn-1 text-nowrap">
                    Search
                    <span className=" icon d-center icon-right">
                      <i className="ti ti-arrow-narrow-right"></i>
                    </span>
                  </span>
                </span>
                <span className="icon-btn d-md-none">
                  <span className="icon alt-size fs-xl fw-bold">
                    <i className="ti ti-search"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EpisodeSearchBar;
