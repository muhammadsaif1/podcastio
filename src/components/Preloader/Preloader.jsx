

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader-inner">
        <div className="plate">
          <div className="base">
            <div className="circle">
              <div className="disc">
                <div className="center"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="player-bar">
          <div className="rect"></div>
          <div className="circ"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader