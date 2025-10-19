import { useState } from "react";
import { motion } from "framer-motion";
import "./admin-dashboard.scss"; // SCSS file

// Episode modal
const EpisodeModal = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, youtubeUrl, spotifyUrl });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="episode-modal">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="modal-content"
      >
        <h2>Add Episode</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title (required)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description (required)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="YouTube URL (required)"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Spotify URL (optional)"
            value={spotifyUrl}
            onChange={(e) => setSpotifyUrl(e.target.value)}
          />
          <div className="form-actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save">
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Admin Dashboard
const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("episodes");
  const [episodes, setEpisodes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEpisode = (episode) => {
    setEpisodes([...episodes, episode]);
  };

  return (
    <div className="admin-dashboard">
      <aside>
        <h2>Admin Panel</h2>
        <nav>
          <button
            className={activeTab === "episodes" ? "active" : ""}
            onClick={() => setActiveTab("episodes")}
          >
            Episodes
          </button>
          <button
            className={activeTab === "messages" ? "active" : ""}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </button>
        </nav>
      </aside>

      <main>
        {activeTab === "episodes" && (
          <div>
            <div className="header">
              <h3>Episodes</h3>
              <button className="add-episode-btn" onClick={() => setIsModalOpen(true)}>
                Add Episode
              </button>
            </div>
            <ul className="episodes-list">
              {episodes.map((ep, idx) => (
                <li key={idx}>{ep.title}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            <h3>Messages</h3>
            <p>Messages will be fetched from main.</p>
          </div>
        )}
      </main>

      <EpisodeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddEpisode}
      />
    </div>
  );
};

export default AdminDashboard;
