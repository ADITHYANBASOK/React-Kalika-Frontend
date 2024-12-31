import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ViewProducts() {
    const {category}=useParams()
    console.log(category);
    const navigate = useNavigate()
    const user_id=localStorage.getItem('user_id')
  

    const [user, setUser] = useState([])
    const [test, setTest] = useState(false)
    const [input, setInput] = useState({
      userid:user_id
    })



    useEffect(() => {
      axios.post(`http://localhost:4000/product/viewproduct/${category}`).then((response) => {
        console.log(response);
        setUser(response.data.data)
      }).catch((err) => {
        console.log(err);
      })
  
    },[category])
    // axios.get(`http://localhost:4000/appointment/view-finisishedappointment/${id}`).then((response) => {
    //   console.log(response);

    const submit = (id)=>{
      setTest(true)
      setInput({...input,product_id:id})
      
      console.log(input);
     if(test){
      axios.post(`http://localhost:4000/cart/cart`,input).then((response)=>{
        console.log("res====>",response);
    
        if(response.data.success===true){
          toast.success('add to cart succesfully', {
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
        if(response.data.success===false){
          toast.error('item is already in cart', {
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
    useEffect(()=>{
      console.log(input);
     
    },[test])
  return (
    <>
      <ToastContainer/>

<div className="container-xxl position-relative p-0">
<div className="clearfix clear" />
<div class="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 class="section-title ff-secondary text-center text-primary fw-normal">Product</h5>
              <h1 class="mb-5">{category}</h1>
          </div>
<div className='row'>

{user?.map((data, key) => (

<div className="col-md-3" >
<div className="card mb-5"  >
<img
  className="card-img-top"
  src={`/products/${data.photo}`}
  alt="Card image cap" style={{height:'100px'}}
/>
<div className="card-body">
  <h4 className="card-title">{data.price}</h4>
  <p className="card-text">
    {data.discription}
  </p>
</div>
<div className="bg-primary p-3">
<button type="button" class="btn btn-info" onClick={()=>{submit(data._id)}}>Add to cart</button>
</div>
</div>
</div>
))}
</div>
</div>
    </>
  )
}

export default ViewProducts
