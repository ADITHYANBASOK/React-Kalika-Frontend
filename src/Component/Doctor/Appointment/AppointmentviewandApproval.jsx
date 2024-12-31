import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AppointmentviewandApproval() {
    const {id}=useParams()
  const doctorid=localStorage.getItem('doctor_id')
  console.log(id);

  const [user, setUser] = useState([])


  useEffect(() => {
    axios.get(`http://localhost:4000/admin/viewappointment-doctorhome/${doctorid}`).then((response) => {
      console.log(response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])


  const approve = (id) =>{
    console.log("id==>",id);

    
    axios.get(`http://localhost:4000/appointment/approve-appointment/${id}`).then((response) => {
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
const reject = (id)=>{

}

  return (
    <>
      <ToastContainer/>
      <div className="container-xxl position-relative p-0">


      <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Pending appointment</h5>
                    <h1 class="mb-5">Approve appoinments</h1>
                </div>

  <div className="table-responsive m-b-40">


    <table className="table table-borderless table-data3">
      <thead>
        <tr>
          <th>sl.no</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date</th>
          <th>time</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {user?.map((data, key) => (

          <tr>
            <td>{key+1}</td>
            <td>{data.u_firstname} {data.u_lastname}</td>
            <td>{data.u_number}</td>
            <td>{data.u_email}</td>
            <td>{data.date}</td>
            <td>{data.time}</td>
            <td><button className="btn btn-success py-1 px-2"
                    type="submit" onClick={()=>{approve(data._id)}}>
                    Approve
                  </button>
                  <button className='btn btn-danger py-1 px-2' type="submit" onClick={()=>{reject(data._id)}}>
                      X
                    </button>
                    </td>
          </tr>
      ))}

      </tbody>
    </table>



  </div>
</div>
    </>
  )
}

export default AppointmentviewandApproval
