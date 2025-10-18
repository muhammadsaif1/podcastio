import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <Link to="/favorite-episode" className="wishlist-btn">
      <span className="d-center fs-lg">
        <i className="ti ti-heart"></i>
      </span>
      <span className="badge d-center">
        <span className="tcn-900 fs-base">0</span>
      </span>
    </Link>
  );
};

export default Wishlist;
