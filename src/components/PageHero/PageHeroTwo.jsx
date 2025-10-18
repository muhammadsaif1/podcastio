import VLine from "../../images/vector-line-2.png";

const PageHeroTwo = ({ pageTitle }) => {
  return (
    <section className="user-hero pt-120 pb-lg-15 pb-sm-10 pb-6 texture-bg-2">
      <div className="bg-shape position-absolute top-0 start-0 z-n1 w-100">
        <img className="w-100" src={VLine} alt="shape" />
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center text-lg-start text-capitalize">
              {pageTitle}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroTwo;
