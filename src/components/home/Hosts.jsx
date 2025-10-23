// Hosts.jsx
import React from "react";
import { motion } from "framer-motion";
import "./hosts.scss";
import william from "@/images/william.png";
import marvin from "@/images/marvin.png";

const Hosts = () => {
  return (
    <div className="hosts-grid">
      <motion.div
        className="host-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="host-image-wrapper">
          <img src={william} alt="William" className="host-image" />
          <div className="host-overlay">
            <div className="host-name">William McCoy</div>
            <div className="host-title">
              Founder of Kurudy, investor advocate, serial entrepreneur
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="host-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="host-image-wrapper">
          <img src={marvin} alt="Marvin" className="host-image" />
          <div className="host-overlay">
            <div className="host-name">Marvin Clement</div>
            <div className="host-title">
              Investor strategist, co-founder, media producer.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hosts;
