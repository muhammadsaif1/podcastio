import { useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside/useOnClickOutside";

const WithdrawHistoryModal = ({ data, toggleModal }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => {
    toggleModal(false);
  });
  return (
    <div className={`balance-modal-area ${toggleModal ? "active" : ""}`}>
      <div className="balance-modal p-lg-10 p-sm-8 p-4 bgc-3 rounded" ref={ref}>
        <div className="d-between gap-2">
          <span className="fs-four fw-semibold">Details</span>
          <button className="fs-xl" onClick={toggleModal}>
            <i className="ti ti-x"></i>
          </button>
        </div>
        <span className="d-block border-dashed my-lg-6 my-4"></span>
        {/* <div className="d-between gap-2 py-3 px-lg-6 px-sm-4 px-2 bgc-4 border-full rounded-pill">
          <span>{accountType}</span> <span>{accountNumber}</span>
        </div> */}
        <div className="d-grid gap-2">
          <div className="d-between gap-2 py-3 px-lg-6 px-sm-4 px-2 bgc-4 border-full rounded-pill">
            <span>Bank Name</span>
            <span>{data?.bank_name}</span>
          </div>
          <div className="d-between gap-2 py-3 px-lg-6 px-sm-4 px-2 bgc-4 border-full rounded-pill">
            <span>Account Name</span>
            <span>{data?.account_name}</span>
          </div>
          <div className="d-between gap-2 py-3 px-lg-6 px-sm-4 px-2 bgc-4 border-full rounded-pill">
            <span>Account Number</span>
            <span>{data?.account_number}</span>
          </div>
        </div>
        <button className="bttn-2 mt-lg-10 mt-sm-6 mt-4" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default WithdrawHistoryModal;
