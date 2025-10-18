import BalanceCard from "./BalanceCard";
import EpisodeCard from "./EpisodeCard";
import TotalListeningCard from "./TotalListeningCard";

const Dashboard = () => {
  const earningData = [
    {
      id: 1,
      title: "Balance",
      icon: "ti ti-wallet",
      value: "$ 450.00",
      series: [
        {
          name: "Balance",
          data: [30, 40, 70, 50, 35, 50, 79, 60, 70, 91],
        },
      ],
    },
    {
      id: 2,
      title: "Pending Withdrawal",
      icon: "ti ti-coins",
      value: "$ 99.00",
      series: [
        {
          name: "Withdraw",
          data: [30, 60, 40, 35, 50, 69, 60, 70, 51],
        },
      ],
    },
    {
      id: 3,
      title: "Total Podcast",
      icon: "ti ti-broadcast",
      value: "1.5 k",
      series: [
        {
          name: "Total Podcast",
          data: [40, 30, 45, 50, 39, 60, 70, 41],
        },
      ],
    },
    {
      id: 4,
      title: "Total Episode",
      icon: "ti ti-video",
      value: "2.9 k",
      series: [
        {
          name: "Total Episode",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    },
  ];
  return (
    <>
      <div className="main-content-area d-grid gap-6">
        {/* <!-- overview balance, withdraw, total podcast and total episode chart  --> */}
        <div className="row g-6">
          <div className="col-lg-8">
            <div className="row g-6">
              {earningData.map((data) => (
                <BalanceCard key={data.id} data={data} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <EpisodeCard />
          </div>
        </div>
        {/* <!-- overview episode listening report chart --> */}
        <TotalListeningCard />
        {/* <!-- overview chart end --> */}
      </div>
    </>
  );
};

export default Dashboard;
