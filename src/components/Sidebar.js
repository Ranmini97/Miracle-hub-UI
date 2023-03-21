import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function Sidebar() {
  return (
    <div className='sidebar ' >
    <ListGroup className='nav-fixed-left'>

      <ListGroup.Item href='/Mysterybox' action variant="" className='bg-success text-white ps-5' >MYSTERY BOX</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Latest Items</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Women Fassion</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Men Fassion</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Baby Items</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Toys</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Kids Items</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Stationaries</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Home Items</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Electronic Items</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Cosmatics</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Ornaments</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Gift Cards</ListGroup.Item>
      <ListGroup.Item action variant="" className='ps-5'>Statues</ListGroup.Item>





    </ListGroup>
    </div>
  )
}