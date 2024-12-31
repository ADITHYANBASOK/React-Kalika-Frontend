import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AdminDisableduserPendingRequest() {
    const navigate = useNavigate()
  const [user, setUser] = useState([])


  useEffect(() => {

    axios.get('http://localhost:4000/admin/viewD-user').then((response) => {
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
  axios.get(`http://localhost:4000/admin/reject-user/${id}`).then((response) => {
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
  navigate(`/duserphotoverification/${id}`)
}

const doc = (id) => {
  navigate(`/duserdocverification/${id}`)
}
  return (
    <>
            <ToastContainer/>

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
                  <li className="list-inline-item">Pending Request</li>
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
    <h1>Disability persons</h1>
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
          <th>Adhar</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {user.map((data, key) => (
          <tr>
            <td>{data.u_firstname} {data.u_lastname}</td>
            <td><button className="btn btn-success py-1 px-2"
              type="submit" onClick={()=>{photo(data._id)}}>
              Photo
            </button></td>
            <td>{data.u_number}</td>
            <td><button className="btn btn-success py-1 px-2"
              type="submit" onClick={()=>{doc(data._id)}} >
              Doc
            </button></td>
            <td>{data.u_email}</td>
            <td>{data.adhar}</td>
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

export default AdminDisableduserPendingRequest
