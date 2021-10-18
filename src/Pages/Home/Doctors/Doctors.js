import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const Doctors = () => {
    return (
        <div className="m-5 container">
            <div className="text-center">
                <h1>Our consultants</h1>
            </div>
            <Row className="g-2">
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team3.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h6>Andrew Neel</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                            <button className='btn btn-outline-danger'>Details</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team3.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h6>Monica Turlui</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                            <button className='btn btn-outline-danger'>Details</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team3.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h6>Inna Stellinna</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                            <button className='btn btn-outline-danger'>Details</button>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}


            </Row>


        </div>
    );
};

export default Doctors;