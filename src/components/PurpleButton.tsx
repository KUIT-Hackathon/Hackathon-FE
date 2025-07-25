import styled from 'styled-components';

interface PurpleButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  $isFixed?: boolean
}

export const ButtonContainer = styled.button<{$isFixed: boolean}>`
  background-color: ${({ disabled }) => (disabled ? '#DEDEDE' : '#bea0db')};
  position: ${({$isFixed}) => ($isFixed ? 'fixed' : 'static')};
  bottom: ${({$isFixed}) => ($isFixed && '31px')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 48px;
  border-radius: 12px;
  color: #fafafa;
  font-size: 18px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const PurpleButton = ({ children, onClick, disabled, $isFixed=true }: PurpleButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} $isFixed={$isFixed}>
      {children}
    </ButtonContainer>
  );
};

export default PurpleButton;
