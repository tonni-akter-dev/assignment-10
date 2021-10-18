import React from 'react';

const Service = (props) => {
    const{serviceName,discription,image}=props.service;
    return (
        <div>
            {/* <h2></h2> */}
            <div className="col col-md-6 col-sm-12">
  <div className="card">
    <img className="card-img-top" src={image} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{serviceName}</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;