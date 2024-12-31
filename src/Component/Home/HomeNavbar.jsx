import React from 'react'

function HomeNavbar() {
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
        <a href="/" className="nav-item nav-link active">
          Home
        </a>
        <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="/about" className="nav-item nav-link active">
          About
        </a>
        {/* <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="Contact" className="nav-item nav-link active">
          Contact
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
            Registraction
          </a>
          <div className="dropdown-menu m-0">
            <a href="/duserreg" className="dropdown-item">
              Disable User
            </a>
            <a href="/doctorreg" className="dropdown-item">
              Doctor
            </a>
            {/* <a href="/pharmreg" className="dropdown-item">
              Pharmacy
            </a> */}
            <a href="/userreg" className="dropdown-item">
              User
            </a>
          
          {/* <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        <div className="navbar-nav ms-auto py-0 pe-4">
        <a href="index.html" className="nav-item nav-link active">
          Home
        </a>
        </div>
        </div> */}
        {/* </div> */}
        </div>
        </div>
        </div>
        {/* <a href="contact.html" class="nav-item nav-link">Contact</a>*/}
      </div>
      <a href="/login" className="btn btn-primary py-2 px-4">
        LOGIN
      </a>
    </div>
  </nav> 
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
            SIGN IN
          </a>
        </div> 
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img className="img-fluid" src="img/dis1.jpg" alt="" />
        </div>
      </div>
    </div>
  </div> */}
</div>
    </>
  )
}

export default HomeNavbar
