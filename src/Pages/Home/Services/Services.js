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
            {/* title div */}
            <div className="title text-center mt-5 mb-5">
                <small>HEALTHY SKIN AND NATURAL</small>
                <h4>Treatments & Services</h4>
            </div>
            <Row xs={1} md={3} className="g-4 container m-auto">
                {services.map(service => (<Service
                    service={service}
                    key={service.id}
                ></Service>
                )
                )}
            </Row>
        </>
    );
};
export default Services;




