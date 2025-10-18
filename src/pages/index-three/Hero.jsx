import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import banner from "@/images/hero-banner-3.png";
import playImg from "@/images/img-btn.png";
import NumberCounter from "@/utils/NumberCounter";
import visualImg from "@/images/record-4.png";
import ModalVideo from "react-modal-video";
import { useState } from "react";
import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import Fade from "@/motion/Fade";
import usePlayButtonClick from "@/hooks/useAudioPlayer/usePlayButtonClick";
import { useSelector } from "react-redux";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  const { handlePlayButtonClick } = usePlayButtonClick();
  const audioTrack = useSelector((state) => state.track);
  const isPlaying = audioTrack.isPlaying;
  const song = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  const songCurrentTime = useSelector(
    (state) => state.audioControl.songCurrentTime
  );
  const songDuration = useSelector((state) => state.audioControl.songDuration);
  const songProgress = useSelector((state) => state.audioControl.songProgress);

  const counterData = [
    {
      id: 1,
      number: 99.4,
      unit: "K",
      title: "Total Episode",
    },
    {
      id: 2,
      number: 210,
      unit: "M",
      title: "Happy Listener",
    },
    {
      id: 3,
      number: 72,
      unit: "+",
      title: "Our Awards",
    },
  ];
  return (
    <>
      <section className="hero-section-3 texture-bg-2 pt-120">
        <div className="container pt-lg-15 pt-sm-10 pt-6 pb-lg-20 pb-sm-15 pb-10">
          <div className="row">
            {/* <!-- title area  --> */}
            <div className="col-12">
              <FadeDown>
                <div className="d-between flex-wrap">
                  <h2 className="display-one text-center text-lg-start">
                    Empowering <span className="tcp-1">Minds</span>
                  </h2>
                  <div className="img-bttn position-relative d-none d-lg-block">
                    <button
                      className="icon-btn d-center position-absolute top-50 start-50 translate-middle"
                      onClick={() => setOpen(true)}
                    >
                      <span className="icon fs-xl fw-bold">
                        <i className="ti ti-player-play"></i>
                      </span>
                    </button>
                    <img className="w-100" src={playImg} alt="hero image" />
                  </div>
                </div>
                <h2 className="display-one text-lg-end text-center">
                  <span className="tcp-4">Through </span> Soundscapes
                </h2>
              </FadeDown>
            </div>
          </div>
          <div className="row justify-content-between g-6 pt-lg-8">
            <div className="col-lg-3">
              <div className="hero-banner-3">
                <img className="w-100" src={banner} alt="banner" />
              </div>
            </div>
            <div className="col-lg-7">
              <FadeUp>
                <p className="fs-xl mb-lg-12 mb-sm-6 mb-4 text-center text-lg-start">
                  Explore the uncharted territories of knowledge and
                  inspiration. Your journey beyond the horizon starts now
                </p>

                {/* <!-- music player 02  --> */}
                <div className="music-player-2 p-6 bgc-3 rounded mb-lg-10 mb-sm-6 mb-4">
                  <div className="song-info d-flex flex-wrap align-items-center gap-lg-6 gap-sm-4 gap-2 mb-lg-6 mb-4">
                    <div className="track-name-area d-flex align-items-center gap-2">
                      <span className="fs-xl tcp-1">
                        <i className="ti ti-category"></i>
                      </span>
                      <span className="track-name">Horror Spacial</span>
                    </div>
                    <div className="playlist-name-area d-flex align-items-center gap-2">
                      <span className="fs-xl tcp-1">
                        <i className="ti ti-versions"></i>
                      </span>
                      <span className="playlist-name">Episode 09</span>
                    </div>
                    <div className="singer-name-area d-flex align-items-center gap-2">
                      <span className="fs-xl tcp-1">
                        <i className="ti ti-microphone"></i>
                      </span>
                      <span className="singer-name">RJ Jenny Wilson</span>
                    </div>
                  </div>
                  <div className="play-podcast-area mt-lg-6 mt-4">
                    <div className="audio-player d-block">
                      <div className="controls">
                        {/* <!-- timeline  --> */}
                        <div className="miniPlayer-progress mb-4">
                          <div
                            className="miniPlayer-progress-loaded bg-alt"
                            style={{ width: "100%" }}
                          >
                            {audioTrack?.url === song && (
                              <div
                                className="miniPlayer-progress-played"
                                style={{ width: `${songProgress}%` }}
                              ></div>
                            )}
                          </div>
                        </div>
                        {/* <!-- time and volume  --> */}
                        <div className="time-and-volume">
                          {/* <!-- time  --> */}
                          <div className="time d-between">
                            {audioTrack?.url === song && (
                              <span className="miniPlayer-current fs-sm">
                                {songCurrentTime}
                              </span>
                            )}
                            {audioTrack?.url === song && (
                              <span className="miniPlayer-duration fs-sm">
                                {songDuration}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      {/* <!-- player controls btn  --> */}
                      <div className="d-between gap-4">
                        {/* <!-- player controls btn  --> */}
                        <div className="play-audio d-flex  align-items-center gap-4">
                          <button className="play-prve fs-xl">
                            <i className="ti ti-player-track-prev"></i>
                          </button>

                          <button
                            onClick={() => {
                              handlePlayButtonClick(song);
                            }}
                            className={`play-podcast-btn ${
                              isPlaying && audioTrack?.url === song
                                ? "active"
                                : ""
                            }`}
                          >
                            {isPlaying && audioTrack?.url === song ? (
                              <i className="ti ti-player-pause"></i>
                            ) : (
                              <i className="ti ti-player-play"></i>
                            )}
                          </button>

                          <button className="play-next fs-xl">
                            <i className="ti ti-player-track-next"></i>
                          </button>
                        </div>
                        {/* <!-- equalizer/ visualizer  --> */}
                        <div className="visualizer d-none d-sm-block">
                          <img
                            className="w-100"
                            src={visualImg}
                            alt="visualizer"
                          />
                        </div>
                        <div className="d-flex align-items-center gap-6">
                          {/* <!-- volume and setting --> */}
                          <div className="volume-and-setting d-flex align-items-center gap-4">
                            {/* <!-- setting  --> */}
                            <div className="setting-container">
                              <button className="setting-button">
                                <i className="ti ti-settings"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="listen-to-btns d-between justify-content-lg-start gap-6 flex-wrap">
                  <p className="fs-2xl fw-medium text-nowrap">
                    Listen to Podcaster through :
                  </p>
                  <ListenOnBtns />
                </div>
              </FadeUp>
            </div>
            <div className="col-lg-2">
              <Fade>
                <div className="d-flex flex-lg-column flex-wrap flex-sm-nowrap justify-content-center justify-content-lg-start gap-lg-10 gap-md-8 gap-6">
                  {counterData.map((item) => (
                    <div className="ms-lg-auto" key={item.id}>
                      <div className="d-center mb-2">
                        <span className="fs-two text-nowrap">
                          <NumberCounter start={0} end={item.number} />
                        </span>
                        <span className="fs-two tcp-1">{item.unit}</span>
                      </div>
                      <p>{item.title}</p>
                    </div>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="w7j_K_hE5kU"
        onClose={() => setOpen(false)}
        zIndex={1000}
      />
    </>
  );
};

export default Hero;
