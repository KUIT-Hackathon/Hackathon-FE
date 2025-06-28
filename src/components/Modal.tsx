import * as React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

ReactModal.setAppElement('#root');

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  description?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

const modalStyle: ReactModal.Styles = {
  overlay: {
    width: '375px',
    height: '900px',
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,0.6)',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  content: {
    width: '288px',
    height: '288px',
    borderRadius: '20px',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    inset: 'unset',
  },
};

const ModalContainer = styled.div`
  width: 288px;
  height: 288px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const IconContainer = styled.div`
  width: 74px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background: linear-gradient(180deg, #f6ecff 0%, #bea0db 100%);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #2b2b2b;
`;

const Description = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  color: #5e5e5e;
  white-space: pre-line;
`;

const ConfirmButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 44px;
  border-radius: 12px;
  border: none;
  line-height: normal;
  background: var(--unnamed, linear-gradient(180deg, #bfa4ff 0%, #a189ff 100%));
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, icon, title, description, confirmText, onConfirm }) => (
  <ReactModal isOpen={isOpen} onRequestClose={onClose} style={modalStyle} closeTimeoutMS={200}>
    <ModalContainer>
      <IconContainer>{icon}</IconContainer>
      <TextContainer>
        <TextContainer>
          <Title>{title}</Title>
          {description && <Description>{description}</Description>}
        </TextContainer>
        <ConfirmButton onClick={onConfirm ?? onClose}>{confirmText || '확인'}</ConfirmButton>
      </TextContainer>
    </ModalContainer>
  </ReactModal>
);

export default Modal;
