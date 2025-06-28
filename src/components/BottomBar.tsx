import styled from 'styled-components';
import grayHome from '../assets/icon/bottomBar/grayHome.svg';
import grayGeneral from '../assets/icon/bottomBar/grayGeneral.svg';
import colorAlarm from '../assets/icon/bottomBar/colorNotiOn.svg';
import grayMy from '../assets/icon/bottomBar/grayMy.svg';
import plus from '../assets/icon/bottomBar/plus.svg';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 54px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Menu = styled.button`
  display: flex;
  width: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  gap: 4px;
  cursor: pointer;

  img {
    width: 24px;
    height: 24px;
  }
  h1 {
    font-size: 12px;
    color: #454545;
    font-family: 'Pretendard';
    font-weight: 600;
    margin: 0;
  }
`;

const Plus = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
`;

const BottomBar = () => {
  const navigate = useNavigate();


  return (
    <Container>
      <Menu onClick={()=>navigate('/')}>
        <img src={grayHome} alt="홈" />
        <h1>홈</h1>
      </Menu>
      <Menu onClick={()=>navigate('/public/main')}>
        <img src={grayGeneral} alt="공개 페이퍼" />
        <h1>공개 페이지</h1>
      </Menu>
      <Plus>
        <img src={plus} alt="페이지 추가하기" />
      </Plus>
      <Menu onClick={()=>navigate('/alarm')}>
        <img src={colorAlarm} alt="소식함" />
        <h1>소식함</h1>
      </Menu>
      <Menu onClick={()=>navigate('/mypage')}>
        <img src={grayMy} alt="마이페이지" />
        <h1>마이페이지</h1>
      </Menu>
    </Container>
  );
};

export default BottomBar;
