/**jromanz**/

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const URI = "http://localhost:3010/api/productos/";

const CreateProductoComponent = () => {
  const [cod_producto, setCodProducto] = useState("");
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");
  const [id_categoria, setIdCategoria] = useState("");

  const navigate = useNavigate();

  const estadostock = [
    { label: "En Existencia", value: "En Existencia" },
    { label: "Agotado", value: "Agotado" },
  ];

  const handdlerSelectChange = (event) => {
    console.log(event.value);
    setStock(event.value);
  };

  const guardarProducto = async (e) => {
    e.preventDefault();
    await axios
      .post(URI, {
        cod_producto: cod_producto,
        nombre: nombre,
        descripcion: descripcion,
        imagen: imagen,
        stock: stock,
        precio: precio,
        id_categoria: id_categoria
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    navigate("/producto");
  };

  return (
    <div>
      <h3>Crear Producto</h3>
      <form onSubmit={guardarProducto}>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Código</label>
          <input
            value={cod_producto}
            onChange={(e) => setCodProducto(e.target.value)}
            type="text"
            className="form-control"
          />            
        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Nombre</label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />              
        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Descripcion</label>
          <input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          />              

        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Imagen</label>
          <input
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>        
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Stock</label>
          <input
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            type="text"
            className="form-control"
          />              

        </div>

        <div className="form-group mb-3 mt-3">
          
          <label className="form-label">precio</label>
          <input
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="text"
            className="form-control"
          />          

        </div>
        <div className="form-group mb-3 mt-3">
          
          <label className="form-label">Categoria</label>
          <input
            value={id_categoria}
            onChange={(e) => setIdCategoria(e.target.value)}
            type="text"
            className="form-control"
          />          
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>

  );
};

export default CreateProductoComponent;
