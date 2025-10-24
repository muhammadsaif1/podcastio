import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../images/navbar-logo.png";

const HeaderOne = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ scroll lock handler
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <header className="header-section position-fixed top-0 start-50 translate-middle-x w-100 py-4">
      <div className="container-fluid">
        <nav className="nav-wrapper d-between align-items-center">
          {/* Logo */}
          <div className="logo">
            <NavLink to="/">
              <div
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  marginLeft: window.innerWidth <= 768 ? "" : "2rem",
                }}
              >
                <img
                  src={logo}
                  alt="Return Logo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </NavLink>
          </div>

          {/* Hamburger (visible on mobile) */}
          <button
            className="hamburger-btn d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={26} strokeWidth={2.2} />
            ) : (
              <Menu size={26} strokeWidth={2.2} />
            )}
          </button>

          {/* Navigation */}
          <div
            className={`menu-toggler d-flex align-items-center justify-content-lg-between flex-lg-row flex-column gap-xl-4 gap-2 w-100 ${
              menuOpen ? "active" : ""
            }`}
          >
            <div className="category-nav-menu d-between flex-lg-row flex-column gap-xl-4 gap-2 me-lg-2 w-100">
              <div className="nav-menu-wrapper w-100 justify-content-lg-end">
                <ul className="nav-menu d-lg-flex gap-xl-4 gap-3 flex-column flex-lg-row text-center">
                  <li className="menu-item">
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : "menu-link"
                      }
                    >
                      Podcast
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/latest-episode"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : "menu-link"
                      }
                    >
                      Episodes
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/pitch"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : "menu-link"
                      }
                    >
                      Pitch
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/contact"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : "menu-link"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      to="/about-us"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? "menu-link-active" : "menu-link"
                      }
                    >
                      About-us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderOne;
