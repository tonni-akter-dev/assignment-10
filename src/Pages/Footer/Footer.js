import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const Footer = () => {
  return (
    <div className='bg-dark text-white margin-top py-3'>
      <Container>
        <Row className='gy-4'>
          <Col sm={12} md={12} lg={5}>
            <div className='fs-1 mb-4'>
              <i class="fab fa-buffer"></i><span className='text-info'>Medi</span>Care
            </div>
            <p>I must explain to you how at mistakidea of denouncing pleasure and praisi pain was born and I will give you.</p>
            {/* icon section */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-facebook-f"></i
              ></a>
              {/* <!-- Twitter --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-twitter"></i
              ></a>
              {/* <!-- Google --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-google"></i
              ></a>
              {/* <!-- Instagram --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-instagram"></i
              ></a>
              {/*  <!-- Linkedin --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-linkedin-in"></i
              ></a>
              {/* <!-- Github --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-github"></i
              ></a>
            </section>
          </Col>
          <Col sm={12} md={12} lg={3}>
            <h4 className='mb-4'>Information</h4>
            <div>
              About Hospital <br />
              Our Service <br />
              Our Feature <br />
              Health News <br />
              Cleaning Tips
            </div>
          </Col>
          {/* thidd column */}
          <Col sm={12} md={12} lg={4}>
            <h4 className='mb-4'>Contact Info</h4>
            <div>
              <div className='mb-2'><i className="me-2  fas fa-street-view"></i>Sector-10, Uttara Dhaka-1230</div>
              <div className='mb-2'><i className="me-2 fas fa-phone-alt"></i>+880 1795443674</div>
              <div><i className="me-2  fas fa-envelope-open-text"></i>medicare.health@gmail.com</div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className='text-center mt-5'>
        <i className="fa fa-copyright"></i>Copyright 2021 || Develop by  Tonni Akter
      </div>
    </div>
  );
};

export default Footer;