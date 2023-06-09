import { services } from "../services/index.js";

const { indexService } = services;

export const indexFunction = (req, res) => {
  res.status(200).send(indexService.indexResponse());
};

export const secondFunction = (req, res) => {
  res.status(200).send({ title: "Express" });
};
