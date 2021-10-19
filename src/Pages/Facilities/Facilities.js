import React from 'react';
import './Facilities.css';
import { Card, Col, Row } from 'react-bootstrap';
const Facilities = () => {
    return (
        <>
            <div className="text-center mt-5">
                <h2 className="title">Why Choose Us</h2>
                <p><i class="fas fa-wave-square"></i></p>
                <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. <br /> Phasellus venenatis, lacus in malesuada pellentesque</p>
            </div>

            {/* Why choose us */}
            <Row className="g-2 text-center container m-auto mb-5">
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Body>
                            <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icons001.svg" className="w-25" alt="" />
                            <Card.Text>
                <h6 className='title'>Qualified doctors</h6>
                <p>Every doctor are more carefull their duty and they do their job perfectly.They are always ready to do their </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Body>
                            <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icon004.svg" className="w-25" alt="" />
                            <Card.Text>
                                <h6 className='title'>Ambulance Service</h6>
                                <p>We are ready to listen to your problem anytime and give 24 hours ambulance service.Anytime you just call and get ambulance service</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Body>
                            <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icon003.svg" className="w-25" alt="" />
                            <Card.Text>
                                <h6 className='title'>Qualified doctors</h6>
                                <p>Every doctor are more carefull their duty and they do their job perfectly.They are always ready to do their </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
            </Row>
            {/* specialist */}
            <div className="row container m-auto mt-5">
                <div className="col-lg-6 ">
                    <h6 className="ps-5">High-class specialists are ready to help you</h6>
                    <p className="ps-5"><i class="fas fa-wave-square"></i></p>
                    <ul className="d-flex justify-content-around">
                        <div>
                            <li>Diagnosis care</li>
                            <li>Pregnancy care</li>
                            <li>Dental care</li>
                            <li>Preventative Care</li>
                        </div>
                        <div>
                            <li>Treatment care</li>
                            <li>Online help</li>
                            <li>Pediatric care</li>
                            <li>Inpatient Care</li>
                        </div>
                    </ul>
                    <button className="btn button-design rounded-pill">Check it now</button>
                </div>
                <div className="col-lg-6 mt-3">
                    <img className="img-fluid" src="/images/startup.jfif" alt="" />
                </div>
            </div>
            {/* Provide total health care  section*/}
            <div className="row container mx-auto mt-5">
                <div className="col-lg-3 col-sm-12 mb-3">
                    <h2>Provide total <br /> health care</h2>
                    <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis phasellus venenatis</p>
                    <button className=" ms-5 btn button-design rounded-pill">Check it now</button>
                </div>
                <div className="col-lg-3 col-sm-12 mb-3 pe-3">
                    <img src="https://f.hubspotusercontent20.net/hubfs/20206872/preview02.jpg" style={{
                        maxWidth: '300px',
                        height: 'auto'
                    }} alt="" />
                </div>
                <div className="col-lg-3 col-sm-12 mb-3 ps-5">
                    <img src="https://f.hubspotusercontent20.net/hubfs/20206872/preview01.jpg" style={{
                        maxWidth: '300px',
                        height: 'auto'
                    }} alt="" />

                </div>

            </div>




        </>
    );
};

export default Facilities;