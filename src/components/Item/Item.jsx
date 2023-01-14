import "./style.css"

const Item = ({producto}) => {

  return ( 
    <li className="card" key={producto}>{producto}</li>
  )
};

export default Item