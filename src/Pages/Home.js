import React from 'react'
//import { Link } from 'react-router-dom';
import Slider from '../Components/Slider';
import Sidebar from '../Components/Sidebar';
import Tile from '../Components/Tile';
import CardGroup from 'react-bootstrap/CardGroup';

//home css
import '../Components/home.css';
//item images
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';
import img4 from '../Images/img4.png';

export default function Home() {
  return (
    <div >
     <div className="ms-0 row w-100">
        <div className="col-lg-2 p-0 h-100">
        <Sidebar/>
        </div>
        <div className="col-lg-10 p-0">
        <Slider/>

        <div className="d-inline-block align-top">
          <CardGroup>
            <Tile img={img1} title="Home Deco pack" text="Home decoration item set for new year. Includes 3 pcs from the list" price="5790.00" off="20%"/>
            <Tile img={img2} title="Men-Smart pack" text="Gift pack for men. Includes wallet, belt, wrist watch, sunglass, office pen, and key tag. " price="3900.00" off="15%" />
            <Tile img={img3} title="Black/Brown Wallet" text="Men wallet designs in black and brown. 3 small beauty equipments are free with this." price="2300.00" off="30%" />
            <Tile img={img4} title="Special greeting pack" text="Gift pack for special occations, weddings, promotions, job selection,... etc." price="970.00" off="12%" />
          </CardGroup>
        </div>


<br></br>
{/* <Link to='/Login' className='btn btn-primary'>Login</Link>
<Link to='/Signup' className='btn btn-primary'>Sign Up</Link>
<Link to='/Dashboard'className='btn btn-primary'>Dashboard</Link> */}
        </div>

      </div>

    </div>

  )
}