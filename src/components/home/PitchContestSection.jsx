"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPitches } from "@/redux/slices/pitchSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./pitch-contest-section.scss";

// Countdown helper
const calculateTimeLeft = (deadline) => {
  const difference = +new Date(deadline) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const PitchContestSection = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.pitches || {});
  const pitches = reduxState.list || [];
  const loading = reduxState.loadingList || false;
  const error = reduxState.error || null;

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft("2025-10-28T23:59:59")
  );

  useEffect(() => {
    dispatch(fetchPitches());
  }, [dispatch]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft("2025-10-28T23:59:59"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  return (
    <section className="pitch-contest-section texture-bg-2">
      <div className="container">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="headline">
            Got 5 Minutes? Win $100 + a Shot to Pitch on Kurudy!
          </h2>
          <p className="description">
            Every week, we select 3 founders to pitch live on Returnus. The
            audience votes. The winner gets $100, exposure, and a fast-track to
            launch their Reg CF raise.
          </p>

          <div className="visuals">
            {/* Placeholder looping clip reel */}
            <div className="clip-reel">
              <video
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                loop
                autoPlay
                muted
              />
            </div>

            {/* Countdown */}
            <div className="countdown">
              <span>{formatTimeUnit(timeLeft.days || 0)}d</span> :
              <span>{formatTimeUnit(timeLeft.hours || 0)}h</span> :
              <span>{formatTimeUnit(timeLeft.minutes || 0)}m</span> :
              <span>{formatTimeUnit(timeLeft.seconds || 0)}s</span>
            </div>
          </div>

          <Link to="/pitch" className="cta-btn">
            Submit Your Pitch
          </Link>

          {/* Pitches preview */}
          <div className="pitches-preview">
            {loading ? (
              <p className="loading">Loading pitches…</p>
            ) : error ? (
              <p className="error">Error loading pitches: {String(error)}</p>
            ) : pitches.length === 0 ? (
              <p className="empty">No pitches submitted yet.</p>
            ) : (
              <ul>
                {pitches.slice(0, 3).map((p) => (
                  <li key={p._id}>
                    <strong>{p.fullName}</strong> –{" "}
                    {p.companyName || "Independent"}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchContestSection;
