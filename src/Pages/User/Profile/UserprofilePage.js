import React from 'react'
import UserNavbar from '../../../Component/User/UserNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import UserviewProfile from '../../../Component/User/Profile/UserviewProfile'
import Homefooter from '../../../Component/Home/Homefooter'

function UserprofilePage() {
  return (
    <>
      <UserNavbar/>
      <Pageindicator/>
      <UserviewProfile/>
      <Homefooter/>
    </>
  )
}

export default UserprofilePage
