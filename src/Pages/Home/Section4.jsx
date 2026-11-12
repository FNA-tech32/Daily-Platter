import { Col, Container, Row } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

export default function Section4() {
  return (
    <>
      <section className="promotion_section" id="promotions">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img
                src={PromotionImage}
                alt="Daily Platter Promotion"
                className="img-fluid"
              />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing Brings People Together Like Daily Platter</h2>
              <p>
                From family game nights to friendly weekend gatherings, Daily Platter
                delivers mouthwatering feasts that turn everyday meals into memorable
                celebrations. Every order is prepared from scratch with love.
              </p>
              <ul>
                <li>
                  <p>
                    <strong>100% Prime Meats & Veggies:</strong> Sourced daily from local farms for peak flavor and peak freshness.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Artisan Family Platters:</strong> Perfectly portioned combinations of gourmet burgers, seasoned fries, and dips.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Eco-Friendly Thermal Delivery:</strong> Sustainable packaging engineered to preserve steam and crunch on arrival.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* parallax scroll BG */}
      <section className="bg_paralex_scroll"></section>
    </>
  );
}
