import { Router } from "express";
import {
  getCategorias,
  getCategoria,
  updateCategorias,
  deleteCategorias,
  createCategorias,
} from "../controllers/categorias.controller.js";

const categoriasRouter = Router();


//Ruta de tipo get que obtiene todas las categorias
categoriasRouter.get("/", getCategorias);

//Ruta de tipo post que crea una categoria
categoriasRouter.post("/", createCategorias);

//Ruta de tipo get que obtiene una categoria por id
categoriasRouter.get("/:id", getCategoria);

//Ruta de tipo put que actualiza una categoria por id
categoriasRouter.put("/:id", updateCategorias);

//Ruta de tipo delete que borra una categoria por id
categoriasRouter.delete("/:id",deleteCategorias);

export default categoriasRouter;
