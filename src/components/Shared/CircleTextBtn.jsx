// import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const CircleTextBtn = () => {
  const circleText = "Take your podcast to the next level";

  return (
    <div className="circle-text-area position-absolute top-50 start-50 translate-middle rounded-circle d-center">
      <div className="circle-text">
        <p className="tcn-700">
          {circleText.split("").map((char, index) => {
            return (
              <span
                key={index}
                style={{ transform: `rotate(${index * 9}deg)` }}
              >
                {char}{" "}
              </span>
            );
          })}
        </p>
      </div>
      <Link
        to={"#"}
        className="circle-btn position-absolute z-2 tcn-900 fs-three fw-light"
      >
        {/* <IconArrowRight className="icon-xl" /> */}
        <i className="ti ti-arrow-right"></i>
      </Link>
    </div>
  );
};

export default CircleTextBtn;
