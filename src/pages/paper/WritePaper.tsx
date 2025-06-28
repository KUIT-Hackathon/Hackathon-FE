import Header from '../../components/Header';
import birthday from '../../assets/icon/paper/birthday.svg';
import PurpleButton from '../../components/PurpleButton';
import { createRef, useState } from 'react';
import Modal from '../../components/Modal';
import airplane from '../../assets/icon/modal/airplane.svg';
import { Wrapper, Container, InfoContainer, InfoTextContainer, InfoTitle, InfoDesc, InputName, InputContent } from './WritePaper.styles';
import usePaperApi from '../../hooks/usePaperApi';
import WrittenTitle from '../../components/WrittenTitle';
import { useNavigate } from 'react-router-dom';

const WritePaper = () => {
  const titleInputRef = createRef<HTMLInputElement | null>();
  const contentInputRef = createRef<HTMLTextAreaElement | null>();
  const [isValid, isSetValid] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { postMessage } = usePaperApi();
  const navigate = useNavigate();
  const handleSubmit = () => {
    const title = titleInputRef.current?.value.trim();
    const content = contentInputRef.current?.value.trim();
    if (!title || !content) return;
    setIsModalOpen(true);
    const messageData = {
      uuid: '1',
      name: '나',
      title: title,
      content: content,
    };
    postMessage;
  };
  const handleInput = () => {
    const title = titleInputRef.current?.value.trim();
    const content = contentInputRef.current?.value.trim();
    if (!!title && !!content) isSetValid(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/');}
  
  return (
    <Wrapper>
      <Header title="메시지 작성하기" />
      <Container>
        <WrittenTitle icon="Birthday" title="KUIT 해커톤 기념하기" date="2025년 6월 29일" />
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
          title="전송 완료"
          description={`롤링페이퍼가\n 발송되었어요 !`}
          confirmText="확인"
          onClose={handleModalClose}
        />
      </Container>
    </Wrapper>
  );
};

export default WritePaper;
