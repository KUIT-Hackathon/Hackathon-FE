import styled from 'styled-components';
import BottomBar from '../../components/BottomBar';
import Calendar from '../../components/home/Calendar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const HomeHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  color: var(--Neutral-900-Text, #131415);
  font-size: 13px;
  font-weight: 700;
  height: 44px;
`;

const CalendarContainer = styled.div`
  margin-top: 70px;
`;

const Home = () => {
  return (
    <Wrapper>
      <HomeHeader>홈화면</HomeHeader>
      <CalendarContainer>
        <Calendar />
      </CalendarContainer>
      <BottomBar />
    </Wrapper>
  );
};

export default Home;
