import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from "react"; 

import img1 from '../Images/img1.png';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Itemview() {

    const [count, setCount] = useState(0);
    useEffect(() => {

      }, [count]); // <- add the count variable here

  return (
    <div className='row m-0'> 
    <div className='col-lg-3 p-2' >
    <Card >
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    <div className='col-lg-9 p-2' >
    <Card>

      <Card.Body>
        <Card.Title> </Card.Title>
        <Card.Text>
           <h1 >Product 1</h1>
        </Card.Text>
        <div className='col-2'>
        <InputGroup className="mb-3">
        <Button variant="outline-secondary" onClick={() => setCount((c) => c - 1)}>
          -
        </Button>
        <Form.Control
          aria-label="Example text with button addon" id='itemnumber'  
          aria-describedby="basic-addon1" value={count}  
        />
        <Button variant="outline-secondary" onClick={() => setCount((c) => c + 1)}>
          +
        </Button>
      </InputGroup>

        </div>


      </Card.Body>
      </Card>
</div>
      </div>
  )
}