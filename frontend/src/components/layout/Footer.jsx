import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <span>© 2024 DataCommons Protocol</span>
          <a href="#" className="footer-link">
            Documentation
          </a>
          <a href="#" className="footer-link">
            GitHub
          </a>
          <a href="#" className="footer-link">
            Discord
          </a>
        </div>
        <div className="footer-status">
          <div className="footer-status-dot" />
          <span>All systems operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
