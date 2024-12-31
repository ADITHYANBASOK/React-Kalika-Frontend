import React from 'react'
import DisabledNavbar from '../../../Component/DisabledUser/DisabledNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import MakeAppointment from '../../../Component/DisabledUser/Appointment/MakeAppointment'
import Homefooter from '../../../Component/Home/Homefooter'

function Makeappointments() {
  return (
    <>
      <DisabledNavbar/>
      <Pageindicator/>
      <MakeAppointment/>
      <Homefooter/>
    </>
  )
}

export default Makeappointments
