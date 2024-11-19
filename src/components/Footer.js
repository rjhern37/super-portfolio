import { Container, Row, Col } from "react-bootstrap"
import logo from "../assets/img/portfolio-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="footer-logo" sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rjhern37/">
                <img src={navIcon1} alt="Follow me on LinkedIn" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Follow me on Facebook" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Follow me on Instagram" />
              </a>
            </div>
            <p>Copyright<sup>&#174;</sup> 2024. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}