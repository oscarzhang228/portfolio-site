import HalfScreen from "../HalfScreen";
import Timeline from "./Timeline";
import { SkillCard } from "./SkillCard";
import JSLogo from "../../images/JavaScript-logo.png";
import CSSLogo from "../../images/css-logo.png";
import SQLLogo from "../../images/sql-logo.png";
import AWSLogo from "../../images/aws-logo.png";
const About = () => {
  return (
    <div className="fill container-fluid p-0 px-2 m-0 about-container">
      <div className="row m-0">
        <HalfScreen element={aboutElem} />
        <HalfScreen element={<Timeline />} />
      </div>
      <div className="row mt-5 gap-1">
        <SkillCard
          header="JavaScript"
          image={JSLogo}
          body={
            <p className="body-text text-center">
              React.js <br />
              Node.js <br />
              TypeScript <br />
              Express.js <br />
            </p>
          }
        />
        <SkillCard
          header="CSS"
          image={CSSLogo}
          body={
            <p className="body-text text-center">
              Bootstrap <br />
              SASS/SCSS <br />
              Material UI <br />
              Tailwind.css <br />
            </p>
          }
        />
        <SkillCard
          header="Databases"
          image={SQLLogo}
          body={
            <p className="body-text text-center">
              MongoDB <br />
              AWS DynamoDB <br />
              AWS RDS <br />
              SQL Server <br />
            </p>
          }
        />
        <SkillCard
          header="Other"
          image={AWSLogo}
          body={
            <p className="body-text text-center">
              AWS <br />
              Docker <br />
              Jira <br />
              Git/GitHub <br />
            </p>
          }
        />
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
  <div className="d-flex flex-column justify-content-center align-items-center full-height mt-5 px-3 left-side">
    <h1 className="heading-text mt-5">About Me</h1>
    <h5 className="body-text text-center" style={subheaderStyle}>
      Aspiring Software Engineer
    </h5>
    <p className="body-text p-2 text-center" style={pStyle}>
      <em>I build highly-scalable and adaptive technologies for the web.</em>
    </p>
    <p className="body-text p-2 text-center">
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
