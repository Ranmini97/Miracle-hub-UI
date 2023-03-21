import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Images/hwtransp.png';
import profile from '../Images/profile.png';
import search from '../Images/search w.png';
import './Navigation.css';

//search bar
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className='bg-main-nav' variant="dark" height="100">
      <Container fluid>
        <Navbar.Brand href="/">
            <img border='' padding="50"
              src={logo}
              width="90"
              className="d-inline-block align-top"
              alt="Miracle hub logo"
            />

            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Men Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Women Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Wrist Watches</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Statues</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Celebration Cards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Stationaries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                MYSTERY BOX
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Brands" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Popular" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#features">Special Offers</Nav.Link>
            <Nav.Link href="#pricing">Gift Vouchers</Nav.Link>
            <br></br>

            <Form className="d-flex ms-5">
            <Form.Control
              type="search"
              placeholder="Search more Miracles"
              className="me-2"
              aria-label="Search"
            />
            <Button className='btn btn-search'>
            <img 
              src={search}
              width="25"
              className="d-inline-block align-top"
              alt="search icon"
            />
            </Button>
          </Form>

          </Nav>
          <Nav>
            <Navbar.Brand href="/">
            <img 
              src={profile}
              width="32"
              className="d-inline-block align-top p-0"
              alt="profile icon"
            />
            </Navbar.Brand>

            <Nav.Link href="/Login" >Login</Nav.Link>
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Contact
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}