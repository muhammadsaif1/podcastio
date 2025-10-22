import React, { useState } from "react";
import { X, Play } from "lucide-react";
import "./ModernHero.scss";
import { Link } from "react-router-dom";
import trackImg from "@/images/track-line.png";
import waveLine from "@/images/wave-line.png";

const ModernHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Real YouTube video ID - extracted from URL
  const youtubeVideoId = "dQw4w9WgXcQ"; // Example: Rick Astley - Never Gonna Give You Up
  const youtubeThumbnail = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
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
        <div className="modern-hero-container">
          <div className="modern-hero-content">
            {/* Left Side - Video Thumbnail */}
            <div className="modern-hero-video-wrapper">
              <div className="modern-hero-video-card" onClick={openModal}>
                <img
                  src={youtubeThumbnail}
                  alt="AI + IMPACT Latest Episode"
                  className="modern-hero-video-thumbnail"
                />
                <div className="modern-hero-play-overlay">
                  <div className="modern-hero-play-button">
                    <Play className="modern-hero-play-icon" />
                  </div>
                </div>
                <div className="modern-hero-video-info">
                  <div className="modern-hero-badge">
                    <span className="modern-hero-badge-icon">AI</span>
                    <span className="modern-hero-badge-text">+IMPACT</span>
                  </div>
                  <div className="modern-hero-episode-tag">Latest Episode</div>
                  <h3 className="modern-hero-video-title">
                    Investing in Impact + AI: Why Backing Black-Owned EdTech Is
                    a Strategic Edge
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
            </div>

            {/* Right Side - Text Content */}
            <div className="modern-hero-text-wrapper">
              {/* <div className="modern-hero-city-skyline">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="modern-hero-building"
                    style={{
                      height: `${Math.random() * 60 + 40}%`,
                      width: `${Math.random() * 3 + 2}%`,
                      left: `${i * 5}%`,
                    }}
                  />
                ))}
              </div> */}
              <img className="w-60" src={trackImg} alt="image" />
              <h1 className="modern-hero-main-title">
                Turning Ideas into Innovation and Investment into Generational
                Impact.
              </h1>
              <p className="modern-hero-description">
                A podcast and pitch platform connecting diverse founders with
                everyday investors through Regulation Crowdfunding.
              </p>
            </div>
          </div>

          {/* About Us Button */}
          {/* <div className="modern-hero-about-wrapper">
            <button className="modern-hero-about-btn">
              <span className="modern-hero-about-icon">🚀</span>
              About Us
            </button>
          </div> */}
          <div className="hero-cta-group d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
            <a
              href="https://creators.spotify.com/pod/show/returnus"
              target="_blank"
              rel="noopener noreferrer"
              className="bttn-1"
            >
              🎧 Listen on Spotify
            </a>

            <a
              href="https://www.youtube.com/@ReturnUs"
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
      {isModalOpen && (
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
