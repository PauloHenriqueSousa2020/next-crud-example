import api from "../api"

const service = "/dragon";

const findAll = () => {
  return api.get(`${service}`);
};

const findOne = (id: string) => {
  return api.get(`${service}/${id}`);
};

const create = (data: any) => {
  return api.post(`${service}`, data);
};

const update = (data: any) => {
  return api.put(`${service}`, data);
};


const remove = (id: string) => {
  return api.delete(`${service}/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  findAll,
  findOne,
  update,
  create,
  remove,
};
