import { useEffect, useState } from "react";
import FilterOption from "@/components/SearchBar/FilterOption";

const TransactionSearch = () => {
  const [amountType, setAmountType] = useState("All");
  const [remark, setRemark] = useState("All");
  const [inputValue, setInputValue] = useState("");

  const amountTypeList = ["All", "Deposit", "Withdraw"];
  const remarkList = ["All", "Pending", "Success", "Failed"];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // console.log(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  useEffect(() => {
    // console.log(amountType);
    // console.log(remark);
  }, [amountType, remark]);

  return (
    <form
      action="#"
      className="d-flex flex-wrap flex-md-nowrap align-items-center gap-lg-6 gap-sm-4 gap-2 p-lg-6 p-4 rounded-3 bgc-4"
      onSubmit={handleSubmit}
    >
      <div className="d-grid gap-lg-4 gap-2">
        <span>Transaction Number</span>
        <div className="input-area py-lg-3 py-2 px-lg-6 px-4">
          <input
            type="text"
            placeholder="Transaction"
            onChange={handleChange}
            value={inputValue}
          />
        </div>
      </div>
      <div className="d-grid gap-lg-4 gap-2">
        <span>Amount Type</span>
        <FilterOption
          optionList={amountTypeList}
          selectedOption={amountType}
          setSelectedOption={setAmountType}
        />
      </div>
      <div className="d-grid gap-lg-4 gap-2">
        <span>Remark</span>
        <FilterOption
          optionList={remarkList}
          selectedOption={remark}
          setSelectedOption={setRemark}
        />
      </div>
      <div className="d-grid gap-lg-4 gap-2">
        <span>Search</span>
        <button className="bttn-2" type="submit">
          <span className="fs-lg lh-0">
            <i className="ti ti-search"></i>
          </span>
          <span className="fw-medium">Search</span>
        </button>
      </div>
    </form>
  );
};

export default TransactionSearch;
