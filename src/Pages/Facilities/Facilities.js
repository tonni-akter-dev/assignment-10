import React from 'react';
import './Facilities.css'
const Facilities = () => {
    return (
        <>
            <div className="text-center mt-5">
                <h3>Why Choose Us</h3>
                <p><i class="fas fa-wave-square"></i></p>
                <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. <br /> Phasellus venenatis, lacus in malesuada pellentesque</p>
            </div>
            <div className="row container m-auto" >
                <div className="col-lg-4 col-sm-12 p-3 border text-center">
                    <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icons001.svg" className="w-25" alt="" />
                    <h6>Emergency Service</h6>
                    <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-3 border text-center">
                    <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icon004.svg" className="w-25" alt="" />
                    <h6>Diagnostic Center</h6>
                    <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-3 border text-center">
                    <img src="https://f.hubspotusercontent20.net/hubfs/20206872/icon003.svg" className="w-25" alt="" />
                    <h6>Qualified doctors</h6>
                    <p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis</p>
                </div>
            </div>

            <div className="row container m-auto mt-5">
                <div className="col-lg-6 ">
                    <h6 className="ps-5">High-class specialists are ready to help you</h6>
                    <p className="ps-5"><i class="fas fa-wave-square"></i></p>
                    <ul className="d-flex justify-content-around">
                        <div>
                        <li>Diagnosis care</li>
                        <li>Pregnancy care</li>
                        <li>Dental care</li>
                        <li>Preventative Care</li>
                        </div>
                       <div>
                       <li>Treatment care</li>
                        <li>Online help</li>
                        <li>Pediatric care</li>
                        <li>Inpatient Care</li>
                       </div>
                    </ul>
                    <button className=" ms-5 btn button-design rounded-pill">Check it now</button>
                </div>
                <div className="col-lg-6 mt-3">
                   <img className="img-fluid" src="/images/startup.jfif" alt="" />
                </div>
            </div>
<div  className="details mt-5 text-light mb-5">
<div className=" row container p-5 m-auto">
<div className="col-lg-3  text-center mb-3" >
    <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon4.svg" alt="" />
    <h2>609</h2>
    <small>Pregnancy Care</small>
    <small>Sediut perspici atesi unde omni istenats.</small>
</div>
<div className="col-lg-3  text-center mb-3">
    <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon5.svg" alt="" />
    <h2>209</h2>
    <small>Online Help</small>
    <small>Sediut perspici atesi unde omni istenats.</small>
</div>
<div className="col-lg-3  text-center mb-3">
    <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon6.svg" alt="" />
    <h2>309</h2>
    <small>Consultation
</small>
    <small>Sediut perspici atesi unde omni istenats.</small>
</div>
<div className="col-lg-3 text-center mb-3">
    <img className="image-sizing" src="https://f.hubspotusercontent20.net/hubfs/20206872/icon7.svg" alt="" />
    <h2>300</h2>
    <small>Diagnosis</small>
    <small>Sediut perspici atesi unde omni istenats.</small>
</div>
</div>
</div>

{/* Provide total health care  section*/}
<div className="row container mx-auto">
<div className="col-lg-3 col-sm-12 mb-3">
<h2>Provide total <br /> health care</h2>
<p>Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis phasellus venenatis</p>
<button className=" ms-5 btn button-design rounded-pill">Check it now</button>
</div>
<div className="col-lg-3 col-sm-12 mb-3 pe-3">
<img src="https://f.hubspotusercontent20.net/hubfs/20206872/preview02.jpg" style={{maxWidth: '300px',
    height: 'auto'}} alt="" />
</div>
<div className="col-lg-3 col-sm-12 mb-3 ps-5">
<img src="https://f.hubspotusercontent20.net/hubfs/20206872/preview01.jpg" style={{maxWidth: '300px',
    height: 'auto'}}  alt="" />

</div>

</div>




        </>
    );
};

export default Facilities;