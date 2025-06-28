import { error } from 'console';
import { ENDPOINTS } from '../config';
import useApi from './useApi';

const useAuthApi = () => {
  const { api, withUserId } = useApi();

  const signup = (data) => {
    return api
      .post(ENDPOINTS.AUTH.SIGNUP, data)
      .then((response) => {
        console.log('signup response:', response);
        return response.data;
      })
      .catch((error) => {
        console.error('signup error:', error);
        throw error;
      });
  };

  const login = (data) => {
    return api
      .post(ENDPOINTS.AUTH.LOGIN, data)
      .then((response) => {
        const userId = response.data.data.userId;
        localStorage.setItem('userId', userId);
      })
      .catch((error) => console.log(error));
  };

  return { signup, login };
};

export default useAuthApi;
