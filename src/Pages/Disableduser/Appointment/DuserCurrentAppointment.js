import React from 'react'
import DisabledNavbar from '../../../Component/DisabledUser/DisabledNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import CurrentAppointmentDuser from '../../../Component/DisabledUser/Appointment/CurrentAppointmentDuser'
import Homefooter from '../../../Component/Home/Homefooter'

function DuserCurrentAppointment() {
  return (
    <>
      <DisabledNavbar/>
      <Pageindicator/>
      <CurrentAppointmentDuser/>
      <Homefooter/>
    </>
  )
}

export default DuserCurrentAppointment
