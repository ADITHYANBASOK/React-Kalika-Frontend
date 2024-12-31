import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminDoctorPendingRequest() {
    const navigate = useNavigate()

    const [user, setUser] = useState([])
    console.log(user);


  useEffect(() => {

    axios.get('http://localhost:4000/admin/doctor-user').then((response) => {
      console.log(response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])

  const approve = (id) =>{
    console.log("id==>",id);

    
    axios.get(`http://localhost:4000/admin/approve-user/${id}`).then((response) => {
      console.log(response);
      toast.success('approved successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

  }).catch((err)=>{
    console.log(err);
  })
}

const reject= (id)=>{
  axios.get(`http://localhost:4000/admin/reject-doctor/${id}`).then((response) => {
    console.log(response);
    toast.error('rejected successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }).catch((err)=>{
    console.log(err);
  })
}
const photo = (id) => {
  navigate(`/doctorphotoverification/${id}`)
}

const doc = (id) => {
  navigate(`/doctordocverification/${id}`)
}

  return (
    <>
      <ToastContainer/>

<div className="page-container">

<div class='d1'>
<h1>Doctors</h1>
</div>

<div className="table-responsive m-b-40">


<table className="table table-borderless table-data3">
  <thead>
    <tr>
      <th>Name</th>
      <th>Photo</th>
      <th>Phone</th>
      <th>Document</th>
      <th>Email</th>
      <th>Qualification</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {user.map((data, key) => (
      <tr>
        <td>{data.d_firstname} {data.d_lastname}</td>
        <td><button className="btn btn-success py-1 px-2"
          type="submit" onClick={()=>{photo(data._id)}}>
          Photo
        </button></td>
        <td>{data.d_number}</td>
        <td><button className="btn btn-success py-1 px-2"
          type="submit" onClick={()=>{doc(data._id)}}>
          Doc
        </button></td>
        <td>{data.d_email}</td>
        <td>{data.d_qualification}</td>
       {data.status == "0" ?
        <>
        <td><button className="btn btn-success py-1 px-2"
          type="submit" onClick={()=>{approve(data.login_id)}}>
          Approve
        </button><button className='btn btn-danger py-1 px-2' type="submit" onClick={()=>{reject(data.login_id)}}>
            X
          </button></td>
          </>
          :
          <button className='btn btn-danger py-1 px-2' type="submit" onClick={()=>{reject(data.login_id)}}>
            X
          </button>
}
      </tr>
    
    ))}

  </tbody>
</table>



</div>
</div>
    </>
  )
}

export default AdminDoctorPendingRequest
