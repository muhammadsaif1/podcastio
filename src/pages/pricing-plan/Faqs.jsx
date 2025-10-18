import Accordion from "@/components/Shared/Accordion";
import BottomWave from "@/components/Shared/BottomWave";
import SectionHeading from "@/components/Shared/SectionHeading";
import TopWave from "@/components/Shared/TopWave";
import faqsData from "@/data/pricingFaqs";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";

const Faqs = () => {
  return (
    <section className="faqs-section texture-bg-2">
      <TopWave />
      <div className="container pt-120 pb-120">
        <div className="row justify-content-center mb-lg-10 mb-sm-8 mb-6">
          <div className="col-xxl-6 col-lg-8 text-center">
            {/* <!-- section heading --> */}
            <FadeDown>
              <SectionHeading
                icon={<i className="ti ti-rocket"></i>}
                subTxt="FAQs"
                headTxt="Frequently Asked Questions"
                headFs="display-four"
                fw="fw-semibold"
                descText="FAQs are widely used on websites, in product manuals, and in various instructional documents to address frequently asked questions by users or customers."
                descClass="mt-lg-6 mt-4 tcn-40"
              />
            </FadeDown>
          </div>
        </div>
        {/* <!-- faq's items  --> */}
        <FadeUp>
          <div className="row gx-6 gy-lg-0 gy-4 align-items-baseline accordion-section">
            <div className="col-lg-6 d-grid gap-4">
              {<Accordion data={faqsData.slice(0, faqsData.length / 2)} />}
            </div>
            <div className="col-lg-6 d-grid gap-4">
              {<Accordion data={faqsData.slice(faqsData.length / 2)} />}
            </div>
          </div>
        </FadeUp>
      </div>
      <BottomWave />
    </section>
  );
};

export default Faqs;
