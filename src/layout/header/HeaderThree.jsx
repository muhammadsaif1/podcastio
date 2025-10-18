import { useState } from "react";
import AuthBtn from "@/components/NavBarItems/AuthBtn";
import Logo from "@/components/NavBarItems/Logo";
import NavMenu from "@/components/NavBarItems/NavMenu";
import NavbarToggleBtn from "@/components/NavBarItems/NavbarToggleBtn";
import SearchBar from "@/components/NavBarItems/SearchBar";
import Wishlist from "@/components/NavBarItems/Wishlist";
import { navLink } from "@/data/NavLink";
import { siteIdentity } from "@/data/WebSiteInfo";

const HeaderThree = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header-section position-fixed top-0 start-50 translate-middle-x w-100 py-4 bgc-1">
      <div className="container-fluid px-lg-0">
        <nav className="nav-wrapper d-between">
          {/* <!-- site title and logo  --> */}
          <Logo data={siteIdentity} />
          {/* <!-- category menu, navbar menu and search area --> */}
          <div
            className={`menu-toggler d-flex align-items-center justify-content-lg-between flex-lg-row flex-column gap-xxl-6 gap-4 w-100 ${
              showMenu ? "active" : ""
            }`}
          >
            <div className="category-nav-menu d-center flex-lg-row flex-column gap-xxl-6 gap-4 w-100">
              {/* <!-- nav menu  --> */}
              <NavMenu data={navLink} />
            </div>
            {/* <!-- search and wishlist  --> */}
            <div className="search-wishlist-area order-first order-lg-1 d-flex align-items-center justify-content-lg-end gap-xxl-6 gap-xl-4 gap-2 w-100">
              <SearchBar />
              <Wishlist />
            </div>
            {/* <!-- auth button  --> */}
            <AuthBtn />
          </div>
          {/* <!-- menu toggler btn  --> */}
          <NavbarToggleBtn showMenu={showMenu} setShowMenu={setShowMenu} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderThree;
