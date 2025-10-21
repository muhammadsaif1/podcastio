"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, UploadCloud } from "lucide-react";
import "./pitchContest.scss";

import { useDispatch, useSelector } from "react-redux";
import { createPitch, fetchPitches } from "@/redux/slices/pitchSlice"; // adjust path if necessary

const tagToLabel = (v) => {
  if (!v) return "";
  return v
    .split("-")
    .map((s) => s[0].toUpperCase() + s.slice(1))
    .join(" ");
};

const PitchContest = () => {
  const dispatch = useDispatch();
  const creating = useSelector((state) => state.pitches?.creating);
  const creatingError = useSelector((state) => state.pitches?.error);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    pitchCategory: "",
    oneSentenceSummary: "",
    pitchVideo: "",
    stage: "",
    fundingGoal: "",
    whyYou: "",
    logoOrDeck: "", // will hold URL or base64 if user uploads
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  const categoryOptions = [
    "Agriculture",
    "Real Estate",
    "Tech",
    "Healthcare",
    "Education",
    "Fintech",
    "Other",
  ];

  const stageOptions = ["Idea", "MVP", "Traction", "Raising"];

  useEffect(() => {
    // keep pitches fresh in store if you want (optional)
    dispatch(fetchPitches());
  }, [dispatch]);

  // convert a file to base64 data URL (warning: large files)
  const fileToDataUrl = (file) =>
    new Promise((resolve, reject) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    // basic email pattern
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Email is invalid";
    if (!form.pitchCategory) e.pitchCategory = "Pitch category is required";
    if (!form.oneSentenceSummary.trim())
      e.oneSentenceSummary = "1-sentence summary is required";
    if (!form.pitchVideo.trim()) e.pitchVideo = "Pitch video link is required";
    if (!form.stage) e.stage = "Stage is required";
    if (!form.whyYou.trim())
      e.whyYou = "Please tell us why you (100 words max)";
    if (!form.consent) e.consent = "Consent is required";
    // optional: limit whyYou length
    if (form.whyYou && form.whyYou.length > 1000)
      e.whyYou = "Why You must be under 1000 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleField = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await fileToDataUrl(file);
      // set data url into logoOrDeck (backend currently stores URL string — base64 will work too)
      handleField("logoOrDeck", dataUrl);
    } catch (err) {
      console.error("file read error", err);
      setErrors((prev) => ({ ...prev, logoOrDeck: "Failed to read file" }));
    }
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      pitchCategory: "",
      oneSentenceSummary: "",
      pitchVideo: "",
      stage: "",
      fundingGoal: "",
      whyYou: "",
      logoOrDeck: "",
      consent: false,
    });
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      // show loader from redux
      await dispatch(createPitch(form)).unwrap();
      setSubmitted(true);
      setSubmitMsg(
        "Thanks! Our producers review new pitches weekly. If selected, you’ll receive an invite to record your live pitch session."
      );
      resetForm();
      // optionally keep modal open and show message
      // close modal after short delay (optional)
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitted(false);
        setSubmitMsg("");
      }, 3500);
    } catch (err) {
      console.error("create pitch error", err);
      setSubmitMsg(err || "Failed to submit pitch. Please try again.");
    }
  };

  return (
    <section className="pitch-contest-section">
      {/* HERO */}
      <div className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          src="/assets/pitch-hero-loop.mp4" // replace with your video path; fallback image handled in CSS
        />
        <div className="hero-overlay" />
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Pitch Your Idea. <span>Win $100.</span> Launch on Kurudy.
          </h1>
          <p className="sub">
            Submit a 60-second pitch — top founders go live on Returnus.
            Audience votes in real-time. Winner gets $100, mentorship &
            exposure.
          </p>
          <motion.button
            className="btn-primary"
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Create Pitch"
          >
            Submit Your Pitch
          </motion.button>
        </motion.div>
      </div>

      {/* HOW IT WORKS */}
      <div className="how-it-works">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        <div className="steps">
          <motion.div
            className="step"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="num">1</div>
            <h3>Submit</h3>
            <p>Send a 60-second pitch (video + 1-line summary).</p>
          </motion.div>

          <motion.div
            className="step"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="num">2</div>
            <h3>Top 3 Live</h3>
            <p>Top 3 founders pitch live on Returnus.</p>
          </motion.div>

          <motion.div
            className="step"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <div className="num">3</div>
            <h3>Vote</h3>
            <p>Audience votes in real-time.</p>
          </motion.div>

          <motion.div
            className="step"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div className="num">4</div>
            <h3>Win</h3>
            <p>$100 + mentorship + exposure for the winner.</p>
          </motion.div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="cta-strip">
        <p>Ready to take the stage?</p>
        <motion.button
          className="btn-outline"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Create Pitch
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="pitch-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !creating && setIsModalOpen(false)}
          >
            <motion.div
              className="modal-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 10, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 10, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="modal-head">
                <h3>Submit Your Pitch to Returnus</h3>
                <button
                  className="close-btn"
                  onClick={() => !creating && setIsModalOpen(false)}
                  aria-label="Close"
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>

              <form className="pitch-form" onSubmit={handleSubmit}>
                <div className="row two">
                  <div className="form-group">
                    <label>
                      Full Name<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.fullName}
                      onChange={(e) => handleField("fullName", e.target.value)}
                      className={errors.fullName ? "error" : ""}
                      disabled={creating}
                    />
                    {errors.fullName && (
                      <div className="field-error">{errors.fullName}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      value={form.companyName}
                      onChange={(e) =>
                        handleField("companyName", e.target.value)
                      }
                      disabled={creating}
                    />
                  </div>
                </div>

                <div className="row two">
                  <div className="form-group">
                    <label>
                      Email Address<span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleField("email", e.target.value)}
                      className={errors.email ? "error" : ""}
                      disabled={creating}
                    />
                    {errors.email && (
                      <div className="field-error">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Phone (optional)</label>
                    <input
                      type="text"
                      value={form.phone}
                      onChange={(e) => handleField("phone", e.target.value)}
                      disabled={creating}
                    />
                  </div>
                </div>

                <div className="row two">
                  <div className="form-group">
                    <label>
                      Pitch Category<span className="required">*</span>
                    </label>
                    <select
                      value={form.pitchCategory}
                      onChange={(e) =>
                        handleField("pitchCategory", e.target.value)
                      }
                      className={errors.pitchCategory ? "error" : ""}
                      disabled={creating}
                    >
                      <option value="">Select category</option>
                      {categoryOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.pitchCategory && (
                      <div className="field-error">{errors.pitchCategory}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      1-Sentence Summary<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.oneSentenceSummary}
                      onChange={(e) =>
                        handleField("oneSentenceSummary", e.target.value)
                      }
                      className={errors.oneSentenceSummary ? "error" : ""}
                      disabled={creating}
                    />
                    {errors.oneSentenceSummary && (
                      <div className="field-error">
                        {errors.oneSentenceSummary}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row two">
                  <div className="form-group">
                    <label>
                      Pitch Video Link<span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.pitchVideo}
                      onChange={(e) =>
                        handleField("pitchVideo", e.target.value)
                      }
                      className={errors.pitchVideo ? "error" : ""}
                      placeholder="YouTube / Loom / Vimeo link (max 5m)"
                      disabled={creating}
                    />
                    {errors.pitchVideo && (
                      <div className="field-error">{errors.pitchVideo}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      Stage<span className="required">*</span>
                    </label>
                    <select
                      value={form.stage}
                      onChange={(e) => handleField("stage", e.target.value)}
                      className={errors.stage ? "error" : ""}
                      disabled={creating}
                    >
                      <option value="">Select stage</option>
                      {stageOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    {errors.stage && (
                      <div className="field-error">{errors.stage}</div>
                    )}
                  </div>
                </div>

                <div className="row two">
                  <div className="form-group">
                    <label>Funding Goal (optional)</label>
                    <input
                      type="text"
                      value={form.fundingGoal}
                      onChange={(e) =>
                        handleField("fundingGoal", e.target.value)
                      }
                      disabled={creating}
                      placeholder="e.g. 50000"
                    />
                  </div>

                  <div className="form-group">
                    <label>Why You? (100 words)</label>
                    <textarea
                      value={form.whyYou}
                      onChange={(e) => handleField("whyYou", e.target.value)}
                      className={errors.whyYou ? "error" : ""}
                      disabled={creating}
                    />
                    {errors.whyYou && (
                      <div className="field-error">{errors.whyYou}</div>
                    )}
                  </div>
                </div>

                <div className="row two">
                  <div className="form-group">
                    <label>Upload Logo / Deck (optional)</label>
                    <div className="file-input-wrap">
                      <input
                        type="file"
                        accept=".png,.jpg,.jpeg,.pdf,.ppt,.pptx"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        disabled={creating}
                      />
                      <div className="file-hint">
                        <UploadCloud size={16} />{" "}
                        {form.logoOrDeck ? "File selected" : "No file selected"}
                      </div>
                    </div>
                    {errors.logoOrDeck && (
                      <div className="field-error">{errors.logoOrDeck}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Logo / Deck URL (optional)</label>
                    <input
                      type="text"
                      value={
                        form.logoOrDeck && form.logoOrDeck.startsWith("data:")
                          ? ""
                          : form.logoOrDeck
                      }
                      onChange={(e) =>
                        handleField("logoOrDeck", e.target.value)
                      }
                      disabled={creating}
                      placeholder="Or paste a link to your logo or deck"
                    />
                  </div>
                </div>

                <div className="consent-row">
                  <label className="consent">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => handleField("consent", e.target.checked)}
                      disabled={creating}
                    />
                    <span>
                      I agree to share my pitch publicly and to Returnus’ terms.{" "}
                      <span className="required">*</span>
                    </span>
                  </label>
                  {errors.consent && (
                    <div className="field-error">{errors.consent}</div>
                  )}
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={() => {
                      if (!creating) {
                        setIsModalOpen(false);
                        resetForm();
                      }
                    }}
                    disabled={creating}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={creating}
                  >
                    {creating ? "Sending..." : "Send My Pitch"}
                  </button>
                </div>

                {/* submit message */}
                {submitted || submitMsg ? (
                  <motion.div
                    className="submit-block"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p>{submitMsg}</p>
                  </motion.div>
                ) : null}

                {creatingError && (
                  <div className="field-error server-error">
                    {String(creatingError)}
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PitchContest;
