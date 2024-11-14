import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websites = [
    {
      title: "Web 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Web 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Web 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Retail Business",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Transportation Agency",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Corporation",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-Commerce Business",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Retail Business",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Transportation Agency",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (

    <section className="project" id="work">
      <Container>
        <Row>
          <Col>
            {/* <div className="skill-bx"> */}
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                  <h2>My Work</h2>
                  <p>Below are a selection of websites and projects that demonstrate my expertise and dedication to delivering exceptional user experiences.</p>
                </div>
              }
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Websites</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Misc.</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      websites.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard key={index} {...project} />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    lorem three
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )

}