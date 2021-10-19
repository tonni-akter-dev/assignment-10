import React from 'react';

const Gallary = () => {
    return (
        <div>
            {/* <!-- Gallery --> */}
            <div>
             <h1 className="title text-center border mt-5">Our Gallary</h1>
            </div>
<div class="row container m-auto">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://a6e8z9v6.stackpathcdn.com/mediz/dentist/wp-content/uploads/sites/4/2019/02/pexels-photo-1-900x500.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <img
      src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/xabout1.png.pagespeed.ic.dL0Au07Uoh.webp"
      class="w-100 shadow-1-strong rounded mb-4" style={{height:"535px"}}
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://preview.colorlib.com/theme/medicalcenter/assets/img/gallery/xdepartment_man.png.pagespeed.ic.QW_ksGJjXh.webp"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />

    <img
      src="https://a6e8z9v6.stackpathcdn.com/mediz/dentist2/wp-content/uploads/sites/7/2019/03/home_dental_department_5-700x660.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
  <img
      src="https://a6e8z9v6.stackpathcdn.com/mediz/dentist/wp-content/uploads/sites/4/2019/03/shutterstock_217218478.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt=""
    />
    <img
      src="https://a6e8z9v6.stackpathcdn.com/mediz/dentist2/wp-content/uploads/sites/7/2019/03/home_dental_department_6-700x660.jpg"
      class="w-100 shadow-1-strong rounded mb-4" style={{height:'500px'}}
      alt=""
    />
  
  </div>
</div>
{/* <!-- Gallery --> */}
        </div>
    );
};

export default Gallary;