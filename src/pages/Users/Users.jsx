import { useState,useContext } from "react"
import { cartContext } from "../../context/cartContex";
import "./style.css"
import UserForm from "../../components/UserForm/UserForm";


const Users = () => {
    const {user,setUser, userData, setUserData,act, setAct}=useContext(cartContext)
    console.log(act)
    if (user === null) {
        return (
            <>
                <div className="keypad">
                    <button className="userButton" onClick={(x) => { setAct("create") }}>CREAR CUENTA</button>
                    <button className="userButton" onClick={(x) => { setAct("logIn") }}>INICIAR SESION</button>
                </div>
                <UserForm formType={act} />
            </>
        )
    }
    return(
    <>
        <div className="keypad">
            <button className="userButton" onClick={(x) => { setAct("LogOut") }}>ADMINISTRAR SESION</button>
        </div>
        <UserForm formType={act} />
    </>)
}

export default Users;