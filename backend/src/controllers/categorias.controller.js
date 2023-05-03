import * as categoriasServices from "../services/categorias.services.js";

export const getCategorias = (req, res) => {
  categoriasServices
    .getCategorias()
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

export const getCategoria = (req, res) => {
  const { id } = req.params;
  categoriasServices
    .getCategoria(id)
    .then((result) => {
      res.status(200).json(result[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
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

export const deleteCategorias = (req, res) => {
  const { id } = req.params;
  categoriasServices
    .deleteCategorias(id)
    .then(() => {
      res.status(200).json({
        message: "categoria deleted successfully...",
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
