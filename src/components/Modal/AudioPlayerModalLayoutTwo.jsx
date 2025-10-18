import { useSelector } from "react-redux";
import ModalAudioPlayer from "./ModalAudioPlayer";

const AudioPlayerModalLayoutTwo = () => {
  const modalOpen = useSelector((state) => state.customModal);

  return (
    <div className={`audio-modal ${modalOpen ? "audio-modal-open" : ""}`}>
      <div className="container-fluid big__playbar">
        <ModalAudioPlayer />
      </div>
    </div>
  );
};

export default AudioPlayerModalLayoutTwo;
