import React from 'react'
import { useState , useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function AppointmentForm() {
    const {id} =useParams()
console.log(id);
const userId = localStorage.getItem('duser_id')

  const navigate = useNavigate()


  const [input,setInput] = useState({
    user_id:userId,
    doctor_id:id,
    firstname:"",
    Email:"",
    phone:"",
    date:"",
    time:"",
    
  })



  const inputchange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInput({...input,[name]:value})
  }
  const [user, setUser] = useState([])
    console.log(user);

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

       
      if (!values.firstname) {
        errors.firstname = "First name is required!";
      }
  
      if (!values.Email) {
        errors.Email = "email is required!";
      }
       else if (!regex.test(values.Email)) {
        errors.Email = "This is not a valid email format!";
      }
      if (!values.date) {
        errors.date = "email is required!";
      }
      if (!values.time) {
        errors.time = "email is required!";
      }

     

      if (!values.phone) {
        errors.phone = "Contact Number is required!";
      }else if(!phoneno.test(values.phone)){
        errors.phone = "Enter valid Contact Number !";
      }
      return errors;
    }


  useEffect(() => {

    axios.get(`http://localhost:4000/appointment/autofillappointment/${id}`).then((response) => {
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
    axios.post('http://localhost:4000/appointment/appointment',input).then((response)=>{console.log("res====>",response.data);
    if(response.data.success===true){
      if (response.data.success === true) {
        toast.success('Appointment completed succesfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }  
      }
    }).catch((err)=>{
      console.log(err);
    }) 
     } }
    
  return (
    <>
      <ToastContainer/>
      <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
      <div className="row g-0" >
        <div className="col-md-6">
          <div className="video1">
         
          </div>
    </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          
            <h1 className="text-white mb-4">Appointment FORM</h1>
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
                  <span style={{color:"red"}}>{formErrors.lastname}</span>

                    <input
                      type="text"
                      className="form-control"
                      id="name1"
                      placeholder="lastname"
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
                <div className="col-md-6">
                  <div className="form-floating">

                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                    
                      name='selectdepartment'
                      value={user.d_specialization}
                      disabled
                      onChange={inputchange}

                    />
                   <label htmlFor="phone">Department</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                    
                      name='choosedoctor'
                      value={user.d_firstname}
                      disabled
                      onChange={inputchange}

                    />
                   <label htmlFor="phone">Department</label>
                  </div>
                </div>
               <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.date}</span>

                    <input
                      type="date"
                      className="form-control"
                      id="phone"
                      placeholder="Phone number"
                      name='date'
                      onChange={inputchange}

                    />
                   <label htmlFor="phone">date</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                  <span style={{color:"red"}}>{formErrors.time}</span>

                    <input
                      type="time"
                      className="form-control"
                      id="phone"
                      placeholder="Phone number"
                      name='time'
                      onChange={inputchange}

                    />
                   <label htmlFor="phone">Time</label>
                  </div>
                </div>
              
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" onClick={submit} type="submit">
                    Submit
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

export default AppointmentForm
