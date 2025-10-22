"use client";

import React, { useEffect, useState, useRef } from "react";
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
import { Link, Navigate } from "react-router-dom";

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

  const handleViewAllClick = () => {
    <Navigate to={"latest-episode"} />;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="podcast-highlights-section texture-bg-2">
      <div className="section-container">
        <div className="header">
          <div className="header-left">
            <span className="podcast-badge">
              <Play size={12} />
              Podcast
            </span>
            <h2>Podcast Highlight</h2>
          </div>
        </div>

        {loading ? (
          <div className="loading-row">
            <motion.div
              className="spinner"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <p>Loading episodes…</p>
          </div>
        ) : error ? (
          <div className="error-row">
            <p>⚠️ Failed to fetch episodes. Please check your connection.</p>
          </div>
        ) : listFromStore.length === 0 ? (
          <div className="empty-row">
            <p>No episodes yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="carousel-container">
            <button
              className="carousel-nav left"
              onClick={handlePrev}
              disabled={!canGoLeft}
              aria-label="Previous episodes"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="carousel-wrapper" ref={carouselRef}>
              <motion.div
                className="carousel"
                animate={{
                  x: `-${currentIndex * (100 / itemsPerView)}%`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {listFromStore.map((ep, i) => (
                  <div className="episode-card" key={ep._id || i}>
                    <div
                      className="thumbnail-wrap"
                      onClick={() => handleThumbnailClick(ep)}
                    >
                      <img
                        src={getYoutubeThumbnail(ep.youtubeLink)}
                        alt={ep.title}
                      />
                      <div className="play-overlay">
                        <div className="play-icon-circle">
                          <Play size={24} fill="white" />
                        </div>
                      </div>
                      {ep.spotifyLink && (
                        <button
                          className="spotify-play-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSpotifyClick(ep.spotifyLink);
                          }}
                        >
                          <Play size={14} fill="currentColor" />
                        </button>
                      )}
                    </div>
                    <div className="episode-info">
                      <div className="episode-meta">
                        <span className="episode-badge">Episode {i + 1}</span>
                        <span className="episode-guest">
                          <User size={12} />
                          {ep.guestName || "Guest Speaker"}
                        </span>
                      </div>
                      <h3 onClick={() => handleTitleClick(ep)}>{ep.title}</h3>
                      <p className="tagline">
                        {ep.description ||
                          ep.tagline ||
                          "Discover insights and stories"}
                      </p>
                      <div className="episode-footer">
                        <span className="episode-date">
                          <Calendar size={12} />
                          {formatDate(ep.publishedDate || ep.createdAt)}
                        </span>
                        <button
                          className="listen-now"
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
              className="carousel-nav right"
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
          <div className="carousel-indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`indicator ${currentIndex === idx ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && modalType && (
          <motion.div
            className="episode-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className={`modal-content ${
                modalType === "details" ? "details-modal" : ""
              }`}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="modal-header">
                <h2>{selected.title}</h2>
                <button className="close-btn" onClick={handleClose}>
                  <X size={24} />
                </button>
              </div>
              <div className="modal-body">
                {modalType === "video" ? (
                  <div className="video-container">
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
                  <div className="details-container">
                    <div className="details-image">
                      <img
                        src={getYoutubeThumbnail(selected.youtubeLink)}
                        alt={selected.title}
                      />
                    </div>
                    <div className="details-content">
                      <div className="detail-item">
                        <span className="detail-label">Guest:</span>
                        <span className="detail-value">
                          {selected.guestName || "Not specified"}
                        </span>
                      </div>
                      <div className="detail-item">
                        <span className="detail-label">Published:</span>
                        <span className="detail-value">
                          {formatDate(
                            selected.publishedDate || selected.createdAt
                          )}
                        </span>
                      </div>
                      <div className="detail-item full-width">
                        <span className="detail-label">Description:</span>
                        <p className="detail-description">
                          {selected.description ||
                            selected.tagline ||
                            "No description available for this episode."}
                        </p>
                      </div>
                      <div className="modal-actions">
                        <button
                          className="watch-btn"
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
                            className="spotify-btn"
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
      <div className="cta-container">
        <Link to="/latest-episodes" className="cta-btn">
          View All Episodes
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15l5-5-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default PodcastHighlights;
