import axios from 'axios';
import { BASE_URL } from '../config';

const useApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
  });
  const userApi = axios.create({
    baseURL: BASE_URL + '/user',
  });
  const paperApi = axios.create({
    baseURL: BASE_URL + '/paper',
  });
  return { api, userApi, paperApi };
};

export default useApi;
