import img from "../../images/bottom-wave-shape.png";
const BottomWave = ({ shapeImg = img }) => {
  return (
    <div>
      <img src={shapeImg} alt="top-wave" className="w-100" />
    </div>
  );
};

export default BottomWave;
