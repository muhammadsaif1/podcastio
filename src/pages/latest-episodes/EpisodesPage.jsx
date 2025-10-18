import { useEffect, useState } from "react";
import PageHero from "@/components/PageHero/PageHero";
import EpisodeSearchBar from "@/components/SearchBar/EpisodeSearchBar";
import Episodes from "./Episodes";
import CallToAction from "@/components/Shared/CallToAction";
import NewsLetterForm2 from "@/components/Shared/NewsLetterForm2";

const EpisodesPage = () => {
  const [searchKeyword, setSearchKeyword] = useState([
    // remove this list when you are production
    "Storytelling",
    "Horror",
    "Drama",
    "Tech",
    "Comedy",
  ]);
  // console.log(searchKeyword);
  const setWord = (word) => {
    setSearchKeyword([...searchKeyword, word]);
  };
  const removeSearchHistory = (removeWord) => {
    const newSearchKeyword = searchKeyword.filter(
      (item) => item !== removeWord
    );
    setSearchKeyword(newSearchKeyword);
  };

  useEffect(() => {
    // console.log(searchKeyword);
  }, [searchKeyword]);
  return (
    <>
      <PageHero
        pageTitle="Latest"
        highlightWord="Episodes"
        highlightColor="tcp-1"
        pb={"pb-lg-15 pb-10"}
      />
      <EpisodeSearchBar setWord={setWord} />
      <Episodes
        searchKeyword={searchKeyword}
        removeSearchHistory={removeSearchHistory}
      />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
    </>
  );
};

export default EpisodesPage;
