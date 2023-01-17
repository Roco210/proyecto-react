
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';


function App() {
  return (
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path="item" element={<ItemListContainer/>}></Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
