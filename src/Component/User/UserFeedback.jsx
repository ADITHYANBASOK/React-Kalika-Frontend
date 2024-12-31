import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserFeedback() {
    const doctor_id = localStorage.getItem('user_id')

  const [user, setUser]= useState([])

  const [input,setInput] = useState({
    doctor_id:doctor_id,
    
    message:""

    
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

       
      // if (!values.name) {
      //   errors.name = "name is required!";
      // }
      // if (!values.username) {
      //   errors.username = "Username  is required!";
      // }
      // if (!values.Address) {
      //   errors.Address = "Address is required!";
      // }
      // if (!values.lastname) {
      //   errors.lastname = "Last name is required!";
      // } 
     
      // if (!values.photo) {
      //   errors.photo = "photo is required!";
      // }
      // else if (!regex1.test(values.photo)) {
      //   errors.photo = "photo must be in the formate jpeg,jpg,png";
      // }
      // if (!values.disability_doc) {
      //   errors.disability_doc = "disability_doc is required!";
      // }
      // if (!values.email) {
      //   errors.email = "email is required!";
      // }
      //  else if (!regex.test(values.email)) {
      //   errors.email = "This is not a valid email format!";
      // }
      if (!values.message) {
        errors.message = "message is required!";
      }
      // if (!values.quantity) {
      //   errors.quantity = "quantity is required!";
      // }

      // if (!values.password) {
      //   errors.password = "Password is required";
      // }
      // if (!values.confirm_password) {
      //   errors.confirm_password = "Confirmation Password is required";
      // }else if(values.password!=values.confirm_password){
      //   errors.password = "Password and confirm password not matching";
      // }
      //  else if (!strongPassword.test(values.password)){
      //   errors.password = "Password must contain alphabet, digit,special Charecters";
      // }

      // if (!values.phone) {
      //   errors.phone = "Contact Number is required!";
      // }else if(!phoneno.test(values.phone)){
      //   errors.phone = "Enter valid Contact Number !";
      // }
      return errors;
    }


    useEffect(() =>{
      axios.get(`http://localhost:4000/register/viewuserprofile/${doctor_id}`).then((response)=>{
        setUser(response.data.data[0])
    }).catch((err) =>{
      console.log(err);
    })},[])

  const submit = (e)=>{
    e.preventDefault()
      console.log(input);
      setFormErrors(validate(input));
      setIsSubmit(true);
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post('http://localhost:4000/feedback/feedback',input).then((response)=>{console.log("res====>",response.data);
  
      if(response.data.success===true){
        toast.success('Feedback uploaded succesfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        // navigate('/login')
      
      }
      }).catch((err)=>{
        console.log(err);
      })
      
      }
    }
  return (
    <>
                <ToastContainer/>

<div className="container-xxl position-relative p-0">
  <div class="page-ttl">
   <div class="layer-stretch">
       <div class="page-ttl-container">
           <h1>Feedback</h1>
           <p><a href="#">Home</a> &#8594; <span>Feedback</span></p>
       </div>
   </div>
</div><br/>
<div  style={{alignItems:'center'}}>
 <div className="col-md-6">
   <div className="wow fadeInUp" data-wow-delay="0.2s">
     <form>
       <div className="row g-3">
         <div className="col-md-6">
           <div className="form-floating">

             <input
               type="text"
               className="form-control"
               id="name"
               placeholder="Your Name"
               name='firstname'
               onChange={inputchange}
               value={user.firstname}


             />
             <label htmlFor="name">Your Name</label>
           </div>
         </div>
         <div className="col-md-6">
           <div className="form-floating">

             <input
               type="email"
               className="form-control"
               id="email"
               name='email'
               placeholder="Your Email"
               onChange={inputchange}
               value={user.email}


             />
             <label htmlFor="email">Your Email</label>
           </div>
         </div>
         <div className="col-12">
           <div className="form-floating">

             <input
               type="text"
               className="form-control"
               id="subject"
               name='subject'
               placeholder="Subject"
               onChange={inputchange}

             />
             <label htmlFor="subject">Subject</label>
           </div>
         </div>
         <div className="col-12">
           <div className="form-floating">
           <span style={{color:"red"}}>{formErrors.message}</span>

             <textarea
               className="form-control"
               placeholder="Leave a message here"
               id="message"
               style={{ height: 150 }}
               defaultValue={""}
               onChange={inputchange}
               name='message'

             />
             <label htmlFor="message">Message</label>
           </div>
         </div>
         <div className="col-12">
           <button className="btn btn-primary w-100 py-3" type="submit" onClick={submit}>
             Send Message
           </button>
         </div>
       </div>
     </form>
   </div>
 </div>
 </div>
 </div>
    </>
  )
}

export default UserFeedback
