import styled from 'styled-components';
import Header from '../../components/Header';
import birthday from '../../assets/icon/paper/birthday.svg';
import PurpleButton from '../../components/PurpleButton';
import { createRef, useRef, useState } from 'react';

const Wrapper = styled.div`
  width: 100%;
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoTitle = styled.span`
  color: var(--Grey-800, #2b2b2b);
  font-size: 20px;
  font-weight: 600;
`;

const InfoDesc = styled.span`
  color: var(--Grey-400, #919191);
  font-size: 14px;
  font-weight: 600;
`;

const InputName = styled.input`
  padding: 16px 22px;
  border-radius: 16px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

const InputContent = styled.textarea`
  padding: 27px 22px;
  border-radius: 16px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 385px;
  box-sizing: border-box;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

const WritePaper = () => {
  const titleInputRef = createRef<HTMLInputElement | null>();
  const contentInputRef = createRef<HTMLTextAreaElement | null>();
  const [isValid, isSetValid] = useState(false);
  const handleSubmit = () => {
    const title = titleInputRef.current?.value.trim();
    const content = contentInputRef.current?.value.trim();
    if (!title || !content) return;
  };
  const handleInput = () => {
    const title = titleInputRef.current?.value.trim();
    const content = contentInputRef.current?.value.trim();
    if (!!title && !!content) isSetValid(true);
  };
  return (
    <Wrapper>
      <Header title="메시지 작성하기" />
      <Container>
        <InfoContainer>
          <img src={birthday} alt="기념일 유형 아이콘" />
          <InfoTextContainer>
            <InfoTitle>아이돌의 생일을 축하해주세요!!</InfoTitle>
            <InfoDesc>작성된 메세지는 6월 11일에 맞춰 공개됩니다.</InfoDesc>
          </InfoTextContainer>
        </InfoContainer>
        <InputName placeholder="작성자 이름(최대 8자)" onInput={handleInput} ref={titleInputRef} />
        <InputContent
          placeholder="보내고 싶은 한마디를 써주세요 !&#10;최대 300자까지 작성할 수 있답니다 :)"
          onInput={handleInput}
          ref={contentInputRef}
        />
        <PurpleButton onClick={() => handleSubmit()} disabled={!isValid}>
          작성하기
        </PurpleButton>
      </Container>
    </Wrapper>
  );
};

export default WritePaper;
