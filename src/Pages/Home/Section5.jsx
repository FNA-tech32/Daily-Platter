import { Container, Row, Col, Carousel } from "react-bootstrap";
import StoreIOS from "../../assets/shop/appstore.png";
import StoreGoogle from "../../assets/shop/googleplay.png";
import DownloadImage from "../../assets/shop/e-shop.png";
import Brand1 from "../../assets/brands/brand-11.png";
import Brand2 from "../../assets/brands/brand-12.png";
import Brand3 from "../../assets/brands/brand-13.png";
import Brand4 from "../../assets/brands/brand-14.png";
import Brand5 from "../../assets/brands/brand-15.png";
import Brand6 from "../../assets/brands/brand-16.png";
import Brand7 from "../../assets/brands/brand-17.png";
import Brand8 from "../../assets/brands/brand-18.png";

function Section5() {
  return (
    <>
      <section className="shop_section" id="shop">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download Daily Platter App</h4>
              <h2>Save Up To 20%</h2>
              <p>
                Get real-time order tracking, exclusive platter discounts, and
                contactless doorstep delivery with our top-rated mobile app.
              </p>
              <a href="#shop" className="d-inline-block">
                <img
                  src={StoreIOS}
                  alt="Download Daily Platter on iOS App Store"
                  className="img-fluid store me-3"
                />
              </a>
              <a href="#shop" className="d-inline-block">
                <img
                  src={StoreGoogle}
                  alt="Download Daily Platter on Google Play Store"
                  className="img-fluid store me-3"
                />
              </a>
            </Col>
            <Col lg={6}>
              <img src={DownloadImage} alt="Daily Platter App Interface" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand_section">
        <Container>
          <Row>
            <Carousel indicators={false} controls={true}>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand1} className="img-fluid" alt="Partner brand 1" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand2} className="img-fluid" alt="Partner brand 2" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="Partner brand 3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="Partner brand 4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="Partner brand 5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="Partner brand 6" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={Brand3} className="img-fluid" alt="Partner brand 3" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand4} className="img-fluid" alt="Partner brand 4" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand5} className="img-fluid" alt="Partner brand 5" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand6} className="img-fluid" alt="Partner brand 6" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand7} className="img-fluid" alt="Partner brand 7" />
                    </div>
                    <div className="brand_img">
                      <img src={Brand8} className="img-fluid" alt="Partner brand 8" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
