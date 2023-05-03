import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:3010/api/categorias/";

const UpdateCategoriaComponent = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState({
    name: '',
  });

  useEffect(() => {
    axios
      .get(URI + id)
      .then((res) => {
        setCategoria({name:res.data[0].nombre});
        console.log(res.data[0].nombre);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateCategoria = async (e) => {
    e.preventDefault();
    await axios
      .put(URI + id,categoria)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
    navigate("/categoria");
  };

  return (
    <div>
      <h3>Editar Categoria</h3>
      <form onSubmit={updateCategoria}>
        <div className="form-group mb-3 mt-3">
          <label className="form-label">Id</label>
          <input
            disabled={true}
            type="text"
            className="form-control"
            name='id'
            value={id}
          />
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name='name'
            className="form-control"
            value={categoria.name || ''}
            onChange={e =>
              setCategoria({ ...categoria, name: e.target.value })
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

export default UpdateCategoriaComponent;
