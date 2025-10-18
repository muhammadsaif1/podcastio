import { useEffect, useState } from "react";
import Logo from "@/components/NavBarItems/Logo";
import { siteIdentity } from "@/data/WebSiteInfo";
import NavMenu from "@/components/NavBarItems/NavMenu";
import { navLink } from "@/data/NavLink";
import SearchBar from "@/components/NavBarItems/SearchBar";
import AuthBtn from "@/components/NavBarItems/AuthBtn";
import Wishlist from "@/components/NavBarItems/Wishlist";
import NavbarToggleBtn from "@/components/NavBarItems/NavbarToggleBtn";

const HeaderTwo = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`header-section position-fixed top-0 start-50 translate-middle-x w-100 py-4 ${
        scrolled ? "header-fixed" : ""
      }`}
    >
      <div className="container-lg">
        <nav className="nav-wrapper d-between px-0">
          {/* <!-- site title and logo  --> */}
          <Logo data={siteIdentity} />
          {/* <!-- navbar menu and search area --> */}
          <div
            className={`menu-toggler d-flex align-items-center justify-content-lg-between flex-lg-row flex-column gap-xxl-6 gap-4 w-100 ${
              showMenu ? "active" : ""
            }`}
          >
            {/* <!-- search area  --> */}
            <div className="search-area-2 d-flex align-items-center gap-4 order-lg-1 order-xxl-0">
              <SearchBar />
              {/* <!-- wishlist for mobile device  --> */}
              <div className="show-wishlist d-xxl-none">
                <Wishlist />
              </div>
            </div>

            <div className="category-nav-menu d-between flex-lg-row flex-column gap-xxl-6 gap-4 w-100 me-lg-2">
              {/* <!-- nav menu  --> */}
              <NavMenu data={navLink} />
            </div>

            {/* <!-- wishlist  --> */}
            <div className="wishlist-area d-none d-xxl-block">
              <Wishlist />
            </div>

            {/* <!-- auth button  --> */}
            <AuthBtn />
          </div>

          {/* <!-- menu toggler  --> */}
          <NavbarToggleBtn showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderTwo;
