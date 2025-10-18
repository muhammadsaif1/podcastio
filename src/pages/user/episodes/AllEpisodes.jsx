import FilterSearch from "@/components/SearchBar/FilterSearch";
import PaginationTwo from "@/components/Shared/PaginationTwo";
import EpisodeTable from "./EpisodeTable";
import EpisodeList from "@/data/EpisodeList";
import { useEffect, useState } from "react";

const AllEpisodes = () => {
  const [filterValue, setFilterValue] = useState("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    // console.log(filterValue);
    setFilterValue(filterValue);
    setSearchResult(searchResult);
    // console.log(searchResult);
  }, [filterValue, searchResult]);
  return (
    <>
      <div className="main-content-area p-xxl-8 p-lg-6 p-4 rounded-3 bgc-2 border bc-n400">
        <div className="episodes-list-area">
          <div className="d-flex flex-wrap flex-md-nowrap gap-2 align-items-center justify-content-between">
            <span className="fs-four fw-semibold">Episodes List</span>
            <FilterSearch
              setFilterValue={setFilterValue}
              setSearchResult={setSearchResult}
            />
          </div>
          <span className="d-block border-dashed my-lg-6 my-4"></span>
          <EpisodeTable data={EpisodeList} />
          <div className="d-between flex-wrap gap-2 mt-lg-6 mt-4">
            <span>Showing 1 to 16 of 100 entries</span>
            <PaginationTwo />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEpisodes;
