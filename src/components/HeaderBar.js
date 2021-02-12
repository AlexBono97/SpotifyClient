import React from "react";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import _ from 'lodash';
import SearchForm from "./SearchForm";
import incognito from '../images/incognito.png';



const HeaderBar = (props) => {

  const loggingOut = () => {
    localStorage.removeItem('expiry_time');
    localStorage.removeItem('params');
    window.location.reload()
  };

  const { userInfo } = props

  return (
    <React.Fragment>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/dashboard">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="">My Library</Nav.Link>
            <NavDropdown 
              title={
                <>
                {!_.isEmpty(userInfo.images) ? (
                    <Image height="40" width="40" roundedCircle
                    src={userInfo.images[0].url}
                    alt="user pic"/>
                  ) : (
                    <Image height="40" width="40" roundedCircle
                    src={incognito} alt=""/>
                  )}
                {"  "+userInfo.display_name}
                </>
                } 
              id="basic-nav-dropdown">
              <NavDropdown.Item onClick={loggingOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
};
export default HeaderBar;
