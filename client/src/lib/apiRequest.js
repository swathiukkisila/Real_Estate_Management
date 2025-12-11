import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-management-b2rz.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;