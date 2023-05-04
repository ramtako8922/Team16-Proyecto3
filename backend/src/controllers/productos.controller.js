import * as productosServices from "../services/productos.services.js";

//Metodo del controlador de productos que envia una solicitud get para devolver todos los productos almacenados en la base de datos
export const getProductos = (req, res) => {
  productosServices
    .getProductos()
    .then((result) => {
      res.status(201).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Metodo del controlador de productos que envia una solicitud get para obtener un producto por id de la base de datos
export const getProducto = (req, res) => {
  const { id } = req.params;
  productosServices
    .getProducto(id)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Metodo del controlador de productos que envia una solicitud post para crear un producto en la base de datos

export const createProductos = (req, res) => {
  const producto = req.body;
  productosServices
    .createProductos(producto)
    .then(() => {
      res.status(201).json({
        message: "producto created successfully...",
        data: producto,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const updateProductos = (req, res) => {
  const producto = req.body;
  const { id } = req.params;
  productosServices
    .updateProductos(id, producto)
    .then(() => {
      res.status(200).json({
        message: "producto updated successfully...",
        data: producto,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Metodo del controlador de productos que envia una solicitud delete para eliminar un producto de acuerdo a su id
export const deleteProductos = (req, res) => {
  const { id } = req.params;
  productosServices
    .deleteProductos(id)
    .then(() => {
      res.status(200).json({
        message: "producto deleted successfully...",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};



