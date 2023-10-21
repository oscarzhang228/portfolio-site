import HalfScreen from "./HalfScreen";
import { Parallax } from "react-scroll-parallax";
import heroPic from "../images/heroPic2.png";
function Hero() {
  const heroLeft = (
    <div className="heroLeft d-flex flex-column justify-content-center p-5 pt-0 align-items-center ">
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
        <span className="heroDev">Developer</span>
      </p>
      <h1 className="heroText headingText text-center">And Web Designer</h1>
    </div>
  );

  const heroRight = (
    <div className="heroRight fill pt-5">
      <Parallax translateY={[0, 5]} className="d-flex fill align-items-center">
        <img src={heroPic} className="fill heroPic"></img>
      </Parallax>
    </div>
  );
  return (
    <div className="ps-1 container-fluid">
      <div className="row py-0">
        <HalfScreen element={heroLeft} />
        <HalfScreen element={heroRight} />
      </div>
      <div style={{ height: "100vh" }}>hello</div>
    </div>
  );
}
export default Hero;
