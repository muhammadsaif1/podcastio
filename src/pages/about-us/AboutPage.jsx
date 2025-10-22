"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./about-page.scss";
import waveLine from "@/images/wave-line.png";

const AboutPage = () => {
  const hostsRef = useRef(null);

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

      {/* Mission Blocks - replacing Featured Pitches */}
      <motion.div
        className="section mission-blocks"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="mission-blocks-grid">
          {[
            {
              num: "01",
              title: "Empowering Underfunded Founders",
              body: "Too many brilliant founders with transformative ideas lack access to traditional funding networks. We provide a platform where diverse entrepreneurs can share their stories, showcase their vision, and connect directly with investors who believe in their mission.",
            },
            {
              num: "02",
              title: "Educating Everyday Investors",
              body: "The investment landscape has changed, but many potential investors don't know how to participate. We demystify equity crowdfunding, Regulation CF, and community capital, giving everyday people the knowledge to make smart investment decisions and build generational wealth.",
            },
            {
              num: "03",
              title: "Building Transparent Communities",
              body: "We believe in radical transparency. Every pitch, every question, every success and failure becomes a learning opportunity for our community. By fostering open dialogue between founders and investors, we're creating a new model for capital deployment that works for everyone.",
            },
          ].map((block, index) => (
            <motion.div
              key={index}
              className="mission-block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="block-num">{block.num}</div>
              <h3 className="block-title">{block.title}</h3>
              <p className="block-body">{block.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Meet the Hosts CTA */}
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
