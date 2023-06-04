import React from "react";
import "./footer.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faFacebook, faTwitter, faInstagram);

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are an e-commerce platform...</p>
                </div>
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>Email: contact@example.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Stoor 2 Door. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;


