// ✅ Clean version with reCAPTCHA v3 integrated

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/slices/messageSlice";
import SocialIcons from "@/components/Shared/Social/SocialIcons";
import waveLine from "@/images/wave-line.png";
import "./new-contact-page.scss";

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const siteKey = "6LfsLvQrAAAAAJ8XNtC3gUog-kXwshZ0sgU2W49b";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage({ type: "", text: "" });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});
    setStatusMessage({ type: "", text: "" });

    if (!window.grecaptcha) {
      setStatusMessage({ type: "error", text: "reCAPTCHA not loaded." });
      setLoading(false);
      return;
    }

    try {
      await window.grecaptcha.ready(async () => {
        const token = await window.grecaptcha.execute(siteKey, {
          action: "submit",
        });
        const dataWithToken = { ...formData, recaptchaToken: token };

        try {
          await dispatch(createMessage(dataWithToken)).unwrap();
          setFormData({ name: "", email: "", message: "" });
          setStatusMessage({
            type: "success",
            text: "Message sent successfully!",
          });
        } catch (error) {
          console.error(error);
          setStatusMessage({
            type: "error",
            text: "Failed to send message. Please try again later.",
          });
        } finally {
          setLoading(false);
        }
      });
    } catch (err) {
      setStatusMessage({ type: "error", text: "reCAPTCHA execution failed." });
      setLoading(false);
    }
  };

  return (
    <section className="modern-contact-container texture-bg-2">
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-n5">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <div className="vector-line vector-line-secondary position-absolute top-50 start-50 translate-middle w-100 h-100 z-n2 mt-n10">
        <img className="w-100" src={waveLine} alt="line-secondary" />
      </div>

      <div className="modern-contact-content">
        {/* Left Section - Form */}
        <div className="modern-contact-left">
          <div className="modern-contact-header">
            <h1 className="modern-contact-title">
              GET IN <span className="highlight">TOUCH</span>
            </h1>
            <p className="modern-contact-subtitle">
              We love collaboration. Reach out to the team.
            </p>
          </div>

          <div className="modern-contact-form-wrapper">
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="modern-form-row">
                <div className="modern-form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {fieldErrors.name && (
                    <p className="modern-field-error">{fieldErrors.name}</p>
                  )}
                </div>

                <div className="modern-form-group">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {fieldErrors.email && (
                    <p className="modern-field-error">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="modern-form-group message-group">
                <div className="textarea-wrapper">
                  <textarea
                    required
                    placeholder="Message"
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    disabled={loading}
                    className="modern-submit-btn"
                  >
                    {loading ? (
                      <span className="loader"></span>
                    ) : (
                      <span className="btn-icon">
                        <i className="ti ti-send"></i>
                      </span>
                    )}
                  </button>
                </div>
                {fieldErrors.message && (
                  <p className="modern-field-error">{fieldErrors.message}</p>
                )}
              </div>

              {statusMessage.text && (
                <p
                  className={`modern-form-status ${
                    statusMessage.type === "error"
                      ? "status-error"
                      : "status-success"
                  }`}
                >
                  {statusMessage.text}
                </p>
              )}
            </form>
          </div>
          <p className="recaptcha-note">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
            apply.
          </p>
        </div>

        {/* Right Section - Info */}
        <div className="modern-contact-right">
          <div className="modern-contact-info">
            <div className="info-block">
              <h3 className="info-title">Address</h3>
              <p className="info-text">Maryland, USA</p>
            </div>

            <div className="info-block">
              <h3 className="info-title">Stay Connected</h3>
              <SocialIcons className="info-social-icons" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
