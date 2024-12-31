import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AdminHome() {
    const [user, setUser] = useState([])
    const [doctor, setDoctor] = useState([])
    const [pham, setPham] = useState([])
    const [puser, setPuser] = useState([])
  
    
  
  
  
  
  
    useEffect(() => {
  
      axios.get('http://localhost:4000/admin/viewapprovedD-user').then((response) => {
        console.log(response);
        setUser(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])
    useEffect(() => {
  
      axios.get('http://localhost:4000/admin/doctorapproved-user').then((response) => {
        console.log(response);
        setDoctor(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])
    useEffect(() => {
  
      axios.get('http://localhost:4000/admin/viewapprovedpharmacy').then((response) => {
        console.log(response);
        setPham(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])
    useEffect(() => {
  
      axios.get('http://localhost:4000/admin/viewpublic-user').then((response) => {
        console.log(response);
        setPuser(response.data.data)
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
            <li className="list-inline-item">Dashboard</li>
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




    <section className="statistic">
<div className="section__content section__content--p30">
<div className="container-fluid">
<div className="row">
  <div className="col-md-6 col-lg-4">
    <div className="statistic__item">
      <h2 className="number">{user?.length}</h2>
      <span className="desc">Disabled user</span>
      <div className="icon">
        <i className="zmdi zmdi-account-o" />
      </div>
    </div>
  </div>
  <div className="col-md-6 col-lg-4">
    <div className="statistic__item">
      <h2 className="number">{doctor?.length}</h2>
      <span className="desc">Doctors</span>
      <div className="icon">
        <i className="zmdi zmdi-account-o" />
      </div>
    </div>
  </div>
 
  <div className="col-md-6 col-lg-4">
    <div className="statistic__item">
      <h2 className="number">{puser?.length}</h2>
      <span className="desc">Users</span>
      <div className="icon">
        <i className="zmdi zmdi-account-o" />
      </div>
    </div>
  </div>
</div>
</div>
</div>
</section>
</div>

    </>
  )
}

export default AdminHome
