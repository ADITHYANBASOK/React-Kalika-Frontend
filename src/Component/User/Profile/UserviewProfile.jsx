import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function UserviewProfile() {

    const { id } = useParams()
    const user_id = localStorage.getItem('user_id')
    console.log("hai",user_id);
    const navigate = useNavigate()
    
    const [user,setUser] =useState([])
     
    useEffect(()=>{
      console.log(user_id);
    
      axios.get(`http://localhost:4000/register/viewuserprofile/${user_id}`).then((response)=>{
        console.log(response);
        setUser(response.data.data)
      }).catch((err)=>{
        console.log(err);
      })
    },[])
    const edit = (id) => {
      navigate(`updatepuserprofile/${id}`)
    }
  return (
    <>
      <div className="container-xxl position-relative p-0">
      <br />
    <div className="row g-4">
     
    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-item text-center rounded overflow-hidden">
        <div className="rounded-circle overflow-hidden m-4">
        <img className="img-fluid"src={`/products/${user[0]?.photo}`} alt="" />
        </div>
        <div className="doc-prof">name:  {user[0]?.firstname}</div>
           <div className="doc-prof">email:  {user[0]?.email}</div>
           <div className="doc-prof">address:  {user[0]?.address}</div>
           <div className="doc-prof">phone:  {user[0]?.number}</div>
          <div> <button className='btn btn-info' onClick={()=>{edit(user[0]?._id)}}>Edit</button></div>


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
</div>
  </div>
    </>
  )
}

export default UserviewProfile
