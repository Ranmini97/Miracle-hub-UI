import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/grab.png'
import img2 from '../Images/mega sale.png'
import img3 from '../Images/gift.png'
import img4 from '../Images/spread.png'

export default function Slider() {
  return (
    <div>
    <Carousel   >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3></h3>
          <p>
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3></h3>
          <p></p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>STRONGER YOUR BONDS WITH LITTLE THINGS</h3>
          {/* <p>
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}