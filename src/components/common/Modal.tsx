import { ReactNode } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  color: #000;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  overflow-y: auto;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
  maxHeight?: string;
  title?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  width = "600px",
  maxHeight = "80vh",
  title,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Content
        style={{
          width,
          maxHeight,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {title && <Title>{title}</Title>}
        {children}
      </Content>
    </Overlay>
  );
};

export default Modal;
