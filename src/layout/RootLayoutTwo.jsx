import { Outlet } from "react-router-dom";
import HeaderOne from "./header/HeaderOne";
import FooterTwo from "./footer/FooterTwo";
import AudioPlayerModalLayoutTwo from "../components/Modal/AudioPlayerModalLayoutTwo";

const RootLayoutTwo = () => {
  return (
    <>
      <HeaderOne />
      <Outlet />
      <FooterTwo />
      <AudioPlayerModalLayoutTwo />
    </>
  );
};

export default RootLayoutTwo;
