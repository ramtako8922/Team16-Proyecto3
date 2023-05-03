import db from "../config/db.js";

export const getProductos = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM producto";
    db.execute(query)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const createProductos = (producto) => {
  return new Promise((resolve, reject) => {
    const query =
      "INSERT INTO producto (cod_producto,nombre,descripcion,imagen,stock,precio,id_categoria) VALUES (?,?,?,?,?,?,?)";
    const { cod_producto,nombre,descripcion,imagen,stock,precio,id_categoria} = producto;
    db.execute(query, [cod_producto,nombre,descripcion,imagen,stock,precio,id_categoria])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteProductos = (id) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM producto WHERE id_producto = ?";
    db.execute(query,[id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateProductos = (id,producto) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE producto SET cod_producto=?, nombre=?, descripcion=?, imagen=?, stock=?, precio=?, id_categoria=? WHERE id_producto=?";
    const { cod_producto,nombre,descripcion,imagen,stock,precio,id_categoria} = producto;
    db.execute(query, [cod_producto,nombre,descripcion,imagen,stock,precio,id_categoria,id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProducto = (id) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM producto WHERE id_producto=?";
    db.execute(query,[id])
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};