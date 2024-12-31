import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
function AdminDisableduserProductDetails() {
    const { id } = useParams()
    console.log("hai",id);
    
    const [user,setUser] =useState([])
     
    useEffect(()=>{
      console.log(id);
    
      axios.get(`http://localhost:4000/product/adminviewourproduct/${id}`).then((response)=>{
        console.log(response);
        setUser(response.data.data)
      }).catch((err)=>{
        console.log(err);
      })
    },[])
  return (
    <>
          <div className="page-container">

<div className="main-content">
<div className="section__content section__content--p30">
<div className="container-fluid">
<div><h1>AVAILABLE ITEMS</h1></div>
<br />
<br />

<div className="row">
{user.map((data, key) => (

<div className="col-md-3">
    <div className="card mb-5">
      <img style={{height:'150px'}}
        className="card-img-top"
        src={`/products/${data.photo}`}
        alt="Card image cap"
      />
      <div className="card-body">
        <h4 className="card-title">Price{data.price}</h4>
        <p className="card-text">
          {data.discription}
          <br />
          avalilability:{data.quantity}
        </p>
      </div>
      <div className="p-3">
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

export default AdminDisableduserProductDetails
