/* eslint-disable react/prop-types */
// import { IconHeart } from "@tabler/icons-react";

const AddToWishlist = ({ color = "tcp-1" }) => {
  return (
    <button
      className={`add-to-wishlist d-center fs-lg p-sm-2 p-1 rounded-circle ${color}`}
    >
      <i className="ti ti-heart"></i>
    </button>
  );
};

export default AddToWishlist;
