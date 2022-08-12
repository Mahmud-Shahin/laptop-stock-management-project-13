// import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
//     const referenceEmail = useRef('');
//     const referencePass  = useRef('');
//     const controllogin = event =>{
//         event.preventDefault();
//         const email = referenceEmail.current.value;
//         const password =  referencePass.current.value;
//         console.log(email, password);
//   }

  

    const controllogin = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password =  event.target.password.value;
        console.log( email, password);
       
      } 


    const clicknavigate  = useNavigate();
    const clickRegister = event  => {

        clicknavigate('/register')

    }


    return (
        <div className='container mt-5 w-25 mx-auto'>
            <h2 className='text-center'>Please login </h2>

    <Form onSubmit={controllogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="email" name='email' placeholder="Enter email"  required/>
       {/* ref={referenceEmail} */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control  type="password" name='password' placeholder="Password"  required/>
     {/* ref={referencePass} */}
      </Form.Group>
    
      <Button variant="dark" type="submit">
        login
      </Button>
    </Form>
     <p>Dont't you have account? <Link to='/register' className='text-primary text-decoration-none' onClick={clickRegister} >Please Register</Link></p>





            
        </div>
    );
};

export default Login;