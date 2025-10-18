import { useEffect, useState } from "react";
import useSelectOption from "../../hooks/useSelectOption/useSelectOption";
import { useFormContext } from "react-hook-form";

const SelectOption = ({
  optionList,
  placeholder,
  name,
  handleSelected = () => {},
}) => {
  const [selectOption, setSelectOption] = useState(placeholder);
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const {
    dropdownRef,
    dropdownBtnRef,
    handleDropdownClick,
    isOpen,
    handleValue,
    dropdownValue,
  } = useSelectOption();

  useEffect(() => {
    // handleSelected(dropdownValue);
    // console.log(dropdownValue);
    setValue(name, dropdownValue);
  }, [dropdownValue]);

  return (
    <>
      <input
        {...register(name, { required: "This field is required" })}
        value={selectOption}
        type="hidden"
        name={name}
      />
      <div className="common-select-area bgc-3 rounded-pill alt-select">
        <div
          onClick={(e) => {
            handleDropdownClick(2);
            handleValue(e);
          }}
          ref={dropdownBtnRef}
          className="d-between"
        >
          <span className="selected-item">{dropdownValue || placeholder}</span>
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
                onClick={() => {
                  setSelectOption(item);
                  handleSelected(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {errors[name] && <p className="fs-sm tcp-1">{errors[name].message}</p>}
    </>
  );
};

export default SelectOption;
