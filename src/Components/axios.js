import axios from "../Components";

const instance = axios.create({
  baseURL: "...", //aqui va la url (la funcion de la nube)api
});

export default instance;
