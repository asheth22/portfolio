import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Anjali Sheth </span>
            
            <br />I have 25 years of professional experience in many industries including manufacturing, service and health insurance
            <br />
            <br />
            I am an entrepreneur and a small business owner. I beleive in life long learning and recently I got Full Stack Web Development Certification
            I enjoy work-life balance and love:
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Traveling and visiting different countries
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Read - My goals is 50 books a year!
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Cook - Healthy eating is healthy living!! 
            </li>
          </ul>

       </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
