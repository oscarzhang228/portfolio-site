import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
function Navigation() {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "black" : "gray",
      marginRight: "10px",
    };
  };

  const navHeadingStyle = {
    color: "black",
    fontSize: "30px",
  };

  const navTextStyle = {
    fontSize: "20px",
    transition: "500ms",
  };
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      fixed="top"
      className="border-bottom py-0 px-2"
      bg="light"
      variant="light"
      style={navTextStyle}
    >
      <Navbar.Brand className="headingText navbarHeading">
        <Link to="/" className="navbarLink" style={navHeadingStyle}>
          Oscar Zhang
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" />
        <Nav>
          <NavLink to="/" className="bodyText navbarLink" style={navLinkStyle}>
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
  );
}

export default Navigation;
