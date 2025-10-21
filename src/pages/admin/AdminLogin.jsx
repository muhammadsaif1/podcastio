"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import loginImage from "@/images/sign-up-img.png";

import "./admin-login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/redux/slices/authSlice";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ADMIN_EMAIL = "william12@admin.com";
  const ADMIN_PASSWORD = "William98";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (!email) {
        setError("Email is required");
        setIsLoading(false);
        return;
      }
      if (!password) {
        setError("Password is required");
        setIsLoading(false);
        return;
      }
      if (email !== ADMIN_EMAIL) {
        setError("Invalid email address");
        setIsLoading(false);
        return;
      }
      if (password !== ADMIN_PASSWORD) {
        setError("Incorrect password");
        setIsLoading(false);
        return;
      }

      dispatch(login());

      setError("");
      setIsLoading(false);
      navigate("/admin/dashboard");
      // navigate to dashboard or next page
    }, 500);
  };

  return (
    <div className="admin-login-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="admin-login-card"
      >
        <div className="login-image">
          <img
            src={loginImage}
            alt="Admin Login Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="login-form-wrapper">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="login-title"
          >
            Admin Login
          </motion.h2>

          <form onSubmit={handleSubmit} className="login-form">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="form-group"
            >
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                disabled={isLoading}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="form-group"
            >
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                disabled={isLoading}
              />
            </motion.div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="error-msg"
              >
                ⚠️ {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.97 }}
              type="submit"
              className="login-btn"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
