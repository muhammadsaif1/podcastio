import { Outlet } from "react-router-dom";
import HeaderTwo from "./header/HeaderTwo";
import FooterThree from "./footer/FooterThree";
import AudioPlayerModalLayoutTwo from "../components/Modal/AudioPlayerModalLayoutTwo";

const RootLayoutThree = () => {
  return (
    <>
      <HeaderTwo />
      <Outlet />
      <FooterThree />
      <AudioPlayerModalLayoutTwo />
    </>
  );
};

export default RootLayoutThree;
