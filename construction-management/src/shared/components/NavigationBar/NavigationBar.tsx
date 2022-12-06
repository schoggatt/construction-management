import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import "./style.scss";

export interface NavigationBarProps {}

export const NavigationBar = (props: NavigationBarProps) => {
  return (
    <>
      <Navbar className="navigation-container" expand="lg" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Construction Management</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/">
                <Nav.Link>Placeholder</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
