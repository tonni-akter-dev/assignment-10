import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tonni-akter-dev/Api-hot-onion/main/fakeDb/serviceData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <>
            <div className="text-center mt-5">
                <small>HEALTHY SKIN AND NATURAL</small>
                <h4>Treatments & Services</h4>
            </div>
            {/* <div className="row row-cols-3 container m-auto">
           {
                services.map(service => <Service
                service={service}
                ></Service>)
            }

           </div> */}
            <Row xs={1} md={3} className="g-4 container m-auto">
                {services.map((service) => (
                    <Col>
                        <Card className="card-design">
                           <div className="img-hover-zoom ">
                           <Card.Img className="img-size" variant="top" src={service.image} />
                           </div>
                            <Card.Body>
                                <Card.Title>{service.serviceName}</Card.Title>
                                <Card.Text>
                                    {service.discription}
                                </Card.Text>
                                <Link to='/' className="service">More services</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </>
    );
};

export default Services;




















/*
 // ,
    // {
    //   "id": 7,
    //   "serviceName": "Volunteer care",
    //   "discription": "Volunteers from community organizations can provide basic comfort to the patient through companionship, helping with personal care, providing transportation, emotional support, and/or helping with paperwork.",
    //   "image": "https://media.istockphoto.com/photos/team-of-doctors-and-nurses-in-hospital-picture-id1307543618?b=1&k=20&m=1307543618&s=170667a&w=0&h=hXpYmNYXnhdD36C-8taPQvdpM9Oj-woEdge8nvPrsZY="
    // },
    // {
    //   "id": 8,
    //   "serviceName": "Nutritional support",
    //   "discription": "Dietitians can come to a patients home to provide dietary assessments and guidance to support the treatment plan.",
    //   "image": "https://images.unsplash.com/photo-1518634535905-13f21073199b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bnV0cml0aW9uYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //   "id": 9,
    //   "serviceName": "Pharmaceutical services",
    //   "discription": "Medicine and medical equipment can be delivered at home. If the patient needs it, training can be provided on how to take medicines or use of the equipment, including intravenous therapy.",
    //   "image": "https://images.unsplash.com/photo-1598300188480-626f2f79ab8d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGhhcm1hY2V1dGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    // },
    // {
    //   "id": 10,
    //   "serviceName": "Transportation",
    //   "discription": "There are companies that provide transportation to patients who require transportation to and from a medical facility for treatment or physical exams.",
    //   "image": "https://images.unsplash.com/photo-1564947471495-f427662213cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhbnNwb3J0YXRpb24lMjBkb2N0b3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    // }


*/