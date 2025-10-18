import { useState, useRef } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside/useOnClickOutside";

const SupportTicketTable = ({ data }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => {
    setActiveDropdown(null); // Reset activeDropdown when clicking outside
    setIsActive(false);
  });

  return (
    <div className="table-responsive">
      <table className="table podcast-list-table mb-lg-0">
        <thead>
          <tr>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Subject</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Importance</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
              Latest Response
            </th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Status</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">{item?.subject}</td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">{item?.importance}</td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                {item?.latest_response}
              </td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                <span
                  className={`px-4 py-1 rounded-pill text-capitalize ${
                    (item?.status === "open" && "active-box") ||
                    (item?.status === "pending" && "pending-box") ||
                    (item?.status === "closed" && "inactive-box") ||
                    (item?.status === "in progress" && "inprogress-box") ||
                    (item?.status === "resolved" && "resolved-box")
                  }`}
                >
                  {item?.status}
                </span>
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2 position-relative">
                <button
                  className="fs-xl"
                  type="button"
                  onClick={() => {
                    setActiveDropdown(activeDropdown === index ? null : index);
                    setIsActive(!isActive);
                  }}
                >
                  <i className="ti ti-dots-vertical"></i>
                </button>
                <div
                  className={`dropdown-box bgc-3 p-3 rounded ${
                    isActive && activeDropdown === index ? "show" : ""
                  } ${index >= data?.length / 2 ? "dropdown-box-up" : " "}`}
                  ref={ref}
                >
                  <ul className="d-grid gap-2">
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        View
                      </button>
                    </li>
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        Respond
                      </button>
                    </li>
                    <li>
                      <button className="action-item-btn py-2 px-3 rounded">
                        Reopen
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupportTicketTable;
