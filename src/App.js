
import './App.css';
import {BrowserRouter,Form,Route,Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
import Admin  from './pages/Admin/Admin';
import CartForms from './components/CartgitForm/CartForm';
import Users from './pages/Users/Users';



function App() {
 
  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path="category/:category" element={<ItemListContainer/>}/>
            <Route path='item/:id' element={<ItemDetailContainer/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path="final" element={<CartForms/>}/>
            <Route path='admin' element={<Admin/>} />
            <Route path='user' element={<Users/>}/>
          </Routes>
          </CartProvider>
      </BrowserRouter>
      
  );  
}


export default App;
