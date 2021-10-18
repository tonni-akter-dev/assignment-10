import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>

            <Row className="container m-auto mt-5">
                <Col className="pt-5">
                    <h5>ABOUT OUR COMPANY</h5>
                    <h1>Welcome To Our Hospital</h1>
                    <p>There arge many variations ohf pacgssages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                    <Button className="button-design text-light"><small>Find doctors</small> <i class="fas fa-arrow-right"></i></Button> <br /> <br />
                    <Button className="button-design text-light"><small>Appointment</small>  <i class="fas fa-arrow-right"></i></Button><br /><br />
                    <Button className="button-design text-light"><small>Emergency</small> <i class="fas fa-arrow-right"></i></Button>
                </Col>
                <Col>
                    <img src="/images/about1.webp" alt="" />
                </Col>


            </Row>
        </div>
    );
};

export default About;
