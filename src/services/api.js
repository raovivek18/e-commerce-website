import axios from 'axios';

const API_BASE_URL = 'https://api.escuelajs.co/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchAllProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
};

export default apiClient;
