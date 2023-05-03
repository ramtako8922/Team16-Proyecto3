import axios from "axios";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const URI = "http://localhost:3010/api/categorias/";
const colspan = 3
const GetCategoriasComponent = () => {
  const [categorias, setCategoria] = useState([]);
  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = async ()=>{
    const res = await axios.get(URI);
    setCategoria(res.data);
  }

  const deleteCategoria = async (id_categoria) => {
    await axios.delete(`${URI}${id_categoria}`);
    getCategorias();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to={"/create"} className='btn btn-primary mt-2 mb-2'><i className="fa-solid fa-plus"></i></Link>
          <table className="table">
            <thead className="thead-danger">
              <tr><th colSpan={colspan}><h1>Categorias</h1></th></tr>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => 
                (
                  <tr key={categoria.id_categoria}>
                    <td>{categoria.id_categoria}</td>
                    <td>{categoria.nombre}</td>
                    <td>
                      <Link to={`/${categoria.id_categoria}`} className="btn btn-info"><i className="fa-solid fa-pen-to-square"></i></Link>
                      <button onClick={(e)=>deleteCategoria(categoria.id_categoria,e)} className="btn btn-danger"><i className="fa-regular fa-trash-can"></i></button>
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

export default GetCategoriasComponent;
