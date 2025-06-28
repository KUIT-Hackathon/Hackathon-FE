import styled from 'styled-components';
import PurpleButton from '../../components/PurpleButton';
import Header from '../../components/Header';
import { useState } from 'react';
import Modal from '../../components/Modal';
import checkIcon from '../../assets/icon/modal/check.svg';
import { useNavigate } from 'react-router-dom';
import WrittenTitle from '../../components/WrittenTitle';

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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin-top: 20px;
`;

const NameInput = styled.input`
  width: 299px;
  height: 19px;
  display: flex;
  flex-direction: column;
  padding: 16px 22px;
  font-size: 16px;
  font-weight: 600;
  background-color: #fff;
  border-radius: 16px;
  &::placeholder {
    color: #bebebe;
  }
`;
const TextInput = styled.textarea`
  width: 299px;
  height: 351px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 17px 22px;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 600;
  white-space: pre-line;
  &::placeholder {
    color: #bebebe;
  }
`;

const WritePublic = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const handleWrite = () => {
    console.log('write시도 :', { title, content });
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate('/public/main');
  };
  return (
    <Container>
      <Header title="메세지 작성하기"></Header>
      <MainContainer>
        <WrittenTitle icon="Birthday" title="백상희 생일" date="2025년 10월 29일" />
        <NameInput type="text" placeholder="작성자 이름(최대8자)" value={title} onChange={(e) => setTitle(e.target.value)}></NameInput>
        <TextInput
          placeholder={`보내고 싶은 한마디를 써주세요 !\n최대 300자까지 작성할 수 있답니다 :)`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></TextInput>
      </MainContainer>
      <PurpleButton onClick={handleWrite}>작성하기</PurpleButton>
      <Modal
        isOpen={isModalOpen}
        icon={<img src={checkIcon} alt="체크 아이콘" />}
        title="전송 완료"
        description={`축하 메세지가\n전송됐어요!`}
        confirmText="확인"
        onClose={handleModalClose}
      />
    </Container>
  );
};

export default WritePublic;
