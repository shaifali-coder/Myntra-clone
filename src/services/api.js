import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const getProducts = () => axios.get(API_URL);
export const getProductById = (id) =>
  axios.get(`${API_URL}/${id}`);
