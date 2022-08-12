// import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
//     const referenceName = useRef('');
//     const referenceEmail = useRef('');
//     const referencePass  = useRef('');
    
//  const maintainregister = event =>{
//         event.preventDefault();
//         const name = referenceName.current.value;
//         const email = referenceEmail.current.value;
//         const password =  referencePass.current.value;
//         console.log(name, email, password);
//       }  
      
       
   const maintainregister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =  event.target.password.value;
        console.log(name, email, password);
       
      }  


    const lognavigate = useNavigate();

    const clicklogin = event  => {

        lognavigate('/login')

    }

    return (
        <div className='container mt-5 w-25 mx-auto'>
            <h2 className='text-center'>Please Rgister</h2>
            <Form onSubmit={maintainregister}>
            <Form.Group className="mb-3" >
        <Form.Label>Your Name</Form.Label>
        <Form.Control   type="text" name='name' placeholder="Enter your name" />
       {/* ref={referenceName}  */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        {/* ref={referenceEmail} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name='password' placeholder="Password" />
        {/* ref={referencePass} */}
      </Form.Group>

     

    
      <Button variant="dark" type="submit">
       register
      </Button>
    </Form>
    <p>already have an account?  <Link to="/login" className='text-primary text-decoration-none' onClick={clicklogin}>Please login</Link></p>
        </div>
    );
};

export default Register;