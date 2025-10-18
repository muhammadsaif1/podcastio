import { Outlet } from "react-router-dom";
import HeaderOne from "./header/HeaderOne";
import FooterOne from "./footer/FooterOne";
import AudioPlayerModalLayoutTwo from "../components/Modal/AudioPlayerModalLayoutTwo";

const RootLayoutOne = () => {
  return (
    <>
      <HeaderOne />
      <Outlet />
      <FooterOne />
      <AudioPlayerModalLayoutTwo />
    </>
  );
};

export default RootLayoutOne;
