import styled from 'styled-components';
import Birthday from '../assets/icon/paper/birthday.svg';
import Graduate from '../assets/icon/paper/graduate.svg';
import Running from '../assets/icon/paper/running.svg';

const ICON_MAP = {
  Birthday,
  Graduate,
  Running,
};

const Container = styled.div`
  width: 320px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 12px;
  background-color: #fff;
  border-radius: 8px;
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

const WrittenTitle = ({ icon, title, date }) => {
  const iconSrc = ICON_MAP[icon] || ICON_MAP.Birthday;

  return (
    <Container>
        <EventContainer>
            <img src={iconSrc} alt={`${icon} 아이콘`} />
            <TextContainer>
            <h1>{title}</h1>
            <h2>{date}</h2>
            </TextContainer>
        </EventContainer>
        
    </Container>
  );
};

export default WrittenTitle;
