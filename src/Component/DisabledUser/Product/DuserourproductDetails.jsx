import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function DuserourproductDetails() {
    const navigate=useNavigate()
    const {id} =useParams()
    console.log(id);
    const userId = localStorage.getItem('duser_id')
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:4000/product/viewourproduct/${userId}`).then((response) => {
          console.log(response);
          setUser(response.data.data)
        }).catch((err) => {
          console.log(err);
        })
    
      },[])
      const submit = (id)=>{
        navigate(`updateproductdetails/${id}`)
    
      }
  return (
    <>
       <div className="container-xxl position-relative p-0">
  <div className="clearfix clear" />
  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Products</h5>
                    <h1 class="mb-5">Our Products</h1>
                </div>
  <div className='row'>
  
  {user.map((data, key) => (

  <div className="col-md-3">
    <div className="card mb-5">
      <img
        className="card-img-top"
        src={`/products/${data.photo}`}
        alt="Card image cap"
        style={{height:'200px'}}
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
        <p><button className="btn btn-info" onClick={()=>{submit(data._id)}}>Update</button></p>
      </div>
    </div>
  </div>
  ))} 
  </div>
  </div>
    </>
  )
}

export default DuserourproductDetails
