import React from 'react'
import Sidebar from '../Components/Sidebar'
import img3 from '../Images/img3.png'
import Card from 'react-bootstrap/Card';
import { Button, FormControl } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from "react"; 
import InputGroup from 'react-bootstrap/InputGroup';




export default function Item() {

    const [count, setCount] = useState(0);
    if(count<=0){
        setCount(1);
    }
    let handleChange=event => {
        const result = event.target.value.replace(/\D/g, '');
        setCount(result);
    };

    //const [count, setCount] = useState(0);

    useEffect(() => {

      }, [count]); // <- add the count variable here

  return (
    <div>

        <div className="ms-0 row w-100 mb-5">
            <div className="col-lg-2 p-0 ">
            <Sidebar/>
            </div>

            <div className="col-lg-4 p-0">
                <div className='p-2' >
                    <Card.Img variant="top" src={img3} />
                </div>
            </div>

            <div className='col-lg-5 bg-light p-2 mt-2' >
                <Card.Body>
                    <Card.Title className='mb-2'>Black/Brown Wallet - Men</Card.Title>
                    <Card.Text>
                      All the important details of the item shows here.
                      MENSPE Men Wallet RFID Card Case Safety Card Holder Anti-Theft RFID Blocking PU Leather Wallet Card Holder Coin Wallet Document Organizer Card Case with Zipper.
                      Men wallet designs in black and brown. 3 small beauty equipments are free with this.
                    </Card.Text>

                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Rs.2300.00</ListGroup.Item>
                        <ListGroup.Item>20% off</ListGroup.Item>
                    </ListGroup>

                    <div className="row mx-0 my-3">
                        <div className='col-lg-2'>
                    <label className=''>Quantity</label>

                        </div>
                        <div className='col-lg-3'>
                        <InputGroup>
                    <Button variant="outline-secondary" className='' onClick={() => setCount((c) => c - 1)}>-</Button>

                    <FormControl aria-label="Example text" id='itemnumber' className=''
                        aria-describedby="basic-addon1" value={count}
                        onChange={handleChange}
                    />

                    <Button variant="outline-secondary"  className='' onClick={() => setCount((c) => c + 1)}>+</Button>
                    </InputGroup> 
                        </div>

                    </div>

                    <Button variant='warning' className=''> Buy Now</Button>
                    <Button variant='info' className='ms-3'> Add to Cart</Button>
                </Card.Body>
            </div>

        </div>

    </div>
  )
}