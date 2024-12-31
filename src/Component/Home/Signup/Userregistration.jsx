import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userregistration() {
    const navigate = useNavigate()
    const [input,setInput] = useState({
      Firstname:"",
      lastname:"",
      Email:"",
      phone:"",
      Address:"",
      // disability_doc:"",
      // photo:"",
      username:"",
      password:"",
      cofirmpassword:""
    })
  
  
  
    const inputchange = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setInput({...input,[name]:value})
    }
    const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
  
      const validate = (values) => {
        const errors = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phoneno = /^[6-9]\d{9}$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
         
        if (!values.Firstname) {
          errors.Firstname = "First name is required!";
        }
        if (!values.username) {
          errors.username = "Username  is required!";
        }
        if (!values.Address) {
          errors.Address = "Address is required!";
        }
        if (!values.lastname) {
          errors.lastname = "Last name is required!";
        } 
       
        // if (!values.photo) {
        //   errors.photo = "photo is required!";
        // }
        // if (!values.disability_doc) {
        //   errors.disability_doc = "disability_doc is required!";
        // }
        if (!values.Email) {
          errors.Email = "email is required!";
        }
         else if (!regex.test(values.Email)) {
          errors.Email = "This is not a valid email format!";
        }
  
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (!values.cofirmpassword) {
          errors.cofirmpassword = "Confirmation Password is required";
        }else if(values.password!=values.cofirmpassword){
          errors.password = "Password and confirm password not matching";
        }
         else if (!strongPassword.test(values.password)){
          errors.password = "Password must contain alphabet, digit,special Charecters";
        }
  
        if (!values.phone) {
          errors.phone = "Contact Number is required!";
        }else if(!phoneno.test(values.phone)){
          errors.phone = "Enter valid Contact Number !";
        }
        return errors;
      };
  
  
  
  const submit = (e)=>{
    e.preventDefault()
      console.log(input);
      setFormErrors(validate(input));
      // console.log("hello",input);
          setIsSubmit(true);
          console.log("hello",formErrors);
          if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log("hello",input);
    axios.post('http://localhost:4000/register/userreg',input).then((response)=>{console.log("res====>",response.data);
    
  if(response.data.success===true){
    // toast.success('Registraction succesfully', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   });
    navigate('/')
  
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
            <h1 className="text-white mb-4">REGISTRATION FORM</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.Firstname}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="first Name"
                      required="required"
                      name='Firstname'
                      onChange={inputchange}
                    />
                    <label htmlFor="name">FirstName</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.lastname}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Lastname"
                      name='lastname'
                      onChange={inputchange}

                    />
                   <label htmlFor="name1">Lastname</label>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.Email}</span>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required="required"
                      name='Email'
                      onChange={inputchange}

                    />
                    <label htmlFor="email">Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.phone}</span>

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
                  <span style={{color:"red"}}>{formErrors.Address}</span>

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
                  <span style={{color:"red"}}>{formErrors.username}</span>

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
                                     <span style={{color:"red"}}>{formErrors.password}</span>

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
                                     <span style={{color:"red"}}>{formErrors.cofirmpassword}</span>

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
                    REGISTER
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

export default Userregistration
