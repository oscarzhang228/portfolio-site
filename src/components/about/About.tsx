import HalfScreen from "../HalfScreen";
import Timeline from "./Timeline";
import { SkillCard } from "./SkillCard";
const About = () => {
  return (
    <div className="fill container-fluid p-0 m-0 about">
      <div className="row m-0">
        <HalfScreen element={aboutElem} />
        <HalfScreen element={<Timeline />} />
      </div>
      <div className="row mt-5">
        <SkillCard header="JavaScript" />
      </div>
    </div>
  );
};

const subheaderStyle = {
  fontSize: "22px",
};
const pStyle = {
  fontSize: "17px",
  fontWeight: "400",
};
const aboutElem = (
  <div className="d-flex flex-column justify-content-center align-items-center  fullHeight mt-5 px-3 leftSide">
    <h1 className="headingText mt-5">About Me</h1>
    <h5 className="bodyText text-center" style={subheaderStyle}>
      Aspiring Full-Stack Developer / Software Engineer
    </h5>
    <p className="bodyText p-2 text-center" style={pStyle}>
      <em>I build highly-scalable and adaptive technologies for the web.</em>
    </p>
    <p className="bodyText p-2 text-center">
      With a strong foundation in web development and an enduring passion for
      creating exceptional user experiences, I've embarked on a journey that
      commenced in 2020 when I first delved into the world of coding with my
      first website for my family's restaurant. <br /> <br />
      Over the years, my dedication to the craft has led me to designing my own
      personal projects as well as working with the Asian American Student
      Association at my university on their website. <br /> <br />
      Now, in my current role as a Full-Stack Developer Intern at Fyve By, I'm
      further honing my skills and making valuable contributions to the company.{" "}
      <br /> <br />
      In my free time, you can find me reading a book, hitting the gym, or
      hanging out with some friends at a cafe / restaurant.
    </p>
  </div>
);

export default About;
