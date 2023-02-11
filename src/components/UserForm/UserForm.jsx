import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/cartContex';
import { getFirestore, collection, addDoc, doc, getDocs } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, setPersistence, browserSessionPersistence, inMemoryPersistence, GoogleAuthProvider } from "firebase/auth";
import "./style.css"
import swal from 'sweetalert';
import { Link } from 'react-router-dom';




const UserForm = ({ formType }) => {
    const auth = getAuth();
    const { user, setUser, userData, setUserData, setAct, setCart } = useContext(cartContext)
    const [buttonCheck, setButtonCheck] = useState(false)
    const formulario = (x) => {
        setUserData({ ...userData, [x.target.name]: x.target.value, }
        )
    };
    const autID = auth.currentUser ? auth.currentUser.uid : "sin usuario"
    const { name, lastName, mail, adress } = userData
    const userReg = {
        name, lastName, mail, adress, access: null, uid: ""
    }
    const db = getFirestore();

    const userDatabase = (x) => {
        const querySnapshot = collection(db, "users")
        addDoc(querySnapshot, x).then((response) => {
            swal({
                title: "Creaste un Usuario",
                text: `felicidades`,
                icon: "success",
                button: "Aceptar",
            });
        }
        ).catch((e) => console.log(e))

    };
    const findUser = () => {
        const getProducts = getDocs(collection(db, "users"))
        getProducts.then((res) => {
            const data = res.docs.map((p) => { return { ...p.data() } })
            const userFind = data.find((p) => p.uid == user.uid)
        }).catch(e => console.log(e))
    }



    const registrer = () => {
        createUserWithEmailAndPassword(auth, userData.mail, userData.password).then((res) => {
            console.log("registro exitoso")

            setAct("LogOut");
            const userUid = res.user.uid
            const newUserReg = { ...userReg, uid: userUid }
            console.log(newUserReg)
            setUser(newUserReg);
            userDatabase(newUserReg)
        }).catch((error) => {
            if (error.code === "auth/email-already-in-use") {
                swal("El correo ingreado ya existe")
            }
            /* if (error.code !==null) { swal("error") } */
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });

    }

    const logIn=()=>{if(localStorage.getItem("user")){
        setPersistence(auth,inMemoryPersistence).then(()=> {const provider= new GoogleAuthProvider();
        return signInWithEmailAndPassword(auth,provider)}).catch(e=>console.log(e));}
        setPersistence(auth,browserSessionPersistence)
        signInWithEmailAndPassword(auth, userData.mail, userData.password).then((res) => {
            const user = res.user.uid;
            console.log(user)
            const getProducts = getDocs(collection(db, "users"))
            getProducts.then((res) => {
                const data = res.docs.map((p) => { return { ...p.data() } })
                const userFind = data.find((p) => p.uid == user)
                setUser(userFind)
                localStorage.setItem("user",JSON.stringify(userFind))
            }).catch(e => console.log(e))
        }).catch((error) => {
            if (error.code === "auth/wrong-password") { swal("clave o correo incorrecto") }
            if (error.code === "auth/too-many-requests") { swal("realizaste muchos intentos aguarda y vuelve a intentarlo") }
            if (error.code === "auth/invalid-email") { swal("mail erroneo") }
            
            setAct(null)
            setUser(null)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
        setAct("LogOut")
    }


    const logOut = () => {
        signOut(auth).then(() => { 
            swal("desconeccion exitosa"); 
            setUser(null); setAct(null); 
            localStorage.removeItem("user"); 
        }).catch(e => console.log(e))
        setCart([])
    }

    useEffect(() => {
        if (userData.mailCheck === userData.mail && userData.mail !== "" && userData.name !== "" && userData.password !== "") {
            setButtonCheck(true)
        } else (setButtonCheck(false))
    }, [userData])


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
                <button onClick={() => { if (buttonCheck) { registrer() } else { swal("Por favor complete todos los datos") } }}>REGISTRARME</button>

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
                    <button onClick={() => { logIn() }}>INGRESAR</button>

                </form>

            </div>)
    } if (user?.access === "admin" && formType === "LogOut") {
        return (
            <>
            <button onClick={() => { logOut() }}>CERAR SESION</button>
            <Link to="/admin"><button>ADMIN</button></Link>
            </>
            
        )

    }
    if (formType === "LogOut" ) {
        return (
            <button onClick={() => { logOut() }}>CERAR SESION</button>
        )
    }
}
export default UserForm