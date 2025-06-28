import React from 'react';
import styled from 'styled-components';

interface CreatePaperInputProps {
  title: string;
  placeholder: string;
  maxlength: number;
  onChange: () => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Title = styled.span`
  color: var(--Grey-800, #2b2b2b);
  font-size: 18px;
  font-weight: 500;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid var(--Grey-200, #c4c4c4);
  background: #fff;
  font-size: 14px;
  font-weight: 500;
  &::placeholder {
    color: var(--Grey-250, #bebebe);
  }
`;

const CreatePaperInput = React.forwardRef<HTMLInputElement, CreatePaperInputProps>(({ title, placeholder, maxlength, onChange }, ref) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input type="text" placeholder={placeholder} maxLength={maxlength} ref={ref} onChange={onChange} />
    </Container>
  );
});

export default CreatePaperInput;
