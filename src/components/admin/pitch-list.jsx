"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Trash2 } from "lucide-react";
import "./pitch-list.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPitches,
  deletePitch,
  updatePitch,
} from "@/redux/slices/pitchSlice";

// helpers: extract youtube id, thumbnail, embed url
const getYoutubeVideoId = (url) => {
  if (!url) return null;

  // Handles: youtube.com/watch?v=, youtu.be/, youtube.com/shorts/, youtube.com/embed/
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};
const getYoutubeThumbnail = (url) => {
  const id = getYoutubeVideoId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
    : "/placeholder-thumbnail.png";
};
const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeVideoId(url);
  if (!id) return null;

  // Force autoplay + allow Shorts to play properly
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&playsinline=1&rel=0`;
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
  const [iframeKey, setIframeKey] = useState(0);
  const [updatingToAdmin, setUpdatingToAdmin] = useState(false);

  // Delete confirmation state
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [pitchToDelete, setPitchToDelete] = useState(null);
  const [deleting, setDeleting] = useState(false);

  // Lock body scroll when modal open
  useEffect(() => {
    if (detailOpen || deleteConfirmOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("body-locked");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("body-locked");
      setIsPlayingInline(false);
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("body-locked");
    };
  }, [detailOpen, deleteConfirmOpen]);

  useEffect(() => {
    dispatch(fetchPitches());
  }, [dispatch]);

  const handleOpen = (pitch) => {
    setSelected(pitch);
    setDetailOpen(true);
    setIsPlayingInline(false);
    setIframeKey((k) => k + 1);
  };

  const handleAddToAdmin = async () => {
    if (!selected) return;

    setUpdatingToAdmin(true);
    try {
      await dispatch(
        updatePitch({
          id: selected._id,
          updates: { byAdmin: true },
        })
      ).unwrap();

      // Close modal and refresh list
      handleClose();
      dispatch(fetchPitches()); // optional: refresh immediately
    } catch (err) {
      console.error("Failed to add pitch to admin:", err);
      alert("Failed to promote pitch. Please try again.");
    } finally {
      setUpdatingToAdmin(false);
    }
  };

  const handleClose = () => {
    setDetailOpen(false);
    setSelected(null);
    setIsPlayingInline(false);
  };

  const handlePlayInline = () => {
    setIsPlayingInline(true);
    setIframeKey((k) => k + 1);
  };

  // Delete handlers
  const handleDeleteClick = (e, pitch) => {
    e.stopPropagation(); // Prevent opening detail modal
    setPitchToDelete(pitch);
    setDeleteConfirmOpen(true);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmOpen(false);
    setPitchToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!pitchToDelete) return;

    setDeleting(true);
    try {
      await dispatch(deletePitch(pitchToDelete._id)).unwrap();
      setDeleteConfirmOpen(false);
      setPitchToDelete(null);
    } catch (err) {
      console.error("Failed to delete pitch:", err);
      alert("Failed to delete pitch. Please try again.");
    } finally {
      setDeleting(false);
    }
  };

  // FILTER: Only show user-submitted pitches (byAdmin !== true)
  const userPitches = Array.isArray(listFromStore)
    ? listFromStore.filter((pitch) => pitch.byAdmin !== true)
    : [];

  const displayList = userPitches.length > 0 ? userPitches : [];

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
          <p>No user-submitted pitches yet.</p>
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
                  <button
                    className="delete-icon-btn"
                    onClick={(e) => handleDeleteClick(e, p)}
                    aria-label="Delete pitch"
                    title="Delete pitch"
                  >
                    <Trash2 size={18} />
                  </button>
                  <span className="time">
                    {new Date(p.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirmOpen && pitchToDelete && (
          <motion.div
            className="delete-confirm-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCancelDelete}
          >
            <motion.div
              className="confirm-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="confirm-icon">
                <Trash2 size={32} />
              </div>
              <h3>Delete Pitch?</h3>
              <p>
                Are you sure you want to delete the pitch from{" "}
                <strong>{pitchToDelete.fullName}</strong>
                {pitchToDelete.companyName && (
                  <> ({pitchToDelete.companyName})</>
                )}
                ? This action cannot be undone.
              </p>
              <div className="confirm-actions">
                <button
                  className="cancel-btn"
                  onClick={handleCancelDelete}
                  disabled={deleting}
                >
                  Cancel
                </button>
                <button
                  className="delete-btn"
                  onClick={handleConfirmDelete}
                  disabled={deleting}
                >
                  {deleting ? "Deleting..." : "Delete"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                {/* Video / Thumbnail block */}
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

                {/* Rest of the fields remain unchanged */}
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

                {selected.africanCountry && (
                  <div className="detail-group">
                    <label>Country</label>
                    <p className="detail-value tag-badge">
                      {selected.africanCountry}
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
                    <div className="logo-deck-preview">
                      {selected.logoOrDeckMimeType === "application/pdf" ? (
                        <iframe
                          src={`data:application/pdf;base64,${selected.logoOrDeck}`}
                          width="100%"
                          height="600px"
                          style={{ border: "none" }}
                          title="Pitch Deck PDF"
                        />
                      ) : (
                        <img
                          src={`data:${selected.logoOrDeckMimeType};base64,${selected.logoOrDeck}`}
                          alt="Company Logo or Deck Preview"
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "8px",
                          }}
                        />
                      )}

                      <div
                        className="link-with-button"
                        style={{ marginTop: "12px" }}
                      >
                        <button
                          type="button"
                          className="download-btn"
                          onClick={() => {
                            const mimeType =
                              selected.logoOrDeckMimeType ||
                              "application/octet-stream";
                            const extension = mimeType.includes("pdf")
                              ? ".pdf"
                              : mimeType.includes("jpeg")
                              ? ".jpg"
                              : ".png";
                            const filename = `${(
                              selected.companyName ||
                              selected.fullName ||
                              "pitch"
                            ).replace(/[^a-z0-9]/gi, "_")}_file${extension}`;

                            const dataUri = `data:${mimeType};base64,${selected.logoOrDeck}`;

                            const link = document.createElement("a");
                            link.href = dataUri;
                            link.download = filename;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                          }}
                        >
                          Download File
                        </button>
                      </div>
                    </div>
                  </div>
                )}

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
                    {selected.consent ? "Yes" : "No"}
                  </p>
                </div>
                {/* Add to Admin Pitch Button */}
                <div className="detail-group admin-action-group">
                  <button
                    className="add-to-admin-btn"
                    onClick={handleAddToAdmin}
                    disabled={updatingToAdmin || selected.byAdmin}
                  >
                    {updatingToAdmin
                      ? "Adding..."
                      : selected.byAdmin
                      ? "Already Added"
                      : "Add Pitch"}
                  </button>
                  {selected.byAdmin && (
                    <p className="admin-note">
                      This pitch is already visible in the public contest.
                    </p>
                  )}
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
