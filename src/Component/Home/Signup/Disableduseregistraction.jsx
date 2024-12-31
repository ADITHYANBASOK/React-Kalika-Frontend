import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Disableduseregistraction() {
    const navigate = useNavigate()
    const [file, setFile] = useState()
     const [input,setInput] = useState({
       Firstname:"",
       lastname:"",
       Email:"",
       phone:"",
       Address:"",
       disability_doc:"",
       photo:"",
       adhar:"",
       username:"",
       password:"",
       confirm_password:""
     })
   
   
   
     const inputchange = (e)=>{
       const name = e.target.name
       const value = e.target.value
       setInput({...input,[name]:value})
     }
     const [formErrors, setFormErrors] = useState({});
     console.log(Object.keys(formErrors).length);
       const [isSubmit, setIsSubmit] = useState(false);
   
       const validate = (values) => {
         const errors = {};
         const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         var phoneno = /^[6-9]\d{9}$/;
         var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
         const regex1 = (/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i) 
   
          
         if (!values.Firstname) {
           errors.Firstname = "First name is required!";
         }
         if (!values.username) {
           errors.username = "Username  is required!";
         }
         if (!values.Address) {
           errors.Address = "Address is required!";
         }
         if (!values.adhar) {
           errors.adhar = "Adhar is required!";
         }
      
        
         if (!values.photo) {
           errors.photo = "photo is required!";
         }
         else if (!regex1.test(values.photo)) {
           errors.photo = "photo must in the formate jpeg,jpg,png";
         }
         if (!values.disability_doc) {
           errors.disability_doc = "disability_doc is required!";
         }
         if (!values.Email) {
           errors.Email = "email is required!";
         }
          else if (!regex.test(values.Email)) {
           errors.Email = "This is not a valid email format!";
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
       }
   
   
     const validates = (e) => {
       e.preventDefault();
       console.log("hai",input);
       setFormErrors(validate(input));
           setIsSubmit(true);
           console.log(formErrors);
           if(Object.keys(formErrors).length === 0 && isSubmit){
             console.log("Hai",input);
             if (file) {
               const data = new FormData()
               data.append('name', file.name)
               data.append('file', file)
               axios.post('http://localhost:4000/product/upload-image', data).then((response) => {
                 axios.post('http://localhost:4000/register/disableduser-reg',input).then((response)=>{console.log("res====>",response.data);
            
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
             // }
             }).catch((err)=>{
               console.log(err);
             })
               })
             }
            
           }
         }
   
  return (
    <>
      <ToastContainer/>
    <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-0" >
        <div className="col-md-6">
          <div className="video">
           
          </div>
    </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
         
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
                    <label htmlFor="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.lastname}</span>
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Last name"
                      name='lastname'
                      onChange={inputchange}
                    />
                   <label htmlFor="name1">Last name</label>
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
                  <span style={{color:"red"}}>{formErrors.disability_doc}</span>
                    <input
                      type="File"
                      className="form-control"
                      id="disdoc"
                      placeholder="disability document"
                      name='disability_doc'
                      onChange={(e) => { setFile(e.target.files[0]); setInput({ ...input, disability_doc: e.target.files[0].name }) }}
                     

                    />
                   <label htmlFor="disdoc">Disability document</label>
                  </div>
                  </div>
                  <div className="col-md-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.adhar}</span>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Phone number"
                      name='adhar'
                      onChange={inputchange}

                    />
                   <label htmlFor="phone">adhar no</label>
                  </div>
                </div>
                  <div className="col-md-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.photo}</span>
                    <input
                      type="File"
                      className="form-control"
                      id="disdoc"
                      placeholder=""
                      name='photo'
                      onChange={(e) => { setFile(e.target.files[0]); setInput({ ...input, photo: e.target.files[0].name }) }}
                     
                    />
                   <label htmlFor="disdoc">PHOTO</label>
                  </div>
                </div> 
                <div className="col-md-12">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.username}</span>
                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="Last name"
                      name='username'
                      onChange={inputchange}
                    />
                   <label htmlFor="name1">Username</label>
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
                   <span style={{color:"red"}}>{formErrors.confirm_password}</span>
                    <input
                      type="password"
                      className="form-control "
                      id="password2"
                      placeholder="Confirm your password"
                      name='confirm_password'
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

export default Disableduseregistraction
