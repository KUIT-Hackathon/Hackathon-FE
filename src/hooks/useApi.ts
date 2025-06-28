import axios from 'axios';
import { BASE_URL } from '../config';

const useApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
  });
  const userApi = axios.create({
    baseURL: BASE_URL + 'user',
  });
  const paperApi = axios.create({
    baseURL: BASE_URL + 'paper',
  });
  api.interceptors.request.use((config) => {
    const userId = localStorage.getItem('userId');
    if (userId) config.headers['X-USER-ID'] = userId;
    return config;
  });
  userApi.interceptors.request.use((config) => {
    const userId = localStorage.getItem('userId');
    if (userId) config.headers['X-USER-ID'] = userId;
    return config;
  });
  paperApi.interceptors.request.use((config) => {
    const userId = localStorage.getItem('userId');
    if (userId) config.headers['X-USER-ID'] = userId;
    return config;
  });
  return { api, userApi, paperApi };
};

export default useApi;
