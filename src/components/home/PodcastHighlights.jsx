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
import "./podcast-highlights.scss";
import { Link } from "react-router-dom";

// helpers
const getYoutubeVideoId = (url) => {
  if (!url) return null;
  const m = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/i
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

const PodcastHighlights = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.episodes || {});
  const listFromStore = reduxState.list || [];
  const loading = reduxState.loadingList || false;
  const error = reduxState.error || null;

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

  const maxIndex = Math.max(0, listFromStore.length - itemsPerView);
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

  const handleSpotifyClick = (spotifyLink) => {
    if (spotifyLink) {
      window.open(spotifyLink, "_blank");
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="expert-podcast-highlights-section texture-bg-2">
      <div className="expert-podcast-section-container">
        <motion.div
          className="expert-podcast-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="/latest-episode" className="expert-podcast-btn">
            <span className="expert-podcast-icon">🚀</span> Podcast
          </a>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="expert-podcast-title"
        >
          Podcast Highlight
        </motion.h2>

        {loading ? (
          <div className="expert-podcast-loading-row">
            <motion.div
              className="expert-podcast-spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <p>Loading episodes…</p>
          </div>
        ) : error ? (
          <div className="expert-podcast-error-row">
            <p>⚠️ Failed to fetch episodes. Please check your connection.</p>
          </div>
        ) : listFromStore.length === 0 ? (
          <div className="expert-podcast-empty-row">
            <p>No episodes yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="expert-podcast-carousel-container">
            <button
              className="expert-podcast-carousel-nav left"
              onClick={handlePrev}
              disabled={!canGoLeft}
              aria-label="Previous episodes"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="expert-podcast-carousel-wrapper" ref={carouselRef}>
              <motion.div
                className="expert-podcast-carousel"
                animate={{
                  x: `-${currentIndex * (100 / itemsPerView)}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {listFromStore.map((ep, i) => (
                  <div
                    className="expert-podcast-episode-card"
                    key={ep._id || i}
                  >
                    <div
                      className="expert-podcast-thumbnail-wrap"
                      onClick={() => handleThumbnailClick(ep)}
                    >
                      <img
                        src={getYoutubeThumbnail(ep.youtubeLink)}
                        alt={ep.title}
                      />
                      <div className="expert-podcast-play-overlay">
                        <div className="expert-podcast-play-icon-circle">
                          <Play size={24} fill="white" />
                        </div>
                      </div>
                      {ep.spotifyLink && (
                        <button
                          className="expert-podcast-spotify-play-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpotifyClick(ep.spotifyLink);
                          }}
                        >
                          <Play size={14} fill="currentColor" />
                        </button>
                      )}
                    </div>
                    <div className="expert-podcast-episode-info">
                      <div className="expert-podcast-episode-meta">
                        <span className="expert-podcast-episode-badge">
                          Episode {i + 1}
                        </span>
                        <span className="expert-podcast-episode-guest">
                          <User size={12} />
                          {ep.author || "Guest Speaker"}
                        </span>
                      </div>
                      <h3 onClick={() => handleTitleClick(ep)}>{ep.title}</h3>
                      <p className="expert-podcast-tagline">
                        {ep.description ||
                          ep.tagline ||
                          "Discover insights and stories"}
                      </p>
                      <div className="expert-podcast-episode-footer">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            flex: 1,
                          }}
                        >
                          <span className="expert-podcast-episode-date">
                            <Calendar size={12} />
                            {formatDate(ep.publishedDate || ep.createdAt)}
                          </span>
                          {ep.tag && (
                            <span className="expert-podcast-episode-tag">
                              {ep.tag}
                            </span>
                          )}
                        </div>
                        <button
                          className="expert-podcast-listen-now"
                          onClick={() => handleThumbnailClick(ep)}
                        >
                          Listen Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button
              className="expert-podcast-carousel-nav right"
              onClick={handleNext}
              disabled={!canGoRight}
              aria-label="Next episodes"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Carousel Indicators */}
        {listFromStore.length > itemsPerView && (
          <div className="expert-podcast-carousel-indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`expert-podcast-indicator ${
                  currentIndex === idx ? "active" : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
        <div className="expert-podcast-cta-container">
          <Link to="/latest-episode" className="expert-podcast-cta-btn">
            View All Episodes
            <span className="expert-podcast-arrow-circle">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && modalType && (
          <motion.div
            className="expert-podcast-episode-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className={`expert-podcast-modal-content ${
                modalType === "details" ? "expert-podcast-details-modal" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="expert-podcast-modal-header">
                <h2>{selected.title}</h2>
                <button
                  className="expert-podcast-close-btn"
                  onClick={handleClose}
                >
                  <X size={24} />
                </button>
              </div>
              <div className="expert-podcast-modal-body">
                {modalType === "video" ? (
                  <div className="expert-podcast-video-container">
                    <iframe
                      key={"player-" + iframeKey}
                      src={getYoutubeEmbedUrl(selected.youtubeLink)}
                      title="Episode Player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="expert-podcast-details-container">
                    {/* <div className="expert-podcast-details-image">
                      <img
                        src={getYoutubeThumbnail(selected.youtubeLink)}
                        alt={selected.title}
                      />
                    </div> */}
                    <div className="expert-podcast-details-content">
                      <div className="expert-podcast-detail-item">
                        <span className="expert-podcast-detail-label">
                          Author:
                        </span>
                        <span className="expert-podcast-detail-value">
                          {selected.author || "Not specified"}
                        </span>
                      </div>
                      <div className="expert-podcast-detail-item">
                        <span className="expert-podcast-detail-label">
                          Published:
                        </span>
                        <span className="expert-podcast-detail-value">
                          {formatDate(
                            selected.publishedDate || selected.createdAt
                          )}
                        </span>
                      </div>
                      <div className="expert-podcast-detail-item full-width">
                        <span className="expert-podcast-detail-label">
                          Description:
                        </span>
                        <p className="expert-podcast-detail-description">
                          {selected.description ||
                            selected.tagline ||
                            "No description available for this episode."}
                        </p>
                      </div>
                      <div className="expert-podcast-modal-actions">
                        <button
                          className="expert-podcast-watch-btn"
                          onClick={() => {
                            setModalType("video");
                            setIframeKey((k) => k + 1);
                          }}
                        >
                          <Play size={16} />
                          Watch Episode
                        </button>
                        {selected.spotifyLink && (
                          <button
                            className="expert-podcast-spotify-btn"
                            onClick={() =>
                              handleSpotifyClick(selected.spotifyLink)
                            }
                          >
                            <Play size={16} />
                            Listen on Spotify
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PodcastHighlights;
