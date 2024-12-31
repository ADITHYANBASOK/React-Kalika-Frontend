import React from 'react'
import DoctorNavbar from '../../../Component/Doctor/DoctorNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import AppointmentviewandApproval from '../../../Component/Doctor/Appointment/AppointmentviewandApproval'
import Homefooter from '../../../Component/Home/Homefooter'

function AppointmentApproval() {
  return (
    <>
      <DoctorNavbar/>
      <Pageindicator/>
      <AppointmentviewandApproval/>
      <Homefooter/>
    </>
  )
}

export default AppointmentApproval
