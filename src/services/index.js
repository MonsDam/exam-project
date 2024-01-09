import axios from "axios";
import config from "./config/config";


export default axios.create({
  baseURL: config.baseURL,
  headers: {
    "Content-type": "application/json",
  },
});