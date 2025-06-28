import styled from 'styled-components';
import Header from '../../components/Header';
import envelope from '../../assets/icon/logo/envelope.svg';
import PurpleLineButton from '../../components/PurpleLineButton';
import PurpleButton from '../../components/PurpleButton';
import Modal from '../../components/Modal';
import check from '../../assets/icon/modal/check.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Wrapper = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #f8f8f8;
  padding: 32px 16px;
  height: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 32px 16px;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 310px;
  height: 113px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  p {
    color: #5e5e5e;
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 600;
  }
`;

const MainText = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  color: #2b2b2b;
  gap: 8px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    margin: 0;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }
`;

const EnvelopeImg = styled.img`
  width: 247px;
  height: 163px;
`;

const DateBox = styled.div`
  display: flex;
  width: 247px;
  height: 40px;
  flex-direction: column;
  justify-content: center;
  background-color: #d9c9ff;
  border-radius: 8px;
  text-align: center;
  color: #fff;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const UnOpenButtonContainer = styled.div`
  position: fixed;
  bottom: 31px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const UnOpenedPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWrite = () => {
    navigate('/paper/write');
  };

  const handleShare = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isValid = true;

  return (
    <Wrapper>
      <Header title="페이지 확인" />
      <Container>
        <TextContainer>
          <MainText>
            <h1>KUmmIT 해커톤 발표 응원하기</h1>
            <h2>2025년 10월 29일에 공개돼요!</h2>
          </MainText>
          <p>현재 24개의 메세지가 쌓여있어요</p>
        </TextContainer>
        <ImgContainer>
          <EnvelopeImg src={envelope} alt="toyou 편지모양 아이콘" />
          <DateBox>2025.06.28</DateBox>
        </ImgContainer>
        <UnOpenButtonContainer>
          <PurpleButton onClick={handleWrite} disabled={!isValid} $isFixed={false}>
            메세지 작성하기
          </PurpleButton>
          <PurpleLineButton onClick={handleShare} disabled={!isValid} $isFixed={false}>
            롤링페이퍼 공유하기
          </PurpleLineButton>
        </UnOpenButtonContainer>
        <Modal
          isOpen={isModalOpen}
          icon={<img src={check} alt="체크 아이콘" />}
          title="공유 완료"
          description="롤링페이퍼 링크가 복사되었어요!"
          confirmText="확인"
          onClose={handleModalClose}
        />
      </Container>
    </Wrapper>
  );
};

export default UnOpenedPage;
