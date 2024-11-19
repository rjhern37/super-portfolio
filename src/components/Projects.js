import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/Color-game-shot.png";
import projImg2 from "../assets/img/todo-list.png";
import projImg3 from "../assets/img/music.png";
import webImg1 from "../assets/img/weather-tech-logo.png";
import webImg2 from "../assets/img/ventra-logo.png";
import webImg3 from "../assets/img/snapon-logo.png";
import webImg4 from "../assets/img/goldengate-logo.png";
import webImg5 from "../assets/img/vre-logo.png";
import webImg6 from "../assets/img/battelle-logo.png";
import webImg7 from "../assets/img/packers-everywhere-logo.png";
import webImg8 from "../assets/img/metlife-stadium-logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const websites = [
    {
      title: "WeatherTech",
      description: "Retail & ECommerce",
      imgUrl: webImg1,
    },
    {
      title: "Ventra",
      description: "Transportation",
      imgUrl: webImg2,
    },
    {
      title: "Snap-On",
      description: "Retail & ECommerce",
      imgUrl: webImg3,
    },
    {
      title: "Golden Gate Bridge",
      description: "Transportation",
      imgUrl: webImg4,
    },
    {
      title: "Virgina Railway Express (VRE)",
      description: "Transportation",
      imgUrl: webImg5,
    },
    {
      title: "Battelle",
      description: "Health & Sciences",
      imgUrl: webImg6,
    },
    {
      title: "Packers Everywhere",
      description: "Entertainment",
      imgUrl: webImg7,
    },
    {
      title: "Metlife Stadium",
      description: "Entertainment",
      imgUrl: webImg8,
    },
  ];

  const projects = [
    {
      title: "RGB Color Game",
      description: "Guess the color by RGB code",
      imgUrl: projImg1,
      href: "https://rjhern37.github.io/Color-Game/"
    },
    {
      title: "To-do List",
      description: "A Simple To-do list application",
      imgUrl: projImg2,
      href: "https://rjhern37.github.io/New-Todo-List/"
    },
    {
      title: "Music Clone",
      description: "Simply press keys on your keyboard of choice and watch the musical vibrations",
      imgUrl: projImg3,
      href: "https://rjhern37.github.io/Music-clone/"
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