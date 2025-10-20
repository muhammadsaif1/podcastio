"use client";

import { useState, useEffect } from "react";
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

const EpisodeDetailModal = ({
  isOpen,
  episode,
  onClose,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (episode) {
      setEditData(episode);
    }
  }, [episode]);

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
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData(episode);
  };

  const handleUpdate = async () => {
    if (!editData) return;

    try {
      setIsUpdating(true);
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

      if (!backendUrl) {
        throw new Error("Backend URL not configured");
      }

      const response = await fetch(
        `${backendUrl}/api/episodes/${episode._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update episode: ${response.statusText}`);
      }

      const updatedEpisode = await response.json();
      onUpdate(updatedEpisode);
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
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

      if (!backendUrl) {
        throw new Error("Backend URL not configured");
      }

      const response = await fetch(
        `${backendUrl}/api/episodes/${episode._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to delete episode: ${response.statusText}`);
      }

      onDelete(episode._id);
      onClose();
    } catch (err) {
      console.error("Error deleting episode:", err);
      alert("Failed to delete episode. Please try again.");
    }
  };

  return (
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
                Are you sure you want to delete this episode? This action cannot
                be undone.
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
                      setEditData({ ...editData, description: e.target.value })
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
                      setEditData({ ...editData, youtubeLink: e.target.value })
                    }
                  />
                </div>

                <div className="form-group">
                  <label>Spotify Link (Optional)</label>
                  <input
                    type="text"
                    value={editData?.spotifyLink || ""}
                    onChange={(e) =>
                      setEditData({ ...editData, spotifyLink: e.target.value })
                    }
                  />
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
                    <Check size={18} /> {isUpdating ? "Updating..." : "Update"}
                  </motion.button>
                </div>
              </div>
            ) : (
              <>
                <div className="detail-group">
                  <label>Title</label>
                  <p className="detail-value">{episode.title}</p>
                </div>

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
                  <a
                    href={episode.youtubeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-link"
                  >
                    {episode.youtubeLink}
                  </a>
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
  );
};

export const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const dummyEpisode = {
    _id: "dummy-1",
    title: "Explore Connections to Africa",
    description:
      "This is a test episode to demonstrate how the episodes list looks. Join us as we explore the soulful unity of dialogue among African descendants—nurturing clarity, connection, and a legacy of belonging. This dummy episode will be removed later.",
    youtubeLink: "https://youtube.com/watch?v=dummyid",
    spotifyLink: "https://spotify.com/episode/dummyid",
    author: "Return Podcast",
    createdAt: new Date().toISOString(),
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setLoading(true);
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;

        if (!backendUrl) {
          throw new Error("Backend URL not configured");
        }

        const response = await fetch(`${backendUrl}/api/episodes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch episodes: ${response.statusText}`);
        }

        const data = await response.json();
        setEpisodes([dummyEpisode, ...data]);
        setError(null);
      } catch (err) {
        console.error("Error fetching episodes:", err);
        setError("Could not fetch episodes at this moment");
        setEpisodes([dummyEpisode]);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

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

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    setIsDetailModalOpen(true);
  };

  const handleUpdate = (updatedEpisode) => {
    setEpisodes((prev) =>
      prev.map((ep) => (ep._id === updatedEpisode._id ? updatedEpisode : ep))
    );
    setSelectedEpisode(updatedEpisode);
  };

  const handleDelete = (episodeId) => {
    setEpisodes((prev) => prev.filter((ep) => ep._id !== episodeId));
  };

  if (loading) {
    return (
      <div className="episodes-container">
        <div className="loading-state">
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
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
          <p>{error}</p>
        </motion.div>
      )}

      {episodes.length === 0 ? (
        <div className="empty-state">
          <Play size={48} />
          <p>No episodes yet</p>
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
                onClick={() => handleEpisodeClick(episode)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="episode-header">
                  <div className="episode-title-section">
                    <div className="author-icon">
                      <User size={16} />
                    </div>
                    <div className="title-info">
                      <h4>{episode.title}</h4>
                      <p className="author">{episode.author}</p>
                    </div>
                  </div>
                  <div className="time-section">
                    <Clock size={14} />
                    <span>{formatDate(episode.createdAt)}</span>
                  </div>
                </div>
                <p className="episode-preview">{episode.description}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <EpisodeDetailModal
        isOpen={isDetailModalOpen}
        episode={selectedEpisode}
        onClose={() => setIsDetailModalOpen(false)}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default EpisodesList;
