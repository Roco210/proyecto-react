import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./style.css"
<style className="css"></style>
const NavBar = () => {
  return (
    <div className="navBar">
        <div>
        <NavLink to="/" className={({ isActive }) => isActive ? "active": "inactive"}>
          <img src="./images/plant.png" alt="brand" />
        </NavLink>
        </div>
        <div>
            <ul className="lista">
              
                <li><NavLink to="/" className={({ isActive }) => isActive ? "active": "inactive"}>TODO</NavLink></li>
                <li><NavLink to="/category/jardineria" className={({ isActive }) => isActive ? "active": "inactive"}>JARDINERIA</NavLink></li>
                <li><NavLink to="/category/planta" className={({ isActive }) => isActive ? "active": "inactive"}>PLANTA</NavLink></li>
            </ul>
        </div>
        <div><CartWidget/></div>
    </div>
    
  )
}

export default NavBar