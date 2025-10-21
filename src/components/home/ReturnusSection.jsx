"use client";

import React from "react";
import { motion } from "framer-motion";
import "./returnus-section.scss";
import logo from "@/images/logo2-6556cbb2.png";

const ReturnusSection = () => {
  return (
    <section className="returnus-section texture-bg-2">
      <div className="returnus-content">
        <div className="text-block">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            About Returnus
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="description"
          >
            Returnus.com bridges the gap between brilliant founders and
            investors ready for transparent, community-powered capital. Each
            week, hosts William McCoy and Marvin Clement bring you stories,
            lessons, and live pitches from emerging entrepreneurs changing the
            world.
          </motion.p>

          <motion.a
            href="/about-us"
            className="cta-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Meet the Hosts
          </motion.a>
        </div>

        <motion.div
          className="image-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="portrait-wrapper">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
              alt="Hosts temporary portrait"
              className="portrait"
            />
            <img src={logo} alt="Returnus Logo" className="logo-overlay" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReturnusSection;
