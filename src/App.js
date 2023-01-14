
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="hola mundo"/>}/>
        <Route path='/category/:id' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
