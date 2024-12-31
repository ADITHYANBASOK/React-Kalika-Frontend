import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
    const navigate = useNavigate()

const [input,setInput] = useState({
  username:"",
  password:"",
})

const[formErrors,setFormErrors] = useState({});
const[isSubmit,setIsSubmit] = useState(false);


const inputchange = (e) =>{
  const name =e.target.name
  const value =e.target.value
  setInput({...input,[name]:value})
  console.log(input);

}
// const submit =(e)=>{
//   e.preventDefault();
//   console.log(input);
// }
// const [ formerror,setFormErrors]=useState({});
// const [issubmit,setissubmit]=useState(false);


// const handleinputchange=(e)=>{
//   const[name,value]=e.target
//   setInput({
//     ...input,[name]:value

//   })
//   console.log(input);

// }
const validate=(values)=>{
  var error={}
  if(!values.username){
    error.username="enter name"
  }
  if(!values.password){
    error.password="enter password"
  }
  return error
}
const validation=(e)=>{
  e.preventDefault();
 
  setFormErrors(validate(input))
  setIsSubmit(true)
  console.log('hai',input);

  axios.post('http://localhost:4000/login',input).then((response)=>{console.log("res====>",response.data);
  console.log("success",response.data.success)
if(response.data.success==true){
  if(response.data.role==0){
    localStorage.setItem('adminlogin_id',response.data.login_id)
    localStorage.setItem('adminrole',response.data.role)
    navigate('/adminhome')
  }
  if(response.data.role==1){
    if(response.data.status==0){
      toast.error('waiting for admin approve', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      localStorage.setItem('duser_id',response.data.disabledId)
      localStorage.setItem('duserlogin_id',response.data.login_id)
      localStorage.setItem('duser_role',response.data.role)

      navigate('/disableduserhome')
    }
  }
 
  if(response.data.role==2){
    if(response.data.status==0){
      toast.error('waiting for admin approve', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      localStorage.setItem('doctor_id',response.data.doctorId)
      localStorage.setItem('login_id',response.data.login_id)
      localStorage.setItem('role',response.data.role)
      navigate('/doctorhome')
    }
  }
  if(response.data.role==3){
    if(response.data.status==0){
      toast.error('waiting for admin approve', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }else{
      localStorage.setItem('pharmacy_id',response.data.pharmacyId)
      localStorage.setItem('plogin_id',response.data.login_id)
      localStorage.setItem('prole',response.data.role)
      navigate('/pharmacyhome')
    }
  }
  if(response.data.role==4){
    localStorage.setItem('user_id',response.data.userId)
    localStorage.setItem('ulogin_id',response.data.login_id)
    localStorage.setItem('urole',response.data.role)

    navigate('/userhome')
  }
}
  }).catch((err)=>{
    console.log(err);
  })

  // if(Object.keys(formerror).length===0 && issubmit){

  // }
}



  return (
    <>
      <ToastContainer />
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0" style={{padding:"10px"}}>
      <div className="col-md-6">
        <div className="video">
         {/* <button
            type="button"
            className="btn-play"
            data-bs-toggle="modal"
            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
            data-bs-target="#videoModal"
          >
            <span />
          </button> */}
        </div>
  </div>
      <div className="col-md-6 bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
         {/* <h5 className="section-title ff-secondary text-start text-primary fw-normal">
            Reservation
  </h5>*/}
          <h1 className="text-white mb-4">LOGIN</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    name='username'
                    onChange={inputchange}
                  />
                  <span style={{color:'red'}}>
                    {formErrors?.username}
                  </span>
                  <label htmlFor="name">Username</label>
                </div>
              </div>
             {/* <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                 <label htmlFor="email">Your Email</label>
                </div>
  </div>*/}
              <div className="col-md-12">
                <div
                  className="form-floating"
                  id="date3"
                  data-target-input="nearest"
                 > 
                  <input
                    type="password"
                    className="form-control "
                    id="password"
                    placeholder="password"
                    name='password'
                    onChange={inputchange}
                    //data-target="#date3"
                    //data-toggle="datetimepicker"
                  />
                  <span style={{color:'red'}}>
                    {formErrors?.password}
                  </span>
                  <label htmlFor="datetime">password</label>
                </div>
              </div>
             {/* <div className="col-md-">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>People 1</option>
                    <option value={2}>People 2</option>
                    <option value={3}>People 3</option>
                  </select>
                  <label htmlFor="select1">No Of People</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Special Request</label>
                </div>
</div>*/}
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" onClick={validation}  type="submit">
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src=""
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Signin
