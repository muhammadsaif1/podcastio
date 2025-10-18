/* eslint-disable react/prop-types */
const SlideTrack = ({
  visibility = "",
  trackImg,
  trackHeight = "",
  position = "",
  isFooter = false,
}) => {
  return (
    <div
      className={`${
        isFooter ? "record-footer-img" : "record-img"
      } ${visibility} ${position}`}
    >
      <div className={`record-img-animation d-flex ${trackHeight}`}>
        <img className="w-100" src={trackImg} alt="image" />
        <img className="w-100" src={trackImg} alt="image" />
        <img className="w-100" src={trackImg} alt="image" />
      </div>
    </div>
  );
};

export default SlideTrack;
