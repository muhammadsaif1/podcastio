"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import "./pitch-list.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchPitches } from "@/redux/slices/pitchSlice"; // adjust if path different

// helpers: extract youtube id, thumbnail, embed url
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

const PitchList = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.pitches || {});
  const listFromStore = reduxState.list || [];
  const loading = reduxState.loadingList || false;
  const error = reduxState.error || null;

  const [selected, setSelected] = useState(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);
  const [iframeKey, setIframeKey] = useState(0); // force iframe remount on reopen

  // Lock body scroll when modal open
  useEffect(() => {
    if (detailOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setIsPlayingInline(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [detailOpen]);

  useEffect(() => {
    dispatch(fetchPitches());
  }, [dispatch]);

  const handleOpen = (pitch) => {
    setSelected(pitch);
    setDetailOpen(true);
    setIsPlayingInline(false);
    setIframeKey((k) => k + 1);
  };

  const handleClose = () => {
    setDetailOpen(false);
    setSelected(null);
    setIsPlayingInline(false);
  };

  // click thumbnail -> replace with iframe in same location
  const handlePlayInline = () => {
    setIsPlayingInline(true);
    // ensure iframe remounts for autoplay
    setIframeKey((k) => k + 1);
  };

  const displayList =
    Array.isArray(listFromStore) && listFromStore.length > 0
      ? listFromStore
      : [];

  return (
    <section className="pitch-list-section">
      <div className="list-header">
        <h2>Pitch Submissions</h2>
        <p className="muted">
          Click a row to view all details. Click the thumbnail or "Watch Video"
          to play inline.
        </p>
      </div>

      {loading ? (
        <div className="loading-row">
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <p>Loading pitches…</p>
        </div>
      ) : error ? (
        <div className="error-row">{String(error)}</div>
      ) : displayList.length === 0 ? (
        <div className="empty-row">
          <p>No pitches yet.</p>
        </div>
      ) : (
        <ul className="pitch-list">
          <AnimatePresence>
            {displayList.map((p) => (
              <motion.li
                className="pitch-row"
                key={p._id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                onClick={() => handleOpen(p)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && handleOpen(p)}
              >
                <div className="left">
                  <div className="row-title">
                    <h3>{p.fullName}</h3>
                    {p.companyName ? (
                      <p className="company">{p.companyName}</p>
                    ) : null}
                  </div>
                </div>

                <div className="center">
                  <p className="category">{p.pitchCategory}</p>
                </div>

                <div className="right">
                  <span className="time">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {/* Detail Modal */}
      <AnimatePresence>
        {detailOpen && selected && (
          <motion.div
            className="pitch-detail-modal"
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
              {/* Modal header (sticky) */}
              <div className="modal-header">
                <h2>{selected.companyName || selected.fullName}</h2>
                <div className="header-actions">
                  {/* optional action buttons placeholders — keep styling consistent */}
                  <button
                    className="close-btn"
                    onClick={handleClose}
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div className="modal-body">
                {/* Video / Thumbnail block - plays inline when isPlayingInline */}
                <div className="detail-group">
                  <div className="detail-video-wrap">
                    {!isPlayingInline && selected.pitchVideo ? (
                      <div
                        className="detail-thumbnail"
                        role="button"
                        tabIndex={0}
                        onClick={handlePlayInline}
                        onKeyDown={(e) =>
                          e.key === "Enter" ? handlePlayInline() : null
                        }
                        aria-label="Play pitch video"
                      >
                        <img
                          src={getYoutubeThumbnail(selected.pitchVideo)}
                          alt={`${selected.fullName} pitch thumbnail`}
                        />
                        <div className="play-overlay">
                          <Play size={36} />
                        </div>
                      </div>
                    ) : selected.pitchVideo ? (
                      <div className="detail-video-inline">
                        <iframe
                          key={"player-" + iframeKey}
                          src={getYoutubeEmbedUrl(selected.pitchVideo)}
                          title="Pitch Video Player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="detail-thumbnail no-video">
                        <img src="/placeholder-thumbnail.png" alt="no video" />
                      </div>
                    )}
                  </div>
                </div>

                {/* All fields — only show if present */}
                <div className="detail-group">
                  <label>Full Name</label>
                  <p className="detail-value">{selected.fullName}</p>
                </div>

                {selected.companyName && (
                  <div className="detail-group">
                    <label>Company Name</label>
                    <p className="detail-value">{selected.companyName}</p>
                  </div>
                )}

                {selected.email && (
                  <div className="detail-group">
                    <label>Email</label>
                    <p className="detail-value">
                      <a
                        href={`mailto:${selected.email}`}
                        className="detail-link"
                      >
                        {selected.email}
                      </a>
                    </p>
                  </div>
                )}

                {selected.phone && (
                  <div className="detail-group">
                    <label>Phone</label>
                    <p className="detail-value">
                      <a href={`tel:${selected.phone}`} className="detail-link">
                        {selected.phone}
                      </a>
                    </p>
                  </div>
                )}

                {selected.pitchCategory && (
                  <div className="detail-group">
                    <label>Category</label>
                    <p className="detail-value tag-badge">
                      {selected.pitchCategory}
                    </p>
                  </div>
                )}

                {selected.stage && (
                  <div className="detail-group">
                    <label>Stage</label>
                    <p className="detail-value">{selected.stage}</p>
                  </div>
                )}

                {selected.oneSentenceSummary && (
                  <div className="detail-group full-width">
                    <label>1-Sentence Summary</label>
                    <p className="detail-value">
                      {selected.oneSentenceSummary}
                    </p>
                  </div>
                )}

                {selected.whyYou && (
                  <div className="detail-group full-width">
                    <label>Why You?</label>
                    <p className="detail-value description-text">
                      {selected.whyYou}
                    </p>
                  </div>
                )}

                {selected.fundingGoal && (
                  <div className="detail-group">
                    <label>Funding Goal</label>
                    <p className="detail-value">{selected.fundingGoal}</p>
                  </div>
                )}

                {selected.logoOrDeck && (
                  <div className="detail-group">
                    <label>Logo / Deck</label>
                    <div className="link-with-button">
                      <a
                        className="detail-link"
                        href={selected.logoOrDeck}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {selected.logoOrDeck}
                      </a>
                      <a
                        className="play-btn"
                        href={selected.logoOrDeck}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Logo/Deck
                      </a>
                    </div>
                  </div>
                )}

                {/* pitchVideo link (raw) */}
                {selected.pitchVideo && (
                  <div className="detail-group">
                    <label>Pitch Video Link</label>
                    <div className="link-with-button">
                      <a
                        href={selected.pitchVideo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        {selected.pitchVideo}
                      </a>
                      <button
                        type="button"
                        className="play-btn"
                        onClick={() => handlePlayInline()}
                      >
                        Watch Video
                      </button>
                    </div>
                  </div>
                )}

                <div className="detail-group">
                  <label>Submitted</label>
                  <p className="detail-value">
                    {new Date(selected.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="detail-group">
                  <label>Consent</label>
                  <p className="detail-value">
                    {selected.consent ? "✅" : "❌"}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PitchList;
