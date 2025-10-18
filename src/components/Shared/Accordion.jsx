import { useState } from "react";
import AnimateHeight from "react-animate-height";

const Accordion = ({ data }) => {
  // console.log(data);
  const [activeAccordion, setActiveAccordion] = useState(1);
  return (
    <>
      {data && data.length > 0 ? (
        data?.map((item) => {
          return (
            <div
              className={`accordion-item py-4 px-lg-8 px-4 rounded-3 ${
                activeAccordion === item?.id ? "active" : ""
              }`}
              key={item.id}
              onClick={() =>
                setActiveAccordion(activeAccordion === item.id ? null : item.id)
              }
            >
              <h6 className="accordion-header-area d-flex justify-content-between">
                <button
                  className="accordion-btn fs-lg fw-semibold"
                  type="button"
                >
                  {item.question}
                </button>
                <span className="icon">
                  {activeAccordion === item.id ? (
                    <i className="ti ti-minus"></i>
                  ) : (
                    <i className="ti ti-plus"></i>
                  )}
                </span>
              </h6>
              <AnimateHeight height={activeAccordion === item.id ? "auto" : 0}>
                <div className="content-body mt-4 pt-3 border-dashed alt-2">
                  <p className="fs-sm fw-medium tcn-700">{item.answer}</p>
                </div>
              </AnimateHeight>
            </div>
          );
        })
      ) : (
        // if data not present
        <div> No data found </div>
      )}
    </>
  );
};

export default Accordion;
