import { useState, useEffect } from "react";
import "../../Styles/HeaderStyle.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo/logo.svg";
import { useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const count = useSelector((state) => state.counter.value);
  const [nav, setNav] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const changeValueOnScroll = () => {
      const scrollValue =
        document?.documentElement?.scrollTop || document.body.scrollTop;
      scrollValue > 100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);
    return () => window.removeEventListener("scroll", changeValueOnScroll);
  }, []);

  const handleNavClick = (sectionId, routePath) => {
    setExpanded(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(routePath);
      }
    }
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        onToggle={(isOpen) => setExpanded(isOpen)}
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => handleNavClick("home", "/")}
          >
            <div className="logo d-flex align-items-center">
              <img src={logo} alt="Daily Platter" className="img-fluid" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home", "/");
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about", "/about");
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("menu", "/menu");
                }}
              >
                Our Menu
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/shop"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("shop", "/shop");
                }}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("blog", "/blog");
                }}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact", "/contact");
                }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/#menu"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("menu", "/menu");
                }}
              >
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{count}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
