import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

export default () => (

  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Jinyus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <NavDropdown title="Articles" id="basic-nav-dropdown">
          <NavDropdown.Item href="/article">Action with doers</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Story Together</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">News around us</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">What about you</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/admin">Signin</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>

)