import HalfScreen from "./HalfScreen";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import heroPic from "../images/heroPic2.png";
function Hero() {
  const heroLeft = (
    <div className="hero-left d-flex flex-column justify-content-center p-5 pt-0 align-items-center">
      <h1 className="heading-text hero-text text-center">
        Hi, I'm Oscar Zhang
      </h1>
      <p className="heading-text hero-text text-center">
        <span>A</span> <span>F</span>
        <span>u</span>
        <span>l</span>
        <span>l</span>-<span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
        &nbsp;
        <Link to="/projects">
          <span className="hero-dev">Developer</span>
        </Link>
      </p>
      <h1 className="hero-text heading-text text-center">And Web Designer</h1>

      <div className="d-flex gap-5 mt-5">
        <SocialIcon
          className="social-icon"
          url="mailto:oscarzhang228@gmail.com"
          target="_blank"
        />

        <SocialIcon
          className="social-icon"
          url="https://www.github.com/oscarzhang228"
          target="_blank"
        />

        <SocialIcon
          className="social-icon"
          url="https://www.linkedin.com/in/oscarzhang228"
          target="_blank"
        />
      </div>
    </div>
  );

  const heroRight = (
    <div className="hero-right pt-lg-1">
      <div className="mt-2">
        <img src={heroPic} className="hero-pic" alt="Oscar Zhang"></img>
      </div>
    </div>
  );
  return (
    <div className="container-fluid fill">
      <div className="row py-0 fill">
        <HalfScreen element={heroLeft} />
        <HalfScreen element={heroRight} />
      </div>
    </div>
  );
}
export default Hero;
