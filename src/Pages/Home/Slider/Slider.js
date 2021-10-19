import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './slider.css'
const Slider = () => {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item className="row" interval={2000}>
          <img
            className="d-block w-100"
            src="/images/s2.png"
            alt="First slide"
          />
          <Carousel.Caption className="text">
            <h1>We care about your health</h1>
            <p>I realize that becoming a doctor ,i can only help a small community . <br /> But by becoming a doctor,i can help my own country</p>
            <Button className="button-design">Appointment</Button>
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
            <Button className="button-design">Appointment</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;