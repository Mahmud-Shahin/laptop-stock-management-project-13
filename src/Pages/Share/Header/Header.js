
import React from 'react';
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <header>



    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {/* <Nav.Link href="home#stockItems">stockItems</Nav.Link> */}
            <Nav.Link as={Link} to="stockItems">stockItems</Nav.Link>
            <Nav.Link href="#blog">blog</Nav.Link>
            
       
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="login">Login</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



        </header>
    );
};

export default Header;