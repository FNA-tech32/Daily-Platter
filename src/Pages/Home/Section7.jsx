import { Container, Row, Col } from "react-bootstrap";

function Section7() {
  return (
    <section className="contact_section" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col lg={9} md={10} className="text-center">
            <h4>Daily Platter Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
              Craving freshly prepared gourmet burgers, artisan sides, or signature platters? 
              Daily Platter brings sizzling hot food straight to your door in 30 minutes or less. 
              Order directly via our toll-free hotline or our alternative support line anytime!
            </p>
            
            {/* Primary & Alternative Call Buttons */}
            <div className="d-flex justify-content-center align-items-center flex-wrap gap-3 mb-4">
              <a
                href="tel:+18005557528"
                className="btn btn_red px-4 py-2 rounded-0 text-decoration-none shadow-sm"
              >
                <i className="bi bi-telephone-fill me-2"></i>
                Call: +1 (800) 555-7528
              </a>
              <a
                href="tel:+15559876543"
                className="btn btn_order_now px-4 py-2 rounded-0 text-decoration-none shadow-sm"
              >
                <i className="bi bi-phone-fill me-2"></i>
                Alt: +1 (555) 987-6543
              </a>
            </div>

            {/* Quick alternative channels */}
            <div className="d-flex justify-content-center flex-wrap gap-4 text-white pt-2">
              <div className="d-flex align-items-center">
                <i className="bi bi-envelope-check-fill text-warning me-2 fs-5"></i>
                <span>
                  <strong>Orders:</strong>{" "}
                  <a
                    href="mailto:orders@dailyplatter.com"
                    className="text-white text-decoration-underline"
                  >
                    orders@dailyplatter.com
                  </a>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-headset text-warning me-2 fs-5"></i>
                <span>
                  <strong>Alt Support:</strong>{" "}
                  <a
                    href="mailto:support@dailyplatter.com"
                    className="text-white text-decoration-underline"
                  >
                    support@dailyplatter.com
                  </a>
                </span>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt-fill text-warning me-2 fs-5"></i>
                <span>
                  <strong>Pickup Hub:</strong> 1420 Platter Blvd, Miami FL
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
