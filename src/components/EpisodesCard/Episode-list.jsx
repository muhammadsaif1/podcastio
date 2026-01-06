"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  User,
  X,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./episodes-list.scss";

import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import { IconBrandSpotify, IconBrandYoutubeFilled } from "@tabler/icons-react";

const YouTubeModal = ({ isOpen, videoUrl, onClose }) => {
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : "";
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
            {/* <div className="detail-group">
              <label>Created At</label>
              <p className="detail-value">{formatDate(episode.createdAt)}</p>
            </div> */}
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

const HighlightText = ({ text, searchQuery }) => {
  if (!searchQuery || !text) return <>{text}</>;

  const parts = String(text).split(new RegExp(`(${searchQuery})`, "gi"));

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === searchQuery.toLowerCase() ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          part
        )
      )}
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
  const [filteredEpisodes, setFilteredEpisodes] = useState([]);
  const [loading, setLoading] = useState(loadingList);
  const [error, setError] = useState(errorFromStore);
  const [searchQuery, setSearchQuery] = useState("");
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

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
      setFilteredEpisodes(listFromStore);
    } else {
      setEpisodes([]);
      setFilteredEpisodes([]);
    }
  }, [listFromStore]);

  useEffect(() => {
    if (youtubeModalOpen || isDetailModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [youtubeModalOpen, isDetailModalOpen]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredEpisodes(episodes);
      setCurrentPage(1);
      return;
    }

    const query = searchQuery.toLowerCase();
    const filtered = episodes.filter((episode) => {
      const title = episode.title?.toLowerCase() || "";
      const author = episode.author?.toLowerCase() || "";
      const description = episode.description?.toLowerCase() || "";
      const tag = episode.tag?.toLowerCase() || "";

      return (
        title.includes(query) ||
        author.includes(query) ||
        description.includes(query) ||
        tag.includes(query)
      );
    });

    setFilteredEpisodes(filtered);
    setCurrentPage(1);
  }, [searchQuery, episodes]);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 768) {
        setItemsPerPage(7);
      } else {
        setItemsPerPage(8);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
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

  const getYouTubeThumbnail = (url) => {
    if (!url) return "/episode-thumbnail.jpg";
    const videoId = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
    )?.[1];
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
      : "/episode-thumbnail.jpg";
  };

  const handleThumbnailClick = (url) => {
    setSelectedVideoUrl(url);
    setYoutubeModalOpen(true);
  };

  const handleSpotifyClick = (e, spotifyLink) => {
    e.stopPropagation();
    if (spotifyLink) {
      window.open(spotifyLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleYouTubeClick = (e, youtubeLink) => {
    e.stopPropagation();
    if (youtubeLink) {
      window.open(youtubeLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleEpisodeClick = (episode) => {
    setSelectedEpisode(episode);
    setIsDetailModalOpen(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const totalPages = Math.ceil(filteredEpisodes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEpisodes = filteredEpisodes.slice(startIndex, endIndex);
  const showPagination = filteredEpisodes.length > itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
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
      <div className="search-section">
        <div className="search-bar">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search episodes..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>
      <h3
        className="mb-4"
        style={{
          textAlign: window.innerWidth <= 768 ? "center" : "left",
        }}
      >
        Episodes
      </h3>

      {error && (
        <motion.div
          className="error-state"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>Could not fetch episodes at this moment</p>
        </motion.div>
      )}

      {filteredEpisodes.length === 0 && !error ? (
        <div className="empty-state">
          <Play size={48} />
          <p>{searchQuery ? "No episodes found" : "You have no episodes"}</p>
        </div>
      ) : (
        <>
          <div className="episodes-grid">
            <AnimatePresence mode="wait">
              {currentEpisodes.map((episode, idx) => (
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
                      onClick={() => handleThumbnailClick(episode.youtubeLink)}
                    >
                      <Play size={48} />
                    </div>

                    {/* Platform Buttons on Thumbnail */}
                  </div>

                  <div className="episode-content">
                    <div className="episode-header">
                      <h3
                        className="episode-title"
                        onClick={() => handleEpisodeClick(episode)}
                      >
                        <HighlightText
                          text={episode.title}
                          searchQuery={searchQuery}
                        />
                      </h3>
                      {episode.tag && (
                        <div className="episode-tag">
                          <HighlightText
                            text={String(episode.tag).replace(/-/g, " ")}
                            searchQuery={searchQuery}
                          />
                        </div>
                      )}
                    </div>
                    <div className="episode-meta">
                      <div className="meta-item">
                        <User size={14} />
                        <span>
                          <HighlightText
                            text={episode.author}
                            searchQuery={searchQuery}
                          />
                        </span>
                      </div>
                      <div className="meta-item">
                        <Clock size={14} />
                        <span>{formatDate(episode.createdAt)}</span>
                      </div>
                    </div>
                    <p className="episode-description">
                      <HighlightText
                        text={episode.description}
                        searchQuery={searchQuery}
                      />
                    </p>

                    {/* Platform Buttons Below Description */}
                    <div className="episode-platform-buttons">
                      <button
                        onClick={(e) =>
                          handleSpotifyClick(e, episode.spotifyLink)
                        }
                        className="episode-btn episode-btn-spotify"
                        disabled={!episode.spotifyLink}
                      >
                        Listen on Spotify
                        <span className="episode-btn-icon episode-btn-circle-spotify">
                          <IconBrandSpotify />
                        </span>
                      </button>
                      <button
                        onClick={(e) =>
                          handleYouTubeClick(e, episode.youtubeLink)
                        }
                        className="episode-btn episode-btn-youtube"
                      >
                        Watch on YouTube
                        <span className="episode-btn-icon episode-btn-circle-youtube">
                          <IconBrandYoutubeFilled />
                        </span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {showPagination && (
            <div className="pagination-container">
              <button
                className="pagination-arrow"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={20} />
              </button>

              <div className="pagination-numbers">
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      className={`pagination-number ${
                        currentPage === pageNumber ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                className="pagination-arrow"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
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
