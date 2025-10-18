import SupportTicketList from "@/data/SupportTicketList";
import SupportTicketTable from "./SupportTicketTable";
import PaginationTwo from "@/components/Shared/PaginationTwo";
import SupportFilter from "./SupportFilter";

const SupportTickets = () => {
  return (
    <>
      <div className="main-content-area p-xxl-8 p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="ticket-list-area">
          <div className="d-flex flex-wrap flex-xxl-nowrap gap-2 align-items-xxl-center justify-content-between">
            <span className="fs-four fw-semibold text-nowrap">
              Tickets List
            </span>
            <SupportFilter />
          </div>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <SupportTicketTable data={SupportTicketList} />
          <div className="d-between flex-wrap gap-2 mt-lg-6 mt-4">
            <span>Showing 1 to 16 of 100 entries</span>
            <PaginationTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportTickets;
