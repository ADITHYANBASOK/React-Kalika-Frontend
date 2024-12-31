import React from 'react'
import DoctorNavbar from '../../../Component/Doctor/DoctorNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import MakeApprovedAppointment from '../../../Component/Doctor/Appointment/MakeApprovedAppointment'
import Homefooter from '../../../Component/Home/Homefooter'

function ApprovedAppointmentpage() {
  return (
    <>
      <DoctorNavbar/>
      {/* <Pageindicator/> */}
      <MakeApprovedAppointment/>
      <Homefooter/>
    </>
  )
}

export default ApprovedAppointmentpage
