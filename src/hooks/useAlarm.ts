import useApi from './useApi';
import { ENDPOINTS } from '../config';

const useAlarm = () => {
  const { api } = useApi();

  const getAlarm = () => {
    return api
      .get(ENDPOINTS.BASE.ALARM, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        return response.data.data.alarmEntityList;
      })
      .catch((error) => console.log(error));
  };

  return { getAlarm };
};

export default useAlarm;
