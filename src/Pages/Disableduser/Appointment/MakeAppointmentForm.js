import React from 'react'
import DisabledNavbar from '../../../Component/DisabledUser/DisabledNavbar'
import AppointmentForm from '../../../Component/DisabledUser/Appointment/AppointmentForm'
import Homefooter from '../../../Component/Home/Homefooter'

function MakeAppointmentForm() {
  return (
    <>
      <DisabledNavbar/>
      <AppointmentForm/>
      <Homefooter/>
    </>
  )
}

export default MakeAppointmentForm
