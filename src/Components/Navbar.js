import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Navbar bg="light" expand="lg" className="shadow-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <Container>
          <Navbar.Brand href="#" className="fw-bold fs-4">D.Z</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" onClick={handleToggle}>
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="menuitems">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about" className="menuitems">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/service" className="menuitems">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/projects" className="menuitems">Portfolio</Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link as={Link} to="/testimonials" className="menuitems">Testimonials</Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link as={Link} to="/contact" className="menuitems">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavbarComponent;
