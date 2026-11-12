import { Container, Row, Carousel } from "react-bootstrap";
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  const reviews = [
    {
      img: User1,
      text: "The gourmet burgers from Daily Platter are on another level! The brioche bun was pillow-soft and the patty was grilled to juicy perfection. Delivered in 22 minutes!",
      author: "AMELIE NEWLOVE",
      role: "Verified Foodie",
    },
    {
      img: User2,
      text: "Best platters in the city! We ordered the Ultimate Bacon Deluxe and Cheese Fries for game night. The secret house sauce is utterly addictive.",
      author: "MARCUS RODRIGUEZ",
      role: "Loyal Customer",
    },
    {
      img: User3,
      text: "Their 30-minute delivery guarantee is 100% genuine. Even during peak dinner rush, our feast arrived steaming hot and crisp. Outstanding service!",
      author: "SARAH JENKINS",
      role: "Miami Resident",
    },
    {
      img: User4,
      text: "Daily Platter has completely transformed weekend dining for our family. The portions are generous, ingredients are top-notch, and the customer support is fantastic.",
      author: "DAVID CHEN",
      role: "Culinary Enthusiast",
    },
  ];

  return (
    <section className="blog_section" id="blog">
      <Container>
        <Row>
          <Carousel indicators={true} controls={true}>
            {reviews.map((rev, idx) => (
              <Carousel.Item key={idx}>
                <Carousel.Caption>
                  <div className="user_img">
                    <img src={rev.img} className="img-fluid" alt={rev.author} />
                  </div>
                  <p>&ldquo;{rev.text}&rdquo;</p>
                  <div className="item_rating mb-2">
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning me-1"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <h5>BY {rev.author}</h5>
                  <small className="text-white-50">{rev.role}</small>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
