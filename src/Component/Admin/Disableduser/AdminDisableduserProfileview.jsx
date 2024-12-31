import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function AdminDisableduserProfileview() {
    const navigate=useNavigate()
    const [user, setUser]= useState([])
    console.log(user);
  
    useEffect(() =>{
      axios.get('http://localhost:4000/admin/viewapprovedD-user').then((response)=>{
        setUser(response.data.data)
    }).catch((err) =>{
      console.log(err);
    })},[])
  
    const edit = (id) => {
      navigate(`/admindisableduserproduct/${id}`)
    }
  return (
    <>
      <div className="page-container">

<div className="main-content">
<div className="section__content section__content--p30">
<div className="container-fluid">
<div><h1>ALL USERS</h1></div>

<div className="row">
{user.map((data, key) => (

  <div className="col-md-4">
    <div className="card">
      <div className="card-header">
        <strong className="card-title mb-3">Profile Card</strong>
      </div>
      <div className="card-body">
        <div className="mx-auto d-block">
          <img
            className="rounded-circle mx-auto d-block"
            src={`/products/${data.photo}`}
            alt="Card image cap"
            style={{width:"90%",height:'200px'}}
          />
          <h5 className="text-sm-center mt-2 mb-1">{data.u_firstname} {data.u_lastname}</h5>
          <div className="location text-sm-center">
            <i  />{data.u_email}
            <br />
            {data.u_number}
          </div>
        </div>

        <hr />
        <div className="card-text text-sm-center">
          <a href="#">
            <i className="fa fa-facebook pr-1" />
          </a>
          <a href="#">
            <i className="fa fa-twitter pr-1" />
          </a>
          <a href="#">
            <i className="fa fa-linkedin pr-1" />
          </a>
          <a href="#">
            <i className="fa fa-pinterest pr-1" />
          </a>
          <button className='btn btn-info' onClick={()=>{edit(data.login_id)}}>VIEW PRODUCTS</button>

        </div>
      </div>
    </div>
  </div>
      ))}

</div>

</div>
</div>
</div>
</div>
    </>
  )
}

export default AdminDisableduserProfileview
