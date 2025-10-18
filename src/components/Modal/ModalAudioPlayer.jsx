import {
  setSongCurrentTime,
  setSongDuration,
  setSongProgress,
} from "@/redux/features/audioControlSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAudioPlayer from "../../hooks/useAudioPlayer/useAudioPlayer";
import { setCustomModal } from "../../redux/features/modalSlice";
import { setTrack } from "../../redux/features/trackSlice";
const ModalAudioPlayer = () => {
  const dispatch = useDispatch();
  const audioTrack = useSelector((state) => state.track);
  const audio = audioTrack.url;
  const isPlaying = audioTrack.isPlaying;

  const {
    // playToggle,
    handlePause,
    handlePlay,
    audioRef,
    progressBarRef,
    progress,
    currentInMin,
    durationInMin,
    handlePlayToggle,
    handleProgress,
    handleFastReverse,
    handleFastForward,
    handleProgressBarMouseDown,
    handleProgressBarMouseUp,
    handleProgressBarInteraction,
    handleProgressBarMouseMove,
    handleProgressBarMouseLeave,
    handleVolumeChange,
    vref,
    volume,
    handleAudioMute,
    isMuted,
  } = useAudioPlayer();

  const handleModalClose = () => {
    dispatch(setCustomModal(false));
    handlePause();
    dispatch(setTrack({ url: audio, isPlaying: false }));
  };

  useEffect(() => {
    if (!isPlaying) return;
    if (!progress) return;
    dispatch(setSongProgress(progress));
    dispatch(setSongDuration(durationInMin));
    dispatch(setSongCurrentTime(currentInMin));
  }, [progress, isPlaying]);

  useEffect(() => {
    if (audio && isPlaying) {
      handlePlay();
    }
  }, [audio]);

  useEffect(() => {
    if (!isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  }, [isPlaying]);

  const handleAudioPlay = () => {
    if (!isPlaying) {
      dispatch(setTrack({ url: audio, isPlaying: true }));
      handlePlayToggle();
    } else {
      handlePause();
      dispatch(setTrack({ url: audio, isPlaying: false }));
    }
  };

  return (
    <div className="d-lg-flex d-grid align-items-lg-center justify-content-lg-between gap-1">
      <div className="audioplayer-info flex-grow-1 d-flex align-content-center gap-lg-6 gap-4">
        <div className="audioplayer-thumb d-none d-lg-block">
          <img
            className="w-100"
            src={audioTrack?.img}
            alt={audioTrack?.title}
          />
        </div>
        <div>
          <a href={audioTrack?.url} className="audioplayer-song">
            {audioTrack?.title?.slice(0, 50)} Laughter Unleashed: Join Us for
            Joyful Conversations Today{" "}
          </a>
          <a
            href={audioTrack?.artist}
            className="audioplayer-artist d-none d-lg-block"
          >
            {audioTrack?.artist} Kathryn Murphy{" "}
          </a>
        </div>
      </div>

      <div className="audioplayer-control flex-grow-1 d-flex align-items-center justify-content-center justify-content-lg-start gap-lg-6 gap-4">
        <div className="audioplayer-time d-flex align-content-center gap-4">
          <span className="audioplayer-time-current fs-sm">{currentInMin}</span>
          <span className="audioplayer-time-duration fs-sm">
            {durationInMin}
          </span>
        </div>

        <button
          className="audioplayer-btn"
          onClick={() => {
            handleFastReverse();
          }}
        >
          <i className="ti ti-rewind-backward-10"></i>
        </button>

        <audio
          preload="auto"
          style={{ width: "0px", height: "0px", visibility: "hidden" }}
          onTimeUpdate={handleProgress}
          ref={audioRef}
          src={`${audio}`}
        ></audio>

        <div
          ref={progressBarRef}
          onClick={handleProgressBarInteraction}
          onMouseDown={handleProgressBarMouseDown}
          onMouseUp={handleProgressBarMouseUp}
          onMouseMove={handleProgressBarMouseMove}
          onMouseLeave={handleProgressBarMouseLeave}
          className="audioplayer-bar"
        >
          <div className="audioplayer-bar-loaded" style={{ width: "100%" }}>
            <div
              className="audioplayer-bar-played"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={handleAudioPlay}
          className={`play-podcast-btn ${isPlaying ? "active" : ""}`}
        >
          {isPlaying ? (
            <i className="ti ti-player-pause"></i>
          ) : (
            <i className="ti ti-player-play"></i>
          )}
        </button>

        <button
          className="audioplayer-btn"
          onClick={() => {
            handleFastForward();
          }}
        >
          <i className="ti ti-rewind-forward-10"></i>
        </button>
      </div>

      <div className="audioplayer-features-control flex-grow-1 d-flex align-content-center gap-lg-6 gap-4 justify-content-center justify-content-lg-end">
        <div className="audioplayer-volume d-flex align-items-center gap-2">
          <button
            className="audioplayer-volume-button audioplayer-btn"
            onClick={handleAudioMute}
          >
            {isMuted ? (
              <i className="ti ti-volume-off"></i>
            ) : (
              <i className="ti ti-volume"></i>
            )}
          </button>

          <div
            ref={vref}
            onClick={handleVolumeChange}
            className="audioplayer-volume-bar"
          >
            <div
              style={{ width: volume * 100 + "%" }}
              className="volume-bar-indicator"
            ></div>
          </div>
        </div>

        <button className="audioplayer-btn me-lg-15" onClick={handleModalClose}>
          <i className="ti ti-x"></i>
        </button>
      </div>
    </div>
  );
};

export default ModalAudioPlayer;
