import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import PageHeroTwo from "../components/PageHero/PageHeroTwo";

const SidebarLayout = () => {
  const location = useLocation();
  const formatRouteName = (route) => {
    // Split the route string by '/'
    const parts = route.split("/");

    // Filter out "user" and empty parts, capitalize the first letter of each remaining part
    const formattedParts = parts
      .filter((part) => part !== "user" && part !== "")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1));

    // Join the formatted parts with a space between them
    const removeDash = formattedParts.map((part) => part.replace(/-/g, " "));

    // const formattedName = formattedParts.join(" ");
    const formattedName = removeDash.join(" ");

    return formattedName;
  };
  const title = formatRouteName(location.pathname);
  return (
    <>
      <PageHeroTwo pageTitle={title} />
      <main className="user-main-content-area overview pb-120 texture-bg-1">
        <div className="container overflow-visible">
          <div className="row gx-6">
            <div className="col-xl-3">
              <Sidebar />
            </div>
            <div className="col-xl-9">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SidebarLayout;
