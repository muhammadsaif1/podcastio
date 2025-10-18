const Pagination = () => {
  return (
    <div className="row justify-content-center mt-lg-10 mt-6">
      <div className="col-6">
        <nav className="pagination d-center" aria-label="pagination">
          <ul className="pagination-items d-center gap-3">
            <li>
              <button className="pagination-btn">
                <i className="ti ti-arrow-left"></i>
              </button>
            </li>
            <li>
              <button className="pagination-btn active">1</button>
            </li>
            <li>
              <button className="pagination-btn">2</button>
            </li>
            <li>
              <button className="pagination-btn">3</button>
            </li>
            <li>
              <button className="pagination-btn">...</button>
            </li>
            <li>
              <button className="pagination-btn">
                <i className="ti ti-arrow-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
