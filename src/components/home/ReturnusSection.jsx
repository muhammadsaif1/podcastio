import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./returnus-section.scss";
import { Link } from "react-router-dom";
import william from "@/images/william.png";
import marvin from "@/images/marvin.png";
const ReturnusSection = () => {
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
          <motion.div
            className="host-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="host-image-wrapper">
              <img src={william} alt="William" className="host-image" />
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
            </div>
          </motion.div>
        </div>

        <motion.div
          className="cta-container"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/about-us" className="cta-btn">
            Meet the Hosts
            <span className="pitch-contest-arrow-circle">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ReturnusSection;
