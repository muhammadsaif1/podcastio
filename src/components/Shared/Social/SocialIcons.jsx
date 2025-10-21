import "./SocialIcons.scss";

export default function SocialIcons() {
  return (
    <div className="contact-socials">
      <a
        href="http://creators.spotify.com/pod/show/returnus"
        style={{ fontSize: "28px", marginLeft: "15px" }}
      >
        <i className="ti ti-brand-spotify"></i>
      </a>
      <a
        href="https://www.youtube.com/@ReturnUs"
        style={{ fontSize: "28px", marginLeft: "15px" }}
      >
        <i className="ti ti-brand-youtube"></i>
      </a>
      <a style={{ fontSize: "28px", marginLeft: "15px" }}>
        <i className="ti ti-brand-instagram"></i>
      </a>
      <a style={{ fontSize: "28px", marginLeft: "15px" }}>
        <i className="ti ti-brand-x"></i>
      </a>
      <a style={{ fontSize: "28px", marginLeft: "15px" }}>
        <i className="ti ti-brand-linkedin"></i>
      </a>
    </div>
  );
}
