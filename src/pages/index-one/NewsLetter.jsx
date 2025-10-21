"use client";

import React, { useState, useEffect, useRef } from "react";
import NewsLetterForm from "@/components/Shared/NewsLetterForm";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-3.png";
import banner from "@/images/record-mic.png";
import FadeUp from "@/motion/FadeUp";
import "./news-letter-custom.scss";

const NewsLetter = ({ bg, pb = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const canvasRef = useRef(null);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let dots = [];

    const resizeCanvas = () => {
      const container = canvas.parentElement;
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initDots();
    };

    const initDots = () => {
      dots = [];
      const numDots = window.innerWidth < 768 ? 20 : 35;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radiusMin = Math.min(canvas.width, canvas.height) * 0.35;
      const radiusMax = Math.min(canvas.width, canvas.height) * 0.5;

      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * Math.PI * 2 + Math.random() * 0.5;
        const distance = radiusMin + Math.random() * (radiusMax - radiusMin);
        const speed = 0.3 + Math.random() * 0.7;

        dots.push({
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: 4 + Math.random() * 3,
          bounceSpeed: 0.8 + Math.random() * 0.4,
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = "rgba(30, 30, 30, 0.2)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.globalAlpha = 1 - distance / 120;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Update and draw dots
      dots.forEach((dot) => {
        // Update position with bouncing
        dot.x += dot.vx * dot.bounceSpeed;
        dot.y += dot.vy * dot.bounceSpeed;

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const distFromCenter = Math.sqrt(
          Math.pow(dot.x - centerX, 2) + Math.pow(dot.y - centerY, 2)
        );

        // Keep dots in a circular boundary around the center
        const maxRadius = Math.min(canvas.width, canvas.height) * 0.5;
        const minRadius = Math.min(canvas.width, canvas.height) * 0.3;

        if (distFromCenter > maxRadius || distFromCenter < minRadius) {
          // Bounce back towards center
          const angle = Math.atan2(dot.y - centerY, dot.x - centerX);
          const normalX = Math.cos(angle);
          const normalY = Math.sin(angle);

          const dotProduct = dot.vx * normalX + dot.vy * normalY;
          dot.vx = dot.vx - 2 * dotProduct * normalX;
          dot.vy = dot.vy - 2 * dotProduct * normalY;
        }

        // Bounce off canvas edges as backup
        if (dot.x < dot.radius || dot.x > canvas.width - dot.radius) {
          dot.vx *= -1;
          dot.x = Math.max(
            dot.radius,
            Math.min(canvas.width - dot.radius, dot.x)
          );
        }
        if (dot.y < dot.radius || dot.y > canvas.height - dot.radius) {
          dot.vy *= -1;
          dot.y = Math.max(
            dot.radius,
            Math.min(canvas.height - dot.radius, dot.y)
          );
        }

        // Draw dot with black color
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.radius
        );
        gradient.addColorStop(0, "#2a2a2a");
        gradient.addColorStop(0.6, "#1a1a1a");
        gradient.addColorStop(1, "#000000");

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add subtle highlight
        ctx.beginPath();
        ctx.arc(
          dot.x - dot.radius * 0.3,
          dot.y - dot.radius * 0.3,
          dot.radius * 0.3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = "rgba(80, 80, 80, 0.5)";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawDots);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    drawDots();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      className={`news-letter-section ${bg} ${pb}`}
      id="newsletter texture-bg-2"
    >
      <div className="container news-letter-wrapper rounded-4">
        <FadeUp>
          <div className="row justify-content-between align-items-center">
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-12 pt-sm-20 pt-10 pb-lg-20 pb-sm-10 pb-6">
              <div className="news-letter-content newsletter-padding">
                <h4 className="display-five fw-bold tcn-900 mb-lg-10 mb-sm-6 mb-4">
                  Join 10,000+ founders and investors building the future of
                  <span className="tcn-0"> community capital</span>
                </h4>

                <form
                  className="join-movement-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  <button type="submit" className="cta-btn">
                    Join Now
                  </button>
                </form>
                {submitted && (
                  <p className="success-message">Thank you for joining!</p>
                )}
              </div>
            </div>

            <div className="col-xl-5 col-lg-4 col-12">
              <div className="news-letter-banner-wrapper">
                <canvas ref={canvasRef} className="network-canvas"></canvas>

                {/* <SlideTrack trackImg={trackImg} position={"top-img"} /> */}
                <div className="news-letter-banner">
                  {/* <img className="w-100" src={banner} alt="microphone" /> */}
                </div>
                {/* <SlideTrack trackImg={trackImg} position={"bottom-img"} /> */}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default NewsLetter;
