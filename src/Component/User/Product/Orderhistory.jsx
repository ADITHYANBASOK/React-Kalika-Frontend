import axios from 'axios';
import React, { useEffect, useState } from 'react'
function Orderhistory() {
    const user_id=localStorage.getItem('user_id')
  console.log("hai",user_id);
  const [user, setUser] = useState([])
  console.log(user);
  useEffect(() => {
    axios.get(`http://localhost:4000/order/vieworder/${user_id}`).then((response) => {
      console.log(response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])
  return (
    <>
      <div className="container-xxl position-relative p-0">
        <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Order</h5>
                    <h1 class="mb-5">Order history</h1>
                </div>

                <div className="table-responsive m-b-40">


<table className="table table-borderless table-data3">
  <thead>
    <tr>
      <th>sl.no</th>
      <th>Id</th>
      <th>photo</th>
      <th>Product category</th>
      <th>Name</th>
      <th>Order Date</th>
      <th>quantity</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
  {user?.map((data, key) => (

      <tr>
        <td>{key+1}</td>
        <td>{data._id}</td>
        <td><img
        className="card-img-top"
        src={`/products/${data.photo}`}
        alt="Card image cap" style={{height:'100px'}}
      /></td>
        <td>{data.product_category}</td>
        <td>{data.product_category}</td>
        <td>{data.date}</td>
        <td>{data.quantity}</td>
        <td>{data.price}</td>
        {/* <td><button className="btn btn-success py-1 px-2"
                type="submit" onClick={()=>{approve(data._id)}}>
                Approve
              </button><button className='btn btn-danger py-1 px-2' type="submit" onClick={()=>{reject(data._id)}}>
                  X
                </button></td> */}
      </tr>
  ))}

  </tbody>
</table>



</div>
  </div>
    </>
  )
}

export default Orderhistory
