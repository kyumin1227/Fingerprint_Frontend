import axios from "axios";

export const back = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: import.meta.env.VITE_BACKEND_URL,
});
