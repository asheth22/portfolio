import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import employeedir from "../../Assets/Projects/EmployeeDir.png";
import budget from "../../Assets/Projects/Budget.png";
import fitness from "../../Assets/Projects/Fitness.png";
import pokemon from "../../Assets/Projects/Pokemon.png";
import burger from "../../Assets/Projects/burger.png";
import googlebooks from "../../Assets/Projects/googlesearch.png";


function Projects() {
  return (
    <Container fluid className="project-section">
     
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={googlebooks}
              isBlog={false}
              title="Google Book Search"
              description="React based application that allows the user to search and save books. The application uses google books API"
              link="https://asheth22.github.io/Astrozoders/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employeedir}
              isBlog={false}
              title="Employee Directory"
              description="React application that creates an employee directory for list of employees. The app displays non-sentsitive information about the employees."
              link="https://asheth22.github.io/Employee-Directory/"
            />
          </Col>  
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Budget Tracker"
              description="This Progressive Web Application (PWA) enables the user to add expenses and funds to their budget with or without an online connection. When entering transactions offline, data would be updated when connected back online."
              link="https://fast-sierra-61070.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Fitness Tracker"
              description="The Fitness-tracker application allows the user to view, create, and track daily workouts. The user is able to log multiple exercises in a given day and also go back and update the workout."
              link="https://warm-scrubland-99076.herokuapp.com/?id=606f794d60c9860015ec763f"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokemon}
              isBlog={false}
              title="Pallet Town Pokedexx"
              description="A CRUD application that allows the user to create customized pokedexx from the famous game Pokemon"
              link="https://vast-forest-11479.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burger}
              isBlog={false}
              title="Eat Da Burger"
              description="CRUD application using mysql that allows the user to make a burger and devour it!!"
              link="https://polar-castle-85742.herokuapp.com/"
            />
          </Col>
        
        </Row>       
        
      </Container>
    </Container>
  );
}

export default Projects;
