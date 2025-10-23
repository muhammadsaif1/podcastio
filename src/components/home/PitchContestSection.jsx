import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
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

  // Video data with names
  const founders = [
    {
      name: "Courtney Henry",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      bgColor: "#10b981",
    },
    {
      name: "Ashould Islem",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      bgColor: "#ef4444",
    },
    {
      name: "Kathryn Murphy",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      bgColor: "#fbbf24",
    },
    {
      name: "Wendah Shafi",
      video:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      bgColor: "#3b82f6",
    },
  ];

  return (
    <section className="pitch-contest-section texture-bg-2">
      <div className="container">
        <motion.div
          className="contest-button-container"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="/about-us" className="contest-btn">
            <span className="icon">🚀</span> Pitch Contest
          </a>
        </motion.div>
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

          {/* Countdown Timer */}
          <div className="countdown">
            <div className="time-unit">
              <motion.span
                key={timeLeft.days}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.days || 0)}
              </motion.span>
              <span className="time-label">days</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.hours}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.hours || 0)}
              </motion.span>
              <span className="time-label">hours</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.minutes}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.minutes || 0)}
              </motion.span>
              <span className="time-label">mins</span>
            </div>
            <span className="separator">:</span>
            <div className="time-unit">
              <motion.span
                key={timeLeft.seconds}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="time-value"
              >
                {formatTimeUnit(timeLeft.seconds || 0)}
              </motion.span>
              <span className="time-label">secs</span>
            </div>
          </div>

          {/* Video Grid */}
          <div className="video-grid">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="video-card"
                style={{ backgroundColor: founder.bgColor }}
              >
                <video src={founder.video} loop autoPlay muted playsInline />
                <div className="founder-name">{founder.name}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="cta-container">
            <Link to="/pitch" className="cta-btn">
              Submit Your Pitch
              <span className="pitch-contest-arrow-circle">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PitchContestSection;
