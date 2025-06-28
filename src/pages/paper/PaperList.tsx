import styled from 'styled-components';
import Header from '../../components/Header';
import defaultLogo from '../../assets/icon/logo/defaultLogo.svg';
import MessageCard from '../../components/Card';
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
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

const TextContainer = styled.div`
    width: 310px;
    display: flex;
    margin-bottom:24px;
    flex-direction: column;
    p{
        color:#5e5e5e;
        font-family : 'Pretendard';
        font-size: 16px;
        font-weight: 600;
    }
`; 

const LogoImg = styled.img`
width:172px;
height :58px;
margin-bottom:15px;
`;
const MessageContainer = styled.div`
    display: flex;
    gap:8px;
  }
`;
const MessageCardList = styled.div`
    display: flex;  
    flex-direction: column;
    gap:10px;
`;



const MainText = styled.div`
    display: flex;
    flex-direction: column;
    font-family : 'Pretendard';
    color : #2b2b2b;
    gap:24px;
  h1 {
    font-size: 22px;
    font-weight: 700;
    margin:0;
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    margin:0;
  }
`;

const PaperList = () => {

    
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header title="페이퍼 확인" />
      <Container>
        <LogoImg src={defaultLogo} alt="toyou 가로 로고" />
        <TextContainer>
                <MainText>
                    <h1>상희의 퇴사를 축하해주세요</h1>
                    <h2>24개의 메세지를 읽어보세요!</h2>
                </MainText>
        </TextContainer>  
        <MessageCardList>
            <MessageContainer>
                <MessageCard onClick={() => navigate('/paper/Detail')}
                    from="From. GPT" 
                    message={`퇴사 축하해! 🎉\n그동안 정말 수고 많았어. 힘든 일도 많았겠지만......`}
                />
                <MessageCard onClick={() => navigate('/paper/Detail')}
                    from="From. GPT" 
                    message={`퇴사 축하해! 🎉\n그동안 정말 수고 많았어. 힘든 일도 많았겠지만......`}
                />
            </MessageContainer>
            <MessageContainer>
                <MessageCard onClick={() => navigate('/paper/Detail')}
                    from="From. GPT" 
                    message={`퇴사 축하해! 🎉\n그동안 정말 수고 많았어. 힘든 일도 많았겠지만......`}
                />
                <MessageCard onClick={() => navigate('/paper/Detail')}
                    from="From. GPT" 
                    message={`퇴사 축하해! 🎉\n그동안 정말 수고 많았어. 힘든 일도 많았겠지만......`}
                />
            </MessageContainer>
        </MessageCardList>

      </Container>
    </Wrapper>
  );
};

export default PaperList;