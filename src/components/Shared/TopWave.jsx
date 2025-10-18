import img from "../../images/top-wave-shape.png";
const TopWave = ({ shapeImg = img }) => {
  return (
    <div className="mt-n1">
      <img src={shapeImg} alt="top-wave" className="w-100" />
    </div>
  );
};

export default TopWave;
