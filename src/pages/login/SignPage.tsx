import { useState } from 'react';
import Modal from '../../components/Modal';
import styled from 'styled-components';
import PurpleButton from '../../components/PurpleButton';
import Header from '../../components/Header';
import checkIcon from '../../assets/icon/modal/check.svg'; // Assuming you have a check icon for the modal

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  width: 375px;
  height: 812px;
  margin: 0;
  padding: 0;
  background-color: #fafafa;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  gap: 28px;
  margin-top: 78px;
  margin-bottom: 167px;
`;

const InputBox = styled.div`
  width: 335px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2 {
    margin: 0;
    color: #000;
    font-family: 'Pretendard';
    font-size: 22px;
    font-weight: 500;
  }
  h3 {
    margin: 0;
    font-family: 'Pretendard';
    font-size: 12px;
    font-weight: 400;
    color: #8e8e8e;
    line-height: 140%;
  }
  input {
    display: flex;
    align-items: center;
    width: 277px;
    height: 10px;
    padding: 19px 29px;
    border-radius: 12px;
    border: 1px solid #c4c4c4;
    gap: 10px;
    background-color: #fff;
    &::placeholder {
      color: #bebebe;
    }
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
`;

const PWBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  h3 {
    margin: 0;
    font-family: 'Pretendard';
    font-size: 12px;
    font-weight: 400;
    color: #8e8e8e;
    line-height: 140%;
  }
`;

const IDBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  h3 {
    margin: 0;
    font-family: 'Pretendard';
    font-size: 12px;
    font-weight: 400;
    color: #8e8e8e;
    line-height: 140%;
  }
`;

const SignPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Header title="회원가입" />
      <InputContainer>
        <InputBox>
          <h2>이름을 입력해주세요.</h2>
          <input type="text" placeholder="이름을 입력하세요." />
        </InputBox>
        <InputBox>
          <IDBox>
            <h2>아이디를 입력해주세요.</h2>
            <h3>아이디는 로그인 시 사용됩니다.</h3>
          </IDBox>
          <input type="text" placeholder="아이디를 입력하세요." />
        </InputBox>
        <PWBox>
          <InputBox>
            <h2>비밀번호를 입력해주세요.</h2>
            <input type="password" placeholder="비밀번호를 입력하세요." />
          </InputBox>
          <h3>8~20자 영문, 숫자의 조합으로 입력해 주세요.</h3>
        </PWBox>
      </InputContainer>
      <PurpleButton onClick={() => setIsModalOpen(true)}>회원가입하기</PurpleButton>
      <Modal
        isOpen={isModalOpen}
        icon={<img src={checkIcon} alt="체크 아이콘" />}
        title="회원가입 완료"
        description={`로그인 후 ToYou를\n이용하세요!`}
        confirmText="확인"
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};

export default SignPage;
