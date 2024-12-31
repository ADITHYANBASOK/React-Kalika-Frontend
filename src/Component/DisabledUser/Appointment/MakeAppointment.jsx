import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function MakeAppointment() {
    const [user, setUser] = useState([])
    console.log("hai",user);


  useEffect(() => {

    axios.get('http://localhost:4000/admin/doctorapproved-user').then((response) => {
      console.log("doc",response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])
  return (
    <>
      <div className="container-xxl position-relative p-0">
            <div className="clearfix clear" />
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Make appointment</h5>
                    <h1 class="mb-5">Select our Doctor</h1>
                </div>
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
      <div className="bg-primary p-3" style={{paddingLeft:10}}>
      {/* <a href={`appointment/${data.d_id}`}><button>Make appointment</button></a> */}
      <Link to={`/appointment/${data.d_id}`}><button>Make appointment</button></Link>
    </div>
  </div>
  </div>
  ))}
  </div>



</div>
    </>
  )
}

export default MakeAppointment
