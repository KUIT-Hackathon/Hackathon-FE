import useApi from './useApi';
import { ENDPOINTS } from '../config';

const useUserApi = () => {
  const { userApi } = useApi();

  const getProfile = () => {
    return userApi
      .get(ENDPOINTS.USER.PROFILE, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const searchUser = (query) => {
    return userApi
      .get(ENDPOINTS.USER.SEARCH, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
        params: query,
      })
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => console.log(error));
  };

  const myPage = () => {
    return userApi
      .get(ENDPOINTS.USER.PROFILE, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const follow = (friendId) => {
    return userApi
      .post(
        ENDPOINTS.USER.FOLLOW,
        {},
        {
          headers: {
            userId: parseInt(localStorage.getItem('userId') || '0', 10),
          },
          params: friendId,
        },
      )
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch((error) => console.log(error));
  };
  const followerCheck = () => {
    return userApi
      .get(ENDPOINTS.USER.FOLLOWER, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  };

  const searchFollower = () => {
    return userApi
      .get(ENDPOINTS.USER.FOLLOWING, {
        headers: {
          userId: parseInt(localStorage.getItem('userId') || '0', 10),
        },
      })
      .then((response) => {
        return response.data.data;
      })
      .catch((error) => console.log(error));
  };

  return { getProfile, searchUser, myPage, followerCheck, follow, searchFollower };
};

export default useUserApi;
