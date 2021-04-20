import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextData {
  modal: boolean;
  content: string;
  handleOpenModal: (link: string) => void;
  handleCloseModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState("");

  function handleOpenModal(link: string) {
    setModal(true);
    return setContent(link);
  }

  function handleCloseModal() {
    setModal(false);
    return setContent("");
  }

  return (
    <ModalContext.Provider
      value={{ modal, content, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
