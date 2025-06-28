import styled from 'styled-components';
import Header from '../../components/Header';
import WrittenTitle from '../../components/WrittenTitle';

const Wrapper = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #f8f8f8;
  padding: 32px 16px;
  height: 100%;
`;

const Writer = styled.div`
  width: 299px;
  height: 19px;
  display: flex;
  flex-direction: column;
  padding: 16px 22px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: 500;
  margin:0;
  background-color: #fff;
  border-radius: 16px;
  &::placeholder {
    color: #bebebe;
  }
`;
const Text = styled.div`
  width: 299px;
  height: 351px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 17px 22px;
  border-radius: 16px;
  color: #5e5e5e;
  font-size: 16px;
  font-weight: 500;
  background-color:#ffff;

  }
`;

const MessageDetail = () => {

    
  return (
    <Wrapper>
      <Header title="페이퍼 확인" />
      <Container>
        <WrittenTitle icon="Birthday" title="백상희 생일" date="2025년 10월 29일" />
        <Writer>이수아</Writer>
        <Text>생일축하해~</Text>
      </Container>
    </Wrapper>
  );
};

export default MessageDetail;
