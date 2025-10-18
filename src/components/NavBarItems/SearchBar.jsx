import { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside/useOnClickOutside";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeModal, setActiveModal] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setActiveModal(false));

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <>
      <form
        className={`search-box ${activeModal ? "active" : ""}`}
        onSubmit={handleSearch}
        ref={ref}
      >
        <div className="input-area border w-100 bc-n400">
          <input
            type="text"
            placeholder="Search Episode..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="icon-btn p-0">
            <span className="icon alt-size fs-lg">
              <i className="ti ti-search"></i>
            </span>
          </button>
        </div>
      </form>
      <button
        className="icon-btn search-toggler"
        onClick={() => setActiveModal(!activeModal)}
      >
        <span className="icon fs-lg">
          <i className="ti ti-search"></i>
        </span>
      </button>
    </>
  );
};

export default SearchBar;
