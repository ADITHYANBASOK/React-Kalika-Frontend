import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function AppintmentHistoryDuser() {
    const navigate=useNavigate()
    const {id}=useParams()
    const duserid=localStorage.getItem('duser_id')
    console.log(id);
    const [user, setUser] = useState([])
  
  
    useEffect(() => {
      axios.get(`http://localhost:4000/admin/viewappointmenthistory-userhome/${duserid}`).then((response) => {
        console.log(response);
        setUser(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])
    const Prescription=(id)=>{
      navigate(`/viewprescription/${id}`)
    }
  return (
    <>
      <div className="container-xxl position-relative p-0">

<div class="text-center wow fadeInUp" data-wow-delay="0.1s">
             <h5 class="section-title ff-secondary text-center text-primary fw-normal">appointment</h5>
             <h1 class="mb-5">appointment History</h1>
         </div>

<div className="table-responsive m-b-40">


<table className="table table-borderless table-data3">
<thead>
 <tr>
   <th>sl.no</th>
   <th>Name</th>
   {/* <th>Phone</th>
   <th>Email</th> */}
   <th>Date</th>
   <th>time</th>
   <th>Action</th>
 </tr>
</thead>
<tbody>
{user?.map((data, key) => (

   <tr>
     <td>{key+1}</td>
     <td>{data.d_firstname} {data.d_lastname}</td>
     {/* <td>{data.phone}</td>
     <td>{data.email}</td> */}
     <td>{data.date}</td>
     <td>{data.time}</td>
     <td><a><button className="btn btn-success py-1 px-2"
           onClick={()=>{Prescription(data._id)}}  type="submit" >
            View Prescription
           </button></a></td>
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

export default AppintmentHistoryDuser
