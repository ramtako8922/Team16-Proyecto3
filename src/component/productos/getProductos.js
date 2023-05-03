import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const URI = "http://localhost:3010/api/productos/";
const colspan = 3
const GetProductosComponent = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async ()=>{
    const res = await axios.get(URI);
    setProductos(res.data);
  }

  const deleteProductos = async (id_producto) => {
    await axios.delete(`${URI}${id_producto}`);
    getProductos();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={"/createproduct"} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
          <table className="table">
            <thead className="thead-danger">
              <tr><th colSpan={colspan}><h1>PRODUCTOS</h1></th></tr>
              <tr>
                <th>id</th>
                <th>Código</th>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Categoría</th>
                <th>Cantidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => 
                (
                  <tr key={producto.id_producto}>
                    <td>{producto.id_producto}</td>
                    <td>{producto.cod_producto}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.id_categoria}</td>
                    <td>{producto.cantidad}</td>
                    <td>
                      <Link to={`/producto/${producto.id_producto}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                      <button onClick={(e)=>deleteProductos(producto.id_producto,e)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetProductosComponent;
