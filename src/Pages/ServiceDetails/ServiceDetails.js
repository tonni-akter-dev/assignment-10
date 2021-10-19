import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    console.log(serviceId);

    const [service, setService] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tonni-akter-dev/Api-hot-onion/main/fakeDb/serviceData.json')
            .then(res => res.json())
            .then(data => {
                const findServiceData = data.find(service => service.id == parseInt(serviceId))
                if (findServiceData) {
                    setService(findServiceData);
                }
            })
    }, [])
    console.log();
    return (
        <div>   
      <Container>
        <Row className="m-5">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={service?.image} />
            </Card>
          </Col>
          <Col md={5}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="text-bold">{service?.serviceName}</Card.Title>
              <p>{service?.discription}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    );
};

export default ServiceDetails;