"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Clock,
  User,
  X,
  Edit2,
  Trash2,
  Check,
  XCircle,
  Eye,
  Star,
  AlertTriangle,
  Trophy,
} from "lucide-react";
import "./pitch-upload-list.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchPitches,
  updatePitch,
  deletePitch,
} from "@/redux/slices/pitchSlice";
import { AFRICAN_COUNTRY_CODE_MAP } from "../home/PitchContestSection";
import ReactCountryFlag from "react-country-flag";

// Dropdown options
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

// YouTube helpers
const getYoutubeVideoId = (url) => {
  if (!url) return null;

  // Handles all YouTube formats: watch?v=, shorts/, youtu.be/, embed/
  const regex =
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&\n?#]+)/i;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const getYoutubeThumbnail = (url) => {
  const id = getYoutubeVideoId(url);
  return id
    ? `https://img.youtube.com/vi/${id}/mqdefault.jpg`
    : "/pitch-thumbnail.jpg";
};

const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeVideoId(url);
  if (!id) return null;

  // playsinline=1 is crucial for Shorts & mobile to play inline without fullscreen
  return `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
};
const YouTubeModal = ({ isOpen, videoUrl, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="admin-pitches-modern-youtube-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="admin-pitches-modern-youtube-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <button
            className="admin-pitches-modern-youtube-close-btn"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <div className="admin-pitches-modern-youtube-player">
            <iframe
              src={getYoutubeEmbedUrl(videoUrl)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PitchDetailModal = ({ isOpen, pitch, onClose, onUpdated, onEdit }) => {
  const dispatch = useDispatch();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !pitch) return null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleEdit = () => {
    onEdit(pitch);
    onClose();
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await dispatch(deletePitch(pitch._id)).unwrap();
      if (typeof onUpdated === "function") onUpdated(null, pitch._id);
      onClose();
    } catch (err) {
      console.error("Error deleting pitch:", err);
      alert("Failed to delete pitch. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const renderLogoOrDeck = () => {
    if (!pitch.logoOrDeck || !pitch.logoOrDeckMimeType) return null;

    const dataUri = `data:${pitch.logoOrDeckMimeType};base64,${pitch.logoOrDeck}`;

    if (pitch.logoOrDeckMimeType === "application/pdf") {
      return (
        <div className="admin-pitches-modern-pdf-preview">
          <object
            src={dataUri}
            width="100%"
            height="600px"
            style={{ border: "none", borderRadius: "8px" }}
            title="Pitch Deck PDF"
          >
            <p style={{ padding: "20px", textAlign: "center" }}>
              PDF preview not available in your browser.
            </p>
          </object>
        </div>
      );
    }

    return (
      <div className="admin-pitches-modern-image-preview">
        <img
          src={dataUri}
          alt="Company Logo/Deck"
          className="admin-pitches-modern-logo-preview"
        />
      </div>
    );
  };

  const getCountryCodeFromName = (value) => {
    if (!value) return null;

    // Remove emoji if present and trim
    const cleanedName = value.replace(/[\u{1F1E6}-\u{1F1FF}]/gu, "").trim();

    return AFRICAN_COUNTRY_CODE_MAP[cleanedName] || null;
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className="admin-pitches-modern-detail-modal"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="admin-pitches-modern-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="admin-pitches-modern-modal-header">
              <h2>{pitch.companyName || pitch.fullName}</h2>
              <div className="admin-pitches-modern-header-actions">
                <motion.button
                  className="admin-pitches-modern-close-btn"
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </div>

            {showDeleteConfirm && (
              <motion.div
                className="admin-pitches-modern-delete-confirmation"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p>
                  Are you sure you want to delete this pitch? This action cannot
                  be undone.
                </p>
                <div className="admin-pitches-modern-confirmation-actions">
                  <motion.button
                    className="admin-pitches-modern-confirm-btn admin-pitches-modern-cancel"
                    onClick={() => setShowDeleteConfirm(false)}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    className="admin-pitches-modern-confirm-btn admin-pitches-modern-delete"
                    onClick={handleDelete}
                    disabled={isDeleting}
                  >
                    {isDeleting ? "Deleting..." : "Delete"}
                  </motion.button>
                </div>
              </motion.div>
            )}

            <div className="admin-pitches-modern-modal-body">
              <div className="admin-pitches-modern-detail-group"></div>

              <div className="admin-pitches-modern-detail-group">
                <label>Full Name</label>
                <p className="admin-pitches-modern-detail-value">
                  {pitch.fullName}
                </p>
              </div>

              {pitch.companyName && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Company Name</label>
                  <p className="admin-pitches-modern-detail-value">
                    {pitch.companyName}
                  </p>
                </div>
              )}

              <div className="admin-pitches-modern-detail-group">
                <label>Email</label>
                <p className="admin-pitches-modern-detail-value">
                  {pitch.email}
                </p>
              </div>

              {pitch.phone && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Phone</label>
                  <p className="admin-pitches-modern-detail-value">
                    {pitch.phone}
                  </p>
                </div>
              )}
              {pitch.pitchCategory && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Pitch Category</label>
                  <p className="admin-pitches-modern-detail-value">
                    {pitch.pitchCategory}
                  </p>
                </div>
              )}
              {pitch.stage && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Stage</label>
                  <p className="admin-pitches-modern-detail-value">
                    {pitch.stage}
                  </p>
                </div>
              )}
              {pitch.africanCountry && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Country</label>
                  <p className="admin-pitches-modern-detail-value">
                    {(() => {
                      const code = getCountryCodeFromName(pitch.africanCountry);
                      return code ? (
                        <ReactCountryFlag
                          countryCode={code}
                          svg
                          style={{
                            width: "1.8em",
                            height: "1.8em",
                            borderRadius: "4px",
                            boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                            marginRight: "6px",
                          }}
                        />
                      ) : null;
                    })()}
                    {pitch.africanCountry.slice(5)}
                  </p>
                </div>
              )}
              <div className="admin-pitches-modern-detail-group">
                <label>Winner of the Week</label>
                <p className="admin-pitches-modern-detail-value">
                  {pitch.winnerOfTheWeek ? "Yes" : "No"}
                </p>
              </div>

              {pitch.fundingGoal && (
                <div className="admin-pitches-modern-detail-group">
                  <label>Funding Goal</label>
                  <p className="admin-pitches-modern-detail-value">
                    {pitch.fundingGoal}
                  </p>
                </div>
              )}
              {pitch.oneSentenceSummary && (
                <div className="admin-pitches-modern-detail-group admin-pitches-modern-full-width">
                  <label>One Sentence Summary</label>
                  <p className="admin-pitches-modern-detail-value admin-pitches-modern-description-text">
                    {pitch.oneSentenceSummary}
                  </p>
                </div>
              )}
              {pitch.whyYou && (
                <div className="admin-pitches-modern-detail-group admin-pitches-modern-full-width">
                  <label>Why You?</label>
                  <p className="admin-pitches-modern-detail-value admin-pitches-modern-description-text">
                    {pitch.whyYou}
                  </p>
                </div>
              )}
              <div className="admin-pitches-modern-detail-group">
                <label>Pitch Video Link</label>
                <div className="admin-pitches-modern-link-with-button">
                  <a
                    href={pitch.pitchVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="admin-pitches-modern-detail-link"
                  >
                    {pitch.pitchVideo}
                  </a>
                  <motion.button
                    className="admin-pitches-modern-play-btn"
                    onClick={() => setYoutubeModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} /> Watch
                  </motion.button>
                </div>
              </div>

              {pitch.logoOrDeck && (
                <div className="admin-pitches-modern-detail-group admin-pitches-modern-full-width">
                  <label>Logo / Deck</label>
                  {renderLogoOrDeck()}
                </div>
              )}

              <div className="admin-pitches-modern-detail-group">
                <label>Submitted</label>
                <p className="admin-pitches-modern-detail-value">
                  {formatDate(pitch.createdAt)}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <YouTubeModal
        isOpen={youtubeModalOpen}
        videoUrl={pitch?.pitchVideo}
        onClose={() => setYoutubeModalOpen(false)}
      />
    </>
  );
};

const PitchEditModal = ({ isOpen, pitch, onClose, onUpdated }) => {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    if (pitch) {
      setEditData({ ...pitch });
    }
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [pitch, isOpen]);

  if (!isOpen || !pitch) return null;

  const handleCancel = () => {
    setEditData({ ...pitch });
    onClose();
  };

  const handleUpdate = async () => {
    if (!editData) return;
    try {
      setIsUpdating(true);
      await dispatch(
        updatePitch({ id: editData._id, updates: editData })
      ).unwrap();
      if (typeof onUpdated === "function") onUpdated(editData);
      onClose();
    } catch (err) {
      console.error("Error updating pitch:", err);
      alert("Failed to update pitch. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="admin-pitches-modern-detail-modal"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          className="admin-pitches-modern-modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="admin-pitches-modern-modal-header">
            <h2>Edit Pitch</h2>
            <div className="admin-pitches-modern-header-actions">
              <motion.button
                className="admin-pitches-modern-close-btn"
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} />
              </motion.button>
            </div>
          </div>

          <div className="admin-pitches-modern-modal-body">
            <div className="admin-pitches-modern-edit-form">
              <div className="admin-pitches-modern-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={editData?.fullName || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, fullName: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  value={editData?.companyName || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, companyName: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editData?.email || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Phone</label>
                <input
                  type="text"
                  value={editData?.phone || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, phone: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Pitch Category</label>
                <select
                  value={editData?.pitchCategory || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, pitchCategory: e.target.value })
                  }
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Stage</label>
                <select
                  value={editData?.stage || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, stage: e.target.value })
                  }
                >
                  <option value="">Select Stage</option>
                  {stageOptions.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Country</label>
                <select
                  value={editData?.africanCountry || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, africanCountry: e.target.value })
                  }
                >
                  <option value="">Select Country</option>
                  {africanCountries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Funding Goal</label>
                <input
                  type="text"
                  value={editData?.fundingGoal || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, fundingGoal: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>One Sentence Summary</label>
                <textarea
                  value={editData?.oneSentenceSummary || ""}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      oneSentenceSummary: e.target.value,
                    })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Why You?</label>
                <textarea
                  value={editData?.whyYou || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, whyYou: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group">
                <label>Pitch Video URL</label>
                <input
                  type="text"
                  value={editData?.pitchVideo || ""}
                  onChange={(e) =>
                    setEditData({ ...editData, pitchVideo: e.target.value })
                  }
                />
              </div>

              <div className="admin-pitches-modern-form-group admin-pitches-modern-form-group-switch">
                <div className="admin-pitches-modern-switch-wrapper">
                  <label htmlFor="winnerSwitch">Winner of the Week</label>
                  <div className="admin-pitches-modern-switch-container">
                    <input
                      type="checkbox"
                      id="winnerSwitch"
                      className="admin-pitches-modern-switch-input"
                      checked={editData?.winnerOfTheWeek || false}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          winnerOfTheWeek: e.target.checked,
                        })
                      }
                    />
                    <label
                      htmlFor="winnerSwitch"
                      className="admin-pitches-modern-switch-label"
                    >
                      <span className="admin-pitches-modern-switch-slider"></span>
                    </label>
                    <span className="admin-pitches-modern-switch-status">
                      {editData?.winnerOfTheWeek ? "Yes" : "No"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="admin-pitches-modern-edit-actions">
                <motion.button
                  className="admin-pitches-modern-action-btn admin-pitches-modern-cancel"
                  onClick={handleCancel}
                  disabled={isUpdating}
                >
                  <XCircle size={18} /> Cancel
                </motion.button>
                <motion.button
                  className="admin-pitches-modern-action-btn admin-pitches-modern-update"
                  onClick={handleUpdate}
                  disabled={isUpdating}
                >
                  <Check size={18} /> {isUpdating ? "Updating..." : "Update"}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PitchUploadList = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state.pitches || {});
  const listFromStore = reduxState.list || [];
  const loadingList = reduxState.loadingList || false;
  const errorFromStore = reduxState.error || null;

  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(loadingList);
  const [error, setError] = useState(errorFromStore);
  const [selectedPitch, setSelectedPitch] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [youtubeModalOpen, setYoutubeModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  useEffect(() => {
    dispatch(fetchPitches());
  }, [dispatch]);

  useEffect(() => {
    setLoading(loadingList);
  }, [loadingList]);

  useEffect(() => {
    setError(errorFromStore);
  }, [errorFromStore]);

  useEffect(() => {
    if (Array.isArray(listFromStore)) {
      // Only show admin-created pitches
      const adminPitches = listFromStore.filter(
        (pitch) => pitch.byAdmin === true
      );
      setPitches(adminPitches);
    } else {
      setPitches([]);
    }
  }, [listFromStore]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const handleViewClick = (e, pitch) => {
    e.stopPropagation();
    setSelectedPitch(pitch);
    setIsDetailModalOpen(true);
  };

  const handleEditClick = (e, pitch) => {
    e.stopPropagation();
    setSelectedPitch(pitch);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (e, pitch) => {
    e.stopPropagation();
    setShowDeleteConfirm(pitch);
  };

  const handleDeleteConfirm = async () => {
    if (!showDeleteConfirm) return;
    try {
      await dispatch(deletePitch(showDeleteConfirm._id)).unwrap();
      await dispatch(fetchPitches());
      setShowDeleteConfirm(null);
    } catch (err) {
      console.error("Error deleting pitch:", err);
      alert("Failed to delete pitch. Please try again.");
    }
  };

  const handleThumbnailClick = (e, videoUrl) => {
    e.stopPropagation();
    setSelectedVideoUrl(videoUrl);
    setYoutubeModalOpen(true);
  };

  const handleModalUpdated = async (updatedPitch, deletedId) => {
    try {
      await dispatch(fetchPitches());
      if (updatedPitch) {
        setPitches((prev) =>
          prev.map((p) => (p._id === updatedPitch._id ? updatedPitch : p))
        );
        setSelectedPitch(updatedPitch);
      }
      if (deletedId) {
        setPitches((prev) => prev.filter((p) => p._id !== deletedId));
        setSelectedPitch(null);
      }
    } catch (err) {
      console.warn("Failed to refresh pitches after modal update", err);
    }
  };

  const handleEditFromDetail = (pitch) => {
    setSelectedPitch(pitch);
    setIsEditModalOpen(true);
  };

  if (loading) {
    return (
      <div className="admin-pitches-modern-container">
        <div className="admin-pitches-modern-loading-state">
          <motion.div
            className="admin-pitches-modern-spinner"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <p>Loading pitches...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-pitches-modern-container">
      <div className="admin-pitches-modern-header-section">
        <h2>All Pitches</h2>
      </div>

      {error && (
        <motion.div
          className="admin-pitches-modern-error-state"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>Could not fetch pitches at this moment</p>
        </motion.div>
      )}

      {pitches.length === 0 && !error ? (
        <div className="admin-pitches-modern-empty-state">
          <Play size={48} />
          <p>No admin pitches available</p>
        </div>
      ) : (
        <ul className="admin-pitches-modern-list">
          <AnimatePresence>
            {pitches.map((pitch, idx) => {
              const sortedPitches = [...pitches].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
              );
              const pitchNumber =
                sortedPitches.findIndex((p) => p._id === pitch._id) + 1;

              return (
                <motion.li
                  key={pitch._id || idx}
                  className="admin-pitches-modern-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {pitch.pitchVideo ? (
                    <div
                      className="admin-pitches-modern-thumbnail"
                      onClick={(e) => handleThumbnailClick(e, pitch.pitchVideo)}
                    >
                      <img
                        src={
                          getYoutubeThumbnail(pitch.pitchVideo) ||
                          "/placeholder.svg"
                        }
                        alt={pitch.companyName || pitch.fullName}
                      />
                      <div className="admin-pitches-modern-play-overlay">
                        <Play size={32} />
                      </div>
                      {pitch.winnerOfTheWeek && (
                        <div className="admin-pitches-modern-winner-overlay">
                          <Trophy size={24} />
                        </div>
                      )}
                      <div className="admin-pitches-modern-pitch-number">
                        PITCH {String(pitchNumber).padStart(2, "0")}
                      </div>
                    </div>
                  ) : (
                    <div className="admin-pitches-modern-pitch-number admin-pitches-modern-thumbnail">
                      PITCH {String(pitchNumber).padStart(2, "0")}
                    </div>
                  )}

                  <div className="admin-pitches-modern-content">
                    <div className="admin-pitches-modern-header">
                      <div className="admin-pitches-modern-title-section">
                        <div className="admin-pitches-modern-title-info">
                          <h4>
                            {pitch.companyName || pitch.fullName}
                            <span className="admin-pitches-modern-author-inline">
                              <User size={14} />
                              {pitch.fullName}
                            </span>
                          </h4>
                          {pitch.pitchCategory && (
                            <div className="admin-pitches-modern-tag-badge">
                              {pitch.pitchCategory}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="admin-pitches-modern-actions">
                        <motion.button
                          className="admin-pitches-modern-action-icon admin-pitches-modern-view-icon"
                          onClick={(e) => handleViewClick(e, pitch)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="View details"
                        >
                          <Eye size={18} />
                        </motion.button>
                        <motion.button
                          className="admin-pitches-modern-action-icon admin-pitches-modern-edit-icon"
                          onClick={(e) => handleEditClick(e, pitch)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="Edit pitch"
                        >
                          <Edit2 size={18} />
                        </motion.button>
                        <motion.button
                          className="admin-pitches-modern-action-icon admin-pitches-modern-delete-icon"
                          onClick={(e) => handleDeleteClick(e, pitch)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          title="Delete pitch"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>
                    <div className="admin-pitches-modern-time-section">
                      <Clock size={14} />
                      <span>{formatDate(pitch.createdAt)}</span>
                    </div>
                    {pitch.oneSentenceSummary && (
                      <p className="admin-pitches-modern-preview">
                        {pitch.oneSentenceSummary}
                      </p>
                    )}
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      )}

      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            className="admin-pitches-modern-delete-confirm-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowDeleteConfirm(null)}
          >
            <motion.div
              className="admin-pitches-modern-delete-confirm-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="admin-pitches-modern-delete-confirm-header">
                <AlertTriangle size={24} color="#ff6666" />
                <h3>Confirm Delete</h3>
              </div>
              <p>
                Are you sure you want to delete the pitch from "
                {showDeleteConfirm.companyName || showDeleteConfirm.fullName}"?
                This action cannot be undone.
              </p>
              <div className="admin-pitches-modern-delete-confirm-actions">
                <motion.button
                  className="admin-pitches-modern-confirm-btn admin-pitches-modern-cancel"
                  onClick={() => setShowDeleteConfirm(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <XCircle size={18} /> Cancel
                </motion.button>
                <motion.button
                  className="admin-pitches-modern-confirm-btn admin-pitches-modern-delete"
                  onClick={handleDeleteConfirm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Trash2 size={18} /> Delete
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <PitchDetailModal
        isOpen={isDetailModalOpen}
        pitch={selectedPitch}
        onClose={() => {
          document.body.style.overflow = "auto";
          setIsDetailModalOpen(false);
        }}
        onUpdated={handleModalUpdated}
        onEdit={handleEditFromDetail}
      />

      <PitchEditModal
        isOpen={isEditModalOpen}
        pitch={selectedPitch}
        onClose={() => {
          document.body.style.overflow = "auto";
          setIsEditModalOpen(false);
        }}
        onUpdated={handleModalUpdated}
      />

      <YouTubeModal
        isOpen={youtubeModalOpen}
        videoUrl={selectedVideoUrl}
        onClose={() => {
          document.body.style.overflow = "auto";
          setYoutubeModalOpen(false);
        }}
      />
    </div>
  );
};

export { PitchUploadList };
export default PitchUploadList;
