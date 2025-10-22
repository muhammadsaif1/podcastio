"use client";

import React from "react";
import { motion } from "framer-motion";
import "./returnus-section.scss";

const ReturnusSection = () => {
  const hosts = [
    {
      name: "William McCoy",
      title: "Founder of Kurucy, investor advocate, serial entrepreneur.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop",
    },
    {
      name: "Marvin Clement",
      title: "Investor strategist, co-founder, media producer.",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop",
    },
  ];

  return (
    <section className="returnus-section texture-bg-2">
      <div className="returnus-content">
        <motion.div
          className="about-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="/about-us" className="about-btn">
            <span className="icon">🚀</span> About Us
          </a>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="about-title"
        >
          About ReturnUs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="description"
        >
          Returnus.com bridges the gap between brilliant founders and investors
          ready for transparent, community-powered capital. Each week, hosts
          William McCoy and Marvin Clement bring you stories, lessons, and live
          pitches from emerging entrepreneurs changing the world.
        </motion.p>

        <div className="hosts-grid">
          {hosts.map((host, index) => (
            <motion.div
              key={index}
              className="host-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="host-image-wrapper">
                <img src={host.image} alt={host.name} className="host-image" />
                <div className="host-overlay">
                  <h3 className="host-name">{host.name}</h3>
                  <p className="host-title">{host.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="/about-us" className="cta-btn">
            Meet the Hosts <span className="arrow">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReturnusSection;
