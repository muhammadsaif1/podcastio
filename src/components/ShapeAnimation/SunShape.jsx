/* eslint-disable react/prop-types */
import sun from "../../images/sun.png";

const SunShape = ({ position, visibility }) => {
  return (
    <div className={`sun-shape ${position} ${visibility}`}>
      <img src={sun} alt="shape image" />
    </div>
  );
};

export default SunShape;
