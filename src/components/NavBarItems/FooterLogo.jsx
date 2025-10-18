import { Link } from "react-router-dom";

const FooterLogo = ({ logo, className }) => {
  return (
    <div className={className}>
      <Link to="/">
        <img className="w-100" src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default FooterLogo;
