import { Col, Container, Row } from "react-bootstrap";
import Burger from "../../assets/hero/hero-2.png";

export default function Section1() {
  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById("menu");
    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="hero_section" id="home">
        <Container>
          <Row>
            <Col lg={7} className="mb-5 mb-lg-0">
              <div className="position-relative">
                <img src={Burger} alt="Daily Platter Hero Special" className="img-fluid" />
                <div className="price_badge">
                  <div className="badge_text">
                    <h4 className="h4_xs">Only</h4>
                    <h4 className="h3_lg">$6.99</h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="hero_text text-center">
                <h1 className="text-white">Daily Platter</h1>
                <h2 className="text-white">Signature Burgers</h2>
                <p className="text-white pt-2 pb-4">
                  Handcrafted gourmet burgers, crispy golden fries, and wholesome family platters prepared fresh daily with 100% prime ingredients.
                </p>
                <a
                  href="#menu"
                  onClick={scrollToMenu}
                  className="btn_order_now text-decoration-none"
                >
                  Order Now
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
