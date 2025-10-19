import logo from "../../images/logo2-6556cbb2.png";

const HeaderOne = () => {

  return (
    <header className="header-section position-fixed top-0 start-50 translate-middle-x w-100 py-4">
      <div className="container-fluid">
        <nav className="nav-wrapper d-between">
          <div className="logo">
            <a href="/">
              <div style={{ maxWidth: '150px', maxHeight: '150px' }}>
                <img
                  src={logo}
                  alt="Return Logo"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </a>
          </div>

          <div className="menu-toggler d-flex align-items-center justify-content-lg-between flex-lg-row flex-column gap-xl-4 gap-2 w-100">
            <div className="category-nav-menu d-between flex-lg-row flex-column gap-xl-4 gap-2 me-lg-2 w-100">
              <div className="nav-menu-wrapper w-100 justify-content-lg-end">
                {/* Desktop Menu */}
                <ul className="nav-menu d-lg-flex gap-xl-4 gap-3 d-none">
                  <li className="menu-item">
                    <a className="menu-link" href="/">Podcast</a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link active" href="/latest-episode">Episodes</a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/contact">Contact</a>
                  </li>
                </ul>

                {/* Mobile Menu */}
                <ul className="nav-menu gap-xl-4 gap-3 d-lg-none">
                  <li className="menu-item">
                    <a className="menu-link text-display-one" href="/">Podcast</a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link active text-display-one" href="/latest-episode">Episodes</a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link text-display-one" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Theme Toggle Button */}
            <button className="theme-mode-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </button>
          </div>

          {/* Mobile Navbar Toggle */}
          <button className="navbar-toggler-btn d-block d-lg-none" type="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderOne;
