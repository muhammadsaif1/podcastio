/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import AnimateHeight from "react-animate-height";
// import { IconPlus, IconMinus } from "@tabler/icons-react";
import { useState } from "react";

const NavMenu = ({ data }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const { pathname } = useLocation();
  const isActive = (submenus) => {
    return submenus?.some(({ link }) => pathname === link);
  };
  return (
    <div className="nav-menu-wrapper w-100 justify-content-lg-center">
      <ul className="nav-menu d-lg-flex gap-xl-4 gap-3 d-none">
        {data?.map((item) => (
          <li
            className={`menu-item ${isActive(item?.dropdown) && "active"}`}
            key={item?.id}
          >
            {item?.dropdown ? (
              <>
                <button>
                  {item?.title}{" "}
                  <span>
                    {isActive(item?.dropdown) ? (
                      <i className="ti ti-minus"></i>
                    ) : (
                      <i className="ti ti-plus"></i>
                    )}
                  </span>
                </button>
                <ul className="sub-menu">
                  {item?.dropdown?.map((item) => (
                    <li key={item?.id}>
                      <Link
                        className={`menu-link ${
                          pathname === item?.link ? "active" : ""
                        }`}
                        to={item?.link}
                      >
                        {item?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                className={`menu-link ${
                  pathname === item?.link ? "active" : ""
                }`}
                to={item?.link}
              >
                {item?.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <ul className="nav-menu gap-xl-4 gap-3 d-lg-none ">
        {data?.map((item) => (
          <li
            className={`menu-item ${isActive(item?.dropdown) && "active"}`}
            key={item?.id}
          >
            {item?.dropdown ? (
              <>
                <button
                  className="d-flex justify-content-between w-100"
                  onClick={() =>
                    setOpenSubmenu((prev) => (prev == item.id ? null : item.id))
                  }
                >
                  <span>{item?.title}</span>
                  <span>
                    {isActive(item?.dropdown) ? (
                      <i className="ti ti-minus"></i>
                    ) : (
                      <i className="ti ti-plus"></i>
                    )}
                  </span>
                </button>
                <AnimateHeight height={openSubmenu === item.id ? "auto" : 0}>
                  <ul className="sub-menu">
                    {item?.dropdown?.map((item) => (
                      <li key={item?.id}>
                        <Link
                          className={`menu-link ${
                            pathname === item?.link ? "active" : ""
                          }`}
                          to={item?.link}
                        >
                          {item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AnimateHeight>
              </>
            ) : (
              <Link
                className={`menu-link ${
                  pathname === item?.link ? "active" : ""
                }`}
                to={item?.link}
              >
                {item?.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMenu;
