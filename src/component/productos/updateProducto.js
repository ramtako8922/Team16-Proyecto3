/**jromanz**/


import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select"

const URI = "http://localhost:3010/api/productos/";

const UpdateProductoComponent = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [producto, setProducto] = useState({
  cod_producto: '',
  nombre: '',
  descripcion: '',
  imagen:null,
  stock:'',
  precio:'',
  id_categoria:'',
  });

  useEffect(() => {
    axios
      .get(URI + id)
      .then((res) => {
        setProducto({
          
        cod_producto:res.data[0].cod_producto,
        nombre:res.data[0].nombre,
        descripcion:res.data[0].descripcion,
        imagen:res.data[0].imagen,
        stock:res.data[0].stock,
        precio:res.data[0].precio,
        id_categoria:res.data[0].id_categoria
      });
        
        console.log(producto);
      })
      .catch((err) => console.log(err));
  }, []);

  const estadostock=
    [
      {label:'En Existencia', value:'En Existencia'},
      {label:'Agotado', value:'Agotado'}
    ]

    const handdlerSelectChange=(event)=>{
      console.log(event.value)
      setProducto(producto.stock=event.value)

    }

  const updateProducto = async (e) => {
    e.preventDefault();
    await axios
      .put(URI + id,producto)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    navigate("/producto");
  };

  return (
    <div>
      <h3>Editar Producto</h3>
      <form onSubmit={updateProducto}>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Id</label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            name='id'
            value={id}
          />
          <label className="form-label">Código</label>
          <input
            type="text"
            name='codigo'
            className="form-control"
            value={producto.cod_producto || ''}
            onChange={e =>
              setProducto({ ...producto, cod_producto: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name='name'
            className="form-control"
            value={producto.nombre || ''}
            onChange={e =>
              setProducto({ ...producto, nombre: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Descripcion</label>
          <input
            type="text"
            name='name'
            className="form-control"
            value={producto.descripcion || ''}
            onChange={e =>
              setProducto({ ...producto, descripcion: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">stock</label>
          <Select
          options={estadostock}
            type="text"
            name='stock'
            className="form-control"
            value={producto.stock}
            onChange={e =>
              setProducto({ ...producto, handdlerSelectChange })
            }
          />
        </div>
        <div className="form-group mb-3 mt-3">
          
          <label className="form-label">precio</label>
          <input
            type="text"
            name='name'
            className="form-control"
            value={producto.precio || ''}
            onChange={e =>
              setProducto({ ...producto, precio: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-3 mt-3">
          
          <label className="form-label">Categoria</label>
          <input
            type="text"
            name='name'
            className="form-control"
            value={producto.id_categoria || ''}
            onChange={e =>
              setProducto({ ...producto, id_categoria: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default UpdateProductoComponent;
