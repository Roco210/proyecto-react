import { useState, useEffect } from "react"
import { getFirestore, addDoc, collection, doc, getDocs,updateDoc,deleteDoc} from "firebase/firestore"
import swal from "sweetalert";

import "./style.css"

export const Admin = ({ action }) => {

    const [listProd, setListProd] = useState([]);
    const [newProduct, setNewProduct] = useState(
        {
            title: '',
            price: 0,
            category: '',
            stock: 0,
            description: " ",
            image: ''
        });


    const db = getFirestore()

    const formulario = (x) => {
        setNewProduct({
            ...newProduct,
            [x.target.name]: x.target.value
        })
    }


    const createProduct = () => {
        const querySnapshot = collection(db, "item")
        const nameIs = listProd.find((p)=>p.title.toUpperCase()===newProduct.title.toUpperCase())
        

        if(nameIs){
            swal("YA EXISTE EL PRODUCTO")
        }else{
        addDoc(querySnapshot, newProduct).then(
            (response) => {
                swal({
                    title: "Creaste un nuevo producto",
                    text: `felicidades`,
                    icon: "success",
                    button: "Aceptar",
                }); window.location.reload()
            }
        ).catch((e) => console.log(e))}
    };
    //mod
    const [serch, setSerch] = useState("");
    console.log(serch)
    const [prodMod, setProdMod] = useState([]);
    const[formMod,setFormMod]=useState({ });
    const formularioDin =(x)=>{
        setFormMod({
            ...formMod,
            [x.target.name]:x.target.value
          })
        };

        const updateProd= ()=>{
                const querySnapshot = doc(db, "item",prodMod.id);
                updateDoc(querySnapshot,formMod).then(()=>{swal("se actualizo"); setFormMod({}); window.location.reload()}
                ).catch(e=>console.log(e))
          };
          

    const getProducts = getDocs(collection(db, "item"))
    useEffect(() => {
        getProducts.then((res) => {
            const data = res.docs.map((p) => { return { id: p.id, ...p.data() } })
            console.log(data)
            setListProd(data)
        })
    }, [prodMod,action,getProducts]);



    const bttSerch = (x) => {

        const serchProd = listProd.find((p) => p.title.toUpperCase() === x)
        if(serchProd){setProdMod(serchProd)}else{swal("el producto que buscas no existe")}
        
    }

    const deleteProd =()=>{
        const querySnapshot = doc(db, "item",prodMod.id);
        deleteDoc(querySnapshot).then(()=>{swal("Se elimino el producto"); window.location.reload()}
        ).catch(e=>console.log(e))}



    //retorno

    if (action === "create") {
        return (

            <div>
                <h1 className="adminTitle">AGREGAR PRODUCTOS</h1>
                <form >
                    nombre:
                    <input type="text" name="title" placeholder="nombre" value={newProduct.title} onChange={(e) => { formulario(e) }} />
                    stock:
                    <input type="number" name="stock" placeholder="stock" value={newProduct.stock} onChange={(e) => { formulario(e) }} />
                    price:
                    <input type="number" name="price" placeholder="price" value={newProduct.price} onChange={(e) => { parseInt(formulario(e)) }} />
                    category
                    <input type="text" name="category" placeholder="category" value={newProduct.category} onChange={(e) => { formulario(e) }} />
                    imagen:
                    <input type="text" name="image" placeholder="image" value={newProduct.img} onChange={(e) => { formulario(e) }} />
                    Descripcion:
                    <input type="text" name="description" placeholder="description" value={newProduct.description} onChange={(e) => { formulario(e) }} />
                </form>
                <button onClick={() => { createProduct() }}>enviar producto</button>
            </div>


        )
    }
    if (action === "mod") {
        return (
            <div>
                <h1 className="adminTitle">MODIFICAR PRODUCTOS</h1>
                <p>INGRESE NOMBRE DE PRODUCTO:</p>
                <input type="serch" name="serch" placeholder="Buscar" value={serch} onChange={(e) => { setSerch(e.target.value.toUpperCase()) }} />
                <button onClick={() => { bttSerch(serch) }}>Buscar</button>
                <ul>
                    <li key={prodMod.id} className="serchard">
                        
                            {/* <img src={prodMod.image} alt={prodMod.name} /> */}
                            <div>Nombre: {prodMod.title}</div>
                            <div>precio: ${prodMod.price}</div>
                            <div>descripocion: {prodMod.description}</div>
                            <div>Stock:{prodMod.stock}</div>
                            <img src={prodMod.image} alt={prodMod.title} />

                    </li>
                </ul>
                <form onSubmit={e=>e.preventDefault()} className="changeForm">
                <p>NOMBRE:</p>
                <input type="text" name="title" placeholder="nombre" value={formMod.title?formMod.title:null} onChange={(e) => { formularioDin(e) }} />
                <p>PRECIO:</p>
                <input type="text" name="price" placeholder="precio" value={formMod.price} onChange={(e) => { formularioDin(e) }} />
                <p>STOCK</p>
                <input type="text" name="stock" placeholder="stock" value={formMod.stock} onChange={(e) => { formularioDin(e) }} />
                <p>IMAGEN</p>
                <input type="text" name="image" placeholder="imagen(url)" value={formMod.image} onChange={(e) => { formularioDin(e) }} />
                <p>CATEGORIA</p>
                <input type="text" name="category" placeholder="categoria" value={formMod.category} onChange={(e) => { formularioDin(e) }} />
                <p>DESCRIPCION</p>
                <input type="text" name="description" placeholder="descripcion" value={formMod.description} onChange={(e) => { formularioDin(e) }} />
                <button onClick={()=>{updateProd()}}> actualizar</button>
                </form>
            </div>)
    }
    if (action === "delete") { return (
        <>
                <h1 className="adminTitle">ELIMINAR PRODUCTOS</h1>
                <input type="serch" name="serch" placeholder="Buscar" value={serch} onChange={(e) => { setSerch(e.target.value.toUpperCase()) }} />
                <button onClick={() => { bttSerch(serch) }}>Buscar</button>
                <ul>
                    <li key={prodMod.id} className="serchard">
                        
                            {/* <img src={prodMod.image} alt={prodMod.name} /> */}
                            <div>Nombre: {prodMod.title}</div>
                            <div>precio: ${prodMod.price}</div>
                            <div>descripocion: {prodMod.description}</div>
                            <div>Stock:{prodMod.stock}</div>
                            <img src={prodMod.image} alt={prodMod.title} />

                    </li>
                </ul>

                <button onClick={()=>{deleteProd()}}>ELIMIAR PRODUCTO</button>
        </>
    
    ) }

};

export default Admin;

