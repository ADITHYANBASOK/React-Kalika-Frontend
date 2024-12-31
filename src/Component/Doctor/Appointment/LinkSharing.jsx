import React, { useEffect } from 'react'

import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function LinkSharing() {
    const navigate = useNavigate()
    const {id}=useParams()
    const doctorid=localStorage.getItem('doctor_id')
    console.log("hello",doctorid);
    console.log("app",id);
  
    const [input,setInput] = useState({
      link:""
    })
  
  
    const [user, setUser] = useState({
        appointment_id:id,
        doctor_id:doctorid
      })
  
  
  const inputchange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInput({...input,[name]:value,appointment_id:id,doctor_id:doctorid})
  }

  const [formErrors, setFormErrors] = useState({});
  console.log(Object.keys(formErrors).length);
    const [isSubmit, setIsSubmit] = useState(false);

    const validate = (values) => {
      const errors = {};

      if (!values.link) {
        errors.link = "link is required!";
      }
      return errors;
    }


  useEffect(() => {
    axios.get(`http://localhost:4000/appointment/linkshare/${id}`).then((response) => {
      console.log(response);
      setUser(response.data.data)
    }).catch((err) => {
      console.log(err);
    })

  },[])
  
  
  const submit = (e)=>{
    e.preventDefault();
    console.log(input);
    setFormErrors(validate(input));
    setIsSubmit(true);
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post('http://localhost:4000/appointment/linkshare',input).then((response)=>{console.log("res====>",response.data);
  if(response.data.success===true){
    toast.success('link shared  succesfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
//     // navigate('/login')
  
  }
  }).catch((err)=>{
    console.log(err);
  })
  }
}

  return (
    <>
       <ToastContainer/>
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0" >
      <div className="col-md-6">
        <div className="video1">
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
          <h1 className="text-white mb-4">LINKSHAREING FORM</h1>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="date"
                    className="form-control"
                    id="name"
                    placeholder="date"
                    required="required"
                    name='date'
                    value={user.date}
                    onChange={inputchange}
                  />
                  <label htmlFor="name">date</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="time"
                    className="form-control"
                    id="name1"
                    value={user.time}
                    placeholder="time"
                    name='time'
                    onChange={inputchange}

                  />
                 <label htmlFor="name1">time</label>
                </div>
             </div>
             <div className="col-md-12">
                <div className="form-floating">
                <span style={{color:"red"}}>{formErrors.link}</span>

                  <input
                    type="link"
                    className="form-control"
                    id="email"
                    placeholder="link share"
                    required="required"
                    name='link'
                    onChange={inputchange}

                  />
                  <label htmlFor="email">link</label>
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone number"
                    name='phone'
                    onChange={inputchange}

                  />
                 <label htmlFor="phone">Phone</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Address"
                    id="address"
                    style={{ height: 100 }}
                    defaultValue={""}
                    name='Address'
                    onChange={inputchange}

                  />
                  <label htmlFor="Address">Address</label>
                </div>
</div>

<div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required="required"
                    name='username'
                    onChange={inputchange}

                  />
                  <label htmlFor="email">Username</label>
                </div>
              </div>

              <div className="col-md-12">
                <div
                  className="form-floating"
                  id="date3"
                  data-target-input="nearest"
                 > 
                  <input
                    type="password"
                    className="form-control "
                    id="password1"
                    placeholder="Enter your password"
                    name='password'
                    onChange={inputchange}

                    //data-target="#date3"
                    //data-toggle="datetimepicker"
                  />
                  <label htmlFor="password1">password</label>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className="form-floating"
                  id="date3"
                  data-target-input="nearest"
                 > 
                  <input
                    type="password"
                    className="form-control "
                    id="password2"
                    placeholder="Confirm your password"
                    name='cofirmpassword'
                    onChange={inputchange}

                    //data-target="#date3"
                    //data-toggle="datetimepicker"
                  />
                  <label htmlFor="password2">Confirm password</label>
                </div>
              </div> */}
              {/* <div className="col-md-">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>People 1</option>
                    <option value={2}>People 2</option>
                    <option value={3}>People 3</option>
                  </select>
                  <label htmlFor="select1">No Of People</label>
                </div>
              </div> */}
              {/* <div className="col-12">
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
</div> */}
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" onClick={submit} type="submit">
                  SHARE
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

export default LinkSharing
