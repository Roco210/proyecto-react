import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/cartContex';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import "./style.css"
import swal from 'sweetalert';



const UserForm = ({ formType }) => {
    const { user, setUser, userData, setUserData,auth,setAct } = useContext(cartContext)
    const [buttonCheck,setButtonCheck]=useState(false)
    const formulario = (x) => {
        console.log(x.target.name)
        setUserData({ ...userData, [x.target.name]: x.target.value, }
        )
    };
    
    const update=()=>{
        updateProfile(auth.currentUser,{
          displayName: userData.name,
        }).then(()=>console.log("update")).catch(e=>console.log(e))
      };

    const registrer = () => {
        createUserWithEmailAndPassword(auth, userData.mail, userData.password).then(() => {
             console.log("registro exitoso") }).catch((error) => {
                if(error.code="auth/email-already-in-use"){
                    swal("El correo ingreado ya existe")}
                if(error.code="auth/weak-password"){swal("La contraseña debe tener 6 caracteres minimo")}
            const errorCode = error.code;
            const errorMessage = error.message;})
            updateProfile(auth.currentUser,{
                displayName: userData.name,
              })
            setAct("LogOut")
            setUser(auth)
    }

    const logIn = () => {
        setPersistence(auth, browserSessionPersistence.SESSION)
        signInWithEmailAndPassword(auth, userData.mail, userData.password).then((res) => {
            const user = res.user;
            console.log(user)
            setUser(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        setAct("LogOut")
    }
    console.log(auth.UID)
    const logOut = () => {
        signOut(auth,user.uid).then(() => { console.log("desconeccion exitosa"); setUser(null);setAct(null) }).catch(e => console.log(e))
    }
    
    useEffect(()=>{
        if(userData.mailCheck===userData.mail&& userData.mail!==""&&userData.name !=="" && userData.password!==""){
            setButtonCheck(true)
        }else(setButtonCheck(false))
    },[userData])

    console.log(user)

    // retorno de los formularios

    if (formType === "create") {
        return (
            <div className='userForms'>
                <form onSubmit={(x) => x.preventDefault()}>
                    <div className="userFormsInputs">
                        <p>Nombre:</p>
                        <input type="mail" name="name" placeholder="nombre" value={userData.name} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>Apellidp:</p>
                        <input type="text" name="lastName" placeholder="apellido" value={userData.lastName} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>Direccion:</p>
                        <input type="text" name="adress" placeholder="Direccion" value={userData.adress} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>Mail:</p>
                        <input type="mail" name="mail" placeholder="mail" value={userData.mail} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>Vuelve a ingresar tu Mail:</p>
                        <input type="mail" name="mailCheck" placeholder="mail" value={userData.mailCheck} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>CONTRASEÑA:</p>
                        <input type="password" name="password" placeholder="password" value={userData.password} onChange={(x) => { formulario(x) }} />
                    </div>
                </form>
                <button onClick={()=>{if(buttonCheck){registrer()}else{swal("Por favor complete todos los datos")}}}>check</button>
                
            </div>
        )
    } if (formType === "logIn") {
        return (
            <div className='userForms'>
                <form onSubmit={(x) => x.preventDefault()}> 
                    <div className="userFormsInputs">
                        <p>MAIL:</p>
                        <input type="mail" name="mail" placeholder="mail" value={userData.mail} onChange={(x) => { formulario(x) }} />
                    </div>
                    <div className="userFormsInputs">
                        <p>CONTRASEÑA:</p>
                        <input type="password" name="password" placeholder="password" value={userData.password} onChange={(x) => { formulario(x) }} />
                    </div>
                    <button onClick={()=>{logIn()}}>check</button>
                    
                </form>

            </div>)
    } if(formType === "LogOut") {
        return (
            <button onClick={()=>{logOut()}}>CERAR SECION</button>
            )
    }
}
export default UserForm