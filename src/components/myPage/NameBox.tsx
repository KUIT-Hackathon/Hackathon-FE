import styled from 'styled-components';

const Container = styled.div`
  width: 277px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 13px 29px;
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

const NameBox = ({ name, ID }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <IDBox>{ID}</IDBox>
    </Container>
  );
};

export default NameBox;
