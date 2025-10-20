"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Clock, User, X } from "lucide-react";
import "./messages-list.scss";

//  NEW IMPORTS
import { useDispatch, useSelector } from "react-redux";
import { getAllMessages } from "../../redux/slices/messageSlice";

const MessageDetailModal = ({ isOpen, message, onClose }) => {
  if (!isOpen || !message) return null;

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

  return (
    <AnimatePresence>
      <motion.div
        className="message-detail-modal"
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
          <div className="modal-header">
            <h2>Message Details</h2>
            <motion.button
              className="close-btn"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X size={24} />
            </motion.button>
          </div>

          <div className="modal-body">
            <div className="detail-group">
              <label>From</label>
              <p className="detail-value">{message.name}</p>
            </div>

            <div className="detail-group">
              <label>Email</label>
              <p className="detail-value">{message.email}</p>
            </div>

            <div className="detail-group">
              <label>Phone</label>
              <p className="detail-value">
                {message.countryCode} {message.phoneNumber}
              </p>
            </div>

            <div className="detail-group">
              <label>Sent At</label>
              <p className="detail-value">{formatDate(message.createdAt)}</p>
            </div>

            <div className="detail-group full-width">
              <label>Message</label>
              <p className="detail-value message-text">{message.message}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const MessagesList = () => {
  const dispatch = useDispatch();

  //  Get data from Redux
  const { messages, isLoading, error } = useSelector((state) => state.messages);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllMessages());
  }, [dispatch]);

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

  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    setIsDetailModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="messages-container">
        <div className="loading-state">
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <p>Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="messages-container">
      {error && (
        <motion.div
          className="error-state"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>{error}</p>
        </motion.div>
      )}

      {messages.length === 0 ? (
        <div className="empty-state">
          <Mail size={48} />
          <p>No messages yet</p>
        </div>
      ) : (
        <ul className="messages-list">
          <AnimatePresence>
            {messages.map((message, idx) => (
              <motion.li
                key={message._id || idx}
                className="message-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onClick={() => handleMessageClick(message)}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="message-header">
                  <div className="message-title-section">
                    <div className="author-icon">
                      <User size={16} />
                    </div>
                    <div className="title-info">
                      <h4>{message.name}</h4>
                      <p className="email">{message.email}</p>
                    </div>
                  </div>
                  <div className="time-section">
                    <Clock size={14} />
                    <span>{formatDate(message.createdAt)}</span>
                  </div>
                </div>
                <p className="message-preview">{message.message}</p>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <MessageDetailModal
        isOpen={isDetailModalOpen}
        message={selectedMessage}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </div>
  );
};

export default MessagesList;
