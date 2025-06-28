import styled from 'styled-components';
import BottomBar from '../../components/BottomBar';
import Calendar from '../../components/home/Calendar';
import Header from '../../components/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const CalendarContainer = styled.div`
  margin-bottom: 10px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Header title="홈화면" />

      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <BottomBar />
    </Wrapper>
  );
};

export default Home;
