import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodosComponent from './components/TodosView/TodosComponent';
import HombresComponent from './components/HombresView/HombresComponent';
import MujeresComponent from './components/MujeresView/MujeresComponent';
import SingleProd from './components/ProductView/SingleProd';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<TodosComponent/>} />
      <Route exact path='/product/:proId' element={<SingleProd/>} />
      <Route exact path='/Hombres' element={<HombresComponent/>} />
      <Route exact path='/Mujeres' element={<MujeresComponent/>} />
    {/* <ItemListContainer greeting='Bienvenidos a Mi Tienda!'/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
