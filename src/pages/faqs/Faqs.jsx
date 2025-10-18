import { useState } from "react";
import SectionHeading from "@/components/Shared/SectionHeading";
import AnimateHeight from "react-animate-height";
import Accordion from "@/components/Shared/Accordion";
import faqsData from "@/data/pricingFaqs";
import FadeDown from "@/motion/FadeDown";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabBtns = ["General", "Subscription", "Podcast", "Support", "Privacy"];
  return (
    <section className="faqs-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <FadeDown>
          <div className="row justify-content-center mb-lg-10 mb-sm-6 mb-4">
            <div className="col-lg-6 text-center">
              <SectionHeading
                icon={<i className="ti ti-rocket"></i>}
                subTxt={"FAQs"}
                headTxt={"Frequently Asked Questions"}
                headFs="display-four"
                fw="fw-bold"
              />
            </div>
          </div>
        </FadeDown>

        <div className="row justify-content-center">
          <div className="col-12">
            {/* <!-- tab button  --> */}
            <FadeDown>
              <div className="custom-tab faq-tab d-center mb-lg-15 mb-sm-10 mb-6">
                <ul className="tablinks d-flex align-items-center gap-lg-6 gap-2 p-3">
                  {tabBtns.map((btn, index) => (
                    <li
                      className={`nav-links ${activeTab === index && "active"}`}
                      key={index}
                    >
                      <button
                        className="tablink"
                        onClick={() => setActiveTab(index)}
                      >
                        {btn}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeDown>
            {/* <!-- tab content  --> */}
            {/* accordion  */}
            <AnimateHeight height={activeTab === 0 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>
            {/* accordion  */}
            <AnimateHeight height={activeTab === 1 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>

            <AnimateHeight height={activeTab === 2 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>

            <AnimateHeight height={activeTab === 3 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>

            <AnimateHeight height={activeTab === 4 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>

            <AnimateHeight height={activeTab === 5 ? "auto" : 0}>
              <div className="row gx-6 gy-4 gy-lg-0 align-items-baseline accordion-section">
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
                </div>
                <div className="col-lg-6 d-grid gap-4">
                  {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
                </div>
              </div>
            </AnimateHeight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
