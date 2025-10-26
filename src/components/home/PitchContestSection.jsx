import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./pitch-contest-section.scss";

// Countdown helper
const calculateTimeLeft = (deadline) => {
  const difference = +new Date(deadline) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const PitchContestSection = () => {
  const dispatch = useDispatch();
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (index) => {
    // If this video is already active → MUTE it back
    if (activeVideo === index) {
      const iframe = document.getElementById(`youtube-${index}`);
      if (iframe) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "mute",
          }),
          "*"
        );
      }
      setActiveVideo(null); // remove highlight / overlay state
      return;
    }

    // otherwise proceed like normal: mute all and unmute the clicked one
    latestPitchEpisodes.forEach((_, i) => {
      const iframe = document.getElementById(`youtube-${i}`);
      if (iframe) {
        iframe.contentWindow.postMessage(
          JSON.stringify({
            event: "command",
            func: "mute",
          }),
          "*"
        );
      }
    });

    const clickedIframe = document.getElementById(`youtube-${index}`);
    if (clickedIframe) {
      clickedIframe.contentWindow.postMessage(
        JSON.stringify({
          event: "command",
          func: "unMute",
        }),
        "*"
      );
    }

    setActiveVideo(index);
  };

  const {
    list: episodes = [],
    loadingList,
    error,
  } = useSelector((state) => state.episodes);

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("2025-10-28T23:59:59")
  );

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft("2025-10-28T23:59:59"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  // Filter only pitch-tag episodes
  const pitchEpisodes = episodes.filter(
    (ep) => ep?.tag?.toLowerCase() === "pitch"
  );

  // Latest 4 only
  const latestPitchEpisodes = pitchEpisodes.slice(0, 4);

  // Calculate placeholders
  const placeholdersNeeded =
    latestPitchEpisodes.length < 4 ? 4 - latestPitchEpisodes.length : 0;

  return (
    <section className="pitch-contest-section texture-bg-2">
      <div className="container">
        <motion.div
          className="contest-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="/pitch" className="contest-btn">
            <span className="icon">🚀</span> Pitch Contest
          </a>
        </motion.div>

        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2
            className="headline"
            style={{ textAlign: "left", marginLeft: "0" }}
          >
            Got 5 Minutes? Win $100 + a Shot to Pitch on Kurudy!
          </h2>

          <p
            className="description"
            style={{ textAlign: "left", marginLeft: "0" }}
          >
            Every week, we select 3 founders to pitch live on Returnus. The
            audience votes. The winner gets $100, exposure, and a fast-track to
            launch their Reg CF raise.
          </p>

          {/* Countdown Timer */}
          <div className="countdown">
            <div className="time-unit">
              <motion.span
                key={timeLeft.days}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.days || 0)}
              </motion.span>
              <span className="time-label">days</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.hours}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.hours || 0)}
              </motion.span>
              <span className="time-label">hours</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.minutes}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.minutes || 0)}
              </motion.span>
              <span className="time-label">mins</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.seconds}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.seconds || 0)}
              </motion.span>
              <span className="time-label">secs</span>
            </div>
          </div>

          {/* VIDEO / PLACEHOLDER SECTION */}
          <div className="video-grid">
            {/* DB ERROR */}
            {error && (
              <div
                className="pitch-msg-error"
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Failed to fetch episodes — please try again later.
              </div>
            )}

            {/* NO PITCH EPISODES OR PLACEHOLDERS WHEN NO ERROR */}
            {!error && (
              <>
                {/* NO PITCH EPISODES */}
                {!loadingList && latestPitchEpisodes.length === 0 && (
                  <div className="pitch-msg-waiting">
                    No pitch episodes yet — please check back soon!
                  </div>
                )}

                {/* RENDER YOUTUBE VIDEOS */}
                {latestPitchEpisodes.length > 0 && (
                  <>
                    {latestPitchEpisodes.map((episode, index) => {
                      const videoId = episode.youtubeLink
                        ?.split("v=")[1]
                        ?.split("&")[0];
                      return (
                        <div
                          key={index}
                          className={`video-card youtube-card ${
                            activeVideo === index ? "unmuted" : ""
                          }`}
                          onClick={() => handleVideoClick(index)}
                        >
                          <div className="youtube-wrapper">
                            <iframe
                              id={`youtube-${index}`}
                              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3&disablekb=1&fs=0`}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              title={`Pitch video ${index + 1}`}
                            ></iframe>
                          </div>
                        </div>
                      );
                    })}

                    {/* PLACEHOLDERS */}
                    {Array.from({ length: placeholdersNeeded }).map((_, i) => (
                      <div
                        key={`placeholder-${i}`}
                        className="video-card pitch-coming-soon"
                      >
                        <span>Coming Soon</span>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>

          {/* CTA Button */}
          <div className="cta-container">
            <Link to="/pitch" className="cta-btn">
              Submit Your Pitch
              <span className="pitch-contest-arrow-circle">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchContestSection;
