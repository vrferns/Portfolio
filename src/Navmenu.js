import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

import Profile from './Component/Home/Profile';
import Info from './Component/AboutMe/Info';
import Contact from './Component/ContactMe/Contact';
import Mywork from './Component/Intrests/MyWork';

export default function Navmenu() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/Info">About</Nav.Link>
              <Nav.Link as={Link} to="/MyWork">My Work</Nav.Link>
              <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        
        <Route path="/Info" element={<Info />} />
        <Route path="/MyWork" element={<Mywork />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}
