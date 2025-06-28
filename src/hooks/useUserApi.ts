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

  const searchUser = () =>{
    return userApi
      .get(ENDPOINTS.USER.SEARCH)
      .then((response)=>{
        return response.data;
      })
      .catch((error)=> console.log(error));
  };

  const myPage = () =>{
    return userApi
      .get(ENDPOINTS.USER.PROFILE)
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>console.log(error));
  }

  const followerCheck = ()=>{
    return userApi 
    .get(ENDPOINTS.USER.FOLLOWER)
    .then((response)=>{
        return response.data;
    })
    .catch((error)=>console.log(error));
  }

  return { getProfile, searchUser, myPage, followerCheck };
};

export default useUserApi;
