import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import sidebarNavLink from "@/data/SidebarNavLink";
import AnimateHeight from "react-animate-height";
import user from "@/images/user-1.png";

const SidebarInner = () => {
  const [activeSubmenu, setActiveSubmenu] = useState("");

  const handleSubmenu = (title) => {
    if (activeSubmenu === title) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(title);
    }
  };

  const { pathname } = useLocation();
  const isActive = (submenus) => {
    return submenus?.some(({ link }) => pathname === link);
  };

  return (
    <div className="sidebar">
      <Link to="/user/profile-setting">
        <div className="user-profile d-flex align-items-center gap-lg-6 gap-sm-4 gap-2">
          <div className="user-profile-thumb position-relative">
            <img className="w-100 rounded-circle" src={user} alt="user" />
            <span className="online-active"></span>
          </div>
          <div className="user-profile-info">
            <h4 className="fw-semibold mb-2">Jenny Wilson</h4>
            <span className="tcp-1">@jennywilson</span>
          </div>
        </div>
      </Link>
      <span className="d-block my-lg-6 my-4 border-dashed"></span>
      {sidebarNavLink.map((item) => (
        <div key={item.id} className={`${item?.id !== 1 && "mt-4"}`}>
          <span className="d-block fs-lg fw-semibold mb-lg-3 mb-2">
            {item?.menuName}
          </span>
          <ul className="sidebar-menu d-grid gap-lg-3 gap-2 ">
            {item?.navItems?.map(
              (subItem) =>
                (subItem?.subMenu && subItem?.subMenu?.length > 0 && (
                  <li
                    key={subItem.id}
                    className={`${
                      (activeSubmenu === subItem?.linkName && "active") ||
                      (isActive(subItem?.subMenu) && "active")
                    }`}
                  >
                    <button
                      className="side-menu-item d-between py-lg-3 py-2 px-xxl-6 px-4 rounded-4"
                      onClick={() => handleSubmenu(subItem?.linkName)}
                    >
                      <span className="d-flex align-items-center gap-2">
                        <span className="icon fs-xl">
                          <i className={subItem.icon}></i>
                        </span>
                        <span className="fw-medium">{subItem.linkName}</span>
                      </span>
                      {(activeSubmenu === subItem?.linkName && (
                        <i className="ti ti-minus"></i>
                      )) || <i className="ti ti-plus"></i>}
                    </button>

                    {/* sub menu */}
                    <AnimateHeight
                      height={
                        activeSubmenu === subItem.linkName ||
                        isActive(subItem?.subMenu)
                          ? "auto"
                          : 0
                      }
                    >
                      <ul className="side-sub-menu rounded-3">
                        {subItem?.subMenu?.map((subSubItem) => (
                          <li
                            className="py-3 ps-xxl-8 ps-6"
                            key={subSubItem.id}
                          >
                            <Link
                              to={subSubItem.link}
                              className={`side-submenu-item d-flex align-items-center gap-2 py-2 ${
                                pathname === subSubItem?.link ? "active" : ""
                              }`}
                            >
                              <i className="ti ti-minus"></i>{" "}
                              {subSubItem.linkName}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AnimateHeight>
                  </li>
                )) || (
                  // normal menu
                  <li key={subItem.id}>
                    <Link
                      to={subItem.link}
                      className={`side-menu-link rounded-4 ${
                        pathname === subItem?.link ? "active" : ""
                      }`}
                      onClick={() => handleSubmenu(subItem?.linkName)}
                    >
                      <div className="d-flex align-items-center gap-2 py-lg-3 py-2 px-xxl-6 px-4">
                        <span className="icon fs-xl">
                          <i className={subItem.icon}></i>
                        </span>
                        <span className="fw-medium">{subItem.linkName}</span>
                      </div>
                    </Link>
                  </li>
                )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SidebarInner;
