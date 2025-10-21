"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import "./admin-dashboard.scss";
import { EpisodesList } from "@/components/admin/episodes-list";
import { MessagesList } from "@/components/admin/messages-list";

import { useDispatch, useSelector } from "react-redux";
import { createEpisode as createEpisodeAction } from "@/redux/slices/episodeSlice"; // adjust path if needed
import PitchList from "@/components/admin/pitch-list";

const EpisodeModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const creating = useSelector((state) => state.episodes.creating);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [tag, setTag] = useState("");
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
      tag: tag.trim(), // single string sent to backend
    };

    try {
      // dispatch redux create action and wait for completion
      await dispatch(createEpisodeAction(payload)).unwrap();
      // success - reset and close
      resetForm();
      onClose();
    } catch (err) {
      // show server error
      setSubmitError(err || "Failed to create episode");
    }
  };

  const handleFieldChange = (field, value) => {
    if (field === "title") setTitle(value);
    if (field === "description") setDescription(value);
    if (field === "youtubeUrl") setYoutubeUrl(value);
    if (field === "authorName") setAuthorName(value);
    if (field === "spotifyUrl") setSpotifyUrl(value);
    if (field === "tag") setTag(value);

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
                Title
                <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter episode title"
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
                Description
                <span className="required">*</span>
              </label>
              <textarea
                placeholder="Enter episode description"
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
                YouTube URL
                <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="https://youtube.com/..."
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
                Author Name
                <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter author name"
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
                placeholder="https://spotify.com/..."
                value={spotifyUrl}
                onChange={(e) =>
                  handleFieldChange("spotifyUrl", e.target.value)
                }
              />
            </div>

            {/* NEW: Tag dropdown (required) */}
            <div className="form-group">
              <label>
                Tag
                <span className="required">*</span>
              </label>
              <select
                value={tag}
                onChange={(e) => handleFieldChange("tag", e.target.value)}
                className={errors.tag ? "error" : ""}
              >
                <option value="">Select a tag</option>
                <option value="investor-education">Investor-Education</option>
                <option value="pitch">Pitch</option>
                <option value="founder">Founder</option>
              </select>
              {errors.tag && (
                <span className="error-message">{errors.tag}</span>
              )}
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

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("episodes");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 639 : false
  );

  // keep track of viewport size so we only apply slide animation on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 639);
      // if switching to desktop, ensure mobile menu closed
      if (window.innerWidth > 639) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    // initial run in case render was server-side
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // NOTE: create happens in EpisodeModal via redux dispatch + unwrap
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
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

      {/* on desktop we force x: 0 so the aside stays visible */}
      <motion.aside
        className={isMobileMenuOpen ? "open" : ""}
        initial={false}
        animate={
          isMobile ? (isMobileMenuOpen ? { x: 0 } : { x: "-100%" }) : { x: 0 }
        }
        transition={{ duration: 0.3 }}
        style={{ willChange: "transform" }}
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
            className={activeTab === "messages" ? "active" : ""}
            onClick={() => handleTabClick("messages")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Messages
          </motion.button>

          {/* NEW: Pitch sidebar button (you will add list later) */}
          <motion.button
            className={activeTab === "pitch" ? "active" : ""}
            onClick={() => handleTabClick("pitch")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            Pitch
          </motion.button>
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
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  + Add Episode
                </motion.button>
              </div>
              <EpisodesList />
            </motion.div>
          )}

          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Messages</h3>
              <MessagesList />
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
              <h3>Pitch</h3>

              {/* <div className="pitch-placeholder">Pitch list coming soon.</div> */}
              <PitchList />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <EpisodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;
