import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AdminDisableduser() {
    const [user, setUser]= useState([])
  const [doctor, setDoctor] = useState([])
  console.log(user);

  useEffect(() =>{
    axios.get('http://localhost:4000/admin/viewapprovedD-user').then((response)=>{
      setUser(response.data.data)
  }).catch((err) =>{
    console.log(err);
  })},[])

  useEffect(() => {

    axios.get('http://localhost:4000/product/adminviewourproduct').then((response) => {
      console.log(response);
      setDoctor(response.data.data)
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
<li className="list-inline-item">Disabled user</li>
</ul>
</div>
<button className="au-btn au-btn-icon au-btn--green">
<i className="zmdi zmdi-plus" />
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
<div className="col-md-6 col-lg-6">
<div className="statistic__item">
<h2 className="number">{user?.length}</h2>
<span className="desc">Disabled user</span>
<div className="icon">
<i className="zmdi zmdi-account-o" />
</div>
</div>
</div>
<div className="col-md-6 col-lg-6">
<div className="statistic__item">
<h2 className="number">{doctor?.length}</h2>
<span className="desc">Products</span>
<div className="icon">
<i className="zmdi zmdi-shopping-cart" />
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

export default AdminDisableduser
