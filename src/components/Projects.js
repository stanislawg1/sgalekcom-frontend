import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mtcna from "../assets/img/mtcna3.png";
import ecsclinux from "../assets/img/ecsclinux.png";
import ecscwin from "../assets/img/ecscwin.png";
import githubac from "../assets/img/github-actions.png";
import jenkins_pipe from "../assets/img/jenkinspipe.png";
import secure_kube from "../assets/img/kube-secu.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Scalable, secured website on k8s",
      description: "It's fully automated by GitHub Actions, IaC provided by Terraform. Used technologies: Kubernetes, Azure, Terraform, GitHub Actions, Docker.",
      imgUrl: secure_kube,
    },

    {
      title: "Jenkins pipeline",
      description: "I've created a Jenkins pipeline to provide continous-deployment of a web-app to a server behind the firewall.\n Used technologies: Jenkins, Docker.",
      imgUrl: jenkins_pipe,
    },
    {
      title: "GitHub full CI/CD pipeline",
      description: "I've created an GitHub Actions pipeline that provided our project website to our VPS.\n Used technologies: GitHub Actions, Docker, Python.",
      imgUrl: githubac,
    },
    
  ];

  const certs = [

    {
      title: "MTCNA",
      description: "MikroTik Certified Network Associate",
      imgUrl: mtcna,
    },
    {
      title: "ECSC Linux Security Certification",
      description: "Certification organized by Polish Armed Forces to enhance students' knowledge in the cybersecurity field, proving their knowledge of Linux systems security.",
      imgUrl: ecsclinux,
    },
    {
      title: "ECSC Windows Security Certification",
      description: "Certification organized by Polish Armed Forces to enhance students' knowledge in the cybersecurity field, proving their knowledge of Windows systems security.",
      imgUrl: ecscwin,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Those are my projects</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">More</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          certs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>You can see more on my personal <a href="https://www.linkedin.com/in/stanislaw-galek-58b493344/" rel="noreferrer" target="_blank0">LinkedIn</a></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
