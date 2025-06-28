import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
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

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoTitle = styled.span`
  color: var(--Grey-800, #2b2b2b);
  font-size: 20px;
  font-weight: 600;
`;

const InfoDesc = styled.span`
  color: var(--Grey-400, #919191);
  font-size: 14px;
  font-weight: 600;
`;

const InputName = styled.input`
  padding: 16px 22px;
  border-radius: 16px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

const InputContent = styled.textarea`
  padding: 27px 22px;
  border-radius: 16px;
  background: #fff;
  font-size: 16px;
  font-weight: 600;
  height: 385px;
  box-sizing: border-box;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

export { Wrapper, Container, InfoContainer, InfoTextContainer, InfoTitle, InfoDesc, InputName, InputContent };
