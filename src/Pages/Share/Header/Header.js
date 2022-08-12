
import React from 'react';
import { Navbar, Container, Nav  } from 'react-bootstrap';



const Header = () => {
    return (
        <header>



    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#stockItems">stockItems</Nav.Link>
            <Nav.Link href="#blog">blog</Nav.Link>
            
       
          </Nav>
          <Nav>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link eventKey={2} href="#Login">Login</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



        </header>
    );
};

export default Header;