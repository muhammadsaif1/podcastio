import SocialList from "@/components/Shared/SocialList";

const HostCard = ({ cardData }) => {
  return (
    <div className="host-details-card d-flex flex-column flex-md-row align-items-center p-xxl-8 p-lg-4 p-3 gap-xxl-8 gap-lg-6 gap-4 rounded bgc-2">
      <div className="img-area">
        <img className="w-100 rounded" src={cardData?.img} alt="host image" />
      </div>
      <div className="host-info">
        <span className="d-block tcp-1 fw-semibold mb-2">
          {cardData?.designation}
        </span>
        <h2 className="fw-semibold mb-4">{cardData?.name}</h2>
        <p className="mb-lg-6 mb-sm-6 mb-4">{cardData?.description}</p>
        <SocialList socials={cardData?.social} />
      </div>
    </div>
  );
};

export default HostCard;
