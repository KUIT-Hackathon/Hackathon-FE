import styled from 'styled-components';
import NotiPaper from '../../components/alarm/NotiPaper';
import NotiFriend from '../../components/alarm/NotiFriend';
import Header from '../../components/Header';

const Container = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #f8f8f8;
  gap: 28px;
`;

const MsgContainer = styled.div`
  width: 338px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  h3 {
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 600;
  }
`;

const AlarmPage = () => {
  return (
    <Container>
      <Header title="소식함" />
      <DateWrapper>
        <h3>2025.06.23.</h3>
        <MsgContainer>
          <NotiPaper  />
          <NotiFriend friend="태성" />
        </MsgContainer>
      </DateWrapper>
      <DateWrapper>
        <h3>2025.06.22.</h3>
        <MsgContainer>
          <NotiPaper />
          <NotiFriend friend="태성" />
        </MsgContainer>
      </DateWrapper>
      <DateWrapper>
        <h3>2025.06.21.</h3>
        <MsgContainer>
          <NotiPaper  />
          <NotiFriend friend="태성" />
        </MsgContainer>
      </DateWrapper>
    </Container>
  );
};

export default AlarmPage;
