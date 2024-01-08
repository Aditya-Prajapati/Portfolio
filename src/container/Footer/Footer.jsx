import React, { useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: ""})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = () => {
    setLoading(true);
  }

  return (
    <>
      <h2 className="head-text" style={{ color: "#313bac" }}>Get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:adityaprajapati28@gmail.com" className="p-text">adityaprajapati28@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +91 9311621812" className="p-text">+91 9311621812</a>
        </div>
      </div>

      {/* {!isFormSubmitted ? <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder="Your Name" value={name} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder="Your Email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea 
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? "Sending" : "Send Message"}</button>
      </div> 
      : 
      <div>
        <h3 className="head-text">Thank You for getting in touch.</h3>
      </div>
      } */}
    </>
  )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__primarybg");;
