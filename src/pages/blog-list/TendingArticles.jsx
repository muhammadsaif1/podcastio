import Pagination from "@/components/Shared/Pagination";
import ArticlesData from "@/data/ArticlesData";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import ArticlesCard from "./ArticlesCard";

const TendingArticles = () => {
  return (
    <section className="trending-article-section texture-bg-1 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center justify-content-md-start g-6">
          {ArticlesData.slice(0, 8).map((article) => (
            <div className="col-xxl-6" key={article.id}>
              <FadeUp>
                <ArticlesCard item={article} />
              </FadeUp>
            </div>
          ))}
        </div>
        {/* <!-- pagination start --> */}
        <FadeDown>
          <Pagination />
        </FadeDown>
        {/* <!-- pagination end --> */}
      </div>
    </section>
  );
};

export default TendingArticles;
