import React from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import google from '../Images/google.png';
import fb from '../Images/fb.png';

export default function Login() {
  return (
    <div className='bg-light p-4'>

        <h5 className='text-center mb-3'>If you already have a Miracle account, please enter your details to login!</h5>

        <div className='m-auto col-md-4 align-center border p-3 bg-white'>

        <Form>

        

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email here" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your Password" />
      </Form.Group>
      <a href='#' className="">forgot password</a>
      <Form.Group className="mt-2 mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember my details" />

      </Form.Group>
      <div className="d-grid gap-2 col-6 mx-auto">
      <Button variant="primary" type="submit">
        <Link to='/Dashboard'className='btn text-white'>Login</Link>
      </Button>
      </div>

      <hr></hr>
        <p className='text-center'>Or Login With</p>

        <div className="text-center">
          <a href="https://accounts.google.com/ServiceLogin/signinchooser" className='btn'>
            <img border='' padding="50" margine="50"
              src={google}
              width="50"
              className="d-inline-block align-top"
              alt="Miracle hub logo"
            />
          </a>
          <a href="https://www.facebook.com/" className='btn'>
            <img border='' padding="50" margine="50"
              src={fb}
              width="50"
              className="d-inline-block align-top"
              alt="Miracle hub logo"
            />
          </a>
        </div>


        </Form>
        </div>

    </div>

  )
}