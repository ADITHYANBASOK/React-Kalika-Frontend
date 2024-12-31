import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Cart() {
    const Navigate= useNavigate()
  const {id}=useParams()
    const user_id=localStorage.getItem('user_id')

    const [user, setUser] = useState([]);
    const [sum, setSum] = useState(0);
    const [input, setInput] = useState({});



    useEffect(() => {
      axios.get(`http://localhost:4000/admin/viewcart/${user_id}`).then((response) => {
        console.log(response);
        const cart =response.data.data
        let totalPrice = 0;
        cart.forEach(item => {
          const quantity = parseInt(item.quantity);
          const price = parseInt(item.price);
          totalPrice += quantity * price;
        });
        setSum(totalPrice)
        setUser(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[])

    const submit= (id)=>{
      axios.get(`http://localhost:4000/admin/delete-cart/${id}`).then((response) => {
        console.log(response);
        window.location.reload()
        // toast.error('rejected successfully', {
        //   position: "top-right",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });
      }).catch((err)=>{
        console.log(err);
      })
    }


    const checkout= ()=>{
      console.log("hai");
      axios.get(`http://localhost:4000/order/checkoutorder/${user_id}`).then((response) => {
        console.log(response);
       
      }).catch((err)=>{
        console.log(err);
      })
      Navigate('/paymentsuccesfull')
      

    }
    const Add=(id)=>{
      console.log("hai",id);
      axios.get(`http://localhost:4000/order/cart_quantiti_incre/${id}`).then((response) => {
        window.location.reload()
       
      }).catch((err)=>{
        console.log(err);
      })

    }
    const Sub=(id)=>{
      console.log("hai",id);
      axios.get(`http://localhost:4000/order/cart_quantiti_decre/${id}`).then((response) => {
        window.location.reload()
       
      }).catch((err)=>{
        console.log(err);
      })
    }
  return (
    <>
      <ToastContainer/>
            <div className="container-xxl position-relative p-0">
              
       <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Cart</h5>
                    <h1 class="mb-5">Buy to Purchase</h1>
                </div>
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card">
          <div className="card-body p-4">
            <div className="row">
              <div className="col-lg-7">
                {/* <h5 className="mb-3">
                  <a href="#!" className="text-body">
                    <i className="fas fa-long-arrow-alt-left me-2" />
                    Continue shopping
                  </a>
                </h5> */}
                <hr />
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <p className="mb-1">Shopping cart</p>
                    {/* <p className="mb-0">You have 4 items in your cart</p> */}
                  </div>
                  <div>
                    <p className="mb-0">
                      {/* <span className="text-muted">Sort by:</span>{" "} */}
                      {/* <a href="#!" className="text-body">
                        price <i className="fas fa-angle-down mt-1" />
                      </a> */}
                    </p>
                  </div>
                </div>
                <div className="card mb-3">

                  <div className="card-body">
                  {user?.map((data, key) => (
                    <div key={data._id} className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src={`/products/${data.photo}`}
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 ,height:30}}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>{data.quantity}</h5>
                          <p className="small mb-0"> {data.product_category}</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div class= 'ar'style={{ width: 50 }}>
                          <button class='+1' onClick={()=>{Add(data._id)}}>+</button>
                          <h5 className="fw-normal mb-0">{data.quantity}</h5>
                          <button class='-1' onClick={()=>{Sub(data._id)}}>-</button>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">${data.price}</h5>
                        </div>
                        <a  style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" onClick={()=>{submit(data._id)}}/>
                        </a>
                      </div>
                    </div>
                  ))}
                  </div>

                </div>
                {/* <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img2.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>Samsung galaxy Note 10 </h5>
                          <p className="small mb-0">256GB, Navy Blue</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                          <h5 className="fw-normal mb-0">2</h5>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">$900</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>Canon EOS M50</h5>
                          <p className="small mb-0">Onyx Black</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                          <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">$1199</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3 mb-lg-0">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex flex-row align-items-center">
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                            className="img-fluid rounded-3"
                            alt="Shopping item"
                            style={{ width: 65 }}
                          />
                        </div>
                        <div className="ms-3">
                          <h5>MacBook Pro</h5>
                          <p className="small mb-0">1TB, Graphite</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center">
                        <div style={{ width: 50 }}>
                          <h5 className="fw-normal mb-0">1</h5>
                        </div>
                        <div style={{ width: 80 }}>
                          <h5 className="mb-0">$1799</h5>
                        </div>
                        <a href="#!" style={{ color: "#cecece" }}>
                          <i className="fas fa-trash-alt" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-lg-5">
                <div className="card bg-primary text-white rounded-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="mb-0">Card details</h5>
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        className="img-fluid rounded-3"
                        style={{ width: 45 }}
                        alt="Avatar"
                      />
                    </div>
                    <p className="small mb-2">Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <i className="fab fa-cc-paypal fa-2x" />
                    </a>
                    <form className="mt-4">
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeName"
                          className="form-control form-control-lg"
                          siez={17}
                          placeholder="Cardholder's Name"
                        />
                        <label className="form-label" htmlFor="typeName">
                          Cardholder's Name
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                          siez={17}
                          placeholder="1234 5678 9012 3457"
                          minLength={19}
                          maxLength={19}
                        />
                        <label className="form-label" htmlFor="typeText">
                          Card Number
                        </label>
                      </div>
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YYYY"
                              size={7}
                              minLength={7}
                              maxLength={7}
                            />
                            <label className="form-label" htmlFor="typeExp">
                              Expiration
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="●●●"
                              size={1}
                              minLength={3}
                              maxLength={3}
                            />
                            <label className="form-label" htmlFor="typeText">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr className="my-4" />
                    {/* <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">$4798.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Shipping</p>
                      <p className="mb-2">$20.00</p>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2">Total(Incl. taxes)</p>
                      <p className="mb-2">$ {sum}</p>
                    </div> */}
                    <button
                      type="button"
                      className="btn btn-info btn-block btn-lg"
                    >
                      <div className="d-flex justify-content-between">
                        <span>Rs. {sum}</span>
                        <span>
                          <a onClick={checkout}>
                          Checkout
                          <i className="fas fa-long-arrow-alt-right ms-2"  />
                          </a>
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

                
</div>
    </>
  )
}

export default Cart
