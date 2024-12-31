import React from 'react'
import AdminDashboard from '../../Component/Admin/AdminDashboard'
import AdminDisableduserPendingRequest from '../../Component/Admin/PendingRequest/AdminDisableduserPendingRequest'
import AdminDoctorPendingRequest from '../../Component/Admin/PendingRequest/AdminDoctorPendingRequest'

function AdminPendingRequestpage() {
  return (
    <>
      <AdminDashboard/>
      <AdminDisableduserPendingRequest/>
      <AdminDoctorPendingRequest/>
    </>
  )
}

export default AdminPendingRequestpage
