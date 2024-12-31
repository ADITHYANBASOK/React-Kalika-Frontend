import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Prescription() {
    const {id}=useParams()
  const doctor_id=localStorage.getItem('doctor_id')

  const [input,setInput] = useState({
    doctor_id:doctor_id,
    appointment_id:id,

  })



  const inputchange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInput({...input,[name]:value})
  }
  const[user,setUser]=useState({

  })
//   useEffect(()=>{
    
//     axios.get(`http://localhost:4000/admin/dviewappoint-for-prescription/${id}`).then((response)=>{
//       console.log(response.data.data);
//       setUser(response.data.data)
//     }).catch((err)=>{
//       console.log(err);
//     })
//   },[])
useEffect(()=>{
    
  axios.get(`http://localhost:4000/admin/shareprescription/${id}`).then((response)=>{
    console.log(response.data.data);
    setUser(response.data.data)
    // toast.success('Prescription sended successfully', {
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
  },[])

  
  
  const submit = (e)=>{
    e.preventDefault()
    console.log("vanno",input);
    axios.post('http://localhost:4000/prescription/prescription',input).then((response)=>{console.log("res====>",response.data);
    console.log("hello",response.data.data);
    if(response.data.success===true){
      // navigate('/login')
    }
    }).catch((err)=>{
      console.log(err);
    })
    console.log(input);
  }
  return (
    <>
      <ToastContainer/>
        <div className="container-xxl position-relative p-0">

      <div>
        <center>
          <h1>KALIKA</h1>
        {/* <div className="mx-auto d-block">
                <img
                  className="rounded-circle mx-auto d-block"
                  src="img/icon/avatar-01.jpg"
                  alt="Card image cap"
                />
                </div> */}
        <h2>{user[0]?.d_firstname} {user[0]?.d_lastname}</h2>
        <h5>{user[0]?.d_specialization}</h5>
       </center>

      </div>
      <div className="row">
      <div className="col-6">
      <h3><b>Name</b>: {user[0]?.u_firstname}</h3>
  <h3><b>Age</b>: 20</h3>
      </div >
      <div class="as">
        <h3>date:{user[0]?.date}</h3>
        <h3>time:{user[0]?.time}</h3>
      </div>
      </div>
      

      <div>

        <form>
          <div className='row'>
        <div className="col-6" style={{paddingRight:0,paddingLeft:13}}>
          <div class='af'>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      style={{ height: 400 }}
                      defaultValue={""}
                      name='prescription'
                      onChange={inputchange}
                    />
                    <label htmlFor="Address">Prescription</label>
                  </div>
                  </div>
                  </div>
                  <div className="col-6" style={{paddingRight:13,paddingLeft:0}}>
                    <div class='ad'>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      style={{ height: 400 }}
                      defaultValue={""}
                      name='test'
                      onChange={inputchange}
                    />
                    <label htmlFor="Address">Test</label>
                  </div>
                  </div>
                  </div>
                  </div>
                  <div className="col-14">
                  <button className="btn btn-primary w-100 py-3" onClick={submit} type="submit">
                    Send
                  </button>
                </div>
            
        </form>
      </div>
      </div>
    </>
  )
}

export default Prescription
