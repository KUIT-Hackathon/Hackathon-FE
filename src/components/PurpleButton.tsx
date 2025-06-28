import styled from 'styled-components';

interface PurpleButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
}

export const ButtonContainer = styled.button`
  background-color: ${({ disabled }) => (disabled ? '#DEDEDE' : '#bea0db')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 48px;
  border-radius: 12px;
  color: #fafafa;
  font-size: 18px;
  font-weight: 700;
  position: fixed;
  bottom: 31px;
`;

const PurpleButton = ({ children, onClick, disabled }: PurpleButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>
      {children}
    </ButtonContainer>
  );
};

export default PurpleButton;
