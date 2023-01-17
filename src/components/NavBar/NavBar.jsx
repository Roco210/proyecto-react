import CartWidget from "../CartWidget/CartWidget"
import "./style.css"

<style className="css"></style>
const NavBar = () => {
  return (
    <div className="navBar">
        <div>
            <img src="./images/plant.png" alt="brand" />
        </div>
        <div>
            <ul className="lista">
                <li >Todo </li>
                <li >Maceta</li>
                <li >Planta</li>
            </ul>
        </div>
        <div><CartWidget/></div>
    </div>
    
  )
}

export default NavBar