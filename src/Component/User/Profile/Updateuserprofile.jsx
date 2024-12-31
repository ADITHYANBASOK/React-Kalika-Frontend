import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Updateuserprofile() {
    const { id } = useParams()


    // const doctor_id = localStorage.getItem('doctor_id')

    const [user, setUser] = useState({})
    const [edituser, setedituser] = useState({})


    const inputchange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
      }

      useEffect(() => {
        console.log("hai",id);
        axios.get(`http://localhost:4000/register/updateuserourprofile/${id}`).then((response) => {
          console.log("hai",response);
          setUser(response.data.data[0])
        }).catch((err) => {
          console.log(err);
        })
    
      },[])

      const Update = (e)=>{
        e.preventDefault();
        console.log(user);
        axios.post(`http://localhost:4000/register/updatedpuserprofile/${id}`,user).then((response)=>{console.log("res====>",response.data);
      if(response.data.success===true){
        toast.success('Updated succesfully', {
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

  return (
    <>
      <ToastContainer/>
      <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row g-0" >
          <div className="col-md-6">
            <div className="video2">
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
              <h1 className="text-white mb-4">Update Profile</h1>
              <form>
                <div className="row g-3">
                  {/* <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="first Name"
                      required="required"
                      onChange={inputchange}

                    />
                    <label htmlFor="name">Product id</label>
                  </div>
                </div> */}
                  {/* <div className="col-md-12">
                    <div className="form-floating">
                      <select

                        className="form-control"
                        id="name1"
                        placeholder="Last name"
                        onChange={inputchange}
                        name='category'

                      >
                        <option value="selectiotime">Select Category</option>
                        <option value="Sead Pen">Sead Pen</option>
                        <option value="Painting">Painting</option>
                        <option value="Bulbs">Bulbs</option>
                        <option value="Others">Others</option>
                      </select>
                      <label htmlFor="name1">Select catogory</label>
                    </div>
                  </div> */}
                  {/* <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email"
                        required="required"
                        onChange={(e) => { setFile(e.target.files[0]); setInput({ ...input, photo: e.target.files[0].name }) }}
                        name='photo'

                      />
                      <label htmlFor="email">photo</label>
                    </div>
                  </div> */}
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        value={user?.email || ""}
                        name='email'
                        onChange={inputchange}

                      />
                      <label htmlFor="phone">Email</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        name='number'
                        value={user?.number||""}

                        onChange={inputchange}

                      />
                      <label htmlFor="phone">Number</label>
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
                        onChange={inputchange}
                        name='address'
                        value={user?.address||""}
                        

                      />
                      <label htmlFor="Address">Address</label>
                    </div>
                  </div>
                  {/* <div className="col-md-12">
                  <div className="form-floating">
                    <input
                      type="File"
                      className="form-control"
                      id="disdoc"
                      placeholder="disability document"
                    />
                   <label htmlFor="disdoc">Disability document</label>
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
                    <button className="btn btn-primary w-100 py-3"  type="submit" onClick={Update} >
                      Update Profile
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

export default Updateuserprofile
