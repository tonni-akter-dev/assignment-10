import React from 'react';
import './Pricing.css'
const Pricing = () => {
  return (
    <div className="mt-5 container mb-5">
      <div className="text-center">
        <h5 className="fw-bold">Select Your <span style={{ color: '#23cc88' }}>Package</span> </h5>
        <p>We provide a relevant service for you </p>
      </div>
      <div>
        <div className="row bg-light">
          <div className="col-lg-4 col-sm-12 mb-3">
            <div className="card h-100 p-3 hover" style={{ width: '18rem' }}>
              <div className="text-center">
                <h6>Basic</h6>
                <h5 className="text-primary">$100 <sub>/month</sub></h5>
              </div>
              <div className="card-body">
                <ul className="text-center list-unstyled">
                  <li>Oil Pulling</li>
                  <li>Baking Soda</li>
                  <li>Hydrogen Peroxide</li>
                  <li>Internal Medicine</li>
                  <li>Internal Medicine</li>
                  <li>Advanced Care</li>
                  <li>Otolaryngology</li>
                  <li>Ophthalmology</li>
                  <li>Sports Injury</li>

                </ul>
                <div className="text-center">
                  <button className="button-design btn rounded-pill">Sign up now</button>
                </div>
              </div>
            </div>
          </div>
          {/* col 3 */}
          <div className="col-lg-4 col-sm-12 mb-3" >
            <div style={{ backgroundColor: '#4e6dcc', width: '18rem', color: 'white' }} className="card h-100 p-3 hover">
              <div className="text-center">
                <h6>Standard</h6>
                <h5 className="text-dark">$49 <sub>/month</sub></h5>
              </div>
              <div className="card-body">
                <ul className="text-center list-unstyled">
                  <li>Oil Pulling</li>
                  <li>Baking Soda</li>
                  <li>Hydrogen Peroxide</li>
                  <li>Internal Medicine</li>
                  <li>Internal Medicine</li>
                  <li>Advanced Care</li>
                  <li>Otolaryngology</li>
                  <li>Ophthalmology</li>
                  <li>Sports Injury</li>
                </ul>
                <div className="text-center">
                  <button className=" bg-light  btn rounded-pill">Sign up now</button>
                </div>
              </div>
            </div>
          </div>
          {/* col 2 */}
          <div className="col-lg-4 col-sm-12">
            <div className="card h-100 p-3 hover" style={{ width: '18rem' }}>
              <div className="text-center ">
                <h6>premium</h6>
                <h5 className="text-primary">$79 <sub>/month</sub></h5>
              </div>
              <div className="card-body">
                <ul className="text-center list-unstyled">
                  <li>Oil Pulling</li>
                  <li>Baking Soda</li>
                  <li>Hydrogen Peroxide</li>
                  <li>Internal Medicine</li>
                  <li>Internal Medicine</li>
                  <li>Advanced Care</li>
                  <li>Otolaryngology</li>
                  <li>Ophthalmology</li>
                  <li>Sports Injury</li>
                </ul>
                <div className="text-center">
                  <button className="button-design btn rounded-pill">Sign up now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;