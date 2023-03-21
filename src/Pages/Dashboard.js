import React from 'react'
//import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Tile from '../Components/Tile';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';


//home css
import '../Components/home.css';
//item images
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';
import fav1 from '../Images/fav1.jpg';
import box from '../Images/mb.jpg';
import history from '../Images/history.png';
import offer from '../Images/offer.png';
import pay from '../Images/pay.png';
import voucher from '../Images/voucher.png';
import addbaner from '../Images/baner.png';

export default function Dashboard() {
  return (
    <div className="ms-0 row w-100">

        <div className="col-lg-2 p-0">
        <Sidebar/>
        </div>

        <div className="col-lg-10 p-0">
        <h3 className='text-center text-info'>Welcome to the Dashboard!</h3>

          <div className="row m-0">
            <div className='col-lg-3 '>
            <Button  action variant="" className="p-0">
            <Card>
             <Card.Body>
                <Card.Title>My Favorites</Card.Title>
               {/* <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text> */}
               <Card.Img variant="top" className='' src={fav1} />
              </Card.Body>
            </Card>
          </Button>
            </div>

            <div className='col-lg-3'>
            <Button action variant="" className="p-0">
            <Card>
             <Card.Body>
                <Card.Title>Seasonal Offers</Card.Title>
               {/* <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text> */}
               <Card.Img variant="top" className='' src={offer} />
              </Card.Body>
            </Card>
          </Button>
            </div>

            <div className='col-lg-3'>
            <Button href="/Mysterybox" action variant="" className="p-0">
            <Card>
             <Card.Body>
                <Card.Title>Mystery Box</Card.Title>
               {/* <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text> */}
               <Card.Img variant="top" className='' src={box} />
              </Card.Body>
            </Card>
          </Button>
            </div>
            <div className='col-lg-3'>
              <Button action variant="" className="p-0">
                <Card>
                  <Card.Body>
                  <Card.Title>Vouchers</Card.Title>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text> */}
                  <Card.Img variant="top" className='' src={voucher} />
                  </Card.Body>
                </Card>
              </Button>
            </div>

          </div>

          <div className="row mx-0 my-3">

            <div className='col-lg-3'>
            <Button action variant="" className="p-0">
            <Card>
             <Card.Body>
                <Card.Title>Viewed History</Card.Title>
               {/* <Card.Text>
                 Some quick example text to build on the card title and make up the
                 bulk of the card's content.
               </Card.Text> */}
               <Card.Img variant="top" className='' src={history} />
              </Card.Body>
            </Card>
            </Button>
            </div>

            <div className='col-lg-3'>
              <Button action variant="" className="p-0">
                <Card>
                  <Card.Body>
                  <Card.Title>Payments</Card.Title>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text> */}
                  <Card.Img variant="top" className='' src={pay} />
                  </Card.Body>
                </Card>
              </Button>
            </div>

            <div className='col-lg-6'>
                <Card>
                  <Card.Body>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text> */}
                  <Card.Img variant="top" className='' src={addbaner} />
                  </Card.Body>
                </Card> 
            </div>

          </div>

          <div className="col-lg-12 p-0">
            <hr></hr>
            <h4 className="text-center text-danger mb-3">More to wander 😍😍 </h4>
          <div className="d-inline-block align-top">
            <CardGroup>
              <Tile img={img1} title="Home Deco pack" text="Home decoration item set for new year. Includes 3 pcs from the list" price="5790.00" off="20%"/>
              <Tile img={img2} title="Men-Smart pack" text="Gift pack for men. Includes wallet, belt, wrist watch, sunglass, office pen, and key tag. " price="3900.00" off="15%" />
              <Tile img={img3} title="Black/Brown Wallet" text="Men wallet designs in black and brown. 3 small beauty equipments are free with this." price="2300.00" off="30%" />
              <Tile img={img4} title="Special greeting pack" text="Gift pack for special occations, weddings, promotions, job selection,... etc." price="970.00" off="12%" />
            </CardGroup>
          </div>
          <br></br>
        </div>

        </div>



    </div>
  )
}