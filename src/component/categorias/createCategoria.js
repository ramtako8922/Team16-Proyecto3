import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:3010/api/categorias/";

const CreateCategoriaComponent = () => {
  
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const guardarCategoria = async (e) => {
    e.preventDefault();
    await axios
      .post(URI, { name: name })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    navigate("/categoria");
  };

  
  return (
    <div>
      <h3>Crear Categoria</h3>
      <form onSubmit={guardarCategoria}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
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

export default CreateCategoriaComponent;
