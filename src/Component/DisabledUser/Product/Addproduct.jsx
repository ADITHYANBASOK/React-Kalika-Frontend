import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Addproduct() {
    const navigate = useNavigate()

  const userId = localStorage.getItem('duser_id')

  const [input, setInput] = useState({
    user_id: userId,
    category:"",
    photo:"",
    price:"",
    quantity:"",
    discription:"",
  })
  const [file, setFile] = useState()

  console.log(input);

  const inputchange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
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

       
      if (!values.price) {
        errors.price = "price is required!";
      }
     
     
      if (!values.photo) {
        errors.photo = "photo is required!";
      }
      else if (!regex1.test(values.photo)) {
        errors.photo = "photo must be in the formate jpeg,jpg,png";
      }
    
      if (!values.discription) {
        errors.discription = "discription is required!";
      }
    
      if (!values.category) {
        errors.category = "category is required!";
      }
      if (!values.quantity) {
        errors.quantity = "quantity is required!";
      }

     
      return errors;
    }

  const submit = (e) => {
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
        console.log(response);
      })
    }
    axios.post('http://localhost:4000/product/addproduct', input).then((response) => {
      console.log("res====>", response.data);
      if (response.data.success === true) {
        navigate('/viewouruploadproduct')
      
      }
    }).catch((err) => {
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
         
            </div>
          </div>
          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
       
              <h1 className="text-white mb-4">Add product</h1>
              <form>
                <div className="row g-3">
                
                  <div className="col-md-12">
                    <div className="form-floating">
                    <span style={{color:"red"}}>{formErrors.category}</span>

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
                        <option value="Soap">Soap</option>
                        <option value="Candiles">Candles</option>
                        <option value="Bags">Bags</option>
                        <option value="Others">Others</option>
                      </select>
                      <label htmlFor="name1">Select catogory</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                    <span style={{color:"red"}}>{formErrors.photo}</span>

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
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                    <span style={{color:"red"}}>{formErrors.price}</span>

                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        name='price'
                        onChange={inputchange}

                      />
                      <label htmlFor="phone">Price</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                    <span style={{color:"red"}}>{formErrors.quantity}</span>

                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        placeholder="Phone number"
                        name='quantity'
                        onChange={inputchange}

                      />
                      <label htmlFor="phone">quantity</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                    <span style={{color:"red"}}>{formErrors.discription}</span>

                      <textarea
                        className="form-control"
                        placeholder="Address"
                        id="address"
                        style={{ height: 100 }}
                        defaultValue={""}
                        onChange={inputchange}
                        name='discription'

                      />
                      <label htmlFor="Address">Discription</label>
                    </div>
                  </div>               
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" onClick={submit} type="submit">
                      Add Product
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

export default Addproduct
