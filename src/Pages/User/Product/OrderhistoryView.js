import React from 'react'
import UserNavbar from '../../../Component/User/UserNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import Orderhistory from '../../../Component/User/Product/Orderhistory'
import Homefooter from '../../../Component/Home/Homefooter'

function OrderhistoryView() {
  return (
    <>
      <UserNavbar/>
      <Pageindicator/>
      <Orderhistory/>
      <Homefooter/>
    </>
  )
}

export default OrderhistoryView
