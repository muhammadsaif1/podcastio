"use client";

import React from "react";
import { motion } from "framer-motion";
import "./about-page.scss";

const AboutPage = () => {
  const missionText =
    "Returnus exists to bridge the divide between underfunded founders and underinformed investors, empowering startups with the capital they need to thrive. Backed by Kurudy’s ambitious mission to create 1,000 Black Unicorns by 2030, we are committed to fostering diversity and innovation in the entrepreneurial ecosystem.";

  const hosts = [
    {
      name: "William McCoy",
      title: "Founder of Kurudy, Investor Advocate, Serial Entrepreneur",
      bio: "William McCoy is the visionary founder of Kurudy, a passionate advocate for investors, and a serial entrepreneur dedicated to supporting underrepresented founders in their journey to success.",
      photo:
        "https://media.licdn.com/dms/image/v2/C5603AQFBBS42AcYQ8Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1645650776616?e=2147483647&v=beta&t=l7ieVu4yymMZSboxQM4sMXdPw-A1XunmaoVUPWX-WIo",
    },
    {
      name: "Marvin Clement",
      title: "Investor Strategist, Co-founder, Media Producer",
      bio: "Marvin Clement is a strategic investor, co-founder, and skilled media producer, specializing in crafting investment strategies and producing content that drives business growth and innovation.",
      photo:
        "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=122121889490222519",
    },
  ];

  const partners = [
    {
      name: "Kurudy",
      logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGH3FXmSmERVg/company-logo_200_200/B4EZUZ0mACHcAI-/0/1739894973040?e=2147483647&v=beta&t=QBYr1SzqExB7sFmw1RyLudtspNCqr5Gh2V-sSNiC7Y0",
    },
    {
      name: "Crunchbase",
      logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/unj63uuxb8ooxctihr1w",
    },
    {
      name: "KingsCrowd",
      logo: "https://kingscrowd.com/wp-content/themes/kingscrowd/assets/svgs/kc-crown-logo-horizontal.svg",
    },
    {
      name: "SEC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/U.S._Securities_and_Exchange_Commission_logo.svg/512px-U.S._Securities_and_Exchange_Commission_logo.svg.png",
    },
    {
      name: "FINRA",
      logo: "https://www.finra.org/sites/default/files/2023-02/FINRA_Corporate_Logo.png",
    },
  ];

  return (
    <section className="about-page ">
      <motion.div
        className="section mission"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>The Mission</h1>
      </motion.div>
      <motion.div
        className="section mission"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1>“Closing the Capital Gap — One Pitch at a Time.”</h1>
        <p>{missionText}</p>
      </motion.div>
      <motion.div
        className="section hosts"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2>The Hosts</h2>
        <div className="hosts-grid">
          {hosts.map((host, index) => (
            <motion.div
              key={index}
              className="host-profile"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={host.photo} alt={host.name} className="host-photo" />
              <h3>{host.name}</h3>
              <p className="host-title">{host.title}</p>
              <p className="host-bio">{host.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="section partners"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2>Partners</h2>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="partner-logo"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
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
