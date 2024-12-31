import React from 'react'
import HomeNavbar from '../../Component/Home/HomeNavbar'
import Pageindicator from '../../Component/Home/Pageindicator'
import About from '../../Component/Home/About/About'
import Homefooter from '../../Component/Home/Homefooter'

function Aboutpage() {
  return (
    <>
      <HomeNavbar/>
      <Pageindicator/>
      <About/>
      <Homefooter/>
    </>
  )
}

export default Aboutpage
