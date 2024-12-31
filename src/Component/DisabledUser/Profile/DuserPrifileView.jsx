import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DuserPrifileView() {
    const { id } = useParams()
  const duser_id = localStorage.getItem('duser_id')
  console.log("hai",duser_id);
  const navigate = useNavigate()
  
  const [user,setUser] =useState([])
   
  useEffect(()=>{
    console.log("hairr",duser_id);
  
    axios.get(`http://localhost:4000/register/viewDuserprofile/${duser_id}`).then((response)=>{
      console.log(response);
      setUser(response.data.data)
      console.log("is it working",response.data.data[0]);
    
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  const edit = () => {
      navigate('/updateduserprofile')
    }
  
  return (
    <>
      <ToastContainer/>
<div className="container-xxl pt-5 pb-3">
  <div className="container">
    {/* <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h5 className="section-title ff-secondary text-center text-primary fw-normal">
        Team Members
      </h5>
      <h1 className="mb-5">Our Master Chefs</h1>
    </div> */}
    <div className="row g-4">
     
      <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item text-center rounded overflow-hidden">
          <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid"src={`/products/${user[0]?.photo}`} alt="" />
          </div>
          <h5 className="mb-0">{user[0]?.u_firstname} {user[0]?.u_lastname}</h5>
          <small>Email: {user[0]?.u_email}</small><br />
          <small>Number: {user[0]?.u_number}</small><br />
          <small>Adress: {user[0]?.u_address}</small><br/>
          <button className='btn btn-info' onClick={edit}>Edit</button>
          {/* <div className="d-flex justify-content-center mt-3">
            <a className="btn btn-square btn-primary mx-1" href="">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-square btn-primary mx-1" href="">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-square btn-primary mx-1" href="">
              <i className="fab fa-instagram" />
            </a>
          </div> */}
        </div>
      </div>
  {/* + */}
    </div>
  </div>
</div>
    </>
  )
}

export default DuserPrifileView
