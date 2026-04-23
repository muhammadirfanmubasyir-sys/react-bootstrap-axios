import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/products";
 
export const listProducts = () => {
    return axios.get(REST_API_BASE_URL);
}

export const createProduct = (product) => {
    return axios.post(REST_API_BASE_URL, product);
}

export const getProductById = (productId) => {
    return axios.get(REST_API_BASE_URL + "/" + productId);
}

export const updateProduct = (productId, product) => {
    return axios.put(REST_API_BASE_URL + "/" + productId, product);
}

export const deleteProduct = (productId) => {
    return axios.delete(REST_API_BASE_URL + "/" + productId);
} 