import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import google from '../Images/google.png';
import fb from '../Images/fb.png';

export default function Signup() {
  return (
    <div className='bg-light p-4'>
        <h5 className='text-center'>Welcome to Miracle Hub! Please enter your details to sign up.</h5>
        <br></br>

        <div className='m-auto col-md-6 align-center border p-3 bg-white'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            {/* <h6 className='p-0 mb-2'>Home Address </h6>
            <Row className="mb-3">
              <Form.Group  controlId="formGridAddress1">
                <Form.Label>Lane</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row> */}

            {/* <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group> */}

            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>District</Form.Label>
                <Form.Select defaultValue=" " placeholder="Choose">
                  <option> </option>
                  <option>Colombo</option>
                  <option>Gampaha</option>
                  <option>Kalutara</option>
                  <option>Kandy</option>
                  <option>Matale</option>
                  <option>Nuwara Eliya</option>
                  <option>Galle</option>
                  <option>Matara</option>
                  <option>Hambantota</option>
                  <option>Kegalle</option>
                  <option>Ratnapura</option>
                  <option>Moneragala</option>
                  <option>Badulla</option>
                  <option>Anuradhapura</option>
                  <option>Polonnaruwa</option>
                  <option>Kurunegala</option>
                  <option>Puttalam</option>
                  <option>Trincomalee</option>
                  <option>Ampara</option>
                  <option>Jaffna</option>
                  <option>Kilinochchi</option>
                  <option>Batticaloa</option>
                  <option>Mullaitivu</option>
                  <option>Vavuniya</option>
                  <option>Mannar</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row> */}

            <Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridAddress1">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control placeholder="YYYY/MM/DD" type='date' />
            </Form.Group>

            <Form.Group as={Col} className=" row mb-3 ms-3">
             <Form.Label as="legend" column sm={4} className="mt-0 border-1">
                Gender
                </Form.Label>
                <Col sm={8} className="mt-2">
                  <Form.Check type="radio" label="Male" name="radio" id="m"/>
                  <Form.Check type="radio" label="Female" name="radio" id="f"/>
                  <Form.Check type="radio" label="Other" name="radio" id="o" />
                </Col>
             </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label >Mobile</Form.Label>
                <Form.Control placeholder="+94XXXXXXXXX" type='tel' defaultValue="">
                </Form.Control>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
             <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <div className="d-grid gap-2 col-6 mx-auto">
               <Button variant="primary" type="submit">
                 <Link to='/Dashboard'className='btn text-white'>Create Your Miracle Account</Link>
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