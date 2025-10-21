"use client";

import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import "./podcast-highlights.scss";

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

// random taglines if not present
const randomTaglines = [
  "Raising $5M the Legal Way",
  "Turning Side Hustles into Reg CF Success",
  "Secrets to Scaling Your Startup",
  "From Idea to Investment",
  "How Founders Pitch Like Pros",
  "Behind the Scenes of Funding",
];

const PodcastHighlights = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.episodes || {});
  const listFromStore = reduxState.list || [];
  const loading = reduxState.loadingList || false;
  const error = reduxState.error || null;

  const [selected, setSelected] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
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
      // Reset to first slide when changing screen size
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

  const handleOpen = (episode) => {
    setSelected(episode);
    setDetailOpen(true);
    setIframeKey((k) => k + 1);
    // Prevent body scroll when modal opens
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setSelected(null);
    setDetailOpen(false);
    // Restore body scroll when modal closes
    document.body.style.overflow = "unset";
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <section className="podcast-highlights-section texture-bg-2">
      <div className="header">
        <h2>Podcast Highlights</h2>
        <a href="/latest-episode" className="view-all">
          View All Episodes
        </a>
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
            <ChevronLeft size={24} />
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
                <motion.div
                  className="episode-card"
                  key={ep._id || i}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => handleOpen(ep)}
                >
                  <div className="thumbnail-wrap">
                    <img
                      src={getYoutubeThumbnail(ep.youtubeLink)}
                      alt={ep.title}
                    />
                    <div className="play-overlay">
                      <Play size={36} />
                    </div>
                  </div>
                  <div className="episode-info">
                    <h3>{ep.title}</h3>
                    <p className="tagline">
                      {
                        randomTaglines[
                          Math.floor(Math.random() * randomTaglines.length)
                        ]
                      }
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            className="carousel-nav right"
            onClick={handleNext}
            disabled={!canGoRight}
            aria-label="Next episodes"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {detailOpen && selected && (
          <motion.div
            className="episode-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.96, y: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <div className="modal-header">
                <h2>{selected.title}</h2>
                <button className="close-btn" onClick={handleClose}>
                  <X size={20} />
                </button>
              </div>
              <div className="modal-body">
                <iframe
                  key={"player-" + iframeKey}
                  src={getYoutubeEmbedUrl(selected.youtubeLink)}
                  title="Episode Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PodcastHighlights;
