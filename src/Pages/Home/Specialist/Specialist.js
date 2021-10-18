import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Specialist.css'
const Specialist = () => {
    return (
        <Row xs={1} md={3} className="g-4 container m-auto">
<Col>
                <Card className="card-design">
                    <div className="img-hover-zoom ">
                        <Card.Img className="img-size" variant="top" src='' />
                    </div>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>

                        </Card.Text>
                        <Link to='/' className="service">More services</Link>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    );
};

export default Specialist;