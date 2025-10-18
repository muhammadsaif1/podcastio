const SliderNavigatorBtn = ({
  nextBtn,
  prevBtn,
  justify = "justify-content-end",
}) => {
  return (
    <div className={`swiper-btns d-flex align-items-center ${justify} gap-4`}>
      <button className={`button-prev fs-lg ${prevBtn}`}>
        <i className="ti ti-chevron-left"></i>
      </button>
      <button className={`button-next fs-lg ${nextBtn}`}>
        <i className="ti ti-chevron-right"></i>
      </button>
    </div>
  );
};

export default SliderNavigatorBtn;
