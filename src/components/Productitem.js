import React from 'react'

export default function Productitem() {
  return (
    <div>
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
                        <ListGroup.Item>Rs.</ListGroup.Item>
                        <ListGroup.Item> off</ListGroup.Item>
                    </ListGroup>



                    <div className="row mx-0 col-lg-6 my-3">
                    <label className='col-lg-4'>Quantity</label>
 <Button variant="light" className='col-lg-3'>-</Button>{' '}
                    <input type="text" className="col-lg-2"></input>
                    <Button variant="light"  className='col-lg-3'>+</Button>{' '}

                    </div>



                    <Button variant='warning' className=''> Buy Now</Button>
                    <Button variant='info' className='ms-3'> Add to Cart</Button>
                </Card.Body>
            </div>
    </div>
  )
}