import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { RiComputerLine } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";

const Timeline = () => {
  return (
    <div className="d-flex justify-content-end align-items-center full-height ">
      <VerticalTimeline className="mt-5 me-3 m-0 " layout="1-column-right">
        <VerticalTimelineElement
          className="vertical-timeline-element-- mt-5 body-text"
          date="August 2023 - present"
          iconStyle={iconStyle}
          icon={<RiComputerLine />}
        >
          <h3 className="vertical-timeline-element-title">
            Full-Stack Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle mt-1">Fyve By</h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Sandy Springs, GA
          </h5>
          <p>
            Front-End (React), Cloud (AWS), NoSQL Database (DynamoDB), GitHub,
            Bash, SEO, Visual Design, Project Management, Collaboration
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-- mt-5"
          contentStyle={{
            color: "#000",
            fontFamily: "Inter Tight, sans-serif",
          }}
          date="September 2022 - August 2023"
          iconStyle={iconStyle}
          icon={<BiFoodMenu />}
        >
          <h3 className="vertical-timeline-element-title">Cook</h3>
          <h4 className="vertical-timeline-element-subtitle mt-1">
            Panda Express
          </h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Atlanta GA, GA
          </h5>
          <p>
            Leadership, Collaboration, Communication, Time Management,
            Mentoring, Problem Solving
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element-- mt-5"
          contentStyle={{
            color: "#000",
            fontFamily: "Inter Tight, sans-serif",
          }}
          date="July 2022 - May 2023"
          iconStyle={iconStyle}
          icon={<RiComputerLine />}
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle mt-1">
            Georgia Institute of Technology AASA
          </h4>
          <h5 className="vertical-timeline-element-subtitle mt-2">
            Atlanta GA, GA
          </h5>
          <p>
            CMS (WordPress), HTML/CSS, SEO, Visual Design, Project Management,
            Collaboration
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

const iconStyle = { background: "rgb(40, 40, 43)", color: "#fff" };
export default Timeline;
