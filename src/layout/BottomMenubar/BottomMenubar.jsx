import { useRef, useState } from "react";
import SidebarInner from "../sidebar/SidebarInner";
import useOnClickOutside from "@/hooks/useOnClickOutside/useOnClickOutside";
import user from "@/images/user-1.png";
import ProfileBox from "@/components/NavBarItems/ProfileBox";
import NotificationBox from "@/components/NavBarItems/NotificationBox";
import { Link } from "react-router-dom";

const BottomMenubar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeProfile, setActiveProfile] = useState(false);
  const [activeNft, setActiveNft] = useState(false);
  const menuRef = useRef();
  const profileRef = useRef();
  const nftRef = useRef();
  useOnClickOutside(menuRef, () => setActiveMenu(false));
  useOnClickOutside(profileRef, () => setActiveProfile(false));
  useOnClickOutside(nftRef, () => setActiveNft(false));

  return (
    <div className="bottom-menubar pt-5 pb-3 bgc-2 position-fixed bottom-0 start-0 w-100 d-block d-xl-none">
      <div className="container">
        <div className="row">
          <div className="col-3" ref={menuRef}>
            <button
              className="bottom-menu-btn"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <span className="fs-2xl fw-normal">
                <i className="ti ti-menu-2"></i>
              </span>
            </button>
            <div
              className={`menubar-item-wrapper bgc-2 p-sm-4 p-2 rounded border-full ${
                activeMenu ? "active" : ""
              }`}
            >
              <SidebarInner />
            </div>
          </div>
          <div className="col-3">
            <div ref={nftRef}>
              <button
                className="bottom-menu-btn notification-btn"
                onClick={() => setActiveNft(!activeNft)}
              >
                <span className="d-center fs-lg">
                  <i className="ti ti-bell"></i>
                </span>
                <span className="baddge d-center">
                  <span className="tcn-900 fs-base">0</span>
                </span>
              </button>

              <NotificationBox modal={activeNft} setModal={setActiveNft} />
            </div>
          </div>
          <div className="col-3">
            <div className="bottom-menu-btn wishlist-btn">
              <Link to="/favorite-episode">
                <span className="d-center fs-lg">
                  <i className="ti ti-heart"></i>
                </span>
                <span className="baddge d-center">
                  <span className="tcn-900 fs-base">0</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-3">
            <div ref={profileRef}>
              <button
                className="profile-btn"
                onClick={() => setActiveProfile(!activeProfile)}
              >
                <img className="w-100 rounded-circle" src={user} alt="user" />
              </button>

              <ProfileBox
                modal={activeProfile}
                setModal={setActiveProfile}
                user={user}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomMenubar;
