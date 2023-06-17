import { services } from "../../services/index.js";

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

export const updateData = (req, res) => {
  let body = req.body,
    data = {
      id: Number(req.params.id),
      name: body.name,
      email: body.email,
      phoneNumber: body.phoneNumber,
    };
  DataService.updateData(data).then((resp) => {
    res.status(200).send(resp);
  });
};

export const getSelectedData = (req, res) => {
  let params = {
    id: Number(req.params.id),
  };
  DataService.getSelectedData(params).then((resp) => {
    res.status(200).send(resp);
  });
};

export const deleteData = (req, res) => {
  DataService.deleteData(Number(req.params.id)).then((resp) => {
    console.log(resp);
    res.status(200).send(resp);
  });
};
