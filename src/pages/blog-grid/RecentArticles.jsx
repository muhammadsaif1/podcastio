import Pagination from "@/components/Shared/Pagination";
import ArticleCard from "./ArticleCard";
import ArticlesData from "@/data/ArticlesData";
import FadeUp from "@/motion/FadeUp";
import FadeDown from "@/motion/FadeDown";
const RecentArticles = () => {
  return (
    <section className="recent-article-section texture-bg-1 pt-120 pb-120">
      <div className="container">
        <div className="row g-6">
          {ArticlesData.map((article) => (
            <div className="col-lg-4 col-md-6" key={article.id}>
              <FadeUp>
                <ArticleCard item={article} />
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

export default RecentArticles;
