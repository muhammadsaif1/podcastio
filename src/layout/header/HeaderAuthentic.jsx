import { useEffect, useState } from "react";
import CategoryBtn from "@/components/NavBarItems/CategoryBtn";
import Logo from "@/components/NavBarItems/Logo";
import NavMenu from "@/components/NavBarItems/NavMenu";
import { navLink } from "@/data/NavLink";
import { siteIdentity } from "@/data/WebSiteInfo";
import SearchBar from "@/components/NavBarItems/SearchBar";
import Wishlist from "@/components/NavBarItems/Wishlist";
import NotificationBtn from "@/components/NavBarItems/NotificationBtn";
import UserBtn from "@/components/NavBarItems/UserBtn";
import NavbarToggleBtn from "@/components/NavBarItems/NavbarToggleBtn";

const HeaderOne = () => {
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
    <>
      <header
        className={`header-section position-fixed top-0 start-50 translate-middle-x w-100 py-4 ${
          scrolled ? "header-fixed" : ""
        }`}
      >
        <div className="container-fluid">
          <nav className="nav-wrapper d-between">
            {/* <!-- site title and logo  --> */}
            <Logo data={siteIdentity} />
            {/* <!-- category menu, navbar menu and search area --> */}
            <div
              className={`menu-toggler d-flex align-items-center justify-content-lg-between flex-lg-row flex-column gap-xl-4 gap-2 w-100 ${
                showMenu ? "active" : ""
              }`}
            >
              <div className="category-nav-menu d-between flex-lg-row flex-column gap-xl-4 gap-2 me-lg-2 w-100">
                {/* <!-- category menu  --> */}
                <CategoryBtn />
                {/* <!-- nav menu  --> */}
                <NavMenu data={navLink} />
              </div>
              {/* <!-- search and wishlist  --> */}
              <div className="search-wishlist-area order-first order-lg-1 d-flex align-items-center justify-content-lg-end gap-xxl-6 gap-xl-4 gap-2">
                <SearchBar />
                <Wishlist />
              </div>

              {/* <!-- auth verified  --> */}
              <div className="user-logedin d-none d-lg-flex gap-xxl-6 gap-lg-4 order-last">
                {/* <!-- notification --> */}
                <NotificationBtn />
                <UserBtn />
              </div>
            </div>
            {/* <!-- menu toggler btn  --> */}
            <NavbarToggleBtn showMenu={showMenu} setShowMenu={setShowMenu} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
