import CommonChart from "@/components/Chart/CommonChart";

const BalanceCard = ({ data }) => {
    // console.log(data);
  return (
    <div className="col-md-6">
      {/* <!-- balance chart  --> */}
      <div className="overview-card d-grid gap-lg-6 gap-4 p-xxl-6 p-sm-4 p-2 rounded-3 border bc-n400 bgc-2">
        <div className="d-flex align-items-center gap-xxl-6 gap-4">
          <div className="icon-area">
            <i className={data?.icon}></i>
          </div>
          <div className="content-area">
            <span className="d-block mb-2">{data?.title}</span>
            <h3 className="fw-semibold">{data?.value}</h3>
          </div>
        </div>
        {/* <!-- chart area --> */}
        <CommonChart chartData={data?.series} />
      </div>
    </div>
  );
};

export default BalanceCard;
