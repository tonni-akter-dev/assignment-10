import React from 'react';
const Doctors = () => {
    return (
        <div className="m-5 container">
            <div className="text-center">
<h1>Our consultants</h1>
            </div>

            <div class="row row-cols-3  container mt-5 m-auto">
                <div className="card col-lg-4 col-sm-12">
                    <img className="img-fluid" src="/images/team-1.jpg" alt="" />
                    <div className=" p-2">
                        <h6>Andrew Neel</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                        <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 col-sm-12">
                    <img className="img-fluid" src="/images/team2.jpg" alt="" />
                    <div className=" p-2">
                        <h6>Monica Turlui</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                        <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                    </div>
                </div>
                <div className="card col-lg-4 col-sm-12">
                    <img className="img-fluid" src="/images/team3.jpg" alt="" />
                    <div className="p-2">
                        <h6>Inna Stellinna</h6>
                        <p>Haematology</p>
                        <small>Vestibulum faucibus neque at tristique eu ultrices ipsum mollis. Phasellus</small>
                        <p>
                            <i className="m-2 fab fa-facebook-square"></i>
                            <i className=" fab fa-twitter"></i>
                            <i class="m-2  fab fa-linkedin-in"></i>
                            <i className=" fab fa-instagram-square"></i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;