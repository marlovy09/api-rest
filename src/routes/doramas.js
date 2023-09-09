import { Router } from "express";
import {
  createDorama,
  deleteDorama,
  getDoramaById,
  getDoramas,
  updateDorama,
} from "../controllers/doramas.js";

export const doramasRouter = Router();

// Obtener todos los doramas
doramasRouter.get("/", getDoramas);

// Obtener un dorama por su id
doramasRouter.get("/:id", getDoramaById);

// Crear un dorama
doramasRouter.post("/", createDorama);

// Modificar o actualizar  un dorama
doramasRouter.patch("/:id", updateDorama);

// borrar un dorama
doramasRouter.delete("/:id", deleteDorama);
