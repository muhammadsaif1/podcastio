import { useEffect, useState } from "react";
import ELRchart from "@/components/Chart/ELRchart";
import useSelectOption from "@/hooks/useSelectOption/useSelectOption";

const TotalListeningCard = () => {
  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();
  const [selectedValue, setSelectedValue] = useState("All Time");
  const selectList = [
    "All Time",
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "This Year",
  ];
  useEffect(() => {
    // console.log(selectedValue);
  }, [selectedValue]);
  return (
    <div className="overview-episode-listening-report p-lg-8 p-md-4 p-2 bgc-1 border bc-n400 rounded-3 bgc-2">
      <div className="d-between flex-wrap gap-3">
        <h4 className="fw-semibold">Episode Listening Report</h4>
        <div className="d-flex align-items-center gap-2">
          <span className="text-nowrap">Sort By:</span>
          <div className="common-select-area bgc-3">
            <div
              onClick={(e) => {
                handleDropdownClick();
                handleValue(e);
              }}
              ref={dropdownBtnRef}
            >
              <span className="selected-item">
                {dropdownValue || "All Time"}
              </span>
              <i className="ti ti-chevron-down"></i>
            </div>
            <div
              ref={dropdownRef}
              className={`select-items ${isOpen ? "active" : ""}`}
            >
              <ul className="d-grid">
                {selectList?.map((item, idx) => (
                  <li
                    className="select-item"
                    key={idx}
                    onClick={() => setSelectedValue(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <span className="d-block my-lg-6 my-4 border-dashed alt-color"></span>
      {/* <!-- chart area --> */}
      <div className="chart-area">
        <ELRchart selectedValue={selectedValue} />
      </div>
    </div>
  );
};

export default TotalListeningCard;
