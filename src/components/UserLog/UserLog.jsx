import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContex";
import { useContext } from "react";
import "./style.css"

const UserLog = () => {
  const {user, userData,auth }=useContext(cartContext)
  console.log(auth)

  return (
    <div className="userLog">
      <p>{user ? userData.name:null}</p>
      <Link to="user"><img className="userLogImg" alt="userlog" src='../images/userlog.png' /></Link>
    </div>
  )
}


export default UserLog;