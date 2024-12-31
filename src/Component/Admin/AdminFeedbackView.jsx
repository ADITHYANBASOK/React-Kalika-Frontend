import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AdminFeedbackView() {
    const [user, setUser]= useState([])
    console.log(user);
  
    useEffect(() =>{
      axios.get('http://localhost:4000/admin/adminviewfeedback').then((response)=>{
        setUser(response.data.data)
    }).catch((err) =>{
      console.log(err);
    })},[])
  return (
    <>
               <div className="page-container">
           <br/>
           <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-5">FEEDBACKS</h1>
                    </div>
      <div className="clearfix clear" />
      <div className='row'>
      {user?.map((data, key) => (
    
      <div className="col-md-3">
        <div className="card mb-5">
        
          <div className="card-body">
            <h4 className="card-title">{data.firstname} {data.lastname}</h4>
            <p className="card-text">
            {data.email}
            <br/>
            subject: {data.subject}

            <br />
            {data.meesage}
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

export default AdminFeedbackView
