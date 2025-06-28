import styled from "styled-components";
import  PurpleButton  from "../../components/PurpleButton";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    width: 375px;
    height: 812px;
    margin:0;
    padding: 0;
    background-color: #fafafa;
`;

const TextContainer = styled.div`
    width: 310px;
    height: 113px;
    display: flex;
    flex-direction: column;
    margin-top:122px;
    margin-bottom: 51px;
    gap: 24px;
    p{
        color:#5e5e5e;
        font-family : 'Pretendard';
        font-size: 16px;
        font-weight: 600;
    }
`;

const MainText = styled.div`
    display: flex;
    flex-direction: column;
    font-family : 'Pretendard';
    color : #2b2b2b;
    gap:8px;
  h1 {
    font-size: 28px;
    font-weight: 700;
    margin:0;
  }
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin:0;
  }
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:18px;
    gap: 10px;
  input {
    width:277px;
    height:18px;
    padding: 19px 29px;
    align-items: center;
    gap:10px;
    border-radius: 12px;
    border: 1px solid #c4c4c4;
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
    text-align: left;
    &::placeholder {
        color: #bebebe;
    }
  }
`;

const SignBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    h3{
        color: #5e5e5e;
        font-family: 'Pretendard';
        font-size: 16px;
        font-weight: 600;
        margin : 0;
        margin-top: 48px;
    }
`;


const SignButton = styled.button`
    background-color: rgb(0,0,0,0);
    border: none;
    color: #787878;
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
    text-decoration: underline;
    cursor: pointer;
`;

const LoginPage = () => {
    return (
        <Container>
            <TextContainer>
                <MainText>
                    <h1>안녕하세요 !</h1>
                    <h2>ToYou입니다.</h2>
                </MainText>
                <p>아이디와 비밀번호를 입력해주세요.</p>
            </TextContainer>
            <LoginBox>
                <input type="text" placeholder="아이디 입력" />
                <input type="password" placeholder="비밀번호 입력" />
            </LoginBox>
            <PurpleButton>로그인하기</PurpleButton>
            <SignBox>
                <h3>계정이 없으신가요 ?</h3>
                <SignButton>회원가입 하기</SignButton>
            </SignBox>
        </Container>
    );
}

export default LoginPage;