import axios from "axios";

const baseUrl = import.meta.env.MODE==='development' ? "http://localhost:3000/api/" : "/api";

const api = axios.create({
  baseURL:baseUrl
});

export default api;

