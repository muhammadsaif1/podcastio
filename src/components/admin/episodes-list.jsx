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
  Eye,
  Star,
  AlertTriangle,
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="admin-episodes-modern-youtube-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="admin-episodes-modern-youtube-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button
            className="admin-episodes-modern-youtube-close-btn"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <div className="admin-episodes-modern-youtube-player">
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

const EpisodeDetailModal = ({
  isOpen,
  episode,
  onClose,
  onUpdated,
  onEdit,
}) => {
  const dispatch = useDispatch();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);

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

  if (!isOpen || !episode) return null;

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
    onEdit(episode);
    onClose();
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await dispatch(deleteEpisode(episode._id)).unwrap();
      if (typeof onUpdated === "function") onUpdated(null, episode._id);
      onClose();
    } catch (err) {
      console.error("Error deleting episode:", err);
      alert("Failed to delete episode. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="admin-episodes-modern-detail-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="admin-episodes-modern-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="admin-episodes-modern-modal-header">
              <h2>Episode Details</h2>
              <div className="admin-episodes-modern-header-actions">
                <motion.button
                  className="admin-episodes-modern-close-btn"
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
                className="admin-episodes-modern-delete-confirmation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p>
                  Are you sure you want to delete this episode? This action
                  cannot be undone.
                </p>
                <div className="admin-episodes-modern-confirmation-actions">
                  <motion.button
                    className="admin-episodes-modern-confirm-btn admin-episodes-modern-cancel"
                    onClick={() => setShowDeleteConfirm(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className="admin-episodes-modern-confirm-btn admin-episodes-modern-delete"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </motion.button>
                </div>
              </motion.div>
            )}

            <div className="admin-episodes-modern-modal-body">
              <div className="admin-episodes-modern-detail-group">
                <label>Title</label>
                <p className="admin-episodes-modern-detail-value">
                  {episode.title}
                </p>
              </div>

              {episode.tag && (
                <div className="admin-episodes-modern-detail-group">
                  <label>Tag</label>
                  <p className="admin-episodes-modern-detail-value">
                    {episode.tag}
                  </p>
                </div>
              )}

              <div className="admin-episodes-modern-detail-group">
                <label>Author</label>
                <p className="admin-episodes-modern-detail-value">
                  {episode.author}
                </p>
              </div>

              <div className="admin-episodes-modern-detail-group">
                <label>Created At</label>
                <p className="admin-episodes-modern-detail-value">
                  {formatDate(episode.createdAt)}
                </p>
              </div>

              {episode.mainEpisode !== undefined && (
                <div className="admin-episodes-modern-detail-group">
                  <label>Main Episode</label>
                  <p className="admin-episodes-modern-detail-value">
                    {episode.mainEpisode ? "Yes" : "No"}
                  </p>
                </div>
              )}

              <div className="admin-episodes-modern-detail-group admin-episodes-modern-full-width">
                <label>Description</label>
                <p className="admin-episodes-modern-detail-value admin-episodes-modern-description-text">
                  {episode.description}
                </p>
              </div>

              <div className="admin-episodes-modern-detail-group">
                <label>YouTube Link</label>
                <div className="admin-episodes-modern-link-with-button">
                  <a
                    href={episode.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-episodes-modern-detail-link"
                  >
                    {episode.youtubeLink}
                  </a>
                  <motion.button
                    className="admin-episodes-modern-play-btn"
                    onClick={() => setYoutubeModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} /> Watch
                  </motion.button>
                </div>
              </div>

              {episode.spotifyLink && (
                <div className="admin-episodes-modern-detail-group">
                  <label>Spotify Link</label>
                  <a
                    href={episode.spotifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-episodes-modern-detail-link"
                  >
                    {episode.spotifyLink}
                  </a>
                </div>
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

const EpisodeEditModal = ({ isOpen, episode, onClose, onUpdated }) => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (episode) {
      setEditData({ ...episode });
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [episode, isOpen]);

  if (!isOpen || !episode) return null;

  const tagOptions = [
    { value: "investor", label: "Investor" },
    { value: "pitch", label: "Pitch" },
    { value: "founder-story", label: "Founder Story" },
  ];

  const handleCancel = () => {
    setEditData({ ...episode });
    onClose();
  };

  const handleUpdate = async () => {
    if (!editData) return;
    try {
      setIsUpdating(true);
      await dispatch(
        updateEpisode({ id: editData._id, updates: editData })
      ).unwrap();
      if (typeof onUpdated === "function") onUpdated(editData);
      onClose();
    } catch (err) {
      console.error("Error updating episode:", err);
      alert("Failed to delete episode. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="admin-episodes-modern-detail-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="admin-episodes-modern-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="admin-episodes-modern-modal-header">
            <h2>Edit Episode</h2>
            <div className="admin-episodes-modern-header-actions">
              <motion.button
                className="admin-episodes-modern-close-btn"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          <div className="admin-episodes-modern-modal-body">
            <div className="admin-episodes-modern-edit-form">
              <div className="admin-episodes-modern-form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={editData?.title || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />
              </div>

              <div className="admin-episodes-modern-form-group">
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

              <div className="admin-episodes-modern-form-group">
                <label>Author</label>
                <input
                  type="text"
                  value={editData?.author || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, author: e.target.value })
                  }
                />
              </div>

              <div className="admin-episodes-modern-form-group">
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

              <div className="admin-episodes-modern-form-group">
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

              <div className="admin-episodes-modern-form-group">
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

              <div className="admin-episodes-modern-form-group admin-episodes-modern-form-group-switch">
                <div className="admin-episodes-modern-switch-wrapper">
                  <label htmlFor="mainEpisodeSwitch">Main Episode</label>
                  <div className="admin-episodes-modern-switch-container">
                    <input
                      type="checkbox"
                      id="mainEpisodeSwitch"
                      className="admin-episodes-modern-switch-input"
                      checked={editData?.mainEpisode || false}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          mainEpisode: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="mainEpisodeSwitch"
                      className="admin-episodes-modern-switch-label"
                    >
                      <span className="admin-episodes-modern-switch-slider"></span>
                    </label>
                    <span className="admin-episodes-modern-switch-status">
                      {editData?.mainEpisode ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="admin-episodes-modern-edit-actions">
                <motion.button
                  className="admin-episodes-modern-action-btn admin-episodes-modern-cancel"
                  onClick={handleCancel}
                  disabled={isUpdating}
                >
                  <XCircle size={18} /> Cancel
                </motion.button>
                <motion.button
                  className="admin-episodes-modern-action-btn admin-episodes-modern-update"
                  onClick={handleUpdate}
                  disabled={isUpdating}
                >
                  <Check size={18} /> {isUpdating ? "Updating..." : "Update"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null); // Store episode for deletion

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

  const handleViewClick = (e, episode) => {
    e.stopPropagation();
    setSelectedEpisode(episode);
    setIsDetailModalOpen(true);
  };

  const handleEditClick = (e, episode) => {
    e.stopPropagation();
    setSelectedEpisode(episode);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (e, episode) => {
    e.stopPropagation();
    setShowDeleteConfirm(episode); // Show confirmation modal for this episode
  };

  const handleDeleteConfirm = async () => {
    if (!showDeleteConfirm) return;
    try {
      await dispatch(deleteEpisode(showDeleteConfirm._id)).unwrap();
      await dispatch(fetchEpisodes());
      setShowDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting episode:", err);
      alert("Failed to delete episode. Please try again.");
    }
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

  const handleEditFromDetail = (episode) => {
    setSelectedEpisode(episode);
    setIsEditModalOpen(true);
  };

  if (loading) {
    return (
      <div className="admin-episodes-modern-container">
        <div className="admin-episodes-modern-loading-state">
          <motion.div
            className="admin-episodes-modern-spinner"
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
    <div className="admin-episodes-modern-container">
      {error && (
        <motion.div
          className="admin-episodes-modern-error-state"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>Could not fetch episodes at this moment</p>
        </motion.div>
      )}

      {episodes.length === 0 && !error ? (
        <div className="admin-episodes-modern-empty-state">
          <Play size={48} />
          <p>You have no episodes</p>
        </div>
      ) : (
        <ul className="admin-episodes-modern-list">
          <AnimatePresence>
            {episodes.map((episode, idx) => (
              <motion.li
                key={episode._id || idx}
                className="admin-episodes-modern-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="admin-episodes-modern-thumbnail"
                  onClick={(e) => handleThumbnailClick(e, episode.youtubeLink)}
                >
                  <img
                    src={
                      getYouTubeThumbnail(episode.youtubeLink) ||
                      "/placeholder.svg"
                    }
                    alt={episode.title}
                  />
                  <div className="admin-episodes-modern-play-overlay">
                    <Play size={32} />
                  </div>
                  {episode.mainEpisode && (
                    <div className="admin-episodes-modern-star-overlay">
                      <Star size={24} />
                    </div>
                  )}
                </div>

                <div className="admin-episodes-modern-content">
                  <div className="admin-episodes-modern-header">
                    <div className="admin-episodes-modern-title-section">
                      <div className="admin-episodes-modern-title-info">
                        <h4>
                          {episode.title}
                          <span className="admin-episodes-modern-author-inline">
                            <User size={14} />
                            {episode.author}
                          </span>
                        </h4>
                        {episode.tag && (
                          <div className="admin-episodes-modern-tag-badge">
                            {String(episode.tag).replace(/-/g, " ")}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="admin-episodes-modern-actions">
                      <motion.button
                        className="admin-episodes-modern-action-icon admin-episodes-modern-view-icon"
                        onClick={(e) => handleViewClick(e, episode)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="View details"
                      >
                        <Eye size={18} />
                      </motion.button>
                      <motion.button
                        className="admin-episodes-modern-action-icon admin-episodes-modern-edit-icon"
                        onClick={(e) => handleEditClick(e, episode)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Edit episode"
                      >
                        <Edit2 size={18} />
                      </motion.button>
                      <motion.button
                        className="admin-episodes-modern-action-icon admin-episodes-modern-delete-icon"
                        onClick={(e) => handleDeleteClick(e, episode)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="Delete episode"
                      >
                        <Trash2 size={18} />
                      </motion.button>
                    </div>
                  </div>
                  <div className="admin-episodes-modern-time-section">
                    <Clock size={14} />
                    <span>{formatDate(episode.createdAt)}</span>
                  </div>
                  <p className="admin-episodes-modern-preview">
                    {episode.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {/* Custom Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="admin-episodes-modern-delete-confirm-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowDeleteConfirm(null)}
          >
            <motion.div
              className="admin-episodes-modern-delete-confirm-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="admin-episodes-modern-delete-confirm-header">
                <AlertTriangle size={24} color="#ff6666" />
                <h3>Confirm Delete</h3>
              </div>
              <p>
                Are you sure you want to delete the episode "
                {showDeleteConfirm.title}"? This action cannot be undone.
              </p>
              <div className="admin-episodes-modern-delete-confirm-actions">
                <motion.button
                  className="admin-episodes-modern-confirm-btn admin-episodes-modern-cancel"
                  onClick={() => setShowDeleteConfirm(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XCircle size={18} /> Cancel
                </motion.button>
                <motion.button
                  className="admin-episodes-modern-confirm-btn admin-episodes-modern-delete"
                  onClick={handleDeleteConfirm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trash2 size={18} /> Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <EpisodeDetailModal
        isOpen={isDetailModalOpen}
        episode={selectedEpisode}
        onClose={() => {
          document.body.style.overflow = "auto";
          setIsDetailModalOpen(false);
        }}
        onUpdated={handleModalUpdated}
        onEdit={handleEditFromDetail}
      />

      <EpisodeEditModal
        isOpen={isEditModalOpen}
        episode={selectedEpisode}
        onClose={() => {
          document.body.style.overflow = "auto";
          setIsEditModalOpen(false);
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
