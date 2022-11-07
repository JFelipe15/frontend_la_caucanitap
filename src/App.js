import './css/App.css';

//Componentes
import React_View from './components/React_View';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar';
import Nosotros from './components/about_us/Nosotros';
import Contactanos from './components/contactanos/Contactanos';
import Footer from './components/footer/Footer';
import ProductosIndex from './components/productos';
import CategoriasIndex from './components/categorias';
import CarritoIndex from './components/carrito.jsx';
import LoginView from './components/usuarios/Login';
import Productos_ejemplo from './components/productos/Productos_Ejemplo';

import Circulos from './components/Circulos';


//Librerias
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div>
      <div className = "App">
        <Navbar/>
        <Routes>
          <Route path ="/react" element = {<React_View/>} />
          <Route path ="/" element = {<Home/>} />
          <Route path ="/productos" element = {<ProductosIndex/>} />
          <Route path ="/categorias" element = {<CategoriasIndex/>} />
          <Route path ="/carrito" element = {<CarritoIndex/>} />
          <Route path ="/about" element = {<Nosotros/>} />
          <Route path ="/login" element = {<LoginView/>} />
          <Route path ="/contactanos" element = {<Contactanos/>} />
          <Route path ="/circulos" element = {<Circulos/>} />
        </Routes>
        <Footer/> 
      </div>
    </div>
    
  );
}

export default App;
