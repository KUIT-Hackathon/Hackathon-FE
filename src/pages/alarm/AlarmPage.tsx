import styled from 'styled-components';
import NotiPaper from '../../components/alarm/NotiPaper';
import Header from '../../components/Header';
import BottomBar from '../../components/BottomBar';
import useAlarm from '../../hooks/useAlarm';
import { useEffect, useState } from 'react';
import letterIcon from '../../assets/icon/alarm/letterIcon.svg';
import friendIcon from '../../assets/icon/alarm/friendIcon.svg';

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
  const [notification, setNotification] = useState([]);
  const { getAlarm } = useAlarm();
  useEffect(() => {
    getAlarm().then((result) => setNotification(result ?? []));
  }, []);
  const selectType = (type) => {
    if (type == 'FOLLOW') {
      return <NotiPaper icon={friendIcon} content="태성(ts1111)님이 나를 팔로우 했어요!" />;
    } else if (type == 'CREATE') {
      return <NotiPaper icon={letterIcon} content="상희님의 롤링페이퍼가 생겼어요!" />;
    } else if (type == 'OPEN') {
      return <NotiPaper icon={letterIcon} content="나의 롤링페이퍼가 오늘 열렸어요!" />;
    }
  };
  return (
    <Container>
      <Header title="소식함" />
      {notification.map((noti) => {
        const date = new Date(noti.createdAt);
        const formattedDate = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}.`;
        return (
          <DateWrapper key={noti.id}>
            <h3>{formattedDate}</h3>
            <MsgContainer>{selectType(noti.type)}</MsgContainer>
          </DateWrapper>
        );
      })}
      <BottomBar />
    </Container>
  );
};

export default AlarmPage;
