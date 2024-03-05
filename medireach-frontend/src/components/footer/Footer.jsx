import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-bottom">
          <div className="footer-bottom-left">
          <div style={{ 
            fontSize: "28px", 
            fontWeight: "bold",
            color: "white", 
            textTransform: "uppercase" 
          }}>
            MediReach
          </div>

            <p>
              Excellant service by prioritizing the safety and security of
              patients.
            </p>
          </div>
          <div className="footer-bottom-right">
            <Link to="/" className="link">
              <span>Home</span>
            </Link>
            <Link to="/about" className="link">
              <span>About Us</span>
            </Link>
            <Link to="/guidelines" className="link">
              <span>Guidelines</span>
            </Link>
            <Link to="/" className="link">
              <span>Ask a Question</span>
            </Link>
            <Link to="/patient/register" className="link">
              <span>Register</span>
            </Link>
            <Link to="/" className="link">
              <span>Our Doctors</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
