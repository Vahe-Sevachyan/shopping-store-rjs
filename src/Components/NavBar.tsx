import { Container, Nav, Navbar as NavBarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <NavBarbs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.Link to="/Home" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/Store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/About" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
      </Container>
    </NavBarbs>
  );
};
