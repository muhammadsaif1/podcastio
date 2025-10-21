"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, User, X } from "lucide-react";
import "./episodes-list.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";

const YouTubeModal = ({ isOpen, videoUrl, onClose }) => {
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : "";
  };

  if (!isOpen) return null;

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

const EpisodeDetailModal = ({ isOpen, episode, onClose }) => {
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
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          <div className="modal-body">
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
              <p className="detail-value">{formatDate(episode.createdAt)}</p>
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
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

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

  const handleWatchClick = (url) => {
    setSelectedVideoUrl(url);
    setYoutubeModalOpen(true);
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    setIsDetailModalOpen(true);
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
        <div className="episodes-grid">
          <AnimatePresence>
            {episodes.map((episode, idx) => (
              <motion.div
                key={episode._id || idx}
                className="episode-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="episode-thumbnail-wrapper">
                  <img
                    src={getYouTubeThumbnail(episode.youtubeLink)}
                    alt={episode.title}
                    className="episode-thumbnail"
                  />
                  <div
                    className="play-overlay"
                    onClick={(e) => handleWatchClick(episode.youtubeLink)}
                  >
                    <Play size={48} />
                  </div>
                </div>

                <div className="episode-content">
                  <div className="episode-header">
                    <h3
                      className="episode-title"
                      onClick={() => handleEpisodeClick(episode)}
                    >
                      {episode.title}
                    </h3>
                    {episode.tag && (
                      <div className="episode-tag">
                        {String(episode.tag).replace(/-/g, " ")}
                      </div>
                    )}
                  </div>
                  <div className="episode-meta">
                    <div className="meta-item">
                      <User size={14} />
                      <span>{episode.author}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={14} />
                      <span>{formatDate(episode.createdAt)}</span>
                    </div>
                  </div>
                  <p className="episode-description">{episode.description}</p>
                  <div className="episode-actions">
                    <button
                      className="watch-btn"
                      onClick={() => handleWatchClick(episode.youtubeLink)}
                    >
                      <Play size={16} /> Watch
                    </button>
                    {episode.spotifyLink && (
                      <a
                        href={episode.spotifyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="listen-btn"
                      >
                        <Play size={16} /> Listen
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <YouTubeModal
        isOpen={youtubeModalOpen}
        videoUrl={selectedVideoUrl}
        onClose={() => setYoutubeModalOpen(false)}
      />

      <EpisodeDetailModal
        isOpen={isDetailModalOpen}
        episode={selectedEpisode}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </div>
  );
};

export { EpisodesList };
export default EpisodesList;
