import React from 'react'
import UserNavbar from '../../../Component/User/UserNavbar'
import Pageindicator from '../../../Component/Home/Pageindicator'
import ViewProducts from '../../../Component/User/Product/ViewProducts'
import Homefooter from '../../../Component/Home/Homefooter'

function ProductView() {
  return (
    <>
      <UserNavbar/>
      <Pageindicator/>
      <ViewProducts/>
      <Homefooter/>
    </>
  )
}

export default ProductView
