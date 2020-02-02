import React from 'react';
import Search from '../../components/Search';
import { Form, FormControl, Button, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './header.css';

const Header = (props) => {
  return (
    <>
      {/* <div className="testClass">asdfds</div> */}
      {/* <Navbar bg="light" expand="lg" className="ui-lib-header">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          < /Form>
        </Navbar.Collapse>
      </Navbar> */}
      <div className="header">
        <div className="header__logo">Logo</div>
        <div className="header__search"><Search placeholder="       Search something" /></div>
        <div className="header__button-group">Button-group</div>
      </div>
    </>
  )
}

export default Header;