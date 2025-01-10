import { useState } from "react";

export type ModalProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  modalProps: any;
  setModalProps: (props: any) => void;
};

export function useModal(): ModalProps {
  const [isOpen, setIsOpen] = useState(false);
  const [modalProps, setModalProps] = useState<any>(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return { isOpen, openModal, closeModal, modalProps, setModalProps };
}