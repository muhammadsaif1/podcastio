import { Outlet } from "react-router-dom";
import AudioPlayerModalLayoutTwo from "../components/Modal/AudioPlayerModalLayoutTwo";
const RootLayoutFive = () => {
  return (
    <>
      <Outlet />
      <AudioPlayerModalLayoutTwo />
    </>
  );
};

export default RootLayoutFive;
