import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/slices/messageSlice";
import SocialIcons from "@/components/Shared/Social/SocialIcons";
import waveLine from "@/images/wave-line.png";
import "./new-contact-page.scss";

const ContactUsPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage({ type: "", text: "" });
    setFieldErrors({ ...fieldErrors, [e.target.name]: "" });
  };

  const onChangeCaptcha = (value) => setCaptchaValue(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setFieldErrors((prev) => ({
        ...prev,
        captcha: "Please verify that you're not a robot.",
      }));
      return;
    }

    setLoading(true);
    setFieldErrors({});
    try {
      await dispatch(createMessage(formData)).unwrap();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setCaptchaValue(null);
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
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

            <div className="modern-form-group">
              <ReCAPTCHA
                sitekey="6LfxV_IrAAAAAD1J2Sk5IJ5XgIIsH3vPPEdxBN1X"
                onChange={onChangeCaptcha}
                theme="dark"
              />
              {fieldErrors.captcha && (
                <p className="modern-field-error">{fieldErrors.captcha}</p>
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

        {/* Right Section - Info */}
        <div className="modern-contact-right">
          <div className="modern-contact-info">
            <div className="info-block">
              <h3 className="info-title">Address</h3>
              <p className="info-text">Kurudy Inc., Delaware, USA</p>
            </div>

            <div className="info-block">
              <h3 className="info-title">Contact</h3>
              <p className="info-text">
                <i className="ti ti-mail"></i> return@kurudy.com
              </p>
              <p className="info-text">
                <i className="ti ti-phone"></i> 0123456789
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-title">Stay Connected</h3>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
