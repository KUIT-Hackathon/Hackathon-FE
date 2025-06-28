import styled from 'styled-components';
import Header from '../../components/Header';
import CreatePaperInput from '../../components/paper/CreatePaperInput';
import Categorys from '../../components/paper/Categorys';
import { createRef, useEffect, useState } from 'react';
import { CATEGORY } from '../../constants/EventCategory';
import PurpleButton from '../../components/PurpleButton';
import SelectTarget from '../../components/paper/SelectTarget';
import CreatePaperSection from '../../components/paper/CreatePaperSection';
import Modal from '../../components/Modal';
import check from '../../assets/icon/modal/check.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 17px;
  background: var(--Grey-30, #fafafa);
`;

const CreatePrivatePaper = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState<string>(CATEGORY.BIRTHDAY);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [target, setTarget] = useState<string>('me');
  const [searchUserId, setSearchUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const titleInputRef = createRef<HTMLInputElement | null>();
  const dateInputRef = createRef<HTMLInputElement | null>();
  const handleChange = () => {
  const title = titleInputRef.current?.value.trim();
  const date = dateInputRef.current?.value.trim();
  const isTitleDateValid = !!title && !!date;
  const isAllValid = target === 'me'
    ? isTitleDateValid
    : isTitleDateValid && userName.length > 0;

  setIsValid(isAllValid);
};


  useEffect(() => {
    handleChange();
  }, [userName]);

  const handleSubmit = () => {
    const title = titleInputRef.current?.value.trim();
    const date = dateInputRef.current?.value.trim();

    if (!!title && !!date) {
      console.log('롤링페이퍼 생성:', { title, date, type });
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/public/main');
  };

  return (
    <Wrapper>
      <Header title="롤링페이퍼 만들기" />
      <Container>
        <CreatePaperInput
          title="제목을 입력해주세요."
          placeholder="제목을 입력하세요. (최대 20자)"
          maxlength={20}
          ref={titleInputRef}
          onChange={handleChange}
        />
        <CreatePaperInput
          title="날짜를 입력해주세요."
          placeholder="날짜를 입력하세요. (ex. 20250627)"
          maxlength={8}
          ref={dateInputRef}
          onChange={handleChange}
        />
        <CreatePaperSection title="카테고리를 선택해주세요." desc="이벤트에 맞는 카테고리를 선택해주세요!">
          <Categorys type={type} setType={setType} />
        </CreatePaperSection>
        <CreatePaperSection title="받는 사람을 선택해주세요." desc="친구 선택 시, 받는 사람을 꼭 지정해주세요!">
          <SelectTarget
            target={target}
            setTarget={setTarget}
            searchUserId={searchUserId}
            setSearchUserId={setSearchUserId}
            userName={userName}
            setUserName={setUserName}
          />
        </CreatePaperSection>
        <PurpleButton onClick={() => handleSubmit()} disabled={!isValid}>
          롤링페이퍼 만들기
        </PurpleButton>
        <Modal
          isOpen={isModalOpen}
          icon={<img src={check} alt="체크 아이콘" />}
          title="생성 완료"
          description={`롤링페이퍼가\n 발송되었어요 !`}
          confirmText="확인"
          onClose={handleModalClose}
        />
      </Container>
    </Wrapper>
  );
};

export default CreatePrivatePaper;
