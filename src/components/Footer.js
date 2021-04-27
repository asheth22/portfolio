import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer Sticky">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed by Anjali Sheth</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/asheth22"
                style={{ color: "white" }}
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
          
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anjali-sheth"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
         
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
