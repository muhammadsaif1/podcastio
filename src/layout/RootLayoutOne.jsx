import { Outlet } from "react-router-dom";
import HeaderOne from "./header/HeaderOne";
import FooterTwo from "./footer/FooterTwo";

const RootLayoutOne = () => {
  return (
    <>
      <HeaderOne />
      <Outlet />
      <FooterTwo />
    </>
  );
};

export default RootLayoutOne;
