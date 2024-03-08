import React from "react";
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  TabContent,
  TabPane,
} from "react-bootstrap";
/*import { ProjectCard } from "./ProjectCard";*/
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
/*import 'animate.css';*/
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
              ratione, magnam quos, qui corrupti tempora quidem temporibus
              tenetur perspiciatis magni assumenda libero sapiente vero illum
              cupiditate aut, beatae officiis aspernatur.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (<ProjectCard key={index} {...project}/>) ;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">Second Project</TabPane>
                <TabPane eventKey="third">Third Project</TabPane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2}  className="background-image-right" />
    </section>
  );
}
