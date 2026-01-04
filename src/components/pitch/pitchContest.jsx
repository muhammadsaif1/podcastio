import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Loader2,
  CheckCircle,
  XCircle,
  ArrowRight,
  Upload,
  X,
} from "lucide-react";
import "./pitchContest.scss";
import pitchHeroVideo from "@/images/pitch-hero.mp4"; // Update import path as needed
import { useDispatch } from "react-redux";
import { createPitch } from "@/redux/slices/pitchSlice";
import { useNavigate } from "react-router-dom";

// Helpers
const getYoutubeVideoId = (url) => {
  if (!url) return null;
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/i
  );
  return m ? m[1] : null;
};

const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeVideoId(url);
  return id ? `https://www.youtube.com/embed/${id}?autoplay=0` : null;
};

const MAX_FILE_SIZE = 12 * 1024 * 1024; // 12 MB in bytes
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
];

const PitchContest = () => {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    pitchCategory: "",
    africanCountry: "",
    oneSentenceSummary: "",
    pitchVideo: "",
    stage: "",
    fundingGoal: "",
    whyYou: "",
    logoOrDeck: "", // base64 string
    logoOrDeckMimeType: "", // mime type
    logoOrDeckFileName: "", // for display
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMsg, setSubmitMsg] = useState("");
  const [validationError, setValidationError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryOptions = [
    "💡 Innovation",
    "🎨 Creative",
    "💼 Business",
    "🏢 Property",
    "🎯 Impact",
    "🚚 Logistics",
  ];

  const stageOptions = ["Idea", "MVP", "Traction", "Revenue"];

  const africanCountries = [
    "🇩🇿 Algeria",
    "🇦🇴 Angola",
    "🇧🇯 Benin",
    "🇧🇼 Botswana",
    "🇧🇫 Burkina Faso",
    "🇧🇮 Burundi",
    "🇨🇻 Cabo Verde",
    "🇨🇲 Cameroon",
    "🇨🇫 Central African Republic",
    "🇹🇩 Chad",
    "🇰🇲 Comoros",
    "🇨🇬 Congo",
    "🇨🇩 Congo, Democratic Republic of the",
    "🇩🇯 Djibouti",
    "🇪🇬 Egypt",
    "🇬🇶 Equatorial Guinea",
    "🇪🇷 Eritrea",
    "🇸🇿 Eswatini",
    "🇪🇹 Ethiopia",
    "🇬🇦 Gabon",
    "🇬🇲 Gambia",
    "🇬🇭 Ghana",
    "🇬🇳 Guinea",
    "🇬🇼 Guinea-Bissau",
    "🇨🇮 Ivory Coast",
    "🇰🇪 Kenya",
    "🇱🇸 Lesotho",
    "🇱🇷 Liberia",
    "🇱🇾 Libya",
    "🇲🇬 Madagascar",
    "🇲🇼 Malawi",
    "🇲🇱 Mali",
    "🇲🇷 Mauritania",
    "🇲🇺 Mauritius",
    "🇲🇦 Morocco",
    "🇲🇿 Mozambique",
    "🇳🇦 Namibia",
    "🇳🇪 Niger",
    "🇳🇬 Nigeria",
    "🇷🇼 Rwanda",
    "🇸🇹 Sao Tome and Principe",
    "🇸🇳 Senegal",
    "🇸🇨 Seychelles",
    "🇸🇱 Sierra Leone",
    "🇸🇴 Somalia",
    "🇿🇦 South Africa",
    "🇸🇸 South Sudan",
    "🇸🇩 Sudan",
    "🇹🇿 Tanzania",
    "🇹🇬 Togo",
    "🇹🇳 Tunisia",
    "🇺🇬 Uganda",
    "🇿🇲 Zambia",
    "🇿🇼 Zimbabwe",
  ];

  const isValidYoutubeUrl = (url) => {
    if (!url || typeof url !== "string") return false;
    const youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|shorts\/|embed\/)|youtu\.be\/)[a-zA-Z0-9_-]{11}/i;
    return youtubeRegex.test(url.trim());
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Email is invalid";
    if (!form.pitchCategory) e.pitchCategory = "Pitch category is required";
    if (!form.africanCountry) e.africanCountry = "African country is required";
    if (!form.oneSentenceSummary.trim())
      e.oneSentenceSummary = "1-sentence summary is required";
    if (!form.pitchVideo.trim()) e.pitchVideo = "Pitch video link is required";

    if (!form.pitchVideo.trim()) {
      e.pitchVideo = "Pitch video link is required";
    } else if (!isValidYoutubeUrl(form.pitchVideo)) {
      e.pitchVideo = "Only YouTube links are allowed (youtube.com or youtu.be)";
    }

    if (!form.stage) e.stage = "Stage is required";
    if (!form.whyYou.trim()) e.whyYou = "This field is required";
    if (!form.consent) e.consent = "Consent is required";
    if (form.whyYou && form.whyYou.length > 1000)
      e.whyYou = "Must be under 1000 characters";

    setErrors(e);
    setValidationError(
      Object.keys(e).length > 0
        ? "Please fill out all required fields correctly"
        : ""
    );
    return Object.keys(e).length === 0 && !fileError;
  };

  const handleField = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
    if (validationError) validate();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");

    if (!file) {
      setForm((p) => ({
        ...p,
        logoOrDeck: "",
        logoOrDeckMimeType: "",
        logoOrDeckFileName: "",
      }));
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileError(
        "Only JPEG, PNG, GIF, WebP images and PDF files are allowed."
      );
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileError("File size must be 12 MB or smaller.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result.split(",")[1];
      setForm((p) => ({
        ...p,
        logoOrDeck: base64String,
        logoOrDeckMimeType: file.type,
        logoOrDeckFileName: file.name,
      }));
    };
    reader.onerror = () => {
      setFileError("Error reading file. Please try again.");
    };
    reader.readAsDataURL(file);
  };

  const clearFile = () => {
    setForm((p) => ({
      ...p,
      logoOrDeck: "",
      logoOrDeckMimeType: "",
      logoOrDeckFileName: "",
    }));
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      fullName: form.fullName.trim(),
      companyName: form.companyName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      pitchCategory: form.pitchCategory,
      africanCountry: form.africanCountry,
      oneSentenceSummary: form.oneSentenceSummary.trim(),
      pitchVideo: form.pitchVideo.trim(),
      stage: form.stage,
      fundingGoal: form.fundingGoal.trim(),
      whyYou: form.whyYou.trim(),
      logoOrDeck: form.logoOrDeck,
      logoOrDeckMimeType: form.logoOrDeckMimeType,
      consent: form.consent,
    };

    try {
      const resultAction = await dispatch(createPitch(payload));

      if (createPitch.fulfilled.match(resultAction)) {
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
            africanCountry: "",
            oneSentenceSummary: "",
            pitchVideo: "",
            stage: "",
            fundingGoal: "",
            whyYou: "",
            logoOrDeck: "",
            logoOrDeckMimeType: "",
            logoOrDeckFileName: "",
            consent: false,
          });
          setFileError("");
          setSubmitStatus(null);
          setSubmitMsg("");
          setValidationError("");
        }, 2000);

        setTimeout(() => {
          navigate("/pitch-consent-rules");
        }, 2200);
      } else {
        throw new Error(resultAction.payload?.error || "Failed to submit");
      }
    } catch (err) {
      setSubmitStatus("error");
      setSubmitMsg(err.message || "Something went wrong. Please try again.");
      setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMsg("");
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pitch-contest-main-container texture-bg-2">
      <motion.div
        className="pitch-contest-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="pitch-contest-hero-video-wrapper">
          <video
            className="pitch-contest-hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={pitchHeroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="pitch-contest-hero-overlay"></div>
        </div>

        <div className="pitch-contest-hero-content">
          <h1>Pitch Your Idea.</h1>
        </div>
      </motion.div>

      <motion.div
        className="pitch-contest-how-it-works-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
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
                text: "Submit your 5 minutes pitch (video + summary).",
              },
              { num: "02", text: "Top 3 founders pitch live on Returnus." },
              { num: "03", text: "We vote." },
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
        className="pitch-contest-video-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="pitch-contest-video-container">
          <div className="pitch-contest-video-wrapper">
            <iframe
              src={getYoutubeEmbedUrl(
                "https://youtube.com/shorts/6fLLt7cuSgE?feature=share"
              )}
              title="Latest Pitch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
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
              transition={{ duration: 0.5, delay: 0.325 }}
            >
              <select
                value={form.africanCountry}
                onChange={(e) => handleField("africanCountry", e.target.value)}
                className={
                  errors.africanCountry ? "pitch-contest-input-error" : ""
                }
                disabled={isSubmitting}
              >
                <option value="">Choose African Country</option>
                {africanCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.africanCountry && (
                <span className="pitch-contest-field-error">
                  {errors.africanCountry}
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
                placeholder="Pitch Video Link (YouTube - max 5 minutes)"
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
                <option value="">Stage</option>
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

            {/* File Upload Section */}
            <motion.div
              className="pitch-contest-form-group pitch-contest-upload-group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label className="pitch-contest-upload-label">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
                  onChange={handleFileChange}
                  disabled={isSubmitting}
                  style={{ display: "none" }}
                />
                <div className="pitch-contest-upload-box">
                  <Upload size={28} className="pitch-contest-upload-icon" />
                  <p>
                    {form.logoOrDeckFileName
                      ? form.logoOrDeckFileName
                      : "Upload Logo / Deck (optional - max 12 MB)"}
                  </p>
                  <small>Images (JPEG, PNG, GIF, WebP) or PDF</small>
                </div>
              </label>

              {form.logoOrDeckFileName && (
                <div className="pitch-contest-selected-file">
                  <span>{form.logoOrDeckFileName}</span>
                  <button
                    type="button"
                    onClick={clearFile}
                    disabled={isSubmitting}
                    className="pitch-contest-clear-file-btn"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {fileError && (
                <span className="pitch-contest-field-error">{fileError}</span>
              )}
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

            <AnimatePresence>
              {validationError && (
                <motion.div
                  className="pitch-contest-submit-block pitch-contest-server-error"
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <div className="pitch-contest-status-icon">
                    <XCircle size={24} />
                  </div>
                  <p>{validationError}</p>
                </motion.div>
              )}
            </AnimatePresence>

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
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default PitchContest;
