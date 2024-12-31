import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function DoctorProfile() {
    const { id } = useParams()
    const doctor_id = localStorage.getItem('doctor_id')
    console.log("hai",doctor_id);
    const navigate = useNavigate()
    
    const [user,setUser] =useState([])
     
    useEffect(()=>{
      console.log(doctor_id);
    
      axios.get(`http://localhost:4000/register/viewdoctorprofile/${doctor_id}`).then((response)=>{
        console.log(response);
        setUser(response.data.data)
      }).catch((err)=>{
        console.log(err);
      })
    },[])
    const edit = (id) => {
        navigate(`updatedoctorprofile/${id}`)
      }
    
  return (
    <>
      <div className="container-xxl position-relative p-0">
    <div className="row g-4">
     
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
          <img className="img-fluid"src={`/products/${user[0]?.photo}`} alt="" />
        </div>
        <div className="doc-prof">name:{user[0]?.d_firstname}</div> 
           <div className="doc-prof">email:{user[0]?.d_email}</div>
           <div className="doc-prof">address:{user[0]?.d_address}</div>
           <div className="doc-prof">phone:{user[0]?.d_number}</div>
           <button className='btn btn-info' onClick={()=>{edit(user[0]?._id)}}>Edit</button>

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
+</div>
  </div>

    </>
  )
}

export default DoctorProfile
