import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/Anjali-Sheth-Resume.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience Summary</h3>
            <Resumecontent
              title="Strategic Leader - Leading organizations through operational and digital transformation"
              content={[
                "Global leader with extensive experience in health insurance, manufacturing and service industries. ",
                "I have a passion to help organizations achieve operational excellence by eliminating waste, improving quality, and effectively leveraging modern technologies to optimize performance"
              ]}
            />
            <h3 className="resume-title">Skills and Expertise</h3>
            <Resumecontent
              title="Areas of Expertise"
              content={[
                "Strategic Planning",
                "Customer Experience Management",
                "Data - Analytics",
                "Business Process Rengineering"
              ]}
            />
            <Resumecontent
              title="Personal Skills"
              content={[
                "Agile Decision Making",
                "Planning and Execution",
                "Data Analytics and Problem Solving",
                "Communication and Planning"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Degrees "
              content={[                
                "Master of Science",
                "Bachelor of Engineering"                
              ]}            />
            <Resumecontent
              title="Certifications"              
              content={[                
                "Full Stack Web Developer",
                "Lean Six Sigma Master Black Belt",
                "Project Management Professional",
                "Enterprise Architect"
              ]}      
            />
        
            <h3 className="resume-title">Awards and Recognition</h3>
            <Resumecontent
              title=""
              content={[                
                "Operational Excellence - Leader of the Year",
                "Best Performance of Year",
                "Go Lead Nominee"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
