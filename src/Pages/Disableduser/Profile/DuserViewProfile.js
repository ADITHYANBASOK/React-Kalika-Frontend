import React from 'react'
import DisabledNavbar from '../../../Component/DisabledUser/DisabledNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import DuserPrifileView from '../../../Component/DisabledUser/Profile/DuserPrifileView'
import Homefooter from '../../../Component/Home/Homefooter'

function DuserViewProfile() {
  return (
    <>
      <DisabledNavbar/>
      <Pageindicator/>
      <DuserPrifileView/>
      <Homefooter/>
    </>
  )
}

export default DuserViewProfile
