import React from "react";
import { useModal } from "../../hooks/useModal";
import Modal from "react-modal";
import { RiCloseFill } from "react-icons/ri";

function ModalContainer() {
  const { modal, content, handleCloseModal } = useModal();

  return (
    <Modal isOpen={modal} onRequestClose={handleCloseModal}>
      <button
        type="button"
        onClick={handleCloseModal}
        className="absolute right-4"
      >
        <RiCloseFill />
      </button>
      <iframe className="h-full w-full" src={content} />
    </Modal>
  );
}

export default ModalContainer;
