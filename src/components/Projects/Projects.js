import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import glamm from "../../Assets/Projects/myglamm.png";
import health from "../../Assets/Projects/health.png";
import hima from "../../Assets/Projects/him.webp";

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
              imgPath={glamm}
              isBlog={false}
              title="My-Glamm"
              description="
MyGlamm is India's No. 1 D2C Makeup Brand for all premium makeup & beauty products online, so you can GLAMM UP LIKE A STAR!"
              ghLink="https://github.com/starydv7/MyGlamm-Clone"
              demoLink="https://sordid-worm-afr48i8gz-starydv7.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hima}
              isBlog={false}
              title="Himalaya-USA"
              description="Himalaya offers a full line of clinically-studied herbal formulations, certified USDA organic Single herbs"
              ghLink="https://github.com/starydv7/Himalayausa-clone"
              demoLink="https://himalayausa-clone-project.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              title="HealthKart"
              description="HealthKart is a trusted house of brands with MuscleBlaze and HK Vitals being India's no. 1 sports nutrition and online vitamin brands."
              ghLink="https://github.com/starydv7/HEALTHKART"
              demoLink="https://healthkart-zeta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
