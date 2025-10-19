import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPage = () => {

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <>
      <div className="contact-container">
        <p className="contact-title text-display-one">
          Contact <span className="contact-title tcp-1">Us</span>
        </p>

        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" name="name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" name="email" />
          </div>

          <div className="form-group">
            <div className="phone-input-group">
              <select className="country-code-dropdown">
                <option
                  value='{"code":"+213","flag":"🇩🇿","name":"Algeria"}'
                >
                  🇩🇿 (Algeria) (+213)
                </option>
                <option
                  value='{"code":"+244","flag":"🇦🇴","name":"Angola"}'
                >
                  🇦🇴 (Angola) (+244)
                </option>
                <option
                  value='{"code":"+229","flag":"🇧🇯","name":"Benin"}'
                >
                  🇧🇯 (Benin) (+229)
                </option>
                {/* ... add remaining countries here ... */}
              </select>

              <input
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                className="phone-input"
              />
            </div>
          </div>

          <div className="form-group">
            <textarea placeholder="Message" rows="8" name="message"></textarea>
          </div>

          <div className="form-group">
                <div style={{ width: '304px', height: '78px' }}>
                  <ReCAPTCHA
                    sitekey="6LcJdu8rAAAAAEjTqnTH70mKhvjDQ-Z_Zc2sGBbU"
                    onChange={onChange}
                  />
                </div>
          </div>

          <button type="submit" className="bttn-1 bttn-filled alt-position">
            <span className="text-nowrap fw-semibold">Submit</span>
            <span className="icon icon-right">
              <i className="ti ti-arrow-right"></i>
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUsPage;
