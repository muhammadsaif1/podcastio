import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// ✅ NEW IMPORTS
import { useDispatch } from "react-redux";
import { createMessage } from "../../redux/slices/messageSlice"; // adjust path if needed

const ContactUsPage = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" }); // ✅ new

  const onChangeCaptcha = (value) => {
    setCaptchaValue(value);
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phoneNumber.trim() !== "" &&
    formData.message.trim() !== "" &&
    captchaValue !== null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatusMessage({ type: "", text: "" }); // Clear status on input
  };

  const handleCountryChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setFormData({ ...formData, countryCode: selected.code });
    setStatusMessage({ type: "", text: "" }); // Clear status on input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Show error if form is not valid
    if (!isFormValid) {
      setStatusMessage({
        type: "error",
        text: "Please fill in all fields and complete the captcha.",
      });
      return;
    }

    try {
      // ✅ Dispatch Redux action to save message in backend and send email
      await dispatch(createMessage(formData)).unwrap();

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        countryCode: "",
        message: "",
      });
      setCaptchaValue(null);
      setStatusMessage({ type: "success", text: "Message sent successfully!" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatusMessage({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-container">
      <p className="contact-title text-display-one">
        Contact <span className="contact-title tcp-1">Us</span>
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <div className="phone-input-group">
            <select
              className="country-code-dropdown"
              onChange={handleCountryChange}
              value={JSON.stringify({ code: formData.countryCode || "+213" })}
            >
              <option value='{"code":"+213","flag":"🇩🇿","name":"Algeria"}'>
                🇩🇿 (Algeria) (+213)
              </option>
              <option value='{"code":"+244","flag":"🇦🇴","name":"Angola"}'>
                🇦🇴 (Angola) (+244)
              </option>
              <option value='{"code":"+229","flag":"🇧🇯","name":"Benin"}'>
                🇧🇯 (Benin) (+229)
              </option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            placeholder="Message"
            rows="8"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LcJdu8rAAAAAEjTqnTH70mKhvjDQ-Z_Zc2sGBbU"
            onChange={onChangeCaptcha}
          />
        </div>

        {/* ✅ Status message */}
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
          disabled={!isFormValid}
          className="bttn-1 bttn-filled alt-position"
        >
          <span className="text-nowrap fw-semibold">Submit</span>
          <span className="icon icon-right">
            <i className="ti ti-arrow-right"></i>
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactUsPage;
