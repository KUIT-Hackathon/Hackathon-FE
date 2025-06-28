import styled from 'styled-components';
import Header from '../../components/Header';
import CreatePaperInput from '../../components/paper/CreatePaperInput';
import Categorys from '../../components/paper/Categorys';
import { createRef, useState } from 'react';
import { CATEGORY } from '../../constants/EventCategory';
import PurpleButton from '../../components/PurpleButton';
import CreatePaperSection from '../../components/paper/CreatePaperSection';

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

const CreatePublicPaper = () => {
  const [type, setType] = useState<string>(CATEGORY.BIRTHDAY);
  const [isValid, setIsValid] = useState<boolean>(false);
  const titleInputRef = createRef<HTMLInputElement | null>();
  const dateInputRef = createRef<HTMLInputElement | null>();
  const handleChnage = () => {
    const title = titleInputRef.current?.value.trim();
    const date = dateInputRef.current?.value.trim();
    if (!title || !date) return;
    setIsValid(true);
  };
  const handleSubmit = () => {
    const title = titleInputRef.current?.value.trim();
    const date = dateInputRef.current?.value.trim();
    if (!!title && !!date) console.log();
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
          onChange={handleChnage}
        />
        <CreatePaperInput
          title="날짜를 입력해주세요."
          placeholder="날짜를 입력하세요. (ex. 20250627)"
          maxlength={8}
          ref={dateInputRef}
          onChange={handleChnage}
        />
        <CreatePaperSection title="카테고리를 선택해주세요." desc="이벤트에 맞는 카테고리를 선택해주세요!">
          <Categorys type={type} setType={setType} />
        </CreatePaperSection>
        <PurpleButton onClick={() => handleSubmit()} disabled={!isValid}>
          롤링페이퍼 만들기
        </PurpleButton>
      </Container>
    </Wrapper>
  );
};

export default CreatePublicPaper;
