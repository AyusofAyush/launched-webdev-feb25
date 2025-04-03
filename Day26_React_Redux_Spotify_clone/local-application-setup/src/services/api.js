import axios from 'axios';
import getConfig from '../utils/config';

const { apiUrl } = getConfig();

const api = axios.create({
  baseURL: apiUrl,
});

export const login = async (credentials) => {
  const response = await api.post('/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post('/register', userData);
  return response.data;
};

// you can write all the API methods to make calls to your backend server