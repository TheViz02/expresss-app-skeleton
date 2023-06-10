import { services } from "../services/index.js";
const { dataService } = services;
export const getData = (req, res) => {
  dataService.DataService.prototype.getData().then((result) => {
    res.status(200).send(result);
  });
};
