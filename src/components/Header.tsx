import * as React from 'react';
import styled from 'styled-components';
import arrowBack from '../assets/icon/header/arrowBack.svg';

interface HeaderProps {
  title: string;
}

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

const ArrowIcon = styled.img`
  position: absolute;
  left: 20px;
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

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Wrapper>
      <Container>
        <ArrowIcon src={arrowBack} alt="뒤로가기" />
        <Title>{title}</Title>
      </Container>
      <EmptySpace></EmptySpace>
    </Wrapper>
  );
};

export default Header;
