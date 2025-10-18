import { useEffect, useState } from "react";
import FilterOption from "@/components/SearchBar/FilterOption";
import PaginationTwo from "@/components/Shared/PaginationTwo";
import TransactionsList from "@/data/TransactionsList";
import TransactionSearch from "./TransactionSearch";
import TransactionTable from "./TransactionTable";

const Transactions = () => {
  const [selectedDays, setSelectedDays] = useState("Recent");
  // console.log(selectedDays);

  const filterDays = [
    "Recent",
    "Today",
    "Yesterday",
    "This Week",
    "This Month",
    "This Year",
    "All",
  ];

  useEffect(() => {
    // console.log(selectedDays);
  }, [selectedDays]);
  return (
    <>
      <div className="main-content-area p-xxl-8 p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="transaction-list-area">
          <div className="d-flex flex-wrap flex-md-nowrap gap-2 align-items-center justify-content-between">
            <span className="fs-four fw-semibold">Transaction</span>

            <div className="d-flex align-items-center gap-2">
              <span className="text-nowrap">Sort By:</span>
              <FilterOption
                optionList={filterDays}
                selectedOption={selectedDays}
                setSelectedOption={setSelectedDays}
              />
            </div>
          </div>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <TransactionSearch />
          <div className="table-responsive">
            <span className="d-block border-dashed my-lg-6 my-4"></span>
            <TransactionTable data={TransactionsList} />
          </div>
          <div className="d-between flex-wrap gap-2 mt-lg-6 mt-4">
            <span>Showing 1 to 16 of 100 entries</span>
            <PaginationTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
