import styled from 'styled-components';
import Header from '../../components/Header';
import PaperTitle from '../../components/PaperTitle';
import BottomBar from '../../components/BottomBar';
import { useNavigate } from 'react-router-dom';
import  useUserApi  from '../../hooks/useUserApi'
import {useState, useEffect} from 'react';

const Container = styled.div`
  width: 375px;
  height: 815px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f8f8f8;
`;

const MyCard = styled.div`
  width: 353px;
  height: 92px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 36px;
  border-radius: 10px;
  margin-top: 12px;
  margin-bottom: 29px;
  background-color: #fff;
  h1 {
    font-size: 20px;
    font-weight: 700;
  }
`;

const Stat = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Spec = styled.button<{ disabled?: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  h3 {
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    color: ${({ disabled }) => (disabled ? '#000' : '#000')};
    opacity: ${({ disabled }) => (disabled ? 1 : 1)};
  }
`;

const Count = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const PaperT = styled.div`
  padding: 10px;
  color: #2b2b2b;
  font-size: 20px;
  font-weight: 600;
`;

const MyPaper = styled.div``;

const PaperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  gap: 9px;
  margin-top: 8px;
`;

const MyPageMain = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const { myPage } = useUserApi();
  useEffect(()=>{
    myPage().then((result)=>{
      setData(result);
    })
  },[]);
  
  return (
    <Container>
      <Header title="마이페이지" />
      <MyCard>
        <h1>{data[0]} 님</h1>
        <Stat>
          <Spec disabled={true}>
            <h3>나의 페이퍼</h3>
            <Count>{data[1]}</Count>
          </Spec>
          <Spec type="button" onClick={() => navigate('/mypage/following')} disabled={false}>
            <h3>팔로잉</h3>
            <Count>{data[2]}</Count>
          </Spec>
          <Spec type="button" onClick={() => navigate('/mypage/follower')} disabled={false}>
            <h3>팔로워</h3>
            <Count>{data[3]}</Count>
          </Spec>
        </Stat>
      </MyCard>

      <MyPaper>
        <PaperT>나의 페이퍼</PaperT>
        <PaperContainer>
          <PaperTitle icon="Birthday" title="김도현의 생일" date="2025년 09월 11일" />
          <PaperTitle icon="Graduate" title="상희야 졸업 축하해!" date="2999년 02월 28일" />
        </PaperContainer>
      </MyPaper>
      <BottomBar />
    </Container>
  );
};

export default MyPageMain;
