import { useState } from "react";

const PaginationTwo = () => {
  const [active, setActive] = useState(1);
  const handlePagination = (id) => {
    setActive(id);
  };
  const pageList = [1, 2, 3];
  return (
    <nav className="pagination d-center" aria-label="pagination">
      <ul className="pagination-items d-center gap-3">
        <li>
          <button className="pagination-btn">
            <i className="ti ti-arrow-left"></i>
          </button>
        </li>
        {pageList.map((item, index) => {
          return (
            <li key={index}>
              <button
                className={`pagination-btn ${active === item ? "active" : ""}`}
                value={item}
                onClick={() => handlePagination(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
        <li>
          <button className="pagination-btn">
            <i className="ti ti-arrow-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationTwo;
