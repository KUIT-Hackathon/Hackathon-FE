import styled from 'styled-components';
import BIRTHDAY from '../assets/icon/paper/birthday.svg';
import GRADUATION from '../assets/icon/paper/graduate.svg';
import RESIGNATION from '../assets/icon/paper/running.svg';
import rightArrow from '../assets/icon/rightArrow.svg';
import EMPLOYMENT from '../assets/icon/paper/employ.svg';
import PROMOTION from '../assets/icon/paper/money.svg';

const ICON_MAP = {
  BIRTHDAY,
  PROMOTION,
  GRADUATION,
  EMPLOYMENT,
  RESIGNATION,
};

const Container = styled.button`
  all: unset;
  width: 330px;
  height: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  h1 {
    width: 250px;
    color: #2b2b2b;
    font-size: 18px;
    font-weight: 500;
  }
  h2 {
    color: #5e5e5e;
    font-size: 12px;
    font-weight: 400;
  }
`;

const PaperTitle = ({ icon, title, date }) => {
  const iconSrc = ICON_MAP[icon] || ICON_MAP.BIRTHDAY;

  return (
    <Container onClick={() => console.log('click!')}>
      <EventContainer>
        <img src={iconSrc} alt={`${icon} 아이콘`} />
        <TextContainer>
          <h1>{title}</h1>
          <h2>{date}</h2>
        </TextContainer>
      </EventContainer>
      <img src={rightArrow} alt="이동하기" />
    </Container>
  );
};

export default PaperTitle;
