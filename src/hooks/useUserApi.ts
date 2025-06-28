import useApi from './useApi';
import { ENDPOINTS } from '../config';

const useUserApi = () => {
  const { userApi } = useApi();

  const getProfile = () => {
    return userApi
      .get(ENDPOINTS.USER.PROFILE)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  return { getProfile };
};

export default useUserApi;
