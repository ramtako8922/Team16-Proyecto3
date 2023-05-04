import * as categoriasServices from "../services/categorias.services.js";
//Metodo del controlador de categirias que trae todas las categorias de las de la base de datos
export const getCategorias = (req, res) => {
  categoriasServices
    .getCategorias()
    .then((result) => {
      res.status(201).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
//Metodo del controlador de categirias que trae una categoria creada en la base de datos de acuerdo al id de esta
export const getCategoria = (req, res) => {
  const { id } = req.params;
  categoriasServices
    .getCategoria(id)
    .then((result) => {
      res.status(201).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
//Metodo del controlador de categirias que envia una solicitud post para crear una categoría
export const createCategorias = (req, res) => {
  const categoria = req.body;
  categoriasServices
    .createCategorias(categoria)
    .then(() => {
      res.status(200).json({
        message: "categoria created successfully...",
        data: categoria,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};



//Metodo del controlador de categirias que envia una solicitud put para actualizar una categoria una categoría

export const updateCategorias = (req, res) => {
  const categoria = req.body;
  const { id } = req.params;
  categoriasServices
    .updateCategorias(id, categoria)
    .then(() => {
      res.status(200).json({
        message: "categoria updated successfully...",
        data: categoria,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Metodo del controlador de categirias que envia una solicitud delete para borrar una categoría de acuerdo a su id

export const deleteCategorias = (req, res) => {
  const { id } = req.params;
  categoriasServices
    .deleteCategorias(id)
    .then(() => {
      res.status(201).json({
        message: "categoria deleted successfully...",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
