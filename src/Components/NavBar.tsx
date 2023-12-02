import { Button, Container, Nav, Navbar as NavBarbs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import shoppingCart from "../assets/shopping-cart.svg";
export const NavBar = () => {
  return (
    <NavBarbs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
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
        <Button>
          <img
            src={shoppingCart}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem", color: "white" }}
          />
        </Button>
      </Container>
    </NavBarbs>
  );
};
