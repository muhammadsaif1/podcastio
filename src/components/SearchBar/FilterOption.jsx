import useSelectOption from "../../hooks/useSelectOption/useSelectOption";

const FilterOption = ({ optionList, setSelectedOption, selectedOption }) => {
  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();

  return (
    <div className="common-select-area bgc-3 rounded-pill">
      <div
        onClick={(e) => {
          handleDropdownClick();
          handleValue(e);
        }}
        ref={dropdownBtnRef}
        className="d-between"
      >
        <span className="selected-item">{dropdownValue || selectedOption}</span>
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
              onClick={() => setSelectedOption(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterOption;
