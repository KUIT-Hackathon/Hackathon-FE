import styled from 'styled-components';
import friendIcon from '../../assets/icon/alarm/friendIcon.svg';

const TextContainer = styled.div`
  display: flex;
  width: 338px;
  height: 49px;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  background-color: #e4d9ff;
  border-radius: 5px;
  padding: 5px 10px 5px 9px;
  box-sizing: border-box;
  gap: 4px;
  img {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  p {
    display: flex;
    width: 250px;
    align-items: center;
    justify-content: left;
    color: #454545;
    font-size: 16px;
    font-weight: 600;
    padding: 4px 10px;
  }
  button {
    width: 48px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9c78ef;
    border-radius: 12px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }
`;

const NotiFriend = ({ friend }) => {
  return (
    <TextContainer>
      <img src={friendIcon} alt="팔로우 알림" />
      <p>{friend} 님이 나를 팔로우 했어요!</p>
    </TextContainer>
  );
};

export default NotiFriend;