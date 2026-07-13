import axios from "axios";

export const api = axios.create({
  baseURL: "http://ecommerce-be.test/api",
  headers: {
    "Content-Type": "application/json",
  },
});