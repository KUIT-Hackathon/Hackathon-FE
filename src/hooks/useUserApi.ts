import useApi from './useApi';
import { ENDPOINTS } from '../config';

const useUserApi = () => {
  const { api } = useApi();

  const getProfile = () => {
    api
      .get(ENDPOINTS.USER.PROFILE)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  return { getProfile };
};

export default useUserApi;
