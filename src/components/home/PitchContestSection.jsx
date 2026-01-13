"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  User,
  ArrowRight,
  Trophy,
} from "lucide-react";
import "./pitch-contest-section.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPitches } from "@/redux/slices/pitchSlice";

// YouTube helpers
const getYoutubeVideoId = (url) => {
  if (!url) return null;
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/i
  );
  return m ? m[1] : null;
};

const getYoutubeThumbnail = (url) => {
  const id = getYoutubeVideoId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : "/placeholder-thumbnail.png";
};

const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
};

// Weekly Timer Logic (Friday 00:00 EST → Thursday 23:59 EST)
const useWeeklyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tz = "America/New_York";

    const calculateTimeLeft = () => {
      // Get current time in EST
      const now = new Date();
      const estTime = new Date(now.toLocaleString("en-US", { timeZone: tz }));

      // Get current EST day (0=Sun, 1=Mon, ..., 6=Sat)
      const estWeekday = estTime.getDay();

      // Calculate days back to last Friday
      let daysBack;
      if (estWeekday >= 5) {
        // Friday (5), Saturday (6)
        daysBack = estWeekday - 5;
      } else {
        // Sunday (0) to Thursday (4)
        daysBack = estWeekday + 2;
      }

      // Create week start (last Friday 00:00 EST)
      const weekStart = new Date(estTime);
      weekStart.setDate(estTime.getDate() - daysBack);
      weekStart.setHours(0, 0, 0, 0);

      // Create week end (following Thursday 23:59:59.999 EST)
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6); // +6 days from Friday = Thursday
      weekEnd.setHours(23, 59, 59, 999);

      // FIXED: Calculate difference directly between EST times
      const diff = weekEnd.getTime() - estTime.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

