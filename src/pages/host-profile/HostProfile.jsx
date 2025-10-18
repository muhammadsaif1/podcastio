import HostCard from "@/components/HostCard/HostCard";
import Pagination from "@/components/Shared/Pagination";
import hostList from "@/data/HostList";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
const HostProfile = () => {
  return (
    <section className="host-profile-section pt-120 pb-120 texture-bg-1">
      <div className="container">
        <div className="row g-6">
          {hostList.map((host) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={host.id}>
              <FadeUp>
                <HostCard cardData={host} />
              </FadeUp>
            </div>
          ))}
        </div>
        {/* <!-- pagination start --> */}
        <FadeDown>
          <Pagination />
        </FadeDown>
        {/* <!-- pagination end --> */}
      </div>
    </section>
  );
};

export default HostProfile;
