import { doramas } from "../models/doramas.js";
import { randomUUID } from "node:crypto";

export const getDoramas = (req, res) => {
  if (req.query.year) {
    const doramasFiltrados = doramas.filter(
      (dorama) => dorama.year == req.query.year
    );
    if (doramasFiltradas.length === 0) {
      return res.status(404).json({ error: "no se encuentra ningun dorma" });
    }
    return res.json(doramasFiltrados);
  }
  if (doramas.length === 0) {
    return res.status(404).json({ error: "No hay  ningun dorama" });
  }
  res.json(doramas);
};

export const getDoramaById = (req, res) => {
  const id = req.params.id;
  const dorama = doramas.find((dorama) => dorama.id === id);
  if (!dorama) {
    return res.status(404).json({ error: "Dorama no encontrado, lo siento" });
  }
  return res.json(dorama);
};

export const createDorama = (req, res) => {
  if (!req.body.name || !req.body.year) {
    return res.status(400).json({ error: "Error en la peticion" });
  }
  const dorama = req.body;
  dorama.id = randomUUID();
 doramas.push(dorama);
  return res.status(201).json(dorama);
};

export const updateDorama = (req, res) => {
  const id = req.params.id;
  // Encontrar el indice de la pelicula en la db por su id
  const index = doramas.findIndex((dorama) => dorama.id === id);
  // Si no existe ninguna pelicula con ese id
  if (index === -1) {
    return res.status(404).json({ error: "Dorama no encontrado" });
  } else {
    const doramaUpdated = { ...doramas[index], ...req.body };
    doramas[index] = doramaUpdated;
    res.json(doramaUpdated);
  }
};

export const deleteDorama = (req, res) => {
  const id = req.params.id;

  const index = doramas.findIndex((dorama) => dorama.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "dorama no encontrado" });
  }
  doramas.splice(index, 1);

  res.sendStatus(204);
};
