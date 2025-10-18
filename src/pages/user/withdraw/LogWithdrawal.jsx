import { useState } from "react";
import PaginationTwo from "@/components/Shared/PaginationTwo";
import WithdrawHistoryData from "@/data/WithdrawHistory";
import WithdrawHistoryModal from "./WithdrawHistoryModal";
import WithdrawHistoryFilter from "./WithdrawHistoryFilter";

const WithdrawHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();

  const toggleModal = () => {
    setShowModal(!showModal);
    // console.log(showModal);
  };
  return (
    <>
      <div className="main-content-area p-xxl-8 p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="ticket-list-area">
          <div className="d-flex flex-wrap flex-xxl-nowrap gap-2 align-items-xxl-center justify-content-between">
            <span className="fs-four fw-semibold text-nowrap">
              Balance History
            </span>
            <WithdrawHistoryFilter />
          </div>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <div className="table-responsive">
            <table className="table podcast-list-table mb-lg-0">
              <thead>
                <tr>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
                    Payment Gateway
                  </th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Amount</th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
                    Exchange
                  </th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
                    Transaction
                  </th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
                    Trx Status
                  </th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
                    Initiated
                  </th>
                  <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {WithdrawHistoryData.map((item, index) => (
                  <tr key={index}>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      {item?.payment_name}
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      $ {item?.amount}
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      ${item?.exchange}
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      {item?.transaction}
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      {item?.trx_status}
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2">
                      <span
                        className={`px-4 py-1 rounded-pill text-capitalize ${
                          (item?.trx_status === "success" && "active-box") ||
                          (item?.trx_status === "pending" && "pending-box") ||
                          (item?.trx_status === "cancelled" && "inactive-box")
                        }`}
                      >
                        {item?.trx_status}
                      </span>
                    </td>
                    <td className="py-4 px-xxl-6 px-lg-4 px-2 position-relative">
                      <button
                        className="fs-xl"
                        onClick={() => {
                          toggleModal();
                          setData(item);
                        }}
                      >
                        <i className="ti ti-eye"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-between flex-wrap gap-2 mt-lg-6 mt-4">
            <span>Showing 1 to 16 of 100 entries</span>

            <PaginationTwo />
          </div>
        </div>
      </div>
      {showModal && (
        <WithdrawHistoryModal data={data} toggleModal={toggleModal} />
      )}
    </>
  );
};

export default WithdrawHistory;
