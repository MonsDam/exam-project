import http from "./index";

export const getAll = () => {
  return http.get("/customers");
};

const customersServices = {
    getAll
};

export default customersServices;
