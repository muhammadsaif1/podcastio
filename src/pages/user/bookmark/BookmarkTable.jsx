import { useState } from "react";

const BookmarkTable = ({ data }) => {
  const [filterTableData, setFilterTableData] = useState(data);
  const handleRemove = (id) => {
    const filteredData = filterTableData.filter((item) => item.id !== id);
    setFilterTableData(filteredData);
  };

  return (
    <div className="table-responsive">
      <table className="table podcast-list-table mb-lg-0">
        <thead>
          <tr>
            <th className="py-lg-4 py-2 px-lg-4 px-2">#SL</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Episode Title</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2">Podcast</th>
            <th className="py-lg-4 py-2 px-lg-4 px-2 text-end">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterTableData?.map((item, index) => (
            //   console.log(item),
            <tr key={index}>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {index < 9 ? `0${index + 1}` : index + 1}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {item?.episode_title?.substring(0, 35) + "..."}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2">
                {item?.podcast_title}
              </td>
              <td className="py-lg-4 py-2 px-lg-4 px-2 text-end">
                <button onClick={() => handleRemove(item?.id)}>
                  <i className="ti ti-eye"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookmarkTable;
