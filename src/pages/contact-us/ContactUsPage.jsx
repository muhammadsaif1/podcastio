import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/slices/messageSlice";
import waveLine from "@/images/wave-line.png";
import "./new-contact-page.scss";
import ReCAPTCHA from "react-google-recaptcha";
import { ArrowRight, Loader2 } from "lucide-react";

const ContactUsPage = () => {
  const dispatch = useDispatch();
  const siteKey = "6LcgV_QrAAAAALz3QV8w3olJEGfgAZjC0gGmjRKX";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaToken, setCaptchaToken] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage({ type: "", text: "" });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
    setStatusMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage({ type: "", text: "" });

    if (!captchaToken) {
      setStatusMessage({
        type: "error",
        text: "⚠️ Please verify that you are not a robot before submitting.",
      });
      setLoading(false);
      return;
    }

    setLoading(true);
    setFieldErrors({});

    try {
      const dataWithToken = { ...formData, recaptchaToken: captchaToken };
      await dispatch(createMessage(dataWithToken)).unwrap();

      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken(null);
      setStatusMessage({
        type: "success",
        text: "✅ Message sent successfully!",
      });
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "❌ Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="modern-contact-container texture-bg-2">
      {/* Background Lines */}
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-n5">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <div className="vector-line vector-line-secondary position-absolute top-50 start-50 translate-middle w-100 h-100 z-n2 mt-n10">
        <img className="w-100" src={waveLine} alt="line-secondary" />
      </div>

      {/* Header */}
      <div className="modern-contact-header">
        <h1 className="modern-contact-title">
          GET IN <span className="highlight">TOUCH</span>
        </h1>
        <p className="modern-contact-subtitle">
          We love collaboration. Reach out to the team.
        </p>
      </div>

      {/* Content */}
      <div className="modern-contact-content">
        {/* Left Section - Form */}
        <div className="modern-contact-left">
          <div className="modern-contact-form-wrapper">
            <form className="modern-contact-form" onSubmit={handleSubmit}>
              <div className="modern-form-row">
                <div className="modern-form-group">
                  <input
                    type="text"
                    placeholder="Your Name *"
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
                    placeholder="Email *"
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
                    placeholder="Message *"
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>

                  <button
                    type="submit"
                    disabled={loading}
                    className={`newsletter-cta ${
                      !captchaToken ? "disabled" : ""
                    }`}
                    aria-label="Submit"
                  >
                    <span className="newsletter-cta__text">
                      {loading ? "Sending..." : "Submit"}
                    </span>
                    <span className="newsletter-cta__icon" aria-hidden>
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <ArrowRight size={16} />
                      )}
                    </span>
                  </button>
                </div>

                {fieldErrors.message && (
                  <p className="modern-field-error">{fieldErrors.message}</p>
                )}
              </div>

              {/* ✅ Status Message (always visible under button) */}
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

              {/* ✅ reCAPTCHA */}
              <div className="captcha-div">
                <ReCAPTCHA sitekey={siteKey} onChange={handleCaptchaChange} />
              </div>
            </form>
          </div>

          <p className="recaptcha-note">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a> apply.
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
              <div className="social-links">
                <a href="http://creators.spotify.com/pod/show/returnus">
                  <i className="ti ti-brand-spotify"></i>
                </a>
                <a href="https://www.youtube.com/@ReturnUs">
                  <i className="ti ti-brand-youtube"></i>
                </a>
                <a href="#">
                  <i className="ti ti-brand-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
