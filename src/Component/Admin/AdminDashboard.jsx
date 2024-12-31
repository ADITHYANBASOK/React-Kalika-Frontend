import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function AdminDashboard() {
    const navigate = useNavigate()
  const logout = ()=>{
    localStorage.removeItem('adminlogin_id')
    localStorage.removeItem('adminrole')
    navigate('/')
  }

  useEffect(()=>{
     const user_id = localStorage.getItem('adminlogin_id')
    if(user_id==null){
      navigate('/')
    }
  },[])

  const [toggle,setToggle]=useState(true)
  const Toggle=()=>{
    setToggle(!toggle)
  }


  return (
    <>
      <div className="page-wrapper">
      {toggle?

       <aside className="menu-sidebar d-none d-lg-block">
         <div className="logo">
         <h1 className="text-primary m-0">
       <i className="fa fa-wheelchair" />
       KALIKA
     </h1>
         </div>
         <div className="menu-sidebar__content js-scrollbar1">
           <nav className="navbar-sidebar">
             <ul className="list-unstyled navbar__list">
               <li className="has-sub">
                 <a className="js-arrow" href="adminhome#">
                   Dashboard</a>
               
               </li>
               <li>
                 <a href="/adminpendingreq">
                   Pending Request</a>
               </li>
               <li>
                 <a href="/admindisableduser">
                   Disabled User</a>
               </li>
              
               <li>
                 <a href="/admindoctor">
                  Doctors</a>
               </li>
               <li>
                 <a href="/adminpublicuser">
                    user</a>
               </li>
               <li className="has-sub">
                 <a className="js-arrow" href="/adminappointmentview">
                   Appointment</a>
                 <ul className="list-unstyled navbar__sub-list js-sub-list">
                   <li>
                     <a href="login.html">Login</a>
                   </li>
                   <li>
                     <a href="register.html">Register</a>
                   </li>
                   <li>
                     <a href="forget-pass.html">Forget Password</a>
                   </li>
                 </ul>
               </li>
               <li>
                 <a href="/adminviewfeedback">
                    Feedback</a>
               </li>
             
             </ul>
           </nav>
         </div>
         
       </aside>
       :null}
      
       <div className="page-container-collapsed">
         <header className="header-desktop">
         <i className="navbar-brand bi bi-justify-left" onClick={Toggle}/>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>

           <div className="section__content section__content--p30">
           
             <div className="container-fluid">
               <div className="header-wrap">
          

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
           />
           <span className="status online" />
         </span>
         <span> MY ACCOUNT</span>
       </a>
       <div className="dropdown-menu">
       
         
         <a  onClick={logout} className="dropdown-item" >
           Logout
         </a>
       </div>
       </div>
               </div>
             </div>
           </div>
         </header>
        
</div>
     </div>
    </>
  )
}

export default AdminDashboard
