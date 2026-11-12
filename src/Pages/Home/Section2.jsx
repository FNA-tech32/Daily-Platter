import { Col, Container, Row } from "react-bootstrap";
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";

export default function Section2() {
  const mockData = [
    {
      image: Pizza,
      title: "Original Recipes",
      paragraph:
        "Signature house sauces, secret seasoning rubs, and chef-curated flavor pairings that make every Daily Platter order unforgettable.",
    },
    {
      image: Salad,
      title: "Quality Foods",
      paragraph:
        "100% farm-fresh vegetables, premium aged cheeses, and locally sourced prime beef crafted to the highest culinary standards.",
    },
    {
      image: Delivery,
      title: "Fastest Delivery",
      paragraph:
        "Lightning-fast 30-minute delivery in insulated thermal packs, ensuring every bite reaches your doorstep sizzling hot.",
    },
  ];

  const scrollToMenu = (e) => {
    e.preventDefault();
    const menuEl = document.getElementById("menu");
    if (menuEl) menuEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="about_section" id="about">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Food tastes better when shared with your family</h2>
              <p>
                Welcome to Daily Platter, where culinary passion meets exceptional taste. 
                Whether you are enjoying a quick lunch or hosting an evening feast, our gourmet 
                platters and artisan burgers are freshly prepared to bring people together.
              </p>
              <a
                href="#menu"
                onClick={scrollToMenu}
                className="btn_order_now btn_red text-decoration-none"
              >
                Explore Full Menu
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-lg-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt={cardData.title}
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
