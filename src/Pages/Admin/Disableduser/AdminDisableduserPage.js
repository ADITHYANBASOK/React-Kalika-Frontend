import React from 'react'
import AdminDashboard from '../../../Component/Admin/AdminDashboard'
import AdminDisableduser from '../../../Component/Admin/Disableduser/AdminDisableduser'
import AdminDisableduserProfileview from '../../../Component/Admin/Disableduser/AdminDisableduserProfileview'

function AdminDisableduserPage() {
  return (
    <>
      <AdminDashboard/>
      <AdminDisableduser/>
      <AdminDisableduserProfileview/>
    </>
  )
}

export default AdminDisableduserPage
