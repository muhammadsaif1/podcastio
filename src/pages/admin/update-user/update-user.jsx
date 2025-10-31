"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import loginImage from "@/images/sign-up-img.png";
import "./update-user.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/redux/slices/authSlice";

const UpdateUser = () => {
  const [updateType, setUpdateType] = useState("email"); // 'email' or 'password'
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    // Validation
    if (updateType === "email") {
      if (!email || !confirmEmail) {
        setError("Please enter both email fields.");
        setIsLoading(false);
        return;
      }
      if (email !== confirmEmail) {
        setError("Emails do not match.");
        setIsLoading(false);
        return;
      }
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        setIsLoading(false);
        return;
      }
    } else {
      if (!password || !confirmPassword) {
        setError("Please enter both password fields.");
        setIsLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        setIsLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setIsLoading(false);
        return;
      }
    }

    try {
      const updateData = {
        id: user._id,
        ...(updateType === "email" ? { email } : { password }),
      };

      const resultAction = await dispatch(updateUser(updateData));

      if (updateUser.fulfilled.match(resultAction)) {
        setSuccess(
          `${
            updateType === "email" ? "Email" : "Password"
          } updated successfully!`
        );
        setEmail("");
        setConfirmEmail("");
        setPassword("");
        setConfirmPassword("");
        setIsLoading(false);

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000);
      } else {
        setError(resultAction.payload || "Failed to update user");
        setIsLoading(false);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.log(err);
      setIsLoading(false);
    }
  };

  return (
    <div className="update-user-page">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="update-user-card"
      >
        <div className="update-image">
          <img
            src={loginImage}
            alt="Update User Illustration"
            className="object-cover"
          />
        </div>

        <div className="update-form-wrapper">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="update-title"
          >
            Update Profile
          </motion.h2>

          {/* Update Type Selector */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="update-type-selector"
          >
            <button
              type="button"
              className={`type-btn ${
                updateType === "password" ? "active" : ""
              }`}
              onClick={() => {
                setUpdateType("password");
                setError("");
                setSuccess("");
              }}
              disabled={isLoading}
            >
              Update Password
            </button>
            <button
              type="button"
              className={`type-btn ${updateType === "email" ? "active" : ""}`}
              onClick={() => {
                setUpdateType("email");
                setError("");
                setSuccess("");
              }}
              disabled={isLoading}
            >
              Update Email
            </button>
          </motion.div>

          <form onSubmit={handleSubmit} className="update-form">
            {updateType === "email" ? (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="form-group"
                >
                  <label>New Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter new email"
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="form-group"
                >
                  <label>Confirm Email</label>
                  <input
                    type="email"
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    placeholder="Confirm new email"
                    disabled={isLoading}
                  />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="form-group"
                >
                  <label>New Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    disabled={isLoading}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="form-group"
                >
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    disabled={isLoading}
                  />
                </motion.div>
              </>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="error-msg"
              >
                ⚠️ {error}
              </motion.p>
            )}

            {success && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="success-msg"
              >
                ✅ {success}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: isLoading ? 1 : 1.05 }}
              whileTap={{ scale: isLoading ? 1 : 0.97 }}
              type="submit"
              className="update-btn"
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default UpdateUser;
