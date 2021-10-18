import React from 'react';
import { Carousel } from 'react-bootstrap';
import './slider.css'
const Slider = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item className="row"  interval={2000}>
    <img
      className="d-block w-100"
      src="/images/slider-mainbg-003.jpg"
      alt="First slide"
    />
    <Carousel.Caption className="text">
      <h1>Commited to medical health care</h1>
      <p>I realize that becoming a doctor ,i can only help a small community . <br /> But by becoming a doctor,i can help my own country</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="row" interval={500}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/BrpdJks/s2.jpg"
      alt="Second slide"
    />
    <Carousel.Caption className="text">
    <h1>A medical care you can always trust</h1>
      <p>I realize that becoming a doctor ,i can only help a small community . <br /> But by becoming a doctor,i can help my own country</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;