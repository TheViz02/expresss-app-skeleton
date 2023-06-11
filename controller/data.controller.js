import { services } from "../services/index.js";

const { dataService } = services;
const DataService = new dataService.DataService();

export const getData = (req, res) => {
  DataService.getData().then((result) => {
    res.status(200).send(result);
  });
};

export const saveData = (req, res) => {
  DataService.saveData(req.body).then((resp) => {
    res.status(200).send(resp);
  });
};
