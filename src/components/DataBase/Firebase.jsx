/* import {useEffect,useContext} from 'react'
import {getFirestore,collection,getDocs} from "firebase/firestore"
import CartProvider from '../../context/CartProvider';


const Firebase = () => {
    const {setDataBase}=useContext(CartProvider)
    const getProducts=()=>{
        const db = getFirestore();
        const querysnapshot =collection(db,"item");
        getDocs(querysnapshot).then((response)=>{
            const products = response.docs.map((p)=>{
                return {id:p.id,...p.data()}
            })
            setDataBase(products)
            }
        ).catch(error=>console.log(error))

    };

    useEffect(()=>{
        getProducts()
        
    })
  return (
    <div>Firebase</div>
  )
};

export default Firebase; */