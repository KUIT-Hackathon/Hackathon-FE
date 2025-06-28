import styled from 'styled-components';
import Header from '../../components/Header';
import NameBox from '../../components/myPage/NameBox';
import BottomBar from '../../components/BottomBar';

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

const FollowingPage = () => {
  const following = [
    { name: '김도현', id: 'kdh2732' },
    { name: '백상희', id: 'psh1234' },
  ];

  return (
    <Container>
      <Header title="팔로잉" />
      <NameContainer>
        {following.map((following) => (
          <NameBox key={following.id} name={following.name} ID={following.id}></NameBox>
        ))}
      </NameContainer>
      <BottomBar />
    </Container>
  );
};

export default FollowingPage;
