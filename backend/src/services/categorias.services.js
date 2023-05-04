import db from "../config/db.js";

//Servicio que trae todas las categorías de la base de datos

export const getCategorias = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM categoria";
    db.execute(query)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
//Servicio que trae una categoria de acuerdo a su id
export const getCategoria = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM categoria WHERE id_categoria=?";
    db.execute(query,[id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


//Servicio que crea una categoria en la base de datos
export const createCategorias = (categoria) => {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO categoria (nombre) VALUES (?)";
      const {name} = categoria;
      db.execute(query,[name])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  //Servicio que actualiza una  categorías de la base de datos
  export const updateCategorias = (id,categoria) => {
    return new Promise((resolve, reject) => {
      const query = "UPDATE categoria SET nombre =? WHERE id_categoria = ?";
      const {name} = categoria;
      db.execute(query,[name,id])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  //Servicio que borra una categoria de la base de datos de acuerdo a su id
  export const deleteCategorias = (id) => {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM categoria WHERE id_categoria = ?";
      db.execute(query,[id])
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };