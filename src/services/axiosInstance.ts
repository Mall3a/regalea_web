import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // pasa por el proxy de Vite
});
