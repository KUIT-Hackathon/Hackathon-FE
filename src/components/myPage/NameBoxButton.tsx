import styled from 'styled-components';
import useUserApi from '../../hooks/useUserApi';

const Container = styled.div`
  width: 277px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
  background-color: #fff;
  border-radius: 10px;
  gap: 10px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const IDBox = styled.div`
  color: #787878;
  font-size: 16px;
  font-weight: 400;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  border-radius: 6px;
  background-color: #9c78ef;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const NameBoxButton = ({ name, id, loginId }) => {
  const { follow } = useUserApi();
  const friendId = id;
  return (
    <Container>
      <NameContainer>
        <Name>{name}</Name>
        <IDBox>{loginId}</IDBox>
      </NameContainer>
      <Button onClick={() => follow({ friendId })}>팔로우</Button>
    </Container>
  );
};

export default NameBoxButton;
