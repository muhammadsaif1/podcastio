"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Upload } from "lucide-react";
import "./admin-dashboard.scss";
import { EpisodesList } from "@/components/admin/episodes-list";
import { MessagesList } from "@/components/admin/messages-list";
import { useDispatch, useSelector } from "react-redux";
import { createEpisode as createEpisodeAction } from "@/redux/slices/episodeSlice";
import { createPitch } from "@/redux/slices/pitchSlice";
import { logout } from "@/redux/slices/authSlice";
import PitchList from "@/components/admin/pitch-list";
import { useNavigate } from "react-router-dom";
import PitchUploadList from "@/components/admin/pitch-upload-list";

const MAX_FILE_SIZE = 12 * 1024 * 1024; // 12 MB
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
];

// Dropdown options from PitchContest
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

// Episode Modal — Pitch tag removed
const EpisodeModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const creating = useSelector((state) => state.episodes.creating);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [tag, setTag] = useState("");
  const [mainEpisode, setMainEpisode] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!youtubeUrl.trim()) newErrors.youtubeUrl = "YouTube URL is required";
    if (!authorName.trim()) newErrors.authorName = "Author name is required";
    if (!tag.trim()) newErrors.tag = "Tag is required";
    return newErrors;
  };

  const isFormValid =
    title.trim() &&
    description.trim() &&
    youtubeUrl.trim() &&
    authorName.trim() &&
    tag.trim();

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setYoutubeUrl("");
    setAuthorName("");
    setSpotifyUrl("");
    setTag("");
    setMainEpisode(false);
    setErrors({});
    setSubmitError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      title: title.trim(),
      youtubeLink: youtubeUrl.trim(),
      author: authorName.trim(),
      spotifyLink: spotifyUrl ? spotifyUrl.trim() : "",
      description: description.trim(),
      tag: tag.trim(),
      mainEpisode,
    };

    try {
      await dispatch(createEpisodeAction(payload)).unwrap();
      resetForm();
      onClose();
    } catch (err) {
      setSubmitError(err || "Failed to create episode");
    }
  };

  const handleFieldChange = (field, value) => {
    const setters = {
      title: setTitle,
      description: setDescription,
      youtubeUrl: setYoutubeUrl,
      authorName: setAuthorName,
      spotifyUrl: setSpotifyUrl,
      tag: setTag,
    };
    setters[field](value);

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
    if (submitError) setSubmitError("");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="episode-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Add New Episode</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Title <span className="required">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                className={errors.title ? "error" : ""}
              />
              {errors.title && (
                <span className="error-message">{errors.title}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Description <span className="required">*</span>
              </label>
              <textarea
                value={description}
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
                className={errors.description ? "error" : ""}
              />
              {errors.description && (
                <span className="error-message">{errors.description}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                YouTube URL <span className="required">*</span>
              </label>
              <input
                type="text"
                value={youtubeUrl}
                onChange={(e) =>
                  handleFieldChange("youtubeUrl", e.target.value)
                }
                className={errors.youtubeUrl ? "error" : ""}
              />
              {errors.youtubeUrl && (
                <span className="error-message">{errors.youtubeUrl}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Author Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) =>
                  handleFieldChange("authorName", e.target.value)
                }
                className={errors.authorName ? "error" : ""}
              />
              {errors.authorName && (
                <span className="error-message">{errors.authorName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Spotify URL (Optional)</label>
              <input
                type="text"
                value={spotifyUrl}
                onChange={(e) =>
                  handleFieldChange("spotifyUrl", e.target.value)
                }
              />
            </div>

            <div className="form-group">
              <label>
                Tag <span className="required">*</span>
              </label>
              <select
                value={tag}
                onChange={(e) => handleFieldChange("tag", e.target.value)}
                className={errors.tag ? "error" : ""}
              >
                <option value="">Select a tag</option>
                <option value="investor">Investor</option>
                <option value="founder">Founder</option>
              </select>
              {errors.tag && (
                <span className="error-message">{errors.tag}</span>
              )}
            </div>

            <div className="admin-episodes-modern-form-group admin-episodes-modern-form-group-switch">
              <div className="admin-episodes-modern-switch-wrapper">
                <label htmlFor="mainEpisodeSwitch">Main Episode</label>
                <div className="admin-episodes-modern-switch-container">
                  <input
                    type="checkbox"
                    id="mainEpisodeSwitch"
                    className="admin-episodes-modern-switch-input"
                    checked={mainEpisode}
                    onChange={(e) => setMainEpisode(e.target.checked)}
                  />
                  <label
                    htmlFor="mainEpisodeSwitch"
                    className="admin-episodes-modern-switch-label"
                  >
                    <span className="admin-episodes-modern-switch-slider"></span>
                  </label>
                  <span className="admin-episodes-modern-switch-status">
                    {mainEpisode ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {submitError && <div className="submit-error">{submitError}</div>}

            <div className="form-actions">
              <button
                type="button"
                className="cancel"
                onClick={onClose}
                disabled={creating}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="save"
                disabled={!isFormValid || creating}
              >
                {creating ? "Creating..." : "Save Episode"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Pitch Video Creation Modal — Now with dropdowns and fixed file upload
const PitchModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const creating = useSelector((state) => state.pitches.creating);
  const error = useSelector((state) => state.pitches.error);

  const [formData, setFormData] = useState({
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
    winnerOfTheWeek: false,
    logoOrDeck: "",
    logoOrDeckMimeType: "",
    logoOrDeckFileName: "",
    africanCountry: "",
  });

  const [errors, setErrors] = useState({});
  const [fileError, setFileError] = useState("");

  const requiredFields = ["fullName", "email", "companyName", "pitchVideo"];

  const validate = () => {
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required";
      }
    });
    return newErrors;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");

    if (!file) {
      setFormData((prev) => ({
        ...prev,
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
      setFormData((prev) => ({
        ...prev,
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
    setFormData((prev) => ({
      ...prev,
      logoOrDeck: "",
      logoOrDeckMimeType: "",
      logoOrDeckFileName: "",
    }));
    setFileError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const payload = {
      fullName: formData.fullName.trim(),
      companyName: formData.companyName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      pitchCategory: formData.pitchCategory,
      africanCountry: formData.africanCountry,
      oneSentenceSummary: formData.oneSentenceSummary.trim(),
      pitchVideo: formData.pitchVideo.trim(),
      stage: formData.stage,
      fundingGoal: formData.fundingGoal.trim(),
      whyYou: formData.whyYou.trim(),
      logoOrDeck: formData.logoOrDeck,
      logoOrDeckMimeType: formData.logoOrDeckMimeType,
      winnerOfTheWeek: formData.winnerOfTheWeek,
      byAdmin: true,
      consent: true,
    };

    try {
      await dispatch(createPitch(payload)).unwrap();
      onClose();
    } catch (err) {
      console.error("Pitch creation failed:", err);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setFormData({
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
        winnerOfTheWeek: false,
        logoOrDeck: "",
        logoOrDeckMimeType: "",
        logoOrDeckFileName: "",
        africanCountry: "",
      });
      setErrors({});
      setFileError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="episode-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
        >
          <h2>Add New Pitch Video</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                className={errors.fullName ? "error" : ""}
              />
              {errors.fullName && (
                <span className="error-message">{errors.fullName}</span>
              )}
            </div>

            <div className="form-group">
              <label>
                Company Name
                <span className="required">*</span>
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "error" : ""}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Pitch Category</label>
              <select
                value={formData.pitchCategory}
                onChange={(e) => handleChange("pitchCategory", e.target.value)}
                className={errors.pitchCategory ? "error" : ""}
              >
                <option value="">Select Category</option>
                {categoryOptions.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.pitchCategory && (
                <span className="error-message">{errors.pitchCategory}</span>
              )}
            </div>

            <div className="form-group">
              <label>African Country</label>
              <select
                value={formData.africanCountry}
                onChange={(e) => handleChange("africanCountry", e.target.value)}
                className={errors.africanCountry ? "error" : ""}
              >
                <option value="">Select Country</option>
                {africanCountries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {errors.africanCountry && (
                <span className="error-message">{errors.africanCountry}</span>
              )}
            </div>

            <div className="form-group">
              <label>One Sentence Summary</label>
              <textarea
                value={formData.oneSentenceSummary}
                onChange={(e) =>
                  handleChange("oneSentenceSummary", e.target.value)
                }
                className={errors.oneSentenceSummary ? "error" : ""}
              />
              {errors.oneSentenceSummary && (
                <span className="error-message">
                  {errors.oneSentenceSummary}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>
                Pitch Video URL (YouTube) <span className="required">*</span>
              </label>
              <input
                type="text"
                value={formData.pitchVideo}
                onChange={(e) => handleChange("pitchVideo", e.target.value)}
                className={errors.pitchVideo ? "error" : ""}
              />
              {errors.pitchVideo && (
                <span className="error-message">{errors.pitchVideo}</span>
              )}
            </div>

            <div className="form-group">
              <label>Stage</label>
              <select
                value={formData.stage}
                onChange={(e) => handleChange("stage", e.target.value)}
                className={errors.stage ? "error" : ""}
              >
                <option value="">Select Stage</option>
                {stageOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {errors.stage && (
                <span className="error-message">{errors.stage}</span>
              )}
            </div>

            <div className="form-group">
              <label>Funding Goal</label>
              <input
                type="text"
                value={formData.fundingGoal}
                onChange={(e) => handleChange("fundingGoal", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Why You?</label>
              <textarea
                value={formData.whyYou}
                onChange={(e) => handleChange("whyYou", e.target.value)}
                className={errors.whyYou ? "error" : ""}
              />
              {errors.whyYou && (
                <span className="error-message">{errors.whyYou}</span>
              )}
            </div>

            {/* File Upload */}
            <div className="form-group">
              <label>Logo / Deck (Optional - max 12MB)</label>
              <label className="pitch-contest-upload-label">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/gif,image/webp,application/pdf"
                  onChange={handleFileChange}
                  disabled={creating}
                  style={{ display: "none" }}
                />
                <div className="pitch-contest-upload-box">
                  <Upload size={28} className="pitch-contest-upload-icon" />
                  <p>{formData.logoOrDeckFileName || "Click to upload file"}</p>
                  <small>Images (JPEG, PNG, GIF, WebP) or PDF</small>
                </div>
              </label>

              {formData.logoOrDeckFileName && (
                <div className="pitch-contest-selected-file">
                  <span>{formData.logoOrDeckFileName}</span>
                  <button
                    type="button"
                    onClick={clearFile}
                    disabled={creating}
                    className="pitch-contest-clear-file-btn"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {fileError && <span className="error-message">{fileError}</span>}
            </div>

            {/* Winner of the Week */}
            <div className="admin-episodes-modern-form-group admin-episodes-modern-form-group-switch">
              <div className="admin-episodes-modern-switch-wrapper">
                <label htmlFor="winnerSwitch">Winner of the Week</label>
                <div className="admin-episodes-modern-switch-container">
                  <input
                    type="checkbox"
                    id="winnerSwitch"
                    className="admin-episodes-modern-switch-input"
                    checked={formData.winnerOfTheWeek}
                    onChange={(e) =>
                      handleChange("winnerOfTheWeek", e.target.checked)
                    }
                  />
                  <label
                    htmlFor="winnerSwitch"
                    className="admin-episodes-modern-switch-label"
                  >
                    <span className="admin-episodes-modern-switch-slider"></span>
                  </label>
                  <span className="admin-episodes-modern-switch-status">
                    {formData.winnerOfTheWeek ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {error && <div className="submit-error">{error}</div>}

            <div className="form-actions">
              <button
                type="button"
                className="cancel"
                onClick={onClose}
                disabled={creating}
              >
                Cancel
              </button>
              <button type="submit" className="save" disabled={creating}>
                {creating ? "Creating..." : "Save Pitch"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("episodes");
  const [isEpisodeModalOpen, setIsEpisodeModalOpen] = useState(false);
  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 639 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
      if (window.innerWidth > 639) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || isEpisodeModalOpen || isPitchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen, isEpisodeModalOpen, isPitchModalOpen]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  const handleUpdate = () => {
    navigate("/admin/update-user");
  };

  return (
    <div className="admin-dashboard">
      <motion.button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.aside
        className={isMobileMenuOpen ? "open" : ""}
        initial={false}
        animate={
          isMobile ? (isMobileMenuOpen ? { x: 0 } : { x: "-100%" }) : { x: 0 }
        }
        transition={{ duration: 0.3 }}
      >
        <h2>Admin Panel</h2>

        <nav>
          <motion.button
            className={activeTab === "episodes" ? "active" : ""}
            onClick={() => handleTabClick("episodes")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Episodes
          </motion.button>

          <motion.button
            className={activeTab === "pitch" ? "active" : ""}
            onClick={() => handleTabClick("pitch")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Pitches
          </motion.button>

          <motion.button
            className={activeTab === "messages" ? "active" : ""}
            onClick={() => handleTabClick("messages")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Messages
          </motion.button>

          <motion.button
            className={activeTab === "pitch-submissions" ? "active" : ""}
            onClick={() => handleTabClick("pitch-submissions")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Pitch Submissions
          </motion.button>

          <div className="logout-section">
            <motion.button
              className="logout-btn"
              onClick={handleUpdate}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="ti ti-settings"></i> Update Info
            </motion.button>
            <motion.button
              className="logout-btn"
              onClick={handleLogout}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="ti ti-logout"></i> Logout
            </motion.button>
          </div>
        </nav>
      </motion.aside>

      <main>
        <AnimatePresence mode="wait">
          {activeTab === "episodes" && (
            <motion.div
              key="episodes"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="header">
                <h3>Episodes</h3>
                <motion.button
                  className="add-episode-btn"
                  onClick={() => setIsEpisodeModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  + Add Episode
                </motion.button>
              </div>
              <EpisodesList />
            </motion.div>
          )}

          {activeTab === "pitch" && (
            <motion.div
              key="pitch"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="header">
                <h3>Pitch Episodes</h3>
                <motion.button
                  className="add-episode-btn"
                  onClick={() => setIsPitchModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  + Add Pitch
                </motion.button>
              </div>
              <PitchUploadList />
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h3>Messages</h3>
              <MessagesList />
            </motion.div>
          )}

          {activeTab === "pitch-submissions" && (
            <motion.div
              key="pitch-submissions"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <h3>Pitch Submissions</h3>
              <PitchList />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <EpisodeModal
        isOpen={isEpisodeModalOpen}
        onClose={() => setIsEpisodeModalOpen(false)}
      />
      <PitchModal
        isOpen={isPitchModalOpen}
        onClose={() => setIsPitchModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;
