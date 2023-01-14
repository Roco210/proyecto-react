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
                <li>Todo</li>
                <li>Macetas</li>
                <li>Sustratos</li>
            </ul>
        </div>
        <div><CartWidget/></div>
    </div>
    
  )
}

export default NavBar