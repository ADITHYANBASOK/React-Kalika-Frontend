import React from 'react'
import UserNavbar from '../../../Component/User/UserNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import Cart from '../../../Component/User/Product/Cart'
import Homefooter from '../../../Component/Home/Homefooter'

function Cartview() {
  return (
    <>
      <UserNavbar/>
      <Pageindicator/>
      <Cart/>
      <Homefooter/>
    </>
  )
}

export default Cartview
