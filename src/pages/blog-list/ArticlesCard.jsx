import { Link } from "react-router-dom";
import Heading from "@/components/Shared/Heading";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-4.png";
const ArticlesCard = ({ item }) => {
  return (
    <div className="trending-article-card d-flex flex-sm-row flex-column align-items-sm-center rounded bgc-2">
      <div className="img-area p-3">
        <img className="w-100 rounded" src={item?.img} alt="image" />
      </div>
      <div className="content-area p-6">
        <div className="d-between justify-content-xxl-start flex-wrap gap-4 mb-5">
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
        <div className="d-between gap-xxl-10 gap-lg-6 gap-4">
          <Link to={item?.link} className="link-btn text-nowrap">
            Read More
          </Link>
          <SlideTrack trackImg={trackImg} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesCard;
