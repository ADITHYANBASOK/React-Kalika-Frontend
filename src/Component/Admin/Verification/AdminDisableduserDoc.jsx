import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function AdminDisableduserDoc() {
    const {id}=useParams()
    console.log(id);
    const [user,setUser] =useState([])
   
  useEffect(()=>{
    console.log("hairr",id);
  
    axios.get(`http://localhost:4000/admin/viewD-user/${id}`).then((response)=>{
      console.log(response);
      setUser(response.data.data)
      console.log("is it working",response.data.data[0]);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  return (
    <>
      <style
      dangerouslySetInnerHTML={{
        __html:
          '\n    .book {\n  margin: 0;\n  padding: 0;\n  background-color: #FAFAFA;\n  font: 12pt "Tahoma";\n}\n\n* {\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n.page {\n  display: block;\n  width: 21cm;\n  height: 29.7cm;\n  margin: 1cm auto;\n  border: 1px #D3D3D3 solid;\n  border-radius: 5px;\n  background: white;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.subpage {\n  margin: 1cm;\n  width: 19cm;\n  height: 27.7cm;\n  outline: 0cm #FAFAFA solid;\n}\n\n@page {\n  size: A4;\n  margin: 0;\n}\n\n@media print {\n  .page {\n    margin: 0;\n    border: initial;\n    border-radius: initial;\n    width: initial;\n    min-height: initial;\n    box-shadow: initial;\n    background: initial;\n    page-break-after: always;\n  }\n}\n    '
      }}
    />
    <div className="container-fluid">
      <div className="book">
        <div className="page">
          HEADER
          <div className="subpage" id="editor-container">
          {user[0]?.u_disability_doc}
          <img
        className="card-img-top"
        src={`/products/${user[0]?.u_disability_doc}`}
        alt="Card image cap"
      />   
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminDisableduserDoc
