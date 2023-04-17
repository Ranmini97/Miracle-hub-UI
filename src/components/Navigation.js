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
              <NavDropdown.Item href="#Men/3.1">Men Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#Women/3.2">Women Clothes</NavDropdown.Item>
              <NavDropdown.Item href="#Shoes/3.3">Shoes</NavDropdown.Item>
              <NavDropdown.Item href="#Watches/3.3">Wrist Watches</NavDropdown.Item>
              <NavDropdown.Item href="#Statues/3.3">Statues</NavDropdown.Item>
              <NavDropdown.Item href="#Cards/3.3">Celebration Cards</NavDropdown.Item>
              <NavDropdown.Item href="#Toys/3.3">Toys</NavDropdown.Item>
              <NavDropdown.Item href="#Books/3.3">Books</NavDropdown.Item>
              <NavDropdown.Item href="#Stationaries/3.3">Stationaries</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#MYSTERY/3.4">
                MYSTERY BOX
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Brands" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#Nike/3.1">Nike</NavDropdown.Item>
              <NavDropdown.Item href="#Gucci/3.2">Gucci</NavDropdown.Item>
              <NavDropdown.Item href="#Adidas/3.3">Adidas</NavDropdown.Item>
              <NavDropdown.Item href="#Hermès/3.3">Hermès</NavDropdown.Item>
              <NavDropdown.Item href="#Louis/3.3">Louis Vuitton</NavDropdown.Item>
              <NavDropdown.Item href="#Moose/3.3">Moose</NavDropdown.Item>
              <NavDropdown.Item href="#Odel/3.3">Odel</NavDropdown.Item>
              <NavDropdown.Item href="#Chanel/3.3">Chanel</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Other/3.4">
                Other
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Popular" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#T-shirts/3.1">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="#Headphones/3.2">
              Headphones
              </NavDropdown.Item>
              <NavDropdown.Item href="#Sunglasses/3.3">Sunglasses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Hoodies/3.3">Hoodies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Sweets/3.3">Sweets</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Backpacks/3.3">Backpacks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#other/3.4">
                Other 
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#SpecialOffers">Special Offers</Nav.Link>
            <Nav.Link href="#GiftVouchers">Gift Vouchers</Nav.Link>
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