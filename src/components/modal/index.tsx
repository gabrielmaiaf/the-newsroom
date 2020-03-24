import React, { ReactNode } from 'react';

// Components
import ModalComponents from './index.styled';

function Modal({ handleClose, show, children }: {
  handleClose: () => void, show: boolean, children: ReactNode,
}) {
  return (
    <ModalComponents.ModalContainer style={{ display: show ? 'block' : 'none' }}>
      <ModalComponents.ModalWrapper>
        {children}
        <ModalComponents.ModalClose onClick={handleClose}>
          Close
        </ModalComponents.ModalClose>
      </ModalComponents.ModalWrapper>
    </ModalComponents.ModalContainer>
  );
}

export default Modal;
