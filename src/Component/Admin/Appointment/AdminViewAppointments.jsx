import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
function AdminViewAppointments() {
    const [user, setUser] = useState([])

    useEffect(() => {
  
        axios.get('http://localhost:4000/admin/viewappointmenthistory-adminhome').then((response) => {
          console.log(response);
          setUser(response.data.data)
        }).catch((err) => {
          console.log(err);
        })
    
      },[])
  return (
    <>
      <div className="page-container">
        <section className="au-breadcrumb m-t-75">
          <div className="section__content section__content--p30">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="au-breadcrumb-content">
                    <div className="au-breadcrumb-left">
                      <span className="au-breadcrumb-span">You are here:</span>
                      <ul className="list-unstyled list-inline au-breadcrumb__list">
                        <li className="list-inline-item active">
                          <a href="#">Home</a>
                        </li>
                        <li className="list-inline-item seprate">
                          <span>/</span>
                        </li>
                        <li className="list-inline-item">Appointment details</li>
                      </ul>
                    </div>
                    <button className="au-btn au-btn-icon au-btn--green">
                      <i className="zmdi zmdi-plus" />
                      add item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <div class='d1'>
          <h1>Appointment Details</h1>
        </div>

        <div className="table-responsive m-b-40">


          <table className="table table-borderless table-data3">
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Appointment_id</th>
                <th>Doctor_id</th>
                <th>User_id</th>
                <th>D_name</th>
                <th>User name</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {user?.map((data, key) => (
                <tr>
                  <td>{key+1}</td>
                  <td>{data._id}</td>
                  <td>{data.doctor_id}</td>
                  <td>{data.duser_id}</td>
                  <td>{data.d_firstname}{data.d_lastname}</td>
                  <td>{data.u_firstname}{data.u_lastname}</td>
                  <td>{data.date}</td>
                  <td>{data.time}</td>
           



                </tr>
              ))}

            </tbody>
          </table>



        </div>
      </div>
    </>
  )
}

export default AdminViewAppointments
