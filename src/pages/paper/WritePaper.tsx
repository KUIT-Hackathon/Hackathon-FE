import Header from '../../components/Header';
import birthday from '../../assets/icon/paper/birthday.svg';
import PurpleButton from '../../components/PurpleButton';
import { createRef, useState } from 'react';
import Modal from '../../components/Modal';
import airplane from '../../assets/icon/modal/airplane.svg';
import { Wrapper, Container, InfoContainer, InfoTextContainer, InfoTitle, InfoDesc, InputName, InputContent } from './WritePaper.styles';

const WritePaper = () => {
  const titleInputRef = createRef<HTMLInputElement | null>();
  const contentInputRef = createRef<HTMLTextAreaElement | null>();
  const [isValid, isSetValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = () => {
    const title = titleInputRef.current?.value.trim();
    const content = contentInputRef.current?.value.trim();
    if (!title || !content) return;
    setIsModalOpen(true);
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
        <Modal
          isOpen={isModalOpen}
          icon={<img src={airplane} alt="체크 아이콘" />}
          title="회원가입 완료"
          description={`로그인 후 ToYou를\n이용하세요!`}
          confirmText="확인"
          onClose={() => setIsModalOpen(false)}
        />
      </Container>
    </Wrapper>
  );
};

export default WritePaper;
