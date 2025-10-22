import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import "./pitchContest.scss";

const PitchContest = () => {
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
    logoOrDeck: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMsg, setSubmitMsg] = useState("");

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

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Email is invalid";
    if (!form.pitchCategory) e.pitchCategory = "Pitch category is required";
    if (!form.oneSentenceSummary.trim())
      e.oneSentenceSummary = "1-sentence summary is required";
    if (!form.pitchVideo.trim()) e.pitchVideo = "Pitch video link is required";
    if (!form.stage) e.stage = "Stage is required";
    if (!form.whyYou.trim()) e.whyYou = "This field is required";
    if (!form.consent) e.consent = "Consent is required";
    if (form.whyYou && form.whyYou.length > 1000)
      e.whyYou = "Must be under 1000 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleField = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate for demo

      if (success) {
        setSubmitStatus("success");
        setSubmitMsg(
          "Thanks! Our producers review new pitches weekly. If selected, you'll receive an invite to record your live pitch session."
        );
        setTimeout(() => {
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
          setSubmitStatus(null);
          setSubmitMsg("");
        }, 4000);
      } else {
        setSubmitStatus("error");
        setSubmitMsg("Failed to submit pitch. Please try again.");
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitMsg("");
        }, 4000);
      }

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="pitch-contest-main-container texture-bg-2">
      <motion.div
        className="pitch-contest-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pitch-contest-hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pitch Your Idea. Win <span>$100</span>.
          </motion.h1>
          <motion.h2
            className="pitch-contest-sub-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Launch on Kurudy.
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        className="pitch-contest-how-it-works-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="pitch-contest-steps-container">
          <h2 className="pitch-contest-how-it-works-title">
            HOW IT <span>WORKS</span>
          </h2>
          <div className="pitch-contest-steps-wrapper">
            {[
              {
                num: "01",
                text: "Submit your 60-second pitch (video + summary).",
              },
              { num: "02", text: "Top 3 founders pitch live on Returnus." },
              { num: "03", text: "Top 3 founders pitch live on Returnus." },
              { num: "04", text: "Winner gets $100 + mentorship + exposure." },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                className="pitch-contest-step-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="pitch-contest-step-number">{step.num}</div>
                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="pitch-contest-form-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="pitch-contest-form-container-wrapper">
          <h2 className="pitch-contest-form-title">
            SUBMIT YOUR PITCH TO <span>RETURNUS</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label>
                Full Name <span className="pitch-contest-required-mark">*</span>
              </label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleField("fullName", e.target.value)}
                className={errors.fullName ? "pitch-contest-input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <span className="pitch-contest-field-error">
                  {errors.fullName}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <label>Company Name</label>
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => handleField("companyName", e.target.value)}
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label>
                Email Address{" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
                className={errors.email ? "pitch-contest-input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.email && (
                <span className="pitch-contest-field-error">
                  {errors.email}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <label>Phone (optional)</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleField("phone", e.target.value)}
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <label>
                Pitch Category{" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              <select
                value={form.pitchCategory}
                onChange={(e) => handleField("pitchCategory", e.target.value)}
                className={
                  errors.pitchCategory ? "pitch-contest-input-error" : ""
                }
                disabled={isSubmitting}
              >
                <option value="">Select category</option>
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.pitchCategory && (
                <span className="pitch-contest-field-error">
                  {errors.pitchCategory}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <label>
                1-Sentence Summary{" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              <input
                type="text"
                value={form.oneSentenceSummary}
                onChange={(e) =>
                  handleField("oneSentenceSummary", e.target.value)
                }
                className={
                  errors.oneSentenceSummary ? "pitch-contest-input-error" : ""
                }
                disabled={isSubmitting}
              />
              {errors.oneSentenceSummary && (
                <span className="pitch-contest-field-error">
                  {errors.oneSentenceSummary}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label>
                Pitch Video Link{" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              <input
                type="text"
                value={form.pitchVideo}
                onChange={(e) => handleField("pitchVideo", e.target.value)}
                className={errors.pitchVideo ? "pitch-contest-input-error" : ""}
                placeholder="YouTube / Loom / Vimeo link"
                disabled={isSubmitting}
              />
              {errors.pitchVideo && (
                <span className="pitch-contest-field-error">
                  {errors.pitchVideo}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <label>
                Stage <span className="pitch-contest-required-mark">*</span>
              </label>
              <select
                value={form.stage}
                onChange={(e) => handleField("stage", e.target.value)}
                className={errors.stage ? "pitch-contest-input-error" : ""}
                disabled={isSubmitting}
              >
                <option value="">Select stage</option>
                {stageOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.stage && (
                <span className="pitch-contest-field-error">
                  {errors.stage}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label>Funding Goal (optional)</label>
              <input
                type="text"
                value={form.fundingGoal}
                onChange={(e) => handleField("fundingGoal", e.target.value)}
                placeholder="e.g. 50000"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <label>Logo or Deck Link (optional)</label>
              <input
                type="text"
                value={form.logoOrDeck}
                onChange={(e) => handleField("logoOrDeck", e.target.value)}
                placeholder="Link to logo or pitch deck"
                disabled={isSubmitting}
              />
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label>
                Why You? (100 words){" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              <textarea
                value={form.whyYou}
                onChange={(e) => handleField("whyYou", e.target.value)}
                className={errors.whyYou ? "pitch-contest-input-error" : ""}
                disabled={isSubmitting}
              />
              {errors.whyYou && (
                <span className="pitch-contest-field-error">
                  {errors.whyYou}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-consent-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <label className="pitch-contest-consent-label">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => handleField("consent", e.target.checked)}
                  disabled={isSubmitting}
                />
                I agree to share my pitch publicly and to Returnus' terms.{" "}
                <span className="pitch-contest-required-mark">*</span>
              </label>
              {errors.consent && (
                <span className="pitch-contest-field-error">
                  {errors.consent}
                </span>
              )}
            </motion.div>

            <motion.button
              type="submit"
              className="pitch-contest-primary-button"
              style={{
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
              disabled={isSubmitting}
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {isSubmitting ? (
                <Loader2 size={20} className="pitch-contest-spinner" />
              ) : (
                <>
                  Submit My Pitch
                  <div className="pitch-contest-arrow-circle">
                    <ArrowRight size={16} />
                  </div>
                </>
              )}
            </motion.button>
          </form>

          <AnimatePresence>
            {submitStatus && (
              <motion.div
                className={`pitch-contest-submit-block ${
                  submitStatus === "success"
                    ? "pitch-contest-success-message"
                    : "pitch-contest-server-error"
                }`}
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <div className="pitch-contest-status-icon">
                  {submitStatus === "success" ? (
                    <CheckCircle size={24} />
                  ) : (
                    <XCircle size={24} />
                  )}
                </div>
                <p>{submitMsg}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default PitchContest;
