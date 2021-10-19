import React from 'react';
import './Apponitment.css';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Apponitment = () => {

    return (
        <>
   <div className="banner3">
                <div className="py-5 banner" style={{
                    backgroundImage: "url(https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/form-banners/banner2/banner-bg.jpg)",
                    backgroundRepeat: 'no-repeat',

                }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-5">
                                <h3 className="my-3 text-white font-weight-medium text-uppercase">Book Appointment</h3>
                                <div className="bg-white">
                                    <div className="form-row border-bottom">
                                        <div className="p-4 left border-right w-50">
                                            <label className="text-inverse font-12 text-uppercase">First Name</label>
                                            <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Your First Name" />
                                        </div>
                                        <div className="p-4 right w-50">
                                            <label className="text-inverse font-12 text-uppercase">Last Name</label>
                                            <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Your Last Name" />
                                        </div>
                                    </div>
                                    <div className="form-row border-bottom p-4">
                                        <label className="text-inverse font-12 text-uppercase">Email Address</label>
                                        <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Enter your Email Address" />
                                    </div>
                                    <div className="form-row border-bottom p-4">
                                        <label className="text-inverse font-12 text-uppercase">Phone Number</label>
                                        <input type="text" className="border-0 p-0 font-14 form-control" placeholder="Enter your Phone Number" />
                                    </div>
                                    <div className="form-row border-bottom p-4 position-relative">
                                        <label className="text-inverse font-12 text-uppercase">Booking Date</label>
                                        <div className="input-group date">
                                            <input type="text" className="border-0 p-0 font-14 form-control" id="dp" placeholder="Select the Appointment Date" />
                                            <label className="mt-2" for="dp"><i className="icon-calendar mt-1"></i></label>
                                        </div>
                                    </div>
                                    <div className="form-row border-bottom p-4">
                                        <label className="text-inverse font-12 text-uppercase">Message</label>
                                        <textarea col="1" row="1" className="border-0 p-0 font-weight-light font-14 form-control" placeholder="Write Down the Message"></textarea>
                                    </div>
                                    <div className="text-center">
                                        <button className="p-2 mb-5 btn btn-primary btn-block text-center text-white text-uppercase">
                                            <span>Book Yor Appointment Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <Row className="g-2 container m-auto mb-5">
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>

                        <Card.Body>
                            <Card.Text>
                                <h6 className='title'>Meet The Doctors</h6>

                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <Link>Read More</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>

                        <Card.Body>
                            <Card.Text>
                                <h6 className='title'>New Patient Information</h6>

                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <Link>Read More</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Body>
                            <Card.Text>
                                <h6 className='title'>Hours & Location</h6>
                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <Link>Read More</Link>
                        </Card.Body>
                    </Card>
                </Col>        
            </Row>

            {/*  booking */}
            <Row className="g-2 text-center container m-auto mb-5">
                <p>Heart Care is the past, present, and future of cardiology in India. Founded almost 5 years ago, Heart Care is the oldest and largest cardiovascular group in India. From its small beginning in ahmedabad, Heart Care has grown to over 50 physicians throughout.</p>
                <h3>Welcome Patient to our clinic</h3>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                        <Card.Body>
                    <p><i className="fa-2x title fab fa-wpforms"></i></p>
                            <Card.Text>
                                <h6 className='title'>Meet The Doctors</h6>

                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <button className="btn rounded-pill btn-design">DownLoad Foem</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>

                    <Card.Body>
                    <p><i className="fa-2x title fab fa-wpforms"></i></p>
                            <Card.Text>
                                <h6 className='title'>Book Your Appt. Online</h6>
                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <button className="btn rounded-pill btn-design">Make Appointment</button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Card className='overflow-hidden'>
                    <Card.Body>
                    <p><i className="fa-2x title fab fa-youtube"></i></p>
                            <Card.Text>
                                <h6 className='title'>Watch Patient Education</h6>

                                <small>Nulla fringilla convallis exacete ndonec ultricies semcitudi loremes aecenas metus nulla conven.</small>
                            </Card.Text>
                            <button className="btn rounded-pill btn-design">Watch Video</button>
                        </Card.Body>
                    </Card>
                </Col>
                {/*  */}
            </Row>




        </>

    );
};

export default Apponitment;