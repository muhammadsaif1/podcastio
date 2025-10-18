const NavbarToggleBtn = ({ showMenu, setShowMenu }) => {
  return (
    <button
      className={`navbar-toggler-btn d-block d-lg-none ${
        showMenu ? "open" : ""
      }`}
      type="button"
      onClick={() => setShowMenu(!showMenu)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarToggleBtn;
