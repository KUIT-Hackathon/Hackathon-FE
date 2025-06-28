import useApi from './useApi';
import { ENDPOINTS } from '../config';

const usePaperApi = () => {
  const { paperApi } = useApi();

  const postMessage = (data) => {
    return paperApi
      .get(ENDPOINTS.BASE.MESSAGE, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const getPublicPaper = () => {
    return paperApi
      .get(ENDPOINTS.PAPER.PUBLIC, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        console.log(parseInt(localStorage.getItem('userId') || '0', 10));

        return response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { postMessage, getPublicPaper };
};

export default usePaperApi;
