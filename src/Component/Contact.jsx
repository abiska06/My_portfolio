import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios({
      url: 'https://68bd016c0f2491613ee03496.mockapi.io/Porfolio', // mock API
      method: 'POST',
      data: formData, // the form data
    });
    console.log(response.data); // response from server
    setFormData({ name: '', email: '', message: '', }); // reset form
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="contact-section">
      <h2>Get In Touch</h2>
      <p>
        Have a project in mind? I'd love to hear from you. Send me a message and let's create something amazing together.
      </p>

      <div className="contact-wrapper">
        {/* Left: Form */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:sharmaabiska@gmail.com">sharmaabiska@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <a href="tel:+977 9703813308">+977 9703813308</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Kathmandu,Nepal</span>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/abiska-sharma-b44793342/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/abiska06" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
