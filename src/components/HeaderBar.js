import React from "react";
import { Navbar, NavDropdown, Nav, Form } from "react-bootstrap";
import SearchForm from "./SearchForm";



const HeaderBar = (props) => {

  const loggingOut = () => {
    localStorage.removeItem('expiry_time');
    localStorage.removeItem('params');
    window.location.reload()
  };

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">My Library</Nav.Link>
            <NavDropdown title="UserPlaceHolder" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={loggingOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

          

      </Navbar>
    </React.Fragment>
  );
};
export default HeaderBar;
