import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { X, Play } from "lucide-react";
import "./ModernHero.scss";
import { Link } from "react-router-dom";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import trackImg from "@/images/track-line.png";
import waveLine from "@/images/wave-line.png";

// Function to extract YouTube video ID from a URL
const getYouTubeVideoId = (url) => {
  if (!url) return null;
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ModernHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const {
    list: episodes,
    loadingList,
    error,
  } = useSelector((state) => state.episodes);

  // Fetch episodes when the component mounts
  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  // Find the episode with mainEpisode: true
  const latestEpisode = episodes.find(
    (episode) => episode.mainEpisode === true
  );

  // Extract YouTube video ID from the full URL
  const youtubeVideoId = latestEpisode
    ? getYouTubeVideoId(latestEpisode.youtubeLink)
    : null;
  const youtubeThumbnail = youtubeVideoId
    ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`
    : null;

  const openModal = () => {
    if (youtubeVideoId) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section className="modern-hero-section texture-bg-2">
        <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
          <img className="w-100" src={waveLine} alt="line" />
        </div>
        <div className="announcement-banner">
          <div className="banner-content">
            <span className="emoji">👉</span>
            <a href="/pitch" className="enter-link">
              Enter Now!
            </a>
            <span className="banner-text">
              PITCH CONTEST! 🎉 🎤 Win $100 Every Week! Pitch your startup LIVE
              on our show — and let the audience decide the winner!
            </span>
            <span className="emoji">💡</span>
            <span className="banner-text">
              Are you a founder (or know one)? This is your shot at cash,
              exposure & bragging rights!
            </span>
            <span className="emoji">👉</span>
            <a href="/pitch" className="enter-link">
              Enter Now!
            </a>
          </div>
        </div>
        <div className="modern-hero-container">
          <div className="modern-hero-content">
            {/* Left Side - Video Thumbnail or No Episode Message */}
            <div className="modern-hero-video-wrapper">
              {loadingList ? (
                <p className="modern-hero-no-episode">Loading episodes...</p>
              ) : error ? (
                <p className="modern-hero-no-episode">Error: {error}</p>
              ) : latestEpisode && youtubeVideoId ? (
                <div className="modern-hero-video-card" onClick={openModal}>
                  <img
                    src={youtubeThumbnail}
                    alt="Podcast Latest Episode"
                    className="modern-hero-video-thumbnail"
                  />
                  <div className="modern-hero-play-overlay">
                    <div className="modern-hero-play-button">
                      <Play className="modern-hero-play-icon" />
                    </div>
                  </div>
                  <div className="modern-hero-video-info">
                    <div className="modern-hero-badge">
                      <span className="modern-hero-badge-icon">Podcast</span>
                      <span className="modern-hero-badge-text">+</span>
                    </div>
                    <div className="modern-hero-episode-tag">
                      Latest Episode
                    </div>
                    <h3 className="modern-hero-video-title">
                      {latestEpisode.title ||
                        "To educate, inspire, and onboard entrepreneurs and investors into the Returnus ecosystem — blending storytelling, live pitches, and community-driven investing education."}
                    </h3>
                    <div className="modern-hero-cta-buttons">
                      <button className="modern-hero-btn modern-hero-btn-spotify">
                        <span className="modern-hero-btn-icon">🎧</span>
                        Listen on Spotify
                      </button>
                      <button className="modern-hero-btn modern-hero-btn-youtube">
                        <span className="modern-hero-btn-icon">▶️</span>
                        Watch on YouTube
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="modern-hero-no-episode">
                  No latest podcast to show
                </p>
              )}
            </div>

            {/* Right Side - Text Content */}
            <div className="modern-hero-text-wrapper">
              <img className="w-60" src={trackImg} alt="image" />
              <h1 className="modern-hero-main-title">
                Where Ideas Meet Investment and Culture.
              </h1>
              <p className="modern-hero-description">
                Returnus is more than a podcast; it’s a movement. A space where
                diverse founders meet everyday investors, and where
                conversations about tech, travel, sneakers, and culture spark
                ideas that turn into innovation and generational impact. Hosted
                by long-time friends and family, it’s where passion meets
                purpose, and where every story could be the next big return.
              </p>
            </div>
          </div>

          <div className="hero-cta-group d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
            <a
              href="https://creators.spotify.com/pod/show/Returnus"
              target="_blank"
              rel="noopener noreferrer"
              className="bttn-1"
            >
              🎧 Listen on Spotify
            </a>
            <a
              href="https://www.youtube.com/@Returnus"
              target="_blank"
              rel="noopener noreferrer"
              className="bttn-1 bttn-outline"
            >
              ▶️ Watch on YouTube
            </a>
            <Link to="/pitch" className="bttn-1">
              📝 Enter the Pitch Contest
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && youtubeVideoId && (
        <div className="modern-hero-modal-overlay" onClick={closeModal}>
          <div
            className="modern-hero-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modern-hero-modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="modern-hero-video-container">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModernHero;
