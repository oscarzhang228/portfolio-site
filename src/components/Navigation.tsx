import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
function Navigation() {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? "#DC143C" : "#232D3F",
      marginRight: "10px",
    };
  };

  const navHeadingStyle = {
    color: "black",
    fontSize: "30px",
  };

  const navTextStyle = {
    fontSize: "20px",
  };
  return (
    <div className="navContainer p-0">
      <Navbar
        collapseOnSelect
        expand="sm"
        fixed="top"
        className="navbar border-bottom py-0 px-3"
        bg="light"
        variant="light"
        style={navTextStyle}
      >
        <Navbar.Brand className="headingText navbarHeading">
          <Link to="/" className="navbarLink" style={navHeadingStyle}>
            Oscar Zhang
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <div className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav" role={"collapse"}>
          <Nav className="me-auto" />
          <Nav>
            <NavLink
              to="/"
              className="bodyText navbarLink"
              style={navLinkStyle}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="bodyText navbarLink"
              style={navLinkStyle}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="bodyText navbarLink"
              style={navLinkStyle}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="bodyText navbarLink"
              style={navLinkStyle}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
