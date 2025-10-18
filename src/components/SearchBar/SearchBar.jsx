import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };
  return (
    <>
      <form className="border-dashed pt-4" onSubmit={handleSearch}>
        <div className="input-area ">
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
    </>
  );
};

export default SearchBar;
