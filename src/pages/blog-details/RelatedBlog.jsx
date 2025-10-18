import { Link } from "react-router-dom";

const RelatedBlog = ({ item }) => {
  return (
    <div className="related-blog-card d-grid gap-lg-6 gap-4">
      <Link to="#" className="blog-card-item d-flex align-items-center gap-4">
        <div className="img-area">
          <img className="w-100 rounded" src={item?.thumbs} alt={item?.title} />
        </div>
        <div className="content-area">
          <h6 className="fw-normal mb-2">{item?.title}</h6>
          <span className="date tcp-1">{item?.date}</span>
        </div>
      </Link>
    </div>
  );
};

export default RelatedBlog;
