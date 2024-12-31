import React, { useEffect, useState } from 'react'
import axios from 'axios'
function AdminUserprofileview() {
    const [user, setUser] = useState([])


    useEffect(() => {
  
      axios.get('http://localhost:4000/admin/viewpublic-user').then((response) => {
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
<li className="list-inline-item">public user</li>
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

<div class='d1'>
   <h1>Public users</h1>
 </div>

 <div className="table-responsive m-b-40">


   <table className="table table-borderless table-data3">
     <thead>
       <tr>
         <th>Name</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Address</th>
        
       </tr>
     </thead>
     <tbody>
       {user.map((data, key) => (
         <tr>
           <td>{data.firstname}</td>
           <td>{data.email}</td>
           <td>{data.number}</td>
           <td>{data.address}</td>
          
         </tr>
       ))}

     </tbody>
   </table>



 </div>
</div>
    </>
  )
}

export default AdminUserprofileview
