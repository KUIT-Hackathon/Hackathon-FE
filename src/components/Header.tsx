import * as React from 'react';
import styled from 'styled-components';
import arrowBack from '../assets/icon/header/arrowBack.svg';
import { useNavigate } from 'react-router-dom';
import plus from '../assets/icon/plus.svg';

const Wrapper = styled.div`
  height: 51px;
  width: 100%;
`;

const EmptySpace = styled.div`
  height: 51px;
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  height: 51px;
  display: flex;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: #fff;
  min-width: 375px;
`;

const ArrowIcon = styled.button`
  position: absolute;
  left: 20px;
  background: none;
  cursor: pointer;
`;

const Title = styled.span`
  width: 143px;
  color: #000;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
`;

const PlusIcon = styled.button`
  position: absolute;
  right: 20px;
  background: none;
  cursor: pointer;
`;

const Header = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <Wrapper>
      <Container>
        <ArrowIcon onClick={handleBack} aria-label="뒤로가기">
          <img src={arrowBack} alt="뒤로가기" />
        </ArrowIcon>
        <Title>{title}</Title>
        {title == '팔로잉' && (
          <PlusIcon onClick={() => navigate('/mypage/findfriend')} aria-label="뒤로가기">
            <img src={plus} alt="뒤로가기" />
          </PlusIcon>
        )}
      </Container>
      <EmptySpace></EmptySpace>
    </Wrapper>
  );
};

export default Header;
