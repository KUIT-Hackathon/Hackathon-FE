import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';


import publicPlus from '../assets/icon/bottomBar/publicPlus.svg';
import friendPlus from '../assets/icon/bottomBar/friendPlus.svg';

import grayHome from '../assets/icon/bottomBar/grayHome.svg';
import colorHome from '../assets/icon/bottomBar/colorHome.svg';

import grayGeneral from '../assets/icon/bottomBar/grayGeneral.svg';
import colorGeneral from '../assets/icon/bottomBar/colorGeneral.svg';

import grayAlarm from '../assets/icon/bottomBar/grayNotiOff.svg';
import colorAlarm from '../assets/icon/bottomBar/colorNotiOn.svg';

import grayMy from '../assets/icon/bottomBar/grayMy.svg';
import colorMy from '../assets/icon/bottomBar/colorMy.svg';

import plus from '../assets/icon/bottomBar/plus.svg';

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
  border: none;
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

const PlusMenu = styled.button`
  display: flex;
  align-items: center;
  background: none; 
  border: none; 
  cursor: pointer;

  img {
    width: 80px;
    height: 010
px;
  }
`;

const PlusMenuContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-30%);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const BottomBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isPlusOpen, setIsPlusOpen] = useState(false);

  const handlePlusClick = () => {
    setIsPlusOpen(prev => !prev);
  };

  return (
    <Container>
      <Menu onClick={() => navigate('/')}>
        <img
          src={location.pathname === '/' ? colorHome : grayHome}
          alt="홈"
        />
        <h1>홈</h1>
      </Menu>

      <Menu onClick={() => navigate('/public/main')}>
        <img
          src={location.pathname === '/public/main' ? colorGeneral : grayGeneral}
          alt="공개 페이퍼"
        />
        <h1>공개 페이퍼</h1>
      </Menu>

      <Plus>
         <img src={plus} alt="페이퍼 추가하기" onClick={handlePlusClick} />
        {isPlusOpen && (
          <PlusMenuContainer>
           <PlusMenu onClick={() => { navigate('/paper/create/public'); }}>
              <img src={publicPlus} alt="공개" />
            </PlusMenu>
            <PlusMenu onClick={() => { navigate('/paper/create/private'); }}>
              <img src={friendPlus} alt="친구" />
            </PlusMenu>
          </PlusMenuContainer>
        )}
      </Plus>

      <Menu onClick={() => navigate('/alarm')}>
        <img
          src={location.pathname === '/alarm' ? colorAlarm : grayAlarm}
          alt="소식함"
        />
        <h1>소식함</h1>
      </Menu>

      <Menu onClick={() => navigate('/mypage')}>
        <img
          src={location.pathname === '/mypage' ? colorMy : grayMy}
          alt="마이페이지"
        />
        <h1>마이페이지</h1>
      </Menu>
    </Container>
  );
};

export default BottomBar;
