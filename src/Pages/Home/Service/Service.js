import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { serviceName, discription, image, id } = props.service;
    return (
        <div>
            <Col className="mb-5">
                <Card className="card-design">
                    <div className="img-hover-zoom ">
                        <Card.Img className="img-size" variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <Card.Title>{serviceName}</Card.Title>
                        <Card.Text>
                            {discription}
                        </Card.Text>
                        <Link
                            to={`/serviceDetails/${id}`} className="service">More services</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;