const PitchContestSection = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.pitches || {});
  const listFromStore = reduxState.list || [];
  const loading = reduxState.loadingList || false;

  const adminPitches = Array.isArray(listFromStore)
    ? listFromStore.filter((p) => p.byAdmin === true)
    : [];

  const sortedPitches = [...adminPitches].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const winnerPitch = sortedPitches.find((p) => p.winnerOfTheWeek);
  const displayPitches = sortedPitches;

  const [selected, setSelected] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [iframeKey, setIframeKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  const { days, hours, minutes, seconds } = useWeeklyCountdown();

  useEffect(() => {
    dispatch(fetchPitches());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
      setCurrentIndex(0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, displayPitches.length - itemsPerView);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < maxIndex;

  const handlePrev = () => canGoLeft && setCurrentIndex((prev) => prev - 1);
  const handleNext = () => canGoRight && setCurrentIndex((prev) => prev + 1);

  const handleThumbnailClick = (pitch) => {
    setSelected(pitch);
    setModalType("video");
    setIframeKey((k) => k + 1);
    document.body.style.overflow = "hidden";
  };

  const handleTitleClick = (pitch) => {
    setSelected(pitch);
    setModalType("details");
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelected(null);
    setModalType(null);
    document.body.style.overflow = "unset";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="pitch-contest-section texture-bg-2">
      <div className="pitch-section-container">
        <motion.div
          className="pitch-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a href="/pitch" className="pitch-btn">
            <span className="pitch-icon">🚀</span> Pitch Contest
          </a>
        </motion.div>

        <motion.div
          className="pitch-content-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="pitch-headline">
            Got 5 Minutes 🕐 ? Pitch to Win $100💰 + a Shot to Launch on
            Returnus🎉
          </h2>

          <p className="pitch-description">
            Every week, we select 3 founders to pitch live on Returnus. We vote.
            The winner gets $100, exposure, and a fast-track to launch their
            company.
          </p>

          {/* Weekly Countdown Timer */}
          <div className="weekly-timer-container">
            <h3 className="timer-title">Voting Ends In</h3>
            <div className="timer-display">
              <div className="time-block">
                <span className="time-value">
                  {String(days).padStart(2, "0")}
                </span>
                <span className="time-label">Days</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="time-block">
                <span className="time-value">
                  {String(hours).padStart(2, "0")}
                </span>
                <span className="time-label">Hours</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="time-block">
                <span className="time-value">
                  {String(minutes).padStart(2, "0")}
                </span>
                <span className="time-label">Mins</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="time-block">
                <span className="time-value">
                  {String(seconds).padStart(2, "0")}
                </span>
                <span className="time-label">Secs</span>
              </div>
            </div>
            <p className="timer-note">New contest starts every Friday</p>
          </div>

          {/* Winner Announcement */}
          {winnerPitch ? (
            <div className="pitch-winner-banner">
              <Trophy size={28} />
              <span>
                <strong>{winnerPitch.fullName}</strong> is this week's winner!
              </span>
            </div>
          ) : (
            <div className="pitch-winner-soon">
              <span>Winner will be announced soon...</span>
            </div>
          )}

          {/* Winner Highlight */}
          {winnerPitch && (
            <motion.div
              className="pitch-winner-highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="pitch-winner-highlight-card">
                <div
                  className="pitch-winner-highlight-thumbnail"
                  onClick={() => handleThumbnailClick(winnerPitch)}
                >
                  <img
                    src={getYoutubeThumbnail(winnerPitch.pitchVideo)}
                    alt={winnerPitch.fullName}
                  />
                  <div className="pitch-winner-highlight-play">
                    <Play size={48} />
                  </div>
                </div>

                <div className="pitch-winner-highlight-info">
                  <h3>{winnerPitch.companyName || winnerPitch.fullName}</h3>
                  <p className="pitch-winner-highlight-founder">
                    <User size={16} /> {winnerPitch.fullName}
                  </p>
                  {winnerPitch.oneSentenceSummary && (
                    <p className="pitch-winner-highlight-summary">
                      {winnerPitch.oneSentenceSummary}
                    </p>
                  )}
                  <button
                    className="pitch-winner-highlight-btn"
                    onClick={() => handleThumbnailClick(winnerPitch)}
                  >
                    Watch Winning Pitch
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          <h2 className="pitches-text-tag">All Pitches</h2>

          {loading ? (
            <div className="pitch-loading-row">
              <motion.div
                className="pitch-spinner"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <p>Loading pitches…</p>
            </div>
          ) : displayPitches.length === 0 ? (
            <div className="pitch-empty-row">
              <p>No pitches available yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="pitch-carousel-container">
              <button
                className="pitch-carousel-nav left"
                onClick={handlePrev}
                disabled={!canGoLeft}
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="pitch-carousel-wrapper">
                <motion.div
                  className="pitch-carousel"
                  animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {displayPitches.map((pitch, i) => {
                    const pitchNumber = displayPitches.length - i;
                    return (
                      <div className="pitch-episode-card" key={pitch._id}>
                        <div
                          className="pitch-thumbnail-wrap"
                          onClick={() => handleThumbnailClick(pitch)}
                        >
                          <img
                            src={getYoutubeThumbnail(pitch.pitchVideo)}
                            alt={pitch.fullName}
                          />
                          <div className="pitch-play-overlay">
                            <div className="pitch-play-icon-circle">
                              <Play size={24} fill="white" />
                            </div>
                          </div>
                          {pitch.winnerOfTheWeek && (
                            <div className="pitch-winner-badge">
                              <Trophy size={20} />
                              Winner
                            </div>
                          )}
                          <div className="pitch-number-badge">
                            PITCH {String(pitchNumber).padStart(2, "0")}
                          </div>
                        </div>

                        <div className="pitch-episode-info">
                          <div className="pitch-episode-meta">
                            <span className="pitch-episode-founder">
                              <User size={12} />
                              {pitch.fullName}
                            </span>
                          </div>
                          <h3 onClick={() => handleTitleClick(pitch)}>
                            {pitch.companyName || pitch.fullName}
                          </h3>
                          {pitch.oneSentenceSummary && (
                            <p className="pitch-tagline">
                              {pitch.oneSentenceSummary ||
                                "Amazing startup idea"}
                            </p>
                          )}
                          <div className="pitch-episode-footer">
                            {pitch.pitchCategory && (
                              <button className="pitch-watch-now pitch-episode-category">
                                {pitch.pitchCategory}
                              </button>
                            )}
                            <button
                              className="pitch-watch-now"
                              onClick={() => handleThumbnailClick(pitch)}
                            >
                              Watch Now
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <button
                className="pitch-carousel-nav right"
                onClick={handleNext}
                disabled={!canGoRight}
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {displayPitches.length > itemsPerView && (
            <div className="pitch-carousel-indicators">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`pitch-indicator ${
                    currentIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}

          <div className="pitch-cta-container">
            <Link to="/pitch" className="pitch-cta-btn">
              Submit Your Pitch
              <span className="pitch-arrow-circle">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Modal - Logo/Deck Removed */}
        <AnimatePresence>
          {selected && modalType && (
            <motion.div
              className="pitch-episode-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <motion.div
                className={`pitch-modal-content ${
                  modalType === "details" ? "pitch-details-modal" : ""
                }`}
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
              >
                <div className="pitch-modal-header">
                  <h2>{selected.companyName || selected.fullName}</h2>
                  <button className="pitch-close-btn" onClick={handleClose}>
                    <X size={24} />
                  </button>
                </div>

                <div className="pitch-modal-body">
                  {modalType === "video" ? (
                    <div className="pitch-video-container">
                      <iframe
                        key={"player-" + iframeKey}
                        src={getYoutubeEmbedUrl(selected.pitchVideo)}
                        title="Pitch Player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="pitch-details-container">
                      <div className="pitch-details-content">
                        <div className="pitch-detail-item">
                          <span className="pitch-detail-label">Founder:</span>
                          <span className="pitch-detail-value">
                            {selected.fullName}
                          </span>
                        </div>
                        {selected.companyName && (
                          <div className="pitch-detail-item">
                            <span className="pitch-detail-label">Company:</span>
                            <span className="pitch-detail-value">
                              {selected.companyName}
                            </span>
                          </div>
                        )}
                        {selected.africanCountry && (
                          <div className="pitch-detail-item">
                            <span className="pitch-detail-label">Country:</span>
                            <span className="pitch-detail-value">
                              {selected.africanCountry}
                            </span>
                          </div>
                        )}
                        {/* {selected.africanCountry && (
                          <div className="pitch-detail-item">
                            <span className="pitch-detail-label">Country:</span>
                            <span className="pitch-detail-value">
                              <span className="country-flag-wrapper">
                                <span className="country-flag">
                                  {selected.africanCountry.slice(0, 4)}
                                </span>
                                <span className="country-name-tooltip">
                                  {selected.africanCountry.slice(5)}
                                </span>
                              </span>
                            </span>
                          </div>
                        )} */}
                        {selected.oneSentenceSummary && (
                          <div className="pitch-detail-item full-width">
                            <span className="pitch-detail-label">Summary:</span>
                            <p className="pitch-detail-description">
                              {selected.oneSentenceSummary}
                            </p>
                          </div>
                        )}
                        {selected.fundingGoal && (
                          <div className="pitch-detail-item full-width">
                            <span className="pitch-detail-label">
                              Funding Goal:
                            </span>
                            <p className="pitch-detail-description">
                              {selected.fundingGoal}
                            </p>
                          </div>
                        )}

                        {selected.stage && (
                          <div className="pitch-detail-item full-width">
                            <span className="pitch-detail-label">Stage</span>
                            <p className="pitch-detail-description">
                              {selected.stage}
                            </p>
                          </div>
                        )}
                        {selected.pitchCategory && (
                          <div className="pitch-detail-item full-width">
                            <span className="pitch-detail-label">
                              Pitch Category
                            </span>
                            <p className="pitch-detail-description">
                              {selected.pitchCategory}
                            </p>
                          </div>
                        )}

                        <div className="pitch-modal-actions">
                          <button
                            className="pitch-watch-btn"
                            onClick={() => {
                              setModalType("video");
                              setIframeKey((k) => k + 1);
                            }}
                          >
                            <Play size={16} />
                            Watch Video
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PitchContestSection;
