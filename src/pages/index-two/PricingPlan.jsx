import { useState } from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import PriceCard from "@/components/PriceCard/PriceCard";
import PricingData from "@/data/PricingData";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
const PricingPlan = () => {
  const [showYear, setShowYear] = useState(false);
  return (
    <section className="pricing-plan-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <FadeDown>
              <div className="text-center mb-lg-10 mb-sm-8 mb-6">
                <SectionHeading
                  subTxt="Pricing Plan"
                  headTxt="Flexible Pricing Options"
                  icon={<i className="ti ti-rocket"></i>}
                  headFs="display-four"
                  fw="fw-bold"
                />
              </div>
            </FadeDown>
          </div>
          <div className="col-12">
            <div className="mb-lg-15 mb-sm-10 mb-6 d-center">
              <span className="fs-lg fw-medium tcn-0 me-2">Monthly</span>
              <label className="switch">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={() => setShowYear(!showYear)}
                />
                <span className="slider"></span>
              </label>
              <span className="fs-lg fw-medium tcn-0 ms-2">
                Yearly <span className="tcp-1">(Save 30%)</span>{" "}
              </span>
            </div>
          </div>
        </div>
        <FadeUp>
          <div className="row g-6">
            <PriceCard showYear={showYear} data={PricingData} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default PricingPlan;
