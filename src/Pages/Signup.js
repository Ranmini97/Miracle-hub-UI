import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import google from '../Images/google.png';
import fb from '../Images/fb.png';
import axios from 'axios';

export default function Signup() {

  let navigate = useNavigate ()

  const [user,setUser]=useState({
    c_name:"",
    c_phone:"",
    email:"",
    password:"",
    dob:"",
    gender:""
  })

  const{c_name,c_phone,email,password,dob,gender}=user

  const onInputChange=(e) => {
    setUser({...user,[e.target.name]:e.target.value}) //...user to keep on adding new objects

  };

  const onSubmit=async(e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/api/v1/customer/saveCustomer",user)
      navigate("/Success");
  }

  return (
    <div className='bg-light p-4 border-4'>
        <h5 className='text-center'>Welcome to Miracle Hub! Please enter your details to sign up.</h5>
        <br></br>

        <div className='m-auto col-md-6 align-center border p-3 bg-white'>
          <Form onSubmit={(e)=>onSubmit(e)}>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type={"text"} placeholder="Enter your name"
                 name="c_name" value={c_name}
                 onChange={(e)=>onInputChange(e)}
                 />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label >Mobile</Form.Label>
                <Form.Control placeholder="+94XXXXXXXX" type='tel' 
                name="c_phone" Value={c_phone}
                onChange={(e)=>onInputChange(e)}>
                </Form.Control>
              </Form.Group>
          </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" 
                name="email" Value={email}
                onChange={(e)=>onInputChange(e)}/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter a strong password" 
                name="password" Value={password}
                onChange={(e)=>onInputChange(e)}/>
              </Form.Group>
            </Row>

            <Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridAddress1">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control placeholder="YYYY/MM/DD" type='date' 
              name="dob" Value={dob}
              onChange={(e)=>onInputChange(e)}/>
            </Form.Group>

            <Form.Group as={Col} className=" row mb-3 ms-3">
              <Form.Label as="legend" column sm={4} className="mt-0 border-1">
                Gender
              </Form.Label>

              <Col sm={8} className="mt-2" >
                  <Form.Check type="radio" label="Male" id="m" name="gender" value="M"  Value={gender} onChange={(e)=>onInputChange(e)}/>
                  <Form.Check type="radio" label="Female" id="f" name="gender" value="F"  Value={gender} onChange={(e)=>onInputChange(e)}/>
                  <Form.Check type="radio" label="Other" id="o" name="gender" value="O"  Value={gender} onChange={(e)=>onInputChange(e)}/>
              </Col>

             </Form.Group>

            
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
             <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <div className="d-grid gap-2 col-6 mx-auto">
               <Button variant="primary" type="submit" className='btn text-white'>Create My Miracle Account
                 {/* <Link to='/Success' className='btn text-white'>Create My Miracle Account</Link> */}
               </Button>
            </div>
            <hr></hr>

            <p className='text-center'>Or Continue With Your Google or Facebook Account</p>
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

        {/* <Link to='/' className='btn btn-danger'>Go to Home</Link> */}
    </div>

  )
}