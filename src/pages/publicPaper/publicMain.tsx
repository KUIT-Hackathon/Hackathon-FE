import styled from 'styled-components';
import Header from '../../components/Header';
import Logo from '../../assets/icon/paper/birthday.svg';
import PaperTitle from '../../components/PaperTitle';
import BottomBar from '../../components/BottomBar';

const Container = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f8f8;
  img {
    //img 수정필요!!!!!
  }
`;

const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const PublicMain = () => {
  const paper = [
    { uuid: 'asdf', icon: 'Birthday', title: 'Title1', date: '2025년 12월 12일' },
    { uuid: 'asdf', icon: 'Birthday', title: 'Title2', date: '2025년 12월 12일' },
    { uuid: 'asdf', icon: 'Birthday', title: 'Title3', date: '2025년 12월 12일' },
  ];

  return (
    <Container>
      <Header title="공개 페이퍼"></Header>;
      <img src={Logo} alt="To-You" />;
      <PaperContainer>
        {paper.map((paper) => (
          <PaperTitle key={paper.uuid} icon={paper.icon} title={paper.title} date={paper.date} />
        ))}
      </PaperContainer>
      <BottomBar />
    </Container>
  );
};

export default PublicMain;
