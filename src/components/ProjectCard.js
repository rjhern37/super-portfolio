import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col sm={6} md={4}>
      {href ? (
        <a href={href} className="proj-imgbx" tabIndex="0">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      ) : (
        <div className="proj-imgbx" tabIndex="0">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      )}
    </Col>
  )
}