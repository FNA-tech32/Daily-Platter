import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";
import Cards from "../../Components/Layouts/Cards";

const renderRatingIcons = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className="bi bi-star-half"></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }
  }
  return stars;
};

export default function Section3() {
  const mockData = [
    {
      id: "0001",
      image: Image1,
      title: "Crispy Chicken Platter",
      paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, crunchy coleslaw",
      rating: 5,
      price: 12.99,
    },
    {
      id: "0002",
      image: Image2,
      title: "Ultimate Bacon Deluxe",
      paragraph: "House prime patty, aged cheddar, smoked bacon, caramelized onion",
      rating: 4.5,
      price: 14.50,
    },
    {
      id: "0003",
      image: Image3,
      title: "Black Sheep Platter",
      paragraph: "American cheese, tomato relish, fresh avocado, lettuce, red onion",
      rating: 4,
      price: 13.25,
    },
    {
      id: "0004",
      image: Image4,
      title: "Vegan Garden Burger",
      paragraph: "Plant-based patty, vegan cheddar, garlic aioli, onion, crisp greens",
      rating: 4.5,
      price: 11.95,
    },
    {
      id: "0005",
      image: Image5,
      title: "Double Stack Platter",
      paragraph: "2 flame-grilled patties, double cheddar, house pickles, fresh tomatoes",
      rating: 5.0,
      price: 16.99,
    },
    {
      id: "0006",
      image: Image6,
      title: "Smoked Turkey Burger",
      paragraph: "Lean turkey patty, Swiss cheese, red onion, lettuce, honey mustard",
      rating: 4,
      price: 12.50,
    },
    {
      id: "0007",
      image: Image7,
      title: "Smokey BBQ House",
      paragraph: "Beef patty, smoky BBQ glaze, crispy onion rings, sharp cheddar",
      rating: 4.5,
      price: 13.99,
    },
    {
      id: "0008",
      image: Image8,
      title: "Classic Daily Platter",
      paragraph: "Signature blend patty, melted cheese, secret sauce, pickles, onions",
      rating: 4.8,
      price: 10.99,
    },
  ];

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="menu_section" id="menu">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
              <h2>DAILY PLATTER MENU</h2>
              <p className="para">
                Freshly prepared to order. Explore our handcrafted gourmet burgers, 
                flavorful sides, and signature platters made with mouthwatering artisanal recipes.
              </p>
            </Col>
          </Row>
          <Row>
            {mockData.map((cardData, index) => {
              return (
                <Cards
                  key={index}
                  image={cardData.image}
                  rating={cardData.rating}
                  title={cardData.title}
                  paragraph={cardData.paragraph}
                  price={cardData.price}
                  renderRatingIcons={renderRatingIcons}
                />
              );
            })}
          </Row>
          <Row className="pt-5">
            <Col sm={6} lg={5}>
              <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHEESE FRIES</h5>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="btn_red px-4 rounded-0 text-decoration-none d-inline-block"
                >
                  Order Offer
                </a>
              </div>
            </Col>
            <Col sm={6} lg={7}>
              <div className="ads_box ads_img2">
                <h4 className="mb-0">DAILY COMBO DEAL</h4>
                <h5>BURGER & DRINK</h5>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="btn_red px-4 rounded-0 text-decoration-none d-inline-block"
                >
                  Claim Deal
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
