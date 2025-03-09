import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import policyBazaar from "../../Assets/Projects/policyBazaar.png";
import fastkart from "../../Assets/Projects/fastkart.png";
import fitclub from "../../Assets/Projects/fitclub.png";
import IntroductionWebsite from "../../Assets/Projects/Introduction-website.png";
import nextbit from "../../Assets/Projects/nextbit.png";
import rockPaperScissors from "../../Assets/Projects/rock-paper-scissors.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitclub}
              isBlog={false}
              title="Fit Club Fitness"
              description="Developed a Web application to for the fitness center using HTML, CSS, JavaScript and SASS."
              ghLink="https://github.com/ravi293599/FitClub-Starter-master"
              demoLink="https://fitclub-ravi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextbit}
              isBlog={false}
              title="Next Bit"
              description="Developed a versatile and responsive internet shopping cart application in which users can add and delete items in the cart."
              ghLink="https://github.com/ravi293599/Nextbit"
              demoLink="https://nextbit-ravi.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fastkart}
              isBlog={false}
              title="FastKart"
            description="FastKart is a E-commerce type Application with front end and backend, The front end is coded in react while the backend is written in node and express. We can added products in the cart and login logout functionality is there in the app."
              ghLink="https://github.com/ravi293599/FastKart"
              demoLink="https://github.com/ravi293599/FastKart"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={policyBazaar}
              isBlog={false}
              title="Policy Bazaar Clone"
              description="This is the Product Page of Policy Bazaar which is used to get the information filled by client and print it in checkout page, for this i used react , Sass and Mongo as Database"
              ghLink="https://github.com/ravi293599/Policy-Bazaar-Clone"
              demoLink="https://term-insurance.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntroductionWebsite}
              isBlog={false}
              title="Introduction Website"
              description="This website is like a porfolio kind of website which will give you a brief about my self, it has information about my tech stack and projects i had worked upon.This website i created when i was learning react so nothing fancy in it just four page website."
              ghLink="https://github.com/ravi293599/Introduction-website"
              demoLink="https://self-intro-ravi.netlify.app/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockPaperScissors}
              isBlog={false}
              title="Rock Paper Scissor"
              description="Rock Paper and Scissor a popular game amoung all the youngsters in which two people play against each other and make a choice randomly and whoever wins will get a point."
              ghLink="https://github.com/ravi293599/Rock-Paper-Scissor-Game"
              demoLink="https://rock-paper-scissors-ravi.netlify.app/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
