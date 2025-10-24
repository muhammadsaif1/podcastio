"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  User,
  X,
  Edit2,
  Trash2,
  Check,
  XCircle,
} from "lucide-react";
import "./episodes-list.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchEpisodes,
  updateEpisode,
  deleteEpisode,
} from "@/redux/slices/episodeSlice";

const YouTubeModal = ({ isOpen, videoUrl, onClose }) => {
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  };

  if (!isOpen) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      <motion.div
        className="youtube-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="youtube-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button className="youtube-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="youtube-player">
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const EpisodeDetailModal = ({ isOpen, episode, onClose, onUpdated }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);

  useEffect(() => {
    if (episode) {
      setEditData({ ...episode });
      setIsEditing(false);
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [episode]);

  if (!isOpen || !episode) return null;

  const tagOptions = [
    { value: "investor-education", label: "Investor Education" },
    { value: "pitch", label: "Pitch" },
    { value: "founder-story", label: "Founder Story" },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({ ...episode });
  };

  const handleUpdate = async () => {
    if (!editData) return;
    try {
      setIsUpdating(true);
      await dispatch(
        updateEpisode({ id: editData._id, updates: editData })
      ).unwrap();

      if (typeof onUpdated === "function") onUpdated(editData);

      setIsEditing(false);
    } catch (err) {
      console.error("Error updating episode:", err);
      alert("Failed to update episode. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDelete = async () => {
    try {
      setIsUpdating(true);
      await dispatch(deleteEpisode(episode._id)).unwrap();

      if (typeof onUpdated === "function") onUpdated(null, episode._id);

      onClose();
    } catch (err) {
      console.error("Error deleting episode:", err);
      alert("Failed to delete episode. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="episode-detail-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="modal-header">
              <h2>Episode Details</h2>
              <div className="header-actions">
                {!isEditing && (
                  <>
                    <motion.button
                      className="action-btn edit-btn"
                      onClick={handleEdit}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Edit episode"
                    >
                      <Edit2 size={20} />
                    </motion.button>
                    <motion.button
                      className="action-btn delete-btn"
                      onClick={() => setShowDeleteConfirm(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Delete episode"
                    >
                      <Trash2 size={20} />
                    </motion.button>
                  </>
                )}
                <motion.button
                  className="close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {showDeleteConfirm && (
              <motion.div
                className="delete-confirmation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p>
                  Are you sure you want to delete this episode? This action
                  cannot be undone.
                </p>
                <div className="confirmation-actions">
                  <motion.button
                    className="confirm-btn cancel"
                    onClick={() => setShowDeleteConfirm(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className="confirm-btn delete"
                    onClick={handleDelete}
                    disabled={isUpdating}
                  >
                    Delete
                  </motion.button>
                </div>
              </motion.div>
            )}

            <div className="modal-body">
              {isEditing ? (
                <div className="edit-form">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      value={editData?.title || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={editData?.description || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Author</label>
                    <input
                      type="text"
                      value={editData?.author || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, author: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>YouTube Link</label>
                    <input
                      type="text"
                      value={editData?.youtubeLink || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          youtubeLink: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Spotify Link (Optional)</label>
                    <input
                      type="text"
                      value={editData?.spotifyLink || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          spotifyLink: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label>Tag</label>
                    <select
                      value={editData?.tag || ""}
                      onChange={(e) =>
                        setEditData({ ...editData, tag: e.target.value })
                      }
                    >
                      <option value="">Select a tag</option>
                      {tagOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="edit-actions">
                    <motion.button
                      className="action-btn cancel"
                      onClick={handleCancel}
                      disabled={isUpdating}
                    >
                      <XCircle size={18} /> Cancel
                    </motion.button>
                    <motion.button
                      className="action-btn update"
                      onClick={handleUpdate}
                      disabled={isUpdating}
                    >
                      <Check size={18} />{" "}
                      {isUpdating ? "Updating..." : "Update"}
                    </motion.button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="detail-group">
                    <label>Title</label>
                    <p className="detail-value">{episode.title}</p>
                  </div>

                  {episode.tag && (
                    <div className="detail-group">
                      <label>Tag</label>
                      <p className="detail-value">{episode.tag}</p>
                    </div>
                  )}

                  <div className="detail-group">
                    <label>Author</label>
                    <p className="detail-value">{episode.author}</p>
                  </div>

                  <div className="detail-group">
                    <label>Created At</label>
                    <p className="detail-value">
                      {formatDate(episode.createdAt)}
                    </p>
                  </div>

                  <div className="detail-group full-width">
                    <label>Description</label>
                    <p className="detail-value description-text">
                      {episode.description}
                    </p>
                  </div>

                  <div className="detail-group">
                    <label>YouTube Link</label>
                    <div className="link-with-button">
                      <a
                        href={episode.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        {episode.youtubeLink}
                      </a>
                      <motion.button
                        className="play-btn"
                        onClick={() => setYoutubeModalOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play size={16} /> Watch
                      </motion.button>
                    </div>
                  </div>

                  {episode.spotifyLink && (
                    <div className="detail-group">
                      <label>Spotify Link</label>
                      <a
                        href={episode.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="detail-link"
                      >
                        {episode.spotifyLink}
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <YouTubeModal
        isOpen={youtubeModalOpen}
        videoUrl={episode?.youtubeLink}
        onClose={() => setYoutubeModalOpen(false)}
      />
    </>
  );
};

const EpisodesList = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.episodes || {});
  const listFromStore = reduxState.list || [];
  const loadingList = reduxState.loadingList || false;
  const errorFromStore = reduxState.error || null;

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(loadingList);
  const [error, setError] = useState(errorFromStore);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  useEffect(() => {
    setLoading(loadingList);
  }, [loadingList]);

  useEffect(() => {
    setError(errorFromStore);
  }, [errorFromStore]);

  useEffect(() => {
    if (Array.isArray(listFromStore) && listFromStore.length > 0) {
      setEpisodes(listFromStore);
    } else {
      setEpisodes([]);
    }
  }, [listFromStore]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getYouTubeThumbnail = (url) => {
    if (!url) return "/episode-thumbnail.jpg";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      : "/episode-thumbnail.jpg";
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    setIsDetailModalOpen(true);
  };

  const handleThumbnailClick = (e, videoUrl) => {
    e.stopPropagation();
    setSelectedVideoUrl(videoUrl);
    setYoutubeModalOpen(true);
  };

  const handleModalUpdated = async (updatedEpisode, deletedId) => {
    try {
      await dispatch(fetchEpisodes());
      if (updatedEpisode) {
        setEpisodes((prev) =>
          prev.map((ep) =>
            ep._id === updatedEpisode._id ? updatedEpisode : ep
          )
        );
        setSelectedEpisode(updatedEpisode);
      }
      if (deletedId) {
        setEpisodes((prev) => prev.filter((ep) => ep._id !== deletedId));
        setSelectedEpisode(null);
      }
    } catch (err) {
      console.warn("Failed to refresh episodes after modal update", err);
    }
  };

  if (loading) {
    return (
      <div className="episodes-container">
        <div className="loading-state">
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <p>Loading episodes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="episodes-container">
      {error && (
        <motion.div
          className="error-state"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>Could not fetch episodes at this moment</p>
        </motion.div>
      )}

      {episodes.length === 0 && !error ? (
        <div className="empty-state">
          <Play size={48} />
          <p>You have no episodes</p>
        </div>
      ) : (
        <ul className="episodes-list">
          <AnimatePresence>
            {episodes.map((episode, idx) => (
              <motion.li
                key={episode._id || idx}
                className="episode-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="episode-thumbnail"
                  onClick={(e) => handleThumbnailClick(e, episode.youtubeLink)}
                >
                  <img
                    src={
                      getYouTubeThumbnail(episode.youtubeLink) ||
                      "/placeholder.svg"
                    }
                    alt={episode.title}
                  />
                </div>

                <div
                  className="episode-content"
                  onClick={() => handleEpisodeClick(episode)}
                >
                  <div className="episode-header">
                    <div className="episode-title-section">
                      <div className="author-icon">
                        <User size={16} />
                      </div>
                      <div className="title-info">
                        <h4>{episode.title}</h4>
                        {episode.tag && (
                          <div className="episode-tag">
                            {String(episode.tag).replace(/-/g, " ")}
                          </div>
                        )}
                        <p className="author">{episode.author}</p>
                      </div>
                    </div>
                    <div className="time-section">
                      <Clock size={14} />
                      <span>{formatDate(episode.createdAt)}</span>
                    </div>
                  </div>
                  <p className="episode-preview">{episode.description}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <EpisodeDetailModal
        isOpen={isDetailModalOpen}
        episode={selectedEpisode}
        onClose={() => {
          document.body.style.overflow = "auto";
          setIsDetailModalOpen(false);
        }}
        onUpdated={handleModalUpdated}
      />

      <YouTubeModal
        isOpen={youtubeModalOpen}
        videoUrl={selectedVideoUrl}
        onClose={() => {
          document.body.style.overflow = "auto";
          setYoutubeModalOpen(false);
        }}
      />
    </div>
  );
};

export { EpisodesList };
export default EpisodesList;
