import React from 'react'
import DisabledNavbar from '../../../Component/DisabledUser/DisabledNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import AppintmentHistoryDuser from '../../../Component/DisabledUser/Appointment/AppintmentHistoryDuser'
import Homefooter from '../../../Component/Home/Homefooter'

function DuserAppointmenthistory() {
  return (
    <>
      <DisabledNavbar/>
      <Pageindicator/>
      <AppintmentHistoryDuser/>
      <Homefooter/>
    </>
  )
}

export default DuserAppointmenthistory
