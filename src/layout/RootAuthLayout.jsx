import { Outlet } from "react-router-dom";
import HeaderAuthentic from "./header/HeaderAuthentic";
import FooterTwo from "./footer/FooterTwo";
import AudioPlayerModalLayoutTwo from "../components/Modal/AudioPlayerModalLayoutTwo";
import CallToAction from "../components/Shared/CallToAction";
import NewsLetterForm2 from "../components/Shared/NewsLetterForm2";
import BottomMenubar from "./BottomMenubar/BottomMenubar";

const RootAuthLayout = () => {
  return (
    <>
      <HeaderAuthentic />
      <Outlet />
      <CallToAction bg="texture-bg-1 cta-alt-bg" />
      <NewsLetterForm2 />
      <div className="pb-xl-0 pb-20">
        <FooterTwo />
      </div>
      <BottomMenubar />
      <AudioPlayerModalLayoutTwo />
    </>
  );
};

export default RootAuthLayout;
