import { Outlet } from "react-router-dom";
import HeaderThree from "./header/HeaderThree";
import FooterFour from "./footer/FooterFour";
const RootLayoutFour = () => {
  return (
    <>
      <HeaderThree />
      <Outlet />
      <FooterFour />
    </>
  );
};

export default RootLayoutFour;
