import { useSelector } from "react-redux";
import usePlayButtonClick from "@/hooks/useAudioPlayer/usePlayButtonClick";

export default function MiniPlayer({ audio }) {
  const { handlePlayButtonClick } = usePlayButtonClick();

  const audioTrack = useSelector((state) => state.track);
  const isPlaying = audioTrack.isPlaying;
  const songCurrentTime = useSelector(
    (state) => state.audioControl.songCurrentTime
  );
  const songDuration = useSelector((state) => state.audioControl.songDuration);
  const songProgress = useSelector((state) => state.audioControl.songProgress);

  return (
    <div className="mini-player d-flex align-items-center gap-lg-4 gap-2 w-100">
      <button
        onClick={() => {
          handlePlayButtonClick(audio);
        }}
        className={`play-podcast-btn ${
          isPlaying && audioTrack?.url === audio ? "active" : ""
        }`}
      >
        {isPlaying && audioTrack?.url === audio ? (
          <i className="ti ti-player-pause"></i>
        ) : (
          <i className="ti ti-player-play"></i>
        )}
      </button>
      <div className="miniPlayer-control w-100">
        <div className="miniPlayer-progress w-100 mb-4">
          <div className="miniPlayer-progress-loaded" style={{ width: "100%" }}>
            {audioTrack?.url === audio && (
              <div
                className="miniPlayer-progress-played"
                style={{ width: `${songProgress}%` }}
              ></div>
            )}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100">
          {audioTrack?.url === audio ? (
            <span className="miniPlayer-current fs-sm">{songCurrentTime}</span>
          ) : (
            <span className="miniPlayer-current fs-sm">0:0</span>
          )}
          {audioTrack?.url === audio ? (
            <span className="miniPlayer-duration fs-sm">{songDuration}</span>
          ) : (
            ""
            // <span className="miniPlayer-duration fs-sm">{endTime}</span>
          )}
        </div>
      </div>
    </div>
  );
}
