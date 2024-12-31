import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function UserNavbar() {
    const navigate = useNavigate()
    const logout = ()=>{
      localStorage.removeItem('user_id')
      localStorage.removeItem('ulogin_id')
      localStorage.removeItem('urole')
      navigate('/')
    }
  
    useEffect(()=>{
       const user_id = localStorage.getItem('user_id')
      if(user_id==null){
        navigate('/')
      }
    },[])
  
  return (
    <>
      <div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
    <a href="" className="navbar-brand p-0">
      <h1 className="text-primary m-0">
        <i className="fa fa-wheelchair" />
        KALIKA
      </h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="/userhome" className="nav-item nav-link active">
          Home
        </a>
        
        {/*<a href="about.html" class="nav-item nav-link">About</a>
                  <a href="service.html" class="nav-item nav-link">Service</a>
                  <a href="menu.html" class="nav-item nav-link">Menu</a>*/}
        <div className="nav-item dropdown">
          <a
            href="/userproductview/category"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Products
          </a>
          <div className="dropdown-menu m-0">
         
            <Link className="dropdown-item" to={'/userproductview/All'}>ALL</Link>
            {/* <a href="userproductview/jwellery" className="dropdown-item">
            jwellery
            </a> */}
            {/* <a href="userproductview/Bulbs" className="dropdown-item">
              bags
            </a> */}
            <Link className="dropdown-item" to={"/userproductview/Bulbs"}> Bulbs</Link>

            {/* <a href="userproductview/Sead Pen" className="dropdown-item">
              Seed pen
            </a> */}
            <Link className="dropdown-item" to={"/userproductview/Sead Pen"}> Seed pen</Link>
          
            <Link className="dropdown-item" to={"/userproductview/Others"}>Others</Link>
             </div>
     </div>
     <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="/viewcart" className="nav-item nav-link active">
          cart
        </a>
            
     <div className="nav-item dropdown has-arrow">
        <a
          href="#"
          className="dropdown-toggle nav-link user-link"
          data-toggle="dropdown"
        >
          <span className="user-img">
            <img
              className="rounded-circle"
              src="/img/user.jpg"
              width={24}
              // alt="user"
            />
            <span className="status online" />
          </span>
          <span> MY ACCOUNT</span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="viewuserprofile">
            My Profile
          </a>
          <a className="dropdown-item" href="/orderview">
            Order history
          </a>
          <a className="dropdown-item" href="/feedback">
            Feedback
          </a>
          
          <a  onClick={logout} className="dropdown-item" >
            Logout
          </a>
        </div>
        </div>


        
  {/* </div> */}
        {/* <a href="contact.html" class="nav-item nav-link">Contact</a>*/}
      
      </div>
      </div>
      {/* <a href="" className="btn btn-primary py-2 px-4">
        LOGIN
                </a> */}
    </div>
  </nav>
  
  </div>
    </>
  )
}

export default UserNavbar
