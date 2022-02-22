import axios from "axios"; //#localhost

// Sara's ip
export const baseURL = "http://192.168.100.151:8000"; //workplace//
export const baseURL = "http://localhost:8000";
const api = axios.create({
  baseURL: `${baseURL}/api`,
});
export default api;

//fahad's ip
//export const baseURL = "http://192.168.150.70:8000"; //workplace
