
import "./App.css";
import GetCategoriasComponent from "./component/categorias/getCategorias";
import {  Route, Routes } from "react-router-dom";
import CreateCategoriaComponent from "./component/categorias/createCategoria";
import UpdateCategoriaComponent from "./component/categorias/updateCategoria";
import GetProductosComponent from "./component/productos/getProductos";
import CreateProductoComponent from "./component/productos/createProducto";
import UpdateproductoComponent from "./component/productos/updateProducto";
import Home from "./home/Main";
import Menu from "./menu/menu"
import Foter from "./home/Foter";

function App() {
  return (
    <div className="App">
      <Menu/>
  
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/categoria" element={<GetCategoriasComponent />} />
            <Route path="/create" element={<CreateCategoriaComponent />} />
            <Route path="/:id" element={<UpdateCategoriaComponent />} />
            <Route path="/producto" element={<GetProductosComponent />} />
            <Route path="/createproduct" element={<CreateProductoComponent />} />
            <Route path="/producto/:id" element={<UpdateproductoComponent/>} />
          </Routes>
          <Foter/>
             
    </div>
  );
}

export default App;
