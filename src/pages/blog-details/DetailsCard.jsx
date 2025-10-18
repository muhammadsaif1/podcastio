import { Link } from "react-router-dom";

const DetailsCard = ({ data }) => {
  return (
    <div
      className="blog-details-card p-xxl-8 p-lg-6 p-3 rounded bgc-2"
      data-aos="fade-up"
    >
      <div className="img-area mb-lg-10 mb-sm-8 mb-6" data-aos="zoom-in">
        <img className="w-100 rounded" src={data?.banner} alt="image" />
      </div>
      <div className="blog-details-card-content">
        <div className="btns-area d-flex flex-wrap align-items-center gap-lg-6 gap-4 mb-5">
          <Link to={data?.category?.link} className="bttn-2 green">
            {" "}
            {data?.category?.name}{" "}
          </Link>
          <span className="tag-btn-2">{data?.date}</span>
          <div className="post-author d-flex align-items-center gap-4">
            <div className="img-area">
              <img
                className="w-100 rounded-circle"
                src={data?.author?.img}
                alt="image"
              />
            </div>
            <span>
              <Link to={data?.author?.link} className="tcn-20 link-text">
                {data?.author?.name}
              </Link>
            </span>
          </div>
        </div>
        <h2 className="fw-semibold mb-lg-5 mb-3">{data?.title}</h2>
        <p className="tcn-20 fw-normal">{data?.shortDesc}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
