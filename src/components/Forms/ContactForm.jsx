import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    // console.log(form);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form action="#" className="border-dashed pt-4">
      <div className="d-grid gap-4">
        <div className="input-wrapper d-grid gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name...."
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="input-wrapper d-grid gap-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email...."
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div className="input-wrapper d-grid gap-4">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter Your Phone...."
            onChange={handleChange}
            value={form.phone}
          />
        </div>
        <div className="input-wrapper d-grid gap-4">
          <label htmlFor="message">Message</label>
          <textarea
            rows="4"
            id="message"
            placeholder="Enter Your Message...."
            onChange={handleChange}
            value={form.message}
          ></textarea>
        </div>
      </div>
      <button
        className="bttn-1 mt-lg-10 mt-sm-6 mt-4"
        onClick={handleFormSubmit}
      >
        Send Message
        <span className="icon d-center icon-right">
          <i className="ti ti-arrow-narrow-right"></i>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
