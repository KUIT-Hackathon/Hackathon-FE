import styled from 'styled-components';
import Header from '../../components/Header';
import envelope from '../../assets/icon/logo/envelope.svg';
import PurpleButton from '../../components/PurpleButton';
import { useNavigate } from 'react-router-dom';

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

const OpenedPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/paper/list'); // ✅ 수정된 부분
  };

  const isValid = true;

  return (
    <Wrapper>
      <Header title="페이지 확인" />
      <Container>
        <TextContainer>
          <MainText>
            <h1>제목</h1>
            <h2>롤링페이퍼가 열렸어요!</h2>
          </MainText>
          <p>24개의 메세지를 읽어보세요</p>
        </TextContainer>
        <ImgContainer>
          <EnvelopeImg src={envelope} alt="toyou 편지모양 아이콘" />
          <DateBox>2025.06.28</DateBox>
        </ImgContainer>
        <PurpleButton onClick={handleSubmit} disabled={!isValid} $isFixed={true}>
          롤링페이퍼 보러가기
        </PurpleButton>
      </Container>
    </Wrapper>
  );
};

export default OpenedPage;
