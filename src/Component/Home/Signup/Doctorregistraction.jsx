import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Doctorregistraction() {
    const navigate = useNavigate()
  const [file, setFile] = useState()
  const [input,setInput] = useState({
    firstname:"",
    Lastname:"",
    email:"",
    phone:"",
    address:"",
    registraction_no:"",
    specialization:"",
    qualification:"",
    username:"",
    experience:"",
    password:"",
    confirm_password:""
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
       
      if (!values.firstname) {
        errors.firstname = "First name is required!";
      }
      if (!values.registraction_no) {
        errors.registraction_no = "First name is required!";
      }
      if (!values.username) {
        errors.username = "Username  is required!";
      }
      if (!values.experience) {
        errors.experience = "Experience is required!";
      }
      if (!values.qualification) {
        errors.qualification = "Qualification is required!";
      }
      if (!values.specialization) {
        errors.specialization = "Specialization is required!";
      }
      if (!values.address) {
        errors.address = "Address is required!";
      }
      if (!values.Lastname) {
        errors.Lastname = "Last name is required!";
      } 
     
      if (!values.photo) {
        errors.photo = "photo is required!";
      }
     
      if (!values.email) {
        errors.email = "email is required!";
      }
       else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }
      if (!values.confirm_password) {
        errors.confirm_password = "Confirmation Password is required";
      }else if(values.password!=values.confirm_password){
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
  
  const validates = (e)=>{
   
    e.preventDefault();
    console.log(input);
    setFormErrors(validate(input));
        setIsSubmit(true);
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){

 if (file) {
      const data = new FormData()
      data.append('name', file.name)
      data.append('file', file)
      axios.post('http://localhost:4000/product/upload-image', data).then((response) => {
      axios.post('http://localhost:4000/register/doctor-user',input).then((response)=>{console.log("res====>",response.data);
   
      navigate('/login')
    }).catch((err)=>{
      console.log(err);
    })
      })
    }

   
 
  }
  }

  return (
    <>
       <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-0" >
        <div className="col-md-6">
          <div className="video3">
          
          </div>
    </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
         
            <h1 className="text-white mb-4">REGISTRATION FORM</h1>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.firstname}</span>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="first Name"
                      required="required"
                      name='firstname'
                      onChange={inputchange}
                    />
                    <label htmlFor="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.Lastname}</span>
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Last name"
                      name='Lastname'
                      onChange={inputchange}

                    />
                   <label htmlFor="name1">Last name</label>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.email}</span>

                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required="required"
                      name='email'
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
                   <label htmlFor="phone">Contact number</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.address}</span>

                    <textarea
                      className="form-control"
                      placeholder="Address"
                      id="address"
                      style={{ height: 100 }}
                      defaultValue={""}
                      name='address'
                      onChange={inputchange}
                    />
                    <label htmlFor="Address">Address</label>
                  </div>
              </div>

                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.registraction_no}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="Regno"
                      placeholder="Phone number"
                      name='registraction_no'
                      onChange={inputchange}

                    />
                   <label htmlFor="Regno">Registration no</label>
                  </div>
                </div>
                
                
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.specialization}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="Specialization"
                      placeholder="Specialization"
                      name='specialization'
                      onChange={inputchange}

                    />
                   <label htmlFor="Specialization">Specialization</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.experience}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="Experiance"
                      placeholder="Experiance"
                      name='experience'
                      onChange={inputchange}

                    />
                   <label htmlFor="Experiance">Experiance</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.qualification}</span>

                    <input
                      type="File"
                      className="form-control"
                      id="Qualification"
                      placeholder="Qualification"
                      name='qualification'
                      onChange={(e) => { setFile(e.target.files[0]); setInput({ ...input, qualification: e.target.files[0].name }) }}

                    />
                   <label htmlFor="Qualufication">qualification</label>
                  </div>
                </div>
              

<div className="col-md-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.photo}</span>

                    <input
                      type="file"
                      className="form-control"
                      id="Qualification"
                      placeholder="username"
                      name='photo'
                      onChange={(e) => { setFile(e.target.files[0]); setInput({ ...input, photo: e.target.files[0].name }) }}
                     

                    />

                    
                   <label htmlFor="Qualufication">Photo</label>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.username}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="Qualification"
                      placeholder="username"
                      name='username'
                      onChange={inputchange}

                    />
                   <label htmlFor="Qualufication">Username</label>
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
                                                        <span style={{color:"red"}}>{formErrors.confirm_password}</span>

                    <input
                      type="password"
                      className="form-control "
                      id="password2"
                      placeholder="Confirm your password"
                      name='confirm_password'
                      onChange={inputchange}

                    
                    />
                    <label htmlFor="password2">Confirm password</label>
                  </div>
                </div>
              
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" onClick={validates} type="submit">
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

export default Doctorregistraction
