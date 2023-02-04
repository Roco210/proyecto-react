
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './context/CartProvider';
import Cart from './pages/Cart/Cart';
import Admin  from './pages/Admin/Admin';




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
            <Route path='admin' element={<Admin/>} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
      
  );  
}

export default App;
