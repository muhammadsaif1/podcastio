const TransactionTable = ({ data }) => {
  return (
    <table className="table podcast-list-table mb-lg-0">
      <thead>
        <tr>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Transaction</th>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Amount</th>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Available</th>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Completed</th>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Trx Information</th>
          <th className="py-4 px-xxl-6 px-lg-4 px-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => (
          // console.log(item),
          <tr key={index}>
            <td className="py-4 px-xxl-6 px-lg-4 px-2">{item.txnId}</td>
            <td
              className={`py-4 px-xxl-6 px-lg-4 px-2 ${
                item.type === "deposit" ? "tc-success" : "tc-danger"
              }`}
            >
              {item.type === "deposit" ? (
                <i className="ti ti-plus"></i>
              ) : (
                <i className="ti ti-minus"></i>
              )}{" "}
              $ {item.amount}
            </td>
            <td className="py-4 px-xxl-6 px-lg-4 px-2">{item.available}</td>
            <td className="py-4 px-xxl-6 px-lg-4 px-2">{item.date}</td>
            <td className="py-4 px-xxl-6 px-lg-4 px-2">
              {item.trx_information}
            </td>
            <td className="py-4 px-xxl-6 px-lg-4 px-2 position-relative">
              <button className="fs-xl">
                <i className="ti ti-download"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
