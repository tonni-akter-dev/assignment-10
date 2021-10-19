import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import About from '../Home/About/About';
import './About1.css';
const About1 = () => {
    return (
        <div className="mb-5">
            <div>
                <div className="about-bg text-center pt-5">
                    <h2>About us</h2>
                    <NavLink to='/home'>Home</NavLink>
                </div>
                <About />
                {/* our specialist */}
                <div className="border p-5 mt-5">
                    <div className="container ">
                        <h3 className=" title">Meet Our Heart Specialists</h3>
                        <p>Cardiology heart care by experienced and dedicated team who ensures that our patients receive compassionate, advanced care.</p>
                    </div>
                    <Row xs={1} md={3} className="container m-auto mt-5">
                        <Col className="d-flex">
                            <div>
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-1.jpg" alt="" /></div>
                            <div>
                                <h6 className="title1">Dr. Jack Roach</h6>
                                <small>(ELECTROPHYSIOLOGIST)</small>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <div >
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-2.jpg" alt="" /></div>
                            <div clasName="ps-2">
                                <h6 className="title1"> Dr. Jessica Lumley</h6>
                                <small>(PHYSICIAN)</small>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <div>
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-3.jpg" alt="" /></div>
                            <div>
                                <h6 className="title1">Dr. Samantha Beale  </h6>
                                <small>(HEART SPECIALIST)</small>

                            </div>
                        </Col>
                    </Row>
                    <Row xs={1} md={3} className="m-auto mt-3 container">
                        <Col className="d-flex">
                            <div>
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-4.jpg" alt="" /></div>
                            <div>
                                <h6 className="title1">Dr. Jack Roach</h6>
                                <small>(ELECTROPHYSIOLOGIST)</small>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <div >
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-5.jpg" alt="" /></div>
                            <div clasName="ps-2">
                                <h6 className="title1"> Dr. Jessica Lumley</h6>
                                <small>(PHYSICIAN)</small>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <div>
                                <img className="roun" src="http://jituchauhan.com/site-templates/medical-website-template/09_cardiology/images/dr-small-6.jpg" alt="" /></div>
                            <div>
                                <h6 className="title1">Dr. Samantha Beale  </h6>
                                <small>(HEART SPECIALIST)</small>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* achieve goals */}
                <div className="text-center p-5">
                    <h3 className="title1">Goals to Achieve for the leadership</h3>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div>
                    <div className="row container m-auto">
                        <div className="col-lg-6 col-sm-12 mb-5">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Success
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Nunc placerat mi id nisi interdum mollis. Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Info
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. leo quam aliquet diam, congue laoreet elit metus eget diam.
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Danger
                                        </button>
                                    </h2>
                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. Proin ac metus diam.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src="/images/app1.webp" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* services...... */}
            <div className="details mt-5 text-light">
                <div className=" row container p-5 m-auto">
                    <div className="col-lg-3  text-center mb-3" >
                        <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon4.svg" alt="" />
                        <h2>609</h2>
                        <small>Pregnancy Care</small>
                        <small>Sediut perspici atesi unde omni istenats.</small>
                    </div>
                    <div className="col-lg-3  text-center mb-3">
                        <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon5.svg" alt="" />
                        <h2>209</h2>
                        <small>Online Help</small>
                        <small>Sediut perspici atesi unde omni istenats.</small>
                    </div>
                    <div className="col-lg-3  text-center mb-3">
                        <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon6.svg" alt="" />
                        <h2>309</h2>
                        <small>Consultation
                        </small>
                        <small>Sediut perspici atesi unde omni istenats.</small>
                    </div>
                    <div className="col-lg-3 text-center mb-3">
                        <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon7.svg" alt="" />
                        <h2>300</h2>
                        <small>Diagnosis</small>
                        <small>Sediut perspici atesi unde omni istenats.</small>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default About1;