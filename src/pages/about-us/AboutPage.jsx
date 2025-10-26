import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./about-page.scss";
import waveLine from "@/images/wave-line.png";
import kurudy from "@/images/kurudy-logo.png";
import Hosts from "@/components/home/Hosts";

const AboutPage = () => {
  const hostsRef = useRef(null);

  const handleMeetHosts = () => {
    if (hostsRef.current) {
      const navbarHeight = 80; // Adjust to your navbar height
      const elementPosition = hostsRef.current.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="hero-section about-page texture-bg-2">
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>

      <h2 className="host-title-text-modern">
        The <span className="blue-gradient">Hosts</span>
      </h2>
      <div>
        <h2 className="host-description-title-modern ">Profiles</h2>
        <p className="host-description-title-modern">
          {" "}
          Returnus.com bridges the gap between brilliant founders and investors
          ready for transparent, community-powered capital. Each week, hosts
          William McCoy and Marvin Clement bring you stories, lessons, and live
          pitches from emerging entrepreneurs changing the world.
        </p>
      </div>
      <div ref={hostsRef}>
        <Hosts />
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
      {/* <motion.div
        className="section hosts"
        ref={hostsRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>
          The <span className="blue-gradient">Hosts</span>
        </h2>

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
      </motion.div> */}

      {/* Partners */}
      {/* removed kurudy */}
      {/* <motion.div
        className="section partners"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Partners</h2>
        <div className="partners-grid">
          <motion.div
            className="partner-logo"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.2 }}
          >
            <img src={kurudy} alt="Kurudy" />
          </motion.div>

          <motion.div
            className="partner-logo"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.2 }}
          >
            <img src={crunchbase} alt="Crunchbase" />
          </motion.div>

          <motion.div
            className="partner-logo"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.2 }}
          >
            <img src={kingscrowd} alt="Kingscrowd" />
          </motion.div>

          <motion.div
            className="partner-logo"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.2 }}
          >
            <img src={finra} alt="FINRA" />
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
};

export default AboutPage;
