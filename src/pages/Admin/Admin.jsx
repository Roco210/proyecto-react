import { useState } from "react"
import "./style.css"
import AdminForm from "../../components/AdminForm/AdminForm"


export const Admin = () => {

  const[adminAction,setAdminAction]=useState(null)

  return (

    <div>
      <div className="keypadAdmin">
        <button className="userButton" onClick={(x)=>{setAdminAction("create")}}>AGREGAR PRODUCTO</button>
        <button className="userButton" onClick={(x)=>{setAdminAction("mod")}}>MODIFICAR PRODUCTO</button>
        <button className="userButton" onClick={(x)=>{setAdminAction("delete")}}>ELIMIAR PRODUCTO</button>
      </div>
      <AdminForm action={adminAction}/>
    </div>


  )

};

  export default Admin;

