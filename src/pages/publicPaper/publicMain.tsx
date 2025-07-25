import styled from 'styled-components';
import Header from '../../components/Header';
import ToYou from '../../assets/icon/logo/defaultLogo.svg';
import PaperTitle from '../../components/PaperTitle';
import BottomBar from '../../components/BottomBar';
import { useEffect, useState } from 'react';
import usePaperApi from '../../hooks/usePaperApi';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f8f8;
`;

const LogoImg = styled.div`
  width: 353px;
  height: 58px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 12px;
`;

const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const PublicMain = () => {
  const navigate = useNavigate();
  const { getPublicPaper } = usePaperApi();
  const [papers, setPaper] = useState([]);

  useEffect(() => {
    getPublicPaper().then((data) => setPaper(data.paperEntityList));
  }, []);

  const handleCardClick = (uuid) => {
    navigate('/paper/list');
  };

  return (
    <Container>
      <Header title="공개 페이퍼"></Header>
      <LogoImg>
        <img src={ToYou} alt="To-You" />
      </LogoImg>
      <PaperContainer>
        {Array.isArray(papers) &&
          papers.map((paper) => (
            <div key={paper.uuid} onClick={() => handleCardClick(paper.uuid)} style={{ cursor: 'pointer' }}>
              <PaperTitle icon={paper.category} title={paper.title} date={paper.publishDate} />
            </div>
          ))}
      </PaperContainer>
      <BottomBar />
    </Container>
  );
};

export default PublicMain;
