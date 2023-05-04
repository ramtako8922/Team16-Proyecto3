import { Router } from "express";
import {
  getProductos,
  getProducto,
  createProductos,
  deleteProductos,
  updateProductos
} from "../controllers/productos.controller.js";

const productosRouter = Router();

//Ruta de tipo get que devuelve todos los productos aslmacenados en la base de datos

productosRouter.get("/", getProductos);

//Ruta de tipo get para obtener producto  de acuerdo a su id

productosRouter.get("/:id", getProducto);


//Ruta de tipo post para crear producto en la base de datos
productosRouter.post("/", createProductos);

//Ruta de tipo put para editar producto en la base de datos

productosRouter.put("/:id",updateProductos);


//Ruta de tipo delete para borrar producto en la base de datos

productosRouter.delete("/:id",deleteProductos);

export default productosRouter;