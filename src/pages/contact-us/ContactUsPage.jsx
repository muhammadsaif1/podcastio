import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/slices/messageSlice";
import SocialIcons from "@/components/Shared/Social/SocialIcons";

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
    <section className="contact-container pt-120 pb-60">
      <p className="contact-short-intro">
        We love <span>collaboration.</span> Reach
        out to the team
      </p>

      {/* Title */}
      <p className="contact-title text-display-one">
        Contact <span className="contact-title tcp-1">Us</span>
      </p>

      {/* FORM */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {fieldErrors.name && (
            <p className="field-error">{fieldErrors.name}</p>
          )}
        </div>

        <div className="form-group">
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {fieldErrors.email && (
            <p className="field-error">{fieldErrors.email}</p>
          )}
        </div>

        <div className="form-group">
          <textarea
            required
            placeholder="Message"
            rows="8"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {fieldErrors.message && (
            <p className="field-error">{fieldErrors.message}</p>
          )}
        </div>

        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LcJdu8rAAAAAEjTqnTH70mKhvjDQ-Z_Zc2sGBbU"
            onChange={onChangeCaptcha}
          />
          {fieldErrors.captcha && (
            <p className="field-error">{fieldErrors.captcha}</p>
          )}
        </div>

        {statusMessage.text && (
          <p
            className={`form-status ${
              statusMessage.type === "error" ? "status-error" : "status-success"
            }`}
          >
            {statusMessage.text}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bttn-1 bttn-filled alt-position"
        >
          <span className="text-nowrap fw-semibold">
            {loading ? "Submitting..." : "Submit"}
          </span>
          <span className="icon icon-right">
            <i className="ti ti-arrow-right"></i>
          </span>
        </button>
      </form>

      <SocialIcons />

      {/* ✅ Business Address */}
      <p className="contact-address">
        Physical / Business Address:{" "}
        <span>Kurudy Inc., Delaware, USA</span>
      </p>
    </section>
  );
};

export default ContactUsPage;
