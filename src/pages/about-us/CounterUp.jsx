import BottomWave from "@/components/Shared/BottomWave";
import ms1 from "@/images/mus-1.png";
import ms2 from "@/images/mus-2.png";
import ms3 from "@/images/mus-3.png";
import FadeUp from "@/motion/FadeUp";
import NumberCounter from "@/utils/NumberCounter";

const CounterUp = () => {
  const counterData = [
    {
      id: 1,
      number: 99.4,
      unit: "K",
      title: "Total Episode",
    },
    {
      id: 2,
      number: 595,
      unit: "K",
      title: "Podcast subscribers",
    },
    {
      id: 3,
      number: 210,
      unit: "M",
      title: "Happy Listener",
    },
    {
      id: 4,
      number: 72,
      unit: "+",
      title: "Our Awards",
    },
  ];
  return (
    <div className="counter-section texture-bg-2 overflow-hidden">
      <BottomWave />
      <div className="texture-bg-1 position-relative z-1">
        <div className="music-shape music-shape-1 d-none d-md-block">
          <img src={ms1} alt="music shape" />
        </div>
        <div className="music-shape music-shape-2 d-none d-md-block">
          <img src={ms2} alt="music shape" />
        </div>
        <div className="music-shape music-shape-3 d-none d-md-block">
          <img src={ms3} alt="music shape" />
        </div>
        <div className="container pt-120 pb-120">
          <FadeUp>
            <div className="row g-6">
              {counterData?.map((item, index) => {
                return (
                  <div className="col-lg-3 col-6" key={index}>
                    <div className="counter-card d-center py-xl-15 py-sm-10 py-6 px-xl-10 px-sm-6 px-3 rounded">
                      <div className="counter-item">
                        <div className="odometer-item d-center mb-2">
                          <span className="odometer base display-four fw-bold">
                            <NumberCounter start={0} end={item.number} />
                          </span>
                          <span className="display-four fw-bold text">
                            {item?.unit}
                          </span>
                        </div>
                        <p className="descrip fs-lg fw-medium text-center">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;
