import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function DisabledNavbar() {
    const navigate = useNavigate()
    const logout = ()=>{
      localStorage.removeItem('duser_id')
      localStorage.removeItem('duserlogin_id')
      localStorage.removeItem('duser_role')
      navigate('/')
    }
  
    useEffect(()=>{
       const duser_id = localStorage.getItem('duser_id')
      if(duser_id==null){
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
        <a href="/disableduserhome" className="nav-item nav-link active">
          Home
        </a>
        {/* <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="/usermedicine" className="nav-item nav-link active">
          Medicines
        </a> */}
        {/*<a href="about.html" class="nav-item nav-link">About</a>
                  <a href="service.html" class="nav-item nav-link">Service</a>
                  <a href="menu.html" class="nav-item nav-link">Menu</a>*/}
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Product
          </a>
          <div className="dropdown-menu m-0">
            <a href="/addproduct" className="dropdown-item">
              ADD product
            </a>
            <a href="viewouruploadproduct" className="dropdown-item">
              View Product booking
            </a>
            <a href="viewduserorderhistory" className="dropdown-item">
              View Product Payment
            </a>
            <a href="team.html" className="dropdown-item">
              complaints
            </a>
          </div>
        </div>
        <div className="nav-item dropdown">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Appointment
          </a>
        <div className="dropdown-menu m-0">
            <a href="/dusermakeappointment" className="dropdown-item">
              Make appointment
            </a>
            <a href="/dusercurrentappoint" className="dropdown-item">
              View current appointment
            </a>
            <a href="/duserappointmenthistory" className="dropdown-item">
              View history appointment
            </a>
        {/* <a href="contact.html" class="nav-item nav-link">Contact</a>*/}
      </div>
      </div>
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
          <a className="dropdown-item" href="/duserviewprofile">
            My Profile
          </a>
          <a className="dropdown-item" href="edit-profile.html">
            Edit Profile
          </a>
          <a    onClick={logout} className="dropdown-item" >
            Logout
          </a>
        {/* </div> */}
        </div>
        </div>
          
        </div>
     </div>
     </nav>
     </div>
      {/* <div className="dropdown mobile-user-menu float-right">
      <a
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="fa fa-ellipsis-v" />
      </a>
      <div className="dropdown-menu dropdown-menu-right">
        <a className="dropdown-item" href="profile.html">
          My Profile
        </a>
        <a className="dropdown-item" href="edit-profile.html">
          Edit Profile
        </a>
        
        <a className="dropdown-item" href="login.html">
          Logout
        </a>
      </div>
      </div> */}
     
      
      
     
    
      {/* <a href="" className="btn btn-primary py-2 px-4">
        LOGIN
                </a> */}
   
  
  {/* <div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white animated slideInLeft">
            Enjoy Our
            <br />
            Delicious Meal
          </h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a
            href=""
            className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
          >
            Book A Table
          </a>
        </div> */}
        {/* <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img className="img-fluid" src="img/disabled_PNG71.png" alt="" />
        </div> */}
      {/* </div>
    </div> */}
  {/* </div> */}
    </>
  )
}

export default DisabledNavbar
