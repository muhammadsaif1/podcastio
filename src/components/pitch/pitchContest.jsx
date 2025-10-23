import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import "./pitchContest.scss";
import pitchHero from "@/images/pitch-hero.png";

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
    "Residential",
    "Commercial",
    "Industrial",
    "Mixed-Use",
    "Agriculture",
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
    <section className="pitch-contest-main-container texture-bg-2">
      <motion.div
        className="pitch-contest-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pitch-contest-hero-image-wrapper">
          <img
            src={pitchHero}
            alt="Pitch Contest Hero"
            className="pitch-contest-hero-image"
          />
          <div className="pitch-contest-hero-overlay"></div>
        </div>
        {/* <div className="pitch-contest-hero-content">
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
        </div> */}
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
            SUBMIT YOUR PITCH TO <span>Returnus</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => handleField("fullName", e.target.value)}
                className={errors.fullName ? "pitch-contest-input-error" : ""}
                placeholder="Enter your full name"
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
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => handleField("companyName", e.target.value)}
                placeholder="Enter your company's name"
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
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleField("email", e.target.value)}
                className={errors.email ? "pitch-contest-input-error" : ""}
                placeholder="Enter your email address"
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
              <input
                type="text"
                value={form.phone}
                onChange={(e) => handleField("phone", e.target.value)}
                placeholder="Enter your phone number (optional)"
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
              <select
                value={form.pitchCategory}
                onChange={(e) => handleField("pitchCategory", e.target.value)}
                className={
                  errors.pitchCategory ? "pitch-contest-input-error" : ""
                }
                disabled={isSubmitting}
              >
                <option value="">Select Pitch Category</option>
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
              <input
                type="text"
                value={form.oneSentenceSummary}
                onChange={(e) =>
                  handleField("oneSentenceSummary", e.target.value)
                }
                className={
                  errors.oneSentenceSummary ? "pitch-contest-input-error" : ""
                }
                placeholder="1-Sentence Summary (Quick overview of your idea)"
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
              <input
                type="text"
                value={form.pitchVideo}
                onChange={(e) => handleField("pitchVideo", e.target.value)}
                className={errors.pitchVideo ? "pitch-contest-input-error" : ""}
                placeholder="Pitch Video Link (YouTube, Loom, or Vimeo link - max 5 minutes)"
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
              <select
                value={form.stage}
                onChange={(e) => handleField("stage", e.target.value)}
                className={errors.stage ? "pitch-contest-input-error" : ""}
                disabled={isSubmitting}
              >
                <option value="">
                  Company Stage (Idea / MVP / Traction / Raising)
                </option>
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
              <input
                type="text"
                value={form.fundingGoal}
                onChange={(e) => handleField("fundingGoal", e.target.value)}
                placeholder="Funding Goal - (optional) How much you plan to raise"
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
              <textarea
                value={form.whyYou}
                onChange={(e) => handleField("whyYou", e.target.value)}
                className={errors.whyYou ? "pitch-contest-input-error" : ""}
                placeholder="Why You? (100 words)"
                disabled={isSubmitting}
              />
              {errors.whyYou && (
                <span className="pitch-contest-field-error">
                  {errors.whyYou}
                </span>
              )}
            </motion.div>

            <motion.div
              className="pitch-contest-form-group pitch-contest-upload-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="pitch-contest-upload-box">
                <input
                  type="text"
                  value={form.logoOrDeck}
                  onChange={(e) => handleField("logoOrDeck", e.target.value)}
                  placeholder="Upload Logo / Deck (optional)"
                  disabled={isSubmitting}
                />
                <div className="pitch-contest-upload-icon">
                  {/* <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg> */}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="pitch-contest-form-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <input
                type="text"
                value=""
                placeholder="Consent Checkbox (Your name or founder's name)"
                disabled
                readOnly
              />
            </motion.div>

            <motion.div
              className="pitch-contest-consent-row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <label className="pitch-contest-consent-label">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => handleField("consent", e.target.checked)}
                  disabled={isSubmitting}
                />
                By submitting your information and pitch, you agree to Returnus'
                Contest Rules, Terms, and Privacy Policy.
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
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              {isSubmitting ? (
                <Loader2 size={20} className="pitch-contest-spinner" />
              ) : (
                <>
                  Submit
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
    </section>
  );
};

export default PitchContest;
