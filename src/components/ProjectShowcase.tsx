import project from "../images/mainProj.png";
import project2 from "../images/mainProj2.png";
import project3 from "../images/mainProj3.png";
import Carousel from "react-bootstrap/Carousel";

export const ProjectShowcase = () => {
  return (
    <div className="d-flex flex-column mt-5">
      <h1 className="heading-text latest-project text-center">
        Latest Project: Skyview Manager Portal
      </h1>
      <Carousel interval={5000}>
        <Carousel.Item>
          <img className="img-fluid" alt="project landing" src={project}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" alt="project 2" src={project2}></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-fluid" alt="project 3" src={project3}></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
