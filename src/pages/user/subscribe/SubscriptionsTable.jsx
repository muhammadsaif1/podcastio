

const SubscriptionsTable = ({ data }) => {

  return (
    <div className="table-responsive">
      <table className="table podcast-list-table mb-lg-0">
        <thead>
          <tr>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
              Podcast Title
            </th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Price</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Type</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Status</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">Expire Date</th>
            <th className="py-lg-4 py-2 px-xxl-6 px-lg-4 px-2">
              Remaining Days
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                {item?.podcast_title}
              </td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">$ {item?.price}</td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">Monthly</td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                <span
                  className={`px-4 py-1 rounded-pill ${
                    item?.status === "active" ? "active-box" : "inactive-box"
                  }`}
                >
                  {item?.status}
                </span>
              </td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                {item?.expire_date}
              </td>
              <td className="py-4 px-xxl-6 px-lg-4 px-2">
                {item?.remaining_days}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionsTable;
