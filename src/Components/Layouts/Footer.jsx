import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  // Scroll State
  const [isVisible, setIsVisible] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const listenToScroll = () => {
      const heightToHidden = 250;
      const windowScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <footer>
        <Container>
          <Row>
            {/* Primary & Alternative Location */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center text-sm-start">
                <h5>Our Locations</h5>
                <p className="fw-bold mb-1 text-uppercase text-danger" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                  Main Restaurant:
                </p>
                <p>1420 Platter Boulevard, Suite 100</p>
                <p>Miami, FL 33126, United States</p>

                <p className="fw-bold mb-1 mt-3 text-uppercase text-danger" style={{ fontSize: "0.85rem", letterSpacing: "0.5px" }}>
                  Alternative Hub / Pickup:
                </p>
                <p>Express Hub: 280 Grand Avenue</p>
                <p>Downtown Miami, FL 33132</p>
              </div>
            </Col>

            {/* Working Hours */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center text-sm-start">
                <h5>Working Hours</h5>
                <p><strong>Mon - Fri:</strong> 9:00 AM - 10:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 11:00 PM</p>
                <p><strong>Sunday:</strong> 11:00 AM - 9:00 PM</p>
                <p className="text-muted mt-3" style={{ fontSize: "0.9rem" }}>
                  <i className="bi bi-clock-history me-1 text-warning"></i> 24/7 Online Order Processing
                </p>
              </div>
            </Col>

            {/* Contact & Alternative Details */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center text-sm-start">
                <h5>Order & Contact</h5>
                <p className="mb-1 text-muted" style={{ fontSize: "0.9rem" }}>Primary Hotline (Toll-Free):</p>
                <p className="mb-2">
                  <a href="tel:+18005557528" className="calling text-decoration-none">
                    +1 (800) 555-7528
                  </a>
                </p>

                <p className="mb-1 mt-2 text-muted" style={{ fontSize: "0.9rem" }}>Alternative Line / WhatsApp:</p>
                <p className="mb-2">
                  <a href="tel:+15559876543" className="fw-bold text-dark text-decoration-none">
                    <i className="bi bi-telephone-fill me-1 text-danger"></i> +1 (555) 987-6543
                  </a>
                </p>

                <p className="mb-1 mt-2 text-muted" style={{ fontSize: "0.9rem" }}>Order & Support Email:</p>
                <p className="mb-0">
                  <a href="mailto:orders@dailyplatter.com" className="text-secondary text-decoration-none">
                    orders@dailyplatter.com
                  </a>
                </p>
                <p className="mb-0">
                  <a href="mailto:support@dailyplatter.com" className="text-secondary text-decoration-none" style={{ fontSize: "0.9rem" }}>
                    Alt: support@dailyplatter.com
                  </a>
                </p>
              </div>
            </Col>

            {/* Social & Community */}
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center text-sm-start">
                <h5>Follow Us</h5>
                <p>Connect with Daily Platter for daily specials, secret platters, and vouchers!</p>
                <ul className="list-unstyled text-center text-sm-start mt-3 ps-0">
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                      <i className="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Copyright and Legal Links */}
          <Row className="copy_right">
            <Col>
              <ul className="list-unstyled text-center mb-0">
                <li>
                  © {new Date().getFullYear()} <span>Daily Platter</span>. All Rights Reserved
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#menu">Our Menu</a>
                </li>
                <li>
                  <a href="#contact">Contact & Delivery</a>
                </li>
                <li>
                  <a href="#terms">Terms Of Service</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Scroll To Top */}
      {isVisible && (
        <div className="scroll_top" onClick={scrollTop} aria-label="Scroll to top" role="button">
          <i className="bi bi-arrow-up"></i>
        </div>
      )}
    </>
  );
}

export default Footer;
