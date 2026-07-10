import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <div className="contact-container">
        <div className="contact-card">

          <h1>Contact Us</h1>

          <p className="contact-text">
            We'd love to hear from you! If you have any questions about our
            courses or registration process, feel free to contact us.
          </p>

          <div className="contact-info">
            <p>📍 Chennai, Tamil Nadu</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@skillhub.com</p>
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Enter Your Message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </>
  );
}

export default Contact;