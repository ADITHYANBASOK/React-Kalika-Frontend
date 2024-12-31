import React from 'react'

function Homeabout() {
  return (
    <>
      <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5 align-items-center">
      <div className="col-lg-6">
        <div className="row g-3">
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.1s"
              src="img/craft1.jpg"
            />
          </div>
          <div className="col-6 text-start">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.3s"
              src="img/craft2.jpeg"
              style={{ marginTop: "25%" }}
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-75 wow zoomIn"
              data-wow-delay="0.5s"
              src="img/craft3.jpeg"
            />
          </div>
          <div className="col-6 text-end">
            <img
              className="img-fluid rounded w-100 wow zoomIn"
              data-wow-delay="0.7s"
              src="img/craft4.jpeg"
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <h5 className="section-title ff-secondary text-start text-primary fw-normal">
          About Us
        </h5>
        {/* <h1 className="mb-4">
          Welcome to <i className="fa fa-utensils text-primary me-2" />
          Restoran
        </h1> */}
        <p className="mb-4">
        Have you ever paused to think about the physically challenged who are denied a chance to flourish because of a disability? We at kalika have just done exactly that. We paused, thought and came up with an idea to empower the disabled and to lend a hand to help them reach full their potential. We are a platform which helps them to reach out and explore the markets to sell their products from the comfort of their homes. Let us help them flourish and just be as happy as us.

         
        </p>
        {/* <p className="mb-4">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet
        </p> */}
        {/* <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                15
              </h1>
              <div className="ps-4">
                <p className="mb-0">Years of</p>
                <h6 className="text-uppercase mb-0">Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="d-flex align-items-center border-start border-5 border-primary px-3">
              <h1
                className="flex-shrink-0 display-5 text-primary mb-0"
                data-toggle="counter-up"
              >
                50
              </h1>
              <div className="ps-4">
                <p className="mb-0">Popular</p>
                <h6 className="text-uppercase mb-0">Master Chefs</h6>
              </div>
            </div>
          </div>
        </div> */}
        <a className="btn btn-primary py-3 px-5 mt-2" href="aboutpage">
          Read More
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Homeabout
