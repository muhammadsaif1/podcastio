import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    countryCode: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);

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
  };

  const handleCountryChange = (e) => {
    const selected = JSON.parse(e.target.value);
    setFormData({ ...formData, countryCode: selected.code });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // This will later call backend API
    console.log("Form Submitted:", formData);
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
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <div className="phone-input-group">
            <select
              className="country-code-dropdown"
              onChange={handleCountryChange}
            >
              <option value='{"code":"+213","flag":"🇩🇿","name":"Algeria"}'>
                🇩🇿 (Algeria) (+213)
              </option>
              <option value='{"code":"+244","flag":"🇦🇴","name":"Angola"}'>
                🇦🇏 (Angola) (+244)
              </option>
              <option value='{"code":"+229","flag":"🇧🇯","name":"Benin"}'>
                🇧🇯 (Benin) (+229)
              </option>
            </select>

            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <textarea
            placeholder="Message"
            rows="8"
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group">
          <ReCAPTCHA
            sitekey="6LcJdu8rAAAAAEjTqnTH70mKhvjDQ-Z_Zc2sGBbU"
            onChange={onChangeCaptcha}
          />
        </div>

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
