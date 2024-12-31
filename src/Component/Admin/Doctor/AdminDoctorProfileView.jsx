import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AdminDoctorProfileView() {
    const [user, setUser] = useState([])


  useEffect(() => {

    axios.get('http://localhost:4000/admin/doctorapproved-user').then((response) => {
      console.log(response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])
  return (
    <>
      <div className="page-container">


<section className="au-breadcrumb m-t-75">
<div className="section__content section__content--p30">
<div className="container-fluid">
<div className="row">
<div className="col-md-12">
<div className="au-breadcrumb-content">
<div className="au-breadcrumb-left">
<span className="au-breadcrumb-span">You are here:</span>
<ul className="list-unstyled list-inline au-breadcrumb__list">
<li className="list-inline-item active">
  <a href="#">Home</a>
</li>
<li className="list-inline-item seprate">
  <span>/</span>
</li>
<li className="list-inline-item">Doctor</li>
</ul>
</div>
<button className="au-btn au-btn-icon au-btn--green">
<i className="zmdi zmdi-plus" />
add item
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="clearfix clear" />
<h1>ALL Doctors</h1>

  <div className='row'>
  {user.map((data, key) => (

    <div className='col-md-6' style={{paddingRight:45}}>
      
    <div className='row'>
  <div className="col-md-3">
      <img
        className="card-img-top"
        src={`/products/${data.photo}`}
        alt="Card image cap"
      />
      </div>
      <div className="col-md-3">
        <p className="card-text">
         Name:{data.d_firstname}{data.d_lastname}<br/>
         Email:{data.d_email}<br/>
         Contact no:{data.d_number}<br/>
         Address:{data.d_address}<br/>
         Specification:{data.d_specialization}
        </p>
      </div>
    
  </div>
  </div>
  ))}
  </div>

</div>
    </>
  )
}

export default AdminDoctorProfileView
