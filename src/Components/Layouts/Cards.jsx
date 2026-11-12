import { Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increment } from "../../Redux/Counter/counterSlice";

export default function Cards({
  image,
  rating,
  title,
  paragraph,
  price,
  renderRatingIcons,
}) {
  const dispatch = useDispatch();

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} alt={title} />
        </div>
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <div className="item_rating">{renderRatingIcons(rating)}</div>
            <div className="wishlist" role="button" aria-label="Add to wishlist">
              <i className="bi bi-heart"></i>
            </div>
          </div>

          <Card.Title>{title}</Card.Title>
          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">
            <div className="menu_price">
              <h5 className="mb-0">${Number(price).toFixed(2)}</h5>
            </div>
            <div className="add_to_card">
              <a
                href="#add"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(increment());
                }}
                className="text-decoration-none"
                role="button"
                aria-label={`Add ${title} to cart`}
              >
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
