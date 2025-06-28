import axios from 'axios';
import { BASE_URL } from '../config';

const useApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
  });
  const userApi = axios.create({
    baseURL: BASE_URL + 'user',
    withCredentials: true,
  });
  const paperApi = axios.create({
    baseURL: BASE_URL + 'paper',
    withCredentials: true,
  });
  return { api, userApi, paperApi };
};

export default useApi;
