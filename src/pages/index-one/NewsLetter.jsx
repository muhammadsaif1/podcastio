"use client";

import React, { useState } from "react";
import SlideTrack from "@/components/Shared/SlideTrack";
import trackImg from "@/images/record-3.png";
import banner from "@/images/record-mic.png";
import FadeUp from "@/motion/FadeUp";
import "./newsletter-custom.scss";

const NewsLetter = ({ bg = "", pb = "" }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // no backend — clear fields and show confirmation
    setSubmitted(true);
    setForm({ name: "", email: "" });
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <section className={`news-letter-section ${bg} ${pb}`} id="newsletter">
      <div className="container news-letter-wrapper rounded-4">
        <FadeUp>
          <div className="row justify-content-between align-items-center newsletter-row">
            {/* Left content */}
            <div className="col-xxl-6 col-xl-7 col-lg-8 col-12">
              <div className="newsletter-content newsletter-padding">
                <h4 className="newsletter-title">
                  Join 10,000+ founders and investors building the future of{" "}
                  <span className="tcn-0">community capital</span>
                </h4>

                <form
                  className="newsletter-form"
                  onSubmit={handleSubmit}
                  aria-label="Join newsletter"
                >
                  {/* Name: full width always */}
                  <div className="newsletter-field newsletter-field--full">
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      aria-label="Your name"
                      required
                    />
                  </div>

                  {/* Email + Button row */}
                  <div className="newsletter-field newsletter-field--email">
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={form.email}
                      onChange={handleChange}
                      aria-label="Your email"
                      required
                    />
                    <button
                      type="submit"
                      className="newsletter-cta"
                      aria-label="Subscribe"
                    >
                      <span className="newsletter-cta__text">Subscribe</span>
                      <span className="newsletter-cta__icon" aria-hidden>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12h14M13 5l7 7-7 7"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {submitted && (
                    <div className="newsletter-success" role="status">
                      Thank you for joining!
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right visual */}
            <div className="col-xl-5 col-lg-4 col-12">
              <div className="newsletter-banner-wrapper">
                <SlideTrack trackImg={trackImg} position={"top-img"} />
                <div className="newsletter-banner">
                  <img src={banner} alt="microphone" className="banner-img" />
                </div>
                <SlideTrack trackImg={trackImg} position={"bottom-img"} />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default NewsLetter;
