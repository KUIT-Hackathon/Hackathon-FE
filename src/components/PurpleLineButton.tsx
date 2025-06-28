import styled from 'styled-components';

interface PurpleLineButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  $isFixed?: boolean
}

export const ButtonContainer = styled.button<{$isFixed: boolean}>`
  border: 1px solid ${({ disabled }) => (disabled ? '#DEDEDE' : '#bea0db')};
  color: ${({ disabled }) => (disabled ? '#DEDEDE' : '#bea0db')};
  position: ${({$isFixed}) => ($isFixed ? 'fixed' : 'static')};
  bottom: ${({$isFixed}) => ($isFixed && '31px')};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 48px;
  border-radius: 12px;
  color: #8A6BD1;
  font-size: 18px;
  font-weight: 700;
`;

const PurpleLineButton = ({ children, onClick, disabled, $isFixed=true }: PurpleLineButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={disabled} $isFixed={$isFixed}>
      {children}
    </ButtonContainer>
  );
};


export default PurpleLineButton;