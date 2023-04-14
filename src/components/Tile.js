import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Tile(props) {
  return (
    <div className='col-lg-3 p-2' >
    <Card >
      <Card.Img variant="top" src={props.img} />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item>Rs.{props.price}</ListGroup.Item>
        <ListGroup.Item>{props.off} off</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Card.Link className='text-center' href="/Item">View Item</Card.Link>
      </Card.Body>

    </Card>
    </div>
  );
}