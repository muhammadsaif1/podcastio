import "./socialIcons.scss";

export default function SocialIcons() {
  return (
    <div className="contact-socials">
      <a
        href="http://creators.spotify.com/pod/show/Returnus"
        style={{ fontSize: "28px", marginLeft: "15px" }}
      >
        <i className="ti ti-brand-spotify"></i>
      </a>
      <a
        href="https://www.youtube.com/@Returnus"
        style={{ fontSize: "28px", marginLeft: "15px" }}
      >
        <i className="ti ti-brand-youtube"></i>
      </a>
      <a
        href="https://www.instagram.com/returnus2025/"
        style={{ fontSize: "28px", marginLeft: "15px" }}
      >
        <i className="ti ti-brand-instagram"></i>
      </a>
      {/* <a style={{ fontSize: "28px", marginLeft: "15px" }}>
        <i className="ti ti-brand-x"></i>
      </a> */}
      {/* <a style={{ fontSize: "28px", marginLeft: "15px" }}>
        <i className="ti ti-brand-linkedin"></i>
      </a> */}
    </div>
  );
}
