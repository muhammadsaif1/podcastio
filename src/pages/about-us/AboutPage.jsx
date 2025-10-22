"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchEpisodes } from "@/redux/slices/episodeSlice";
import "./about-page.scss";
import waveLine from "@/images/wave-line.png";

const AboutPage = () => {
  const dispatch = useDispatch();
  const hostsRef = useRef(null);
  const [playingEpisodeId, setPlayingEpisodeId] = useState(null);

  useEffect(() => {
    dispatch(fetchEpisodes());
  }, [dispatch]);

  const missionText =
    "Returnus exists to bridge the divide between underfunded founders and underinformed investors, empowering startups with the capital they need to thrive. Backed by Kurudy’s ambitious mission to create 1,000 Black Unicorns by 2030, we are committed to fostering diversity and innovation in the entrepreneurial ecosystem.";

  const hosts = [
    {
      name: "William McCoy",
      title: "Founder of Kurudy, Investor Advocate, Serial Entrepreneur",
      bio: "William McCoy is the visionary founder of Kurudy, a passionate advocate for investors, and a serial entrepreneur dedicated to supporting underrepresented founders in their journey to success.",
      photo: "https://via.placeholder.com/600x600?text=William+McCoy",
    },
    {
      name: "Marvin Clement",
      title: "Investor Strategist, Co-founder, Media Producer",
      bio: "Marvin Clement is a strategic investor, co-founder, and skilled media producer, specializing in crafting investment strategies and producing content that drives business growth and innovation.",
      photo: "https://via.placeholder.com/600x600?text=Marvin+Clement",
    },
  ];

  const partners = [
    { name: "Kurudy", logo: "https://via.placeholder.com/150x150?text=Kurudy" },
    {
      name: "Crunchbase",
      logo: "https://via.placeholder.com/150x150?text=Crunchbase",
    },
    {
      name: "KingsCrowd",
      logo: "https://via.placeholder.com/150x150?text=KingsCrowd",
    },
    { name: "SEC", logo: "https://via.placeholder.com/150x150?text=SEC" },
    { name: "FINRA", logo: "https://via.placeholder.com/150x150?text=FINRA" },
  ];

  // Select latest 2 episodes from state (sorted by date)
  const episodes = useSelector((state) => {
    const all = (state.episodes?.list || []).slice();
    return all.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);
  });

  // Utility: get YouTube video id from URL
  const getYouTubeId = (url = "") => {
    try {
      const reg =
        /(?:youtube\.com.*(?:v=|\/embed\/|\/watch\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;
      const m = url.match(reg);
      return m ? m[1] : null;
    } catch (e) {
      return null;
    }
  };

  const getThumb = (youtubeLink) => {
    const id = getYouTubeId(youtubeLink);
    if (!id) return "https://via.placeholder.com/1280x720?text=Episode";
    // prefer maxres but fallback to hqdefault
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
  };

  const onPlayEpisode = (episode) => {
    setPlayingEpisodeId(episode._id || episode.id || episode.youtubeLink);
  };

  const handleMeetHosts = () => {
    if (hostsRef.current) {
      hostsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-section about-page texture-bg-2">
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>

      <motion.div
        className="section mission"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>
          The <span class="orange">Mission</span>
        </h1>
        <h1 className="mission-phrase">
          “Closing the Capital Gap — One Pitch at a Time.”
        </h1>
        <p>{missionText}</p>
      </motion.div>

      {/* Episodes - placed after Mission */}
      <motion.div
        className="section episodes"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>Latest Episodes</h2>

        <div className="episodes-grid">
          {episodes.length === 0 && (
            <div className="no-episodes">No episodes available</div>
          )}

          {episodes.map((episode, idx) => {
            const keyId = episode._id || episode.id || episode.youtubeLink;
            const isPlaying = playingEpisodeId === keyId;
            const thumb = getThumb(episode.youtubeLink);
            const youtubeId = getYouTubeId(episode.youtubeLink);

            return (
              <motion.article
                key={keyId || idx}
                className="episode-profile large-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  // if clicking the card but not a link, play video
                  if (!isPlaying) onPlayEpisode(episode);
                }}
              >
                <div className="card-inner">
                  <div className="image-area">
                    {/* Tag pill */}
                    <span className="tag-pill">
                      {episode.tag || "Latest Episode"}
                    </span>

                    {/* If playing -> iframe */}
                    {isPlaying && youtubeId ? (
                      <div className="video-wrapper">
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                          title={episode.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div
                        className="thumbnail-wrapper"
                        role="button"
                        aria-label={`Play ${episode.title}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayEpisode(episode);
                        }}
                      >
                        <img
                          src={episode.image || thumb}
                          alt={episode.title}
                          className="episode-photo"
                          onError={(e) => {
                            // fallback to hqdefault if maxresmissing
                            const id = getYouTubeId(episode.youtubeLink);
                            if (id)
                              e.currentTarget.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                          }}
                        />
                        <div className="image-overlay">
                          <div className="overlay-center">
                            <div className="overlay-title">Latest Episode</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="card-content">
                    <h3 className="episode-title">{episode.title}</h3>
                    <p className="episode-date">
                      {episode.date
                        ? new Date(episode.date).toLocaleDateString()
                        : ""}
                    </p>
                    <p className="episode-description">{episode.description}</p>

                    <div className="episode-ctas">
                      <a
                        className="btn btn-primary"
                        href={episode.spotifyUrl || "#"}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Listen on Spotify
                      </a>
                      <a
                        className="btn btn-outline"
                        href={episode.youtubeLink || "#"}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Watch on YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Meet the Hosts CTA (centered like screenshot) */}
        <div className="meet-hosts-wrap">
          <button className="meet-hosts-btn" onClick={handleMeetHosts}>
            Meet the Hosts <span className="arrow">➜</span>
          </button>
        </div>
      </motion.div>

      {/* Hosts Section */}
      <motion.div
        className="section hosts"
        ref={hostsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>
          The
          <span className="blue-gradient">Hosts</span>
        </h2>
        <div className="hosts-grid">
          {hosts.map((host, i) => (
            <motion.div
              key={i}
              className="host-profile"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img src={host.photo} alt={host.name} className="host-photo" />
              <h3>{host.name}</h3>
              <p className="host-title">{host.title}</p>
              <p className="host-bio">{host.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Partners */}
      <motion.div
        className="section partners"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              className="partner-logo"
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.2 }}
            >
              <img src={partner.logo} alt={partner.name} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutPage;
