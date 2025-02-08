import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo_qrcode.png';

const Header = () => {
  return (
    <Navbar 
      bg="white" 
      variant="dark" 
      expand="lg" 
      style={{ padding: '0.5rem 1rem', marginBottom: '5px' }}    
    > 
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: '200px', 
              maxHeight: '200px', 
              marginRight: '10px'
            }}  
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
