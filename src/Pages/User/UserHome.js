import React from 'react'
import UserNavbar from '../../Component/User/UserNavbar'
import UserbackgroundImage from '../../Component/User/UserbackgroundImage'
import Homefooter from '../../Component/Home/Homefooter'
import About from '../../Component/Home/About/About'

function UserHome() {
  return (
    <>
      <UserNavbar/>
      <UserbackgroundImage/>
      <About/>
      <Homefooter/>
    </>
  )
}

export default UserHome
