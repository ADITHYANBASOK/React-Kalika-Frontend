import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
function MakeApprovedAppointment() {
    const {id}=useParams()
    const doctorid=localStorage.getItem('doctor_id')
    console.log(id);
    const navigate= useNavigate()
    const [user, setUser] = useState([])
  
  
    // const [input,setInput]=useState({
    //   appointment_id:id
    // })
  
  
    useEffect(() => {
      axios.get(`http://localhost:4000/admin/viewapprovedappointment-doctorhome/${doctorid}`).then((response) => {
        console.log(response);
        setUser(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])
  
   const appointment= (id)=>{
    navigate(`/makeprescription/${id}`)
   }
  
  
   const share= (id)=>{
    navigate(`/linksharing/${id}`)
   }
  
    const approve = (id) =>{
      console.log("id==>",id);
  
      
      axios.get(`http://localhost:4000/appointment/view-finisishedappointment/${id}`).then((response) => {
        console.log(response);
        // toast.success('appointment completed', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "colored",
        //   });
  
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
       <div className="container-xxl position-relative p-0">

<div class="page-ttl">
 <div class="layer-stretch">
     <div class="page-ttl-container">
         <h1>Appointment</h1>
         <p><a href="#">Home</a> &#8594; <span>Appointment</span></p>
     </div>
 </div>
</div>

<div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">appointment</h5>
                    <h1 class="mb-5">Make appointment</h1>
                </div>

  <div className="table-responsive m-b-40">


    <table className="table table-borderless table-data3">
      <thead>
        <tr>
          <th>Sl.no</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date</th>
          <th>time</th>
          <th>Meetlink</th>
          <th>Addprescription</th>
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
             onClick={()=>{share(data._id)}} type="submit" >
              link
            </button></td>
            <td><button className="btn btn-success py-1 px-2" onClick={()=>{appointment(data._id)}}
              type="submit" >
              make priscription
            </button></td>
            <td><a href=""><button className="btn btn-success py-1 px-2" onClick={()=>{approve(data._id)}}
              type="submit" >
              Finish
            </button></a></td>
            {/* <td><button className="btn btn-success py-1 px-2"
              type="submit" >
              Approve
            </button><button className='btn btn-danger py-1 px-2' type="submit">
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

export default MakeApprovedAppointment
