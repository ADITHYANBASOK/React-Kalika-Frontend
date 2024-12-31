import React from 'react'
import DoctorNavbar from '../../../Component/Doctor/DoctorNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import DoctorProfile from '../../../Component/Doctor/Profile/DoctorProfile'
import Homefooter from '../../../Component/Home/Homefooter'

function Doctorprofilepage() {
  return (
    <>
      <DoctorNavbar/>
      <Pageindicator/>
      <DoctorProfile/>
      <Homefooter/>
    </>
  )
}

export default Doctorprofilepage
