import { ReactNode } from 'react';
import styled from 'styled-components';

interface CreatePaperSectionProps {
  title: string;
  desc: string;
  children: ReactNode | null;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TextContainer = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const Desc = styled.span`
  color: var(--Grey-600, #5e5e5e);
  font-size: 12px;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
`;

const CreatePaperSection = ({ title, desc, children }: CreatePaperSectionProps) => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </TextContainer>
      {children}
    </Wrapper>
  );
};

export default CreatePaperSection;
