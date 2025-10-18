import SocialList from "@/components/Shared/SocialList";

const GuestCard = ({ data }) => {
  //   console.log(data);
  return (
    <div className="d-flex flex-column flex-md-row gap-4 p-xxl-8 p-6 rounded bgc-3">
      <div className="img-area position-relative">
        <img
          className="w-100 rounded-circle"
          src={data?.profile}
          alt="guest image"
        />
        <span className="online-active me-md-2 me-1 mb-md-2 mb-1"></span>
      </div>
      <div className="guest-info">
        <h3 className="fw-semibold mb-2">{data?.name}</h3>
        <span className="d-block fw-semibold tcp-1 mb-2">
          {data?.designation}
        </span>
        <p className="fw-normal mb-6">{data?.msg}</p>
        <SocialList socials={data?.socials} />
      </div>
    </div>
  );
};

export default GuestCard;
