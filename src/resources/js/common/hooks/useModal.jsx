import { useState } from "react";
import { Modal as PartsModal } from "@ui-parts";

export default function useModal(defaultOpen = false) {
  const [open, isOpen] = useState(defaultOpen);

  const openModal = () => {
    isOpen(true);
  };

  const closeModal = () => {
    isOpen(false);
  };

  const Modal = ({ children }) => {
    return (
      <PartsModal show={open} onClose={closeModal}>
        {children}
      </PartsModal>
    );
  };

  return { openModal, closeModal, Modal };
}
