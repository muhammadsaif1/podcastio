import { Link } from "react-router-dom";
import Heading from "@/components/Shared/Heading";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-4.png";
const ArticleCard = ({ item }) => {
  return (
    <div className="recent-article-card p-3 rounded-3 bgc-2">
      <div className="img-area mb-3">
        <img className="w-100 rounded" src={item?.img} alt="image" />
      </div>
      <div className="content-area p-lg-5 p-4">
        <div className="d-flex align-items-center flex-wrap gap-xl-4 gap-2 mb-5">
          <Link to={item?.category?.link} className="bttn-2 green">
            {item?.category?.name}
          </Link>
          <span className="tag-btn-2">{item?.date}</span>
        </div>
        <Link to={item?.link} className="link-text">
          <Heading
            headText={item?.title}
            charLimit={40}
            headClass={"fs-three fw-semibold mb-4"}
          />
        </Link>
        <div className="d-flex align-items-center gap-xxl-10 gap-lg-6 gap-4">
          <Link to={item?.link} className="link-btn text-nowrap">
            Read More
          </Link>
          <SlideTrack trackImg={trackImg} />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
