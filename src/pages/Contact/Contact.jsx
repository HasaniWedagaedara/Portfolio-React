import React from "react";
import "./Contact.css";
import { assets } from "../../assets/assets";

const Contact = () => {
  return (
    <div className="experience-container" id="contact">
      <div className="contact-container">
        <h1 className="subtitle">
          Contact <span className="highlight">Me</span>
        </h1>
        <div className="rowcontacts">
          <div className="left">
            <p>
              <i className="bx bxs-send"></i> hasanimadhumali@gmail.com
            </p>
            <p>
              <i className="bx bxl-whatsapp" title="whatsapp"></i> +94 77 859
              2125
            </p>

            <div className="icons">
              <a href="https://github.com/HasaniWedagaedara">
                <i className="bx bxl-github" title="GitHub"></i>
              </a>
              <a href="https://www.linkedin.com/in/hasanimadhumali">
                <i className="bx bxl-linkedin" title="linkedin"></i>
              </a>
              <a href="https://www.instagram.com/hasi_wedagedara?igsh=eGwyeXg0dGZpNzV0">
                <i className="bx bxl-instagram" title="instagram"></i>
              </a>
              <a href="https://www.facebook.com/hasini.wedagedara.10?mibextid=ZbWKwL">
                <i className="bx bxl-facebook" title="facebook"></i>
              </a>
            </div>
          </div>
          <div>
            <a
              href={assets.resume}
              download
              className="cv"
            >
              Click here to download My CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
