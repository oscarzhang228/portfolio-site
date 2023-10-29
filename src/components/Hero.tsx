import HalfScreen from "./HalfScreen";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import heroPic from "../images/heroPic2.png";
function Hero() {
  const heroLeft = (
    <div className="heroLeft d-flex flex-column justify-content-center p-5 pt-0 align-items-center">
      <h1 className="headingText heroText text-center">Hi, I'm Oscar Zhang</h1>
      <p className="headingText heroText text-center">
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
          <span className="heroDev">Developer</span>
        </Link>
      </p>
      <h1 className="heroText headingText text-center">And Web Designer</h1>

      <div className="d-flex gap-5 mt-5">
        <SocialIcon
          className="socialIcon"
          url="mailto:oscarzhang228@gmail.com"
          target="_blank"
        />

        <SocialIcon
          className="socialIcon"
          url="https://www.github.com/oscarzhang228"
          target="_blank"
        />

        <SocialIcon
          className="socialIcon"
          url="https://www.linkedin.com/in/oscarzhang228"
          target="_blank"
        />
      </div>
    </div>
  );

  const heroRight = (
    <div className="heroRight">
      <img src={heroPic} className=" heroPic" alt="Oscar Zhang"></img>
    </div>
  );
  return (
    <div className="ps-1 container-fluid fill">
      <div className="row py-0 fill">
        <HalfScreen element={heroLeft} />
        <HalfScreen element={heroRight} />
      </div>
    </div>
  );
}
export default Hero;
