import axios from "axios";

export const baseURL = "http://192.168.150.70:8000"; //workplace
//export const baseURL = "http://localhost:8000"; //#localhost
const api = axios.create({
  baseURL: `${baseURL}/api`,
});
export default api;
