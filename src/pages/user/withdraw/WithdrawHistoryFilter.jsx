import { Link } from "react-router-dom";
import FilterOption from "@/components/SearchBar/FilterOption";
import { useEffect, useState } from "react";

const WithdrawHistoryFilter = () => {
  const [filter, setFilterDays] = useState("Recent");
  const [inputValue, setInputValue] = useState("");
  const filterDays = [
    "Recent",
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "This Year",
    "All",
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    // console.log(filter);
  }, [filter]);
  return (
    <div className="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-4">
      <form action="#" className="filter-search" onSubmit={handleSubmit}>
        <div className="input-area">
          <input
            type="text"
            placeholder="Search ....."
            value={inputValue}
            onChange={handleChange}
          />
          <button type="submit" className="icon-btn p-0">
            <span className="icon alt-size fs-xl fw-bold">
              <i className="ti ti-search"></i>
            </span>
          </button>
        </div>
      </form>
      <div>
        <Link to="/user/withdraw-balance" className="bttn-2">
          <span className="text-nowrap fw-semibold">Withdraw Balance</span>
        </Link>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span className="text-nowrap">Sort By:</span>
        <FilterOption
          optionList={filterDays}
          selectedOption={filter}
          setSelectedOption={setFilterDays}
        />
      </div>
    </div>
  );
};

export default WithdrawHistoryFilter;
