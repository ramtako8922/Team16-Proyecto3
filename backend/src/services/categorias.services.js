import db from "../config/db.js";

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