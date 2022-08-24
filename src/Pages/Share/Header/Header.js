
import React from 'react';
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';



const Header = () => {
  const[user]=useAuthState(auth);
  const handleLogOut = () =>{
    signOut(auth);
  }
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
            {
              user && <> 
             
            <Nav.Link as={Link} to="manageInventories">manageInventories</Nav.Link>
            <Nav.Link as={Link} to="myitems">myitems</Nav.Link>
              </>
            }
           
           <Nav.Link as={Link} to="blog">Blog</Nav.Link>
            
       
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="register" >Sign up</Nav.Link>
          {  
           user ?
           <button className='text-white btn btn-link text-decoration-none' onClick={handleLogOut}>log Out</button>
           :
          <Nav.Link as={Link} to="login">Login</Nav.Link>}
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  



        </header>
    );
};

export default Header;