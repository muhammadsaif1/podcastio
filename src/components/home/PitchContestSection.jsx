import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  User,
} from "lucide-react";
import "./pitch-contest-section.scss";
import { Link } from "react-router-dom";

// helpers
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
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1` : null;
};

const formatDate = (dateString) => {
  if (!dateString) return "Unknown Date";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Get the next Sunday at 23:59:59
const getNextSundayDeadline = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

  // Calculate days until next Sunday
  const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;

  // Create next Sunday date
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilSunday);
  nextSunday.setHours(23, 59, 59, 999);

  return nextSunday;
};

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
  const reduxState = useSelector((state) => state.episodes || {});
  const listFromStore = reduxState.list || [];
  const loading = reduxState.loadingList || false;
  const error = reduxState.error || null;

  // Filter only pitch-tag episodes
  const filteredEpisodes = listFromStore.filter(
    (episode) => episode.tag?.toLowerCase() === "pitch"
  );

  const [deadline, setDeadline] = useState(getNextSundayDeadline());
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(deadline));

  const [selected, setSelected] = useState(null);
  const [modalType, setModalType] = useState(null); // 'video' or 'details'
  const [iframeKey, setIframeKey] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, filteredEpisodes.length - itemsPerView);
  const canGoLeft = currentIndex > 0;
  const canGoRight = currentIndex < maxIndex;

  const handlePrev = () => {
    if (canGoLeft) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoRight) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleThumbnailClick = (episode) => {
    setSelected(episode);
    setModalType("video");
    setIframeKey((k) => k + 1);
    document.body.style.overflow = "hidden";
  };

  const handleTitleClick = (episode) => {
    setSelected(episode);
    setModalType("details");
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelected(null);
    setModalType(null);
    document.body.style.overflow = "unset";
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(deadline);

      // Check if countdown reached zero
      if (Object.keys(newTimeLeft).length === 0) {
        // Reset to next Sunday
        const newDeadline = getNextSundayDeadline();
        setDeadline(newDeadline);
        setTimeLeft(calculateTimeLeft(newDeadline));
      } else {
        setTimeLeft(newTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <section className="pitch-contest-section texture-bg-2">
      <div className="pitch-section-container">
        <motion.div
          className="pitch-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
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
          transition={{ duration: 0.4 }}
        >
          <h2 className="pitch-headline">
            Got 5 Minutes 🕐 ? Pitch to Win $100💰 + a Shot to Launch on
            Kurudy🎉
          </h2>

          <p className="pitch-description">
            Every week, we select 3 founders to pitch live on Returnus. We vote.
            The winner gets $100, exposure, and a fast-track to launch their
            company.
          </p>

          {/* Countdown Timer */}
          {/* <div className="pitch-countdown">
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
          </div> */}

          {loading ? (
            <div className="pitch-loading-row">
              <motion.div
                className="pitch-spinner"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <p>Loading pitches…</p>
            </div>
          ) : error ? (
            <div className="pitch-error-row">
              <p>⚠️ Failed to fetch pitches. Please check your connection.</p>
            </div>
          ) : filteredEpisodes.length === 0 ? (
            <div className="pitch-empty-row">
              <p>No pitches yet. Stay tuned!</p>
            </div>
          ) : (
            <div className="pitch-carousel-container">
              <button
                className="pitch-carousel-nav left"
                onClick={handlePrev}
                disabled={!canGoLeft}
                aria-label="Previous pitches"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="pitch-carousel-wrapper" ref={carouselRef}>
                <motion.div
                  className="pitch-carousel"
                  animate={{
                    x: `-${currentIndex * (100 / itemsPerView)}%`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {filteredEpisodes.map((ep, i) => (
                    <div className="pitch-episode-card" key={ep._id || i}>
                      <div
                        className="pitch-thumbnail-wrap"
                        onClick={() => handleThumbnailClick(ep)}
                      >
                        <img
                          src={getYoutubeThumbnail(ep.youtubeLink)}
                          alt={ep.title}
                        />
                        <div className="pitch-play-overlay">
                          <div className="pitch-play-icon-circle">
                            <Play size={24} fill="white" />
                          </div>
                        </div>
                        <button
                          className="pitch-play-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleThumbnailClick(ep);
                          }}
                        >
                          <Play size={14} fill="currentColor" />
                        </button>
                      </div>
                      <div className="pitch-episode-info">
                        <div className="pitch-episode-meta">
                          <span className="pitch-episode-badge">
                            Pitch {filteredEpisodes.length - i}
                          </span>
                          <span className="pitch-episode-founder">
                            <User size={12} />
                            {ep.author || "Founder"}
                          </span>
                        </div>
                        <h3 onClick={() => handleTitleClick(ep)}>{ep.title}</h3>
                        <p className="pitch-tagline">
                          {ep.description ||
                            ep.tagline ||
                            "Discover insights and stories"}
                        </p>
                        <div className="pitch-episode-footer">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.5rem",
                              flex: 1,
                            }}
                          >
                            {ep.tag && (
                              <span className="pitch-episode-tag">
                                {ep.tag}
                              </span>
                            )}
                          </div>
                          <button
                            className="pitch-watch-now"
                            onClick={() => handleThumbnailClick(ep)}
                          >
                            Watch Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <button
                className="pitch-carousel-nav right"
                onClick={handleNext}
                disabled={!canGoRight}
                aria-label="Next pitches"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* Carousel Indicators */}
          {filteredEpisodes.length > itemsPerView && (
            <div className="pitch-carousel-indicators">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  className={`pitch-indicator ${
                    currentIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
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

        {/* Modal */}
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
                transition={{ duration: 0.2 }}
              >
                <div className="pitch-modal-header">
                  <h2>{selected.title}</h2>
                  <button className="pitch-close-btn" onClick={handleClose}>
                    <X size={24} />
                  </button>
                </div>
                <div className="pitch-modal-body">
                  {modalType === "video" ? (
                    <div className="pitch-video-container">
                      <iframe
                        key={"player-" + iframeKey}
                        src={getYoutubeEmbedUrl(selected.youtubeLink)}
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
                            {selected.author || "Not specified"}
                          </span>
                        </div>
                        <div className="pitch-detail-item full-width">
                          <span className="pitch-detail-label">
                            Description:
                          </span>
                          <p className="pitch-detail-description">
                            {selected.description ||
                              selected.tagline ||
                              "No description available for this pitch."}
                          </p>
                        </div>
                        <div className="pitch-modal-actions">
                          <button
                            className="pitch-watch-btn"
                            onClick={() => {
                              setModalType("video");
                              setIframeKey((k) => k + 1);
                            }}
                          >
                            <Play size={16} />
                            Watch Pitch
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
