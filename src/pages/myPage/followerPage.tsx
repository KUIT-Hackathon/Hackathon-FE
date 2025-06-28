import styled from 'styled-components';
import Header from '../../components/Header';
import NameBox from '../../components/myPage/NameBox';
import BottomBar from '../../components/BottomBar';
import {useState, useEffect} from 'react';
import useUserApi from '../../hooks/useUserApi';


const Container = styled.div`
  width: 375px;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f8f8;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 22px;
`;

const FollowerPage = () => {

  const [data, setData] = useState([]);
  const{followerCheck}= useUserApi();
  useEffect(()=>{
    followerCheck().then((result)=>{
      setData(result);
    })
  },[]);

  
  return (
    <Container>
      <Header title="팔로워" />
      <NameContainer>
        {data.map((follower) => (
          <NameBox key={follower.id} name={follower.name} ID={follower.loginid}></NameBox>
        ))}
      </NameContainer>
      <BottomBar />
    </Container>
  );
};

export default FollowerPage;
