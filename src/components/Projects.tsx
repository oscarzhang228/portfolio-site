import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import { SocialIcon } from "react-social-icons";
import { ProjectShowcase } from "./ProjectShowcase";

export const Projects = () => {
  return (
    <div className="projects-container mt-5">
      <ProjectShowcase />
      <h1 className="heading-text latest-project mt-5">Project Archive</h1>
      <Table hover variant="dark" className="project-table" responsive="md">
        <thead>
          <tr>
            <th>Created</th>
            <th>Project</th>
            <th>Technology</th>
            <th>For</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023</td>
            <td>Fyve By Internal Client Manager</td>
            <td className="">
              <Badge className="tech-used" pill bg="success">
                React
              </Badge>
              <Badge className="tech-used" pill bg="success">
                TypeScript
              </Badge>
              <Badge className="tech-used" pill bg="success">
                SASS
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Bootstrap
              </Badge>
              <Badge className="tech-used" pill bg="primary">
                AWS Services
              </Badge>
            </td>
            <td>Fyve By</td>
            <td></td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Portfolio Site</td>
            <td className="">
              <Badge className="tech-used" pill bg="success">
                React
              </Badge>
              <Badge className="tech-used" pill bg="success">
                TypeScript
              </Badge>
              <Badge className="tech-used" pill bg="success">
                SASS
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Bootstrap
              </Badge>
              <Badge className="tech-used" pill bg="black">
                Figma
              </Badge>
            </td>
            <td>Personal</td>
            <td>
              <SocialIcon
                className="social-icon"
                style={iconStyle}
                url="https://github.com/oscarzhang228/portfolio-site/"
                target="_blank"
              />
            </td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Skyview Portal</td>
            <td>
              <Badge className="tech-used" pill bg="success">
                React
              </Badge>
              <Badge className="tech-used" pill bg="success">
                TypeScript
              </Badge>
              <Badge className="tech-used" pill bg="success">
                SASS
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Bootstrap
              </Badge>
              <Badge className="tech-used" pill bg="primary">
                AWS Services
              </Badge>
            </td>
            <td>Fyve By</td>
            <td>
              <SocialIcon
                style={iconStyle}
                className="social-icon"
                url="https://www.fyvebyhub.com"
                target="_blank"
              />
            </td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Mini Message Board</td>
            <td>
              <Badge className="tech-used" pill bg="success">
                React
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Node
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Express
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Bootstrap
              </Badge>
              <Badge className="tech-used" pill bg="primary">
                MongoDB
              </Badge>
            </td>
            <td>Personal</td>
            <td>
              <SocialIcon
                className="social-icon"
                style={iconStyle}
                url="https://github.com/oscarzhang228/miniMessageBoard"
                target="_blank"
              />
            </td>
          </tr>
          <tr>
            <td>2023</td>
            <td>Inventory Manager</td>
            <td>
              <Badge className="tech-used" pill bg="success">
                React
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Node
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Express
              </Badge>
              <Badge className="tech-used" pill bg="success">
                Bootstrap
              </Badge>
              <Badge className="tech-used" pill bg="primary">
                MongoDB
              </Badge>
            </td>
            <td>Personal</td>
            <td>
              <SocialIcon
                className="social-icon"
                style={iconStyle}
                url="https://github.com/oscarzhang228/InventoryManager"
                target="_blank"
              />
            </td>
          </tr>
          <tr>
            <td>2022</td>
            <td>AASA Website</td>
            <td>
              <Badge className="tech-used" pill bg="success">
                WordPress
              </Badge>
              <Badge className="tech-used" pill bg="success">
                HTML
              </Badge>
              <Badge className="tech-used" pill bg="success">
                CSS
              </Badge>
            </td>
            <td>GT AASA</td>
            <td>
              <SocialIcon
                style={iconStyle}
                className="social-icon"
                url="https://aasa.gatech.edu/"
                target="_blank"
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const iconStyle = {
  height: "30px",
  width: "30px",
};
