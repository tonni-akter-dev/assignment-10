import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
const Doctors = () => {
    return (
        <div className="m-5 container m-auto mb-5">
            <div className="text-center">
                <h1>Our consultants</h1>
            </div>
            <Row className="g-2">
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/xteam2.png.pagespeed.ic.DQ4oT4HGiz.webp" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Andrew Neel</h4>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/xteam3.png.pagespeed.ic.DYLW1HkMME.webp" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Monica Turlui</h4>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/xteam1.png.pagespeed.ic.NoYCEZ5trh.webp" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Inna Stellinna</h4>
                        <h6 className="text-bold">Haematology</h6>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}


            </Row>
            <Row className="g-2 mt-5 m-auto">
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team-1.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Andrew Neel</h4>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team2.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Monica Turlui</h4>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Img className='image' variant="top" src="/images/team3.jpg" />
                        <Card.Body>
                            <Card.Text>
                            <h4 className="title">Inna Stellinna</h4>
                        <h6 className="text-bold">Haematology</h6>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                                <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}


            </Row>


        </div>
    );
};

export default Doctors;