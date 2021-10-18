import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Gallary = () => {
    return (
        <>
     <div className="text-center mt-5">
     <h6>OUR GELLARY</h6>
            <h1 className="text-bolder"> Our Medical Camp</h1>
     </div>
     <div>
         <Row xs={1} md={3} className="g-1 m-auto container">
             <Col>
             <img className="" src="/images/g1.webp" alt=""/>
             </Col>

             <Col>
             <img src="/images/g2.webp" style={{
                 paddingLeft:'200px'
             }} alt="" /></Col>
             <Col>
             <img src="/images/g3.webp" style={{
                 paddingLeft:'120px'
             }} alt="" />
             </Col>
         </Row>
         <Row xs={1} md={3} className="m-auto">
             <Col>
             <img className="img-fluid" src="/images/g4.webp" alt="" />
             </Col>

             <Col>
             <img src="/images/g5.webp" alt="" /></Col>
             <Col>
             <img src="/images/g6.webp" alt="" />
             </Col>
         </Row>
     </div>
        </>
    );
};

export default Gallary